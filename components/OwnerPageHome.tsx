import * as CONTRACT_ABI from "./abi.json";
import { DonateList } from "./ownerpage/SideCard/DonationList";
import { DonateCard } from "./ownerpage/SideCard/Dondation";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { set } from "nprogress";
import { useEffect, useState } from "react";
import { PostCard } from "~~/components/ownerpage/PostCard";
import { TransactionHistory } from "~~/components/ownerpage/TransactionHistory";

export function OwnerPageHome() {
  const router = useRouter();
  const { query } = router;
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    const fetchOwner = async () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );

      // 创建合约实例
      const contract = new ethers.Contract(
        "0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46",
        CONTRACT_ABI,
        provider
      );

      try {
        const tx = await contract.getPost(query.id);
        await tx.wait();
        console.log("CID stored in smart contract:", tx);
        setPostInfo(tx);
      } catch (error) {
        console.error("Error storing CID in smart contract:", error);
      }
    };
    fetchOwner();
  }, [query.id]);

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <PostCard postInfo={postInfo}/>
              <TransactionHistory />
            </div>
            <div className="space-y-6">
              <DonateCard />
              <DonateList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
