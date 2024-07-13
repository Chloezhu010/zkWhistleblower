import { Card, CardContent, CardFooter } from "../ui/card";
import { Table, TableBody, TableHeader, TableRow, TableHead } from "../ui/table";
import { Button } from "../ui/button";
import { TopicRow } from "./TopicRow";
type topics = {
    title: string;
    replies: number;
    lastReply: string;
}

export function TopicsTable({ topics }: { topics: topics[] }) {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Topic</TableHead>
                            <TableHead className="hidden sm:table-cell">Replies</TableHead>
                            <TableHead className="hidden sm:table-cell">Last Reply</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topics.map((topic, index) => (
                            <TopicRow
                                key={index}
                                topic={topic.title}
                                replies={topic.replies}
                                lastReply={topic.lastReply}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="outline">View More</Button>
            </CardFooter>
        </Card>
    );
}
