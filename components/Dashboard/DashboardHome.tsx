import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { TopicsTable } from "./TopicTable";
import { UploadModal } from "../UploadModal";
import CONTRACT_ABI from "../abi.json"

// 合约地址和ABI
const CONTRACT_ADDRESS = "0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46";
import VerifyWLD from "../VerifyWLD";


const fetchContractData = async (provider: ethers.providers.Web3Provider) => {
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  try {
    const data = await contract.getPost(1); // 假设合约中有一个 getTopics 方法
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data from smart contract:', error);
    return [];
  }
};

const DashboardHome = () => {
  const { address, isConnected } = useAccount();
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    if (isConnected) {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        fetchContractData(provider).then(setTopicsData);
      } else {
        console.error('Ethereum not found. Please install MetaMask or another Web3 provider.');
      }
    }
  }, [isConnected]);
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">WhistleBlowing</h1>
            <VerifyWLD onSuccess={() => { }} />
          </div>
          <TopicsTable topics={topicsData} />
        </div>
      </main>
    </div>
  );
};

export { DashboardHome };
