import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~~/components/ui/table";
import UploadModal from "~~/components/UploadModal";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { useEffect, useState } from "react";
import VerifyWLD from "../VerifyWLD";

export function TransactionHistory() {
    const [isWLDVerified, setIsWLDVerified] = useState(false);


    const handleWLDVerification = () => {
        localStorage.getItem("wld") === "true" ? setIsWLDVerified(true) : setIsWLDVerified(false);
      }
    
      useEffect(() => {
        handleWLDVerification();
      }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold">Transaction History</h1>
                        {
                            isWLDVerified ? <UploadModal /> :
                                <VerifyWLD onSuccess={() => {}} />
                        }
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Donor</TableHead>
                            <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>2023-04-15</TableCell>
                            <TableCell>$50.00</TableCell>
                            <TableCell>Jane Doe</TableCell>
                            <TableCell>Thank you for the great work!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2023-03-28</TableCell>
                            <TableCell>$25.00</TableCell>
                            <TableCell>John Smith</TableCell>
                            <TableCell>Keep it up!</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2023-02-12</TableCell>
                            <TableCell>$75.00</TableCell>
                            <TableCell>Sarah Lee</TableCell>
                            <TableCell>Appreciate the effort!</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
