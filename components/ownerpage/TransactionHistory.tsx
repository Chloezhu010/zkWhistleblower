import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~~/components/ui/table";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

export function TransactionHistory() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold">Transaction History</h1>
                        <Button>Upload</Button>
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
