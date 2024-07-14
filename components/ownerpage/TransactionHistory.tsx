import VerifyWLD from "../VerifyWLD";
import { ethers } from "ethers";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Log } from "viem";
import { usePublicClient } from "wagmi";
import UploadModal from "~~/components/UploadModal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~~/components/ui/table";
import { useContractLogs, useTargetNetwork } from "~~/hooks/scaffold-eth";

export function TransactionHistory() {
  const { targetNetwork } = useTargetNetwork();
  const client = usePublicClient({ chainId: targetNetwork.id });

  const [logs, setLogs] = useState<Log[]>([]);
  const [isWLDVerified, setIsWLDVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleWLDVerification = useCallback(() => {
    setIsWLDVerified(localStorage.getItem("wld") === "true");
  }, []);

  useEffect(() => {
    const getLogs = async () => {
      if (!client) {
        console.error("Client not found");
        return;
      }

      try {
        const existingLogs = await client.getLogs({
          address: "0x52A6Edcb61a2d4835347E77aaCb1eA453FBB9e46",
          fromBlock: 5460387n,
          toBlock: "latest",
        });
        setLogs(existingLogs);
      } catch (error) {
        console.error("Failed to fetch logs:", error);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    getLogs();
    handleWLDVerification();
  }, [client, handleWLDVerification]);

  const sliceAddress = useCallback((address: string | `0x${string}`) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  const decodeEvent = useCallback((topics: string[], data: string) => {
    const eventABI = [
      "event PostCreated(uint256 id, address author, string content, uint256 timestamp)",
      "event ProofAdded(uint256 postId, address author, string cid, uint256 timestamp)",
    ];

    const iface = new ethers.utils.Interface(eventABI);

    let eventFragment;
    try {
      eventFragment = iface.getEvent(topics[0]);
    } catch (error) {
      console.warn(`Unknown event signature: ${topics[0]}`);
      return null;
    }

    const eventName = eventFragment.name;
    const decodedData = iface.decodeEventLog(eventFragment, data, topics);
    const author = decodedData.author;

    return { eventName, author };
  }, []);

  const renderedLogs = useMemo(() => {
    return logs
      .map((log) => {
        const decoded = decodeEvent(log.topics, log.data);
        if (decoded && decoded.eventName === "PostCreated") {
          // Skip PostCreated events
          return null;
        }
        return (
          <TableRow key={log.transactionHash}>
            <TableCell>
              {log.transactionHash ? sliceAddress(log.transactionHash) : ""}
            </TableCell>
            <TableCell>{decoded?.eventName}</TableCell>
            <TableCell>{log.blockNumber?.toString()}</TableCell>
            <TableCell>{sliceAddress(decoded?.author)}</TableCell>
            <TableCell>{sliceAddress(log.address)}</TableCell>
          </TableRow>
        );
      })
      .filter(Boolean);
  }, [logs, decodeEvent, sliceAddress]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading transaction history.</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Transaction History</h1>
            {isWLDVerified ? (
              <UploadModal />
            ) : (
              <VerifyWLD onSuccess={() => handleWLDVerification()} />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction Hash</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Block</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderedLogs}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
