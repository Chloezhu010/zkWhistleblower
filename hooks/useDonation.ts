// import { ethers } from "ethers";
// import * as React from "react";


// const useDonation = () => {
//     const makeDonate = async () => {
//         if (!window.ethereum) {
//           console.error('Ethereum object not found, install Metamask.');
//           return;
//         }
    
//         // Use ethers to get the provider and signer
//         const provider = new ethers.providers.Web3Provider(window.ethereum as any);
//         const signer = provider.getSigner();
    
//         const contract = new ethers.Contract("0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46", , signer);
    
//         try {
//           const tx = await contract.createPost("1", "xxx");
//           await tx.wait();
//           console.log('CID stored in smart contract:', tx);
//         } catch (error) {
//           console.error('Error storing CID in smart contract:', error);
//         }
//       };
// }