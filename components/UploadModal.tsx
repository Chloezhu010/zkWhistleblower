'use client'
import { useState } from "react"
import { Button } from "~~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/ui/dialog";

import axios from 'axios';
import FormData from 'form-data';
import { useAccount } from 'wagmi'; // Import useAccount hook from the Wagmi library
import { ethers } from 'ethers'; // Import ethers for interacting with Ethereum
import CONTRACT_ABI from './abi.json'
import { Input } from "~~/components/ui/input"
import { Label } from "~~/components/ui/label"
import VerifyWLD from "./VerifyWLD"


const UploadModal = () => {
  const { address, isConnected } = useAccount(); // Destructure address and isConnected from useAccount
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileHash, setFileHash] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // 替换为你的 Pinata API Key 和 Secret Key
  const PINATA_API_KEY = '2a196df298a58847a1a3';
  const PINATA_SECRET_API_KEY = '689cd7a82979ed5f3be3089151abb7f06b8e5061b1c740594ad233c19a06615e';

  const uploadToPinata = async (file: File) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    const formData = new FormData();
    formData.append('file', file);

    const headers = {
      'pinata_api_key': PINATA_API_KEY,
      'pinata_secret_api_key': PINATA_SECRET_API_KEY,
    };

    try {
      const response = await axios.post(url, formData, { headers });
      console.log('File uploaded successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error uploading file to Pinata:', error);
      return null;
    }
  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const response = await uploadToPinata(selectedFile);
      if (response) {
        setFileHash(response.IpfsHash); // 根据Pinata的返回格式
        createPost(response.IpfsHash);
      }
    } else {
      console.error('No file selected');
    }
  };

  const createPost = async (cid: string) => {
    if (!isConnected || !address) {
      console.error('Wallet not connected or address not available');
      return;
    }
    if (!window.ethereum) {
      console.error('Ethereum object not found, install Metamask.');
      return;
    }

    // Use ethers to get the provider and signer
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();

    // 创建合约实例
    const contract = new ethers.Contract("0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46", CONTRACT_ABI, signer);

    try {
      const tx = await contract.createPost("1", cid);
      await tx.wait();
      console.log('CID stored in smart contract:', tx);
    } catch (error) {
      console.error('Error storing CID in smart contract:', error);
    }
  };


  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
          <DialogDescription>
            Select a file to upload to IPFS using Pinata.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 -z-40">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="picture" className="sr-only">
              File
            </Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
          </div>
        </div>
        {fileHash && <p>File Hash: {fileHash}</p>}
        <Button onClick={handleUpload}>Upload</Button>
]        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;