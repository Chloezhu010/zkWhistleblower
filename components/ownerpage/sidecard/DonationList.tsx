import { SidebarCard } from "./Comment";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ethers } from "ethers";
import { useState, useCallback, useEffect, useMemo } from "react";
import { Log } from "viem";
import { usePublicClient } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

export function DonateList() {
  //   const { targetNetwork } = useTargetNetwork();
  //   const client = usePublicClient({ chainId: targetNetwork.id });

  //   const [logs, setLogs] = useState<Log[]>([]);
  //   const [isWLDVerified, setIsWLDVerified] = useState(false);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   const handleWLDVerification = useCallback(() => {
  //     setIsWLDVerified(localStorage.getItem("wld") === "true");
  //   }, []);

  //   useEffect(() => {
  //     const getLogs = async () => {
  //       if (!client) {
  //         console.error("Client not found");
  //         return;
  //       }

  //       try {
  //         const existingLogs = await client.getLogs({
  //           address: "0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46",
  //           fromBlock: 5460387n,
  //           toBlock: "latest",
  //         });
  //         setLogs(existingLogs);
  //       } catch (error) {
  //         console.error("Failed to fetch logs:", error);
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     getLogs();
  //     handleWLDVerification();
  //   }, [client, handleWLDVerification]);

  //   const sliceAddress = useCallback((address: string | `0x${string}`) => {
  //     return `${address.slice(0, 6)}...${address.slice(-4)}`;
  //   }, []);

  //   const decodeEvent = (topics: string[]) => {
  //     const eventSignatureHash =
  //       "0x285db98a4632176385795ddf0d2b67cef1a21f47eb2f5d06f786ab6b5147e200";
  //     const eventABI = [
  //       "event PostCreated(uint256 id,address author, string content, uint256 timestamp)",
  //       "event ProofAdded(uint256 postId, address author, string cid, uint256 timestamp)",
  //     ];
  //     // Find the matching event
  //     const iface = new ethers.utils.Interface(eventABI);
  //     const eventFragment = iface.getEvent(eventSignatureHash);

  //     // Get the event name and inputs
  //     const eventName = eventFragment.name;
  //     const eventValue = eventFragment.inputs;
  //     return eventName;
  //   };
  //   const renderedLogs = useMemo(() => {
  //     return logs
  //       .map((log) => {
  //         const decoded = decodeEvent(log.topics, log.data);
  //         if (decoded && decoded.eventName === "PostCreated") {
  //           // Skip PostCreated events
  //           return null;
  //         }
  //         return (
  //           <Donation
  //             key={log.transactionHash}
  //             transactionHash={log.transactionHash}
  //             eventName={decoded.eventName}
  //             blockNumber={log.blockNumber?.toString()}
  //             author={sliceAddress(decoded.author)}
  //             address={sliceAddress(log.address)}
  //           />
  //         );
  //       })
  //       .filter(Boolean);
  //   }, [logs, decodeEvent, sliceAddress]);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error loading transaction history.</div>;
  //   }

  return (
    <SidebarCard title="Donations">
      <div className="space-y-4">
        <Donation
          name="Jane Doe"
          date="2 days ago"
          avatar="/placeholder-user.jpg"
          amount="$100"
          message="Thank you for the great work! Keep it up!"
        />
        <Donation
          name="John Smith"
          date="1 week ago"
          avatar="/placeholder-user.jpg"
          amount="$50"
          message="Happy to support this initiative. Best of luck!"
        />
        <Donation
          name="Sarah Lee"
          date="3 days ago"
          avatar="/placeholder-user.jpg"
          amount="$75"
          message="This cause means a lot to me. Thank you for your efforts!"
        />
      </div>
    </SidebarCard>
  );
}

interface DonationProps {
  name: string;
  date: string;
  avatar: string;
  amount: string;
  message: string;
}

function Donation({ name, date, avatar, amount, message }: DonationProps) {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="w-8 h-8">
        <AvatarImage src={avatar} />
        <AvatarFallback>
          {name.split(" ")[0][0]}
          {name.split(" ")[1][0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium">{name}</div>
          <div className="text-muted-foreground text-sm">{date}</div>
        </div>
        <div className="prose text-muted-foreground">
          <p>{amount}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
