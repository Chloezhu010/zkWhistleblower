import Link from "next/link";
import { Button } from "../ui/button";
import { TableRow, TableCell } from "../ui/table";
import { useRouter } from "next/navigation";

type TopicRowProps = {
    author: string;
    content: string;
    timestamp: bigint;
};

export function TopicRow({ author, content, timestamp }: TopicRowProps) {
    const router = useRouter();

    const generateRandomNumber = () => {
        return (Math.random() * 100).toFixed(0);
    };

    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">
                    <Link href="#" className="hover:text-primary" prefetch={false}>
                        Topic #1
                    </Link>
                    <p className="text-muted-foreground text-sm">
                        {content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                        By {author} on {Number(timestamp)}
                    </p>
                </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <div className="text-muted-foreground">{generateRandomNumber()}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <div className="text-muted-foreground">{new Date().toLocaleString()}</div>
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
