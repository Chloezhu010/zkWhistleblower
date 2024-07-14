import { ethers } from "ethers";
import { useEffect, useState } from "react";
import * as CONTRACT_ABI from "~~/components/abi.json";
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Button } from "~~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";

export function PostCard({
  id,
  Poster,
  content,
  timestamp,
}: {
  id: number;
  Poster: string;
  content: string;
  timestamp: number;
}) {
  const [postInfo, setPostInfo] = useState({
    id: 0,
    Poster: "",
    content: "",
    timestamp: 0,
  });

  useEffect(() => {
    const getPostInfo = async () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );

      const contract = new ethers.Contract(
        "0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46",
        CONTRACT_ABI,
        provider
      );

      try {
        const tx = await contract.getPost(id);
        await tx.wait();
        console.log("CID stored in smart contract:", tx);
        setPostInfo(tx);
      } catch (error) {
        console.error("Error storing CID in smart contract:", error);
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Topic #{id}</CardTitle>
        <CardDescription>
          Posted by {Poster} on {new Date(timestamp).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="prose">
            <p>{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
