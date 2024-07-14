import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
} from "../ui/table";
import { TopicRow } from "./TopicRow";

type Topic = {
  id: bigint;
  author: string;
  content: string;
  timestamp: bigint;
};

export function TopicsTable({ topics }: { topics: Topic[] }) {
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
            {topics.map((topic) => (
              <TopicRow
                key={topic.id}
                id={topic.id}
                author={topic.author}
                content={topic.content}
                timestamp={topic.timestamp}
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
