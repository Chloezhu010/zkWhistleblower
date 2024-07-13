import Link from "next/link";
import { Button } from "../ui/button";
import { TableRow, TableCell } from "../ui/table";

import { useRouter } from "next/navigation";

export function TopicRow({ topic, replies, lastReply }: { topic: string; replies: number; lastReply: string }) {
    const router = useRouter();

    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">
                    <Link href="#" className="hover:text-primary" prefetch={false}>
                        {topic}
                    </Link>
                    <p className="text-muted-foreground text-sm">
                        Discuss the latest updates to the forum design and provide feedback.
                    </p>
                </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <div className="text-muted-foreground">{replies}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <div className="text-muted-foreground">{lastReply}</div>
            </TableCell>
            <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => {
                    router.push(`/ownerpages`);
                }}>
                    View More
                </Button>
            </TableCell>
        </TableRow>
    );
}
