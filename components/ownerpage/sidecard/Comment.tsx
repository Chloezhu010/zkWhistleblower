import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { ReactNode } from "react";

interface SidebarCardProps {
    title: string;
    children: ReactNode;
}

export function SidebarCard({ title, children }: SidebarCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}

export function DonateCard() {
    return (
        <SidebarCard title="Donate">
            <div className="space-y-4">
                <div>
                    <img
                        src="/placeholder.svg"
                        width="300"
                        height="200"
                        alt="Forum Design"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div>
                    <p>
                        Help support the ongoing development and maintenance of this forum. Your donation will go
                        towards improving the user experience and adding new features.
                    </p>
                </div>
                <div>
                    <Button>Donate</Button>
                </div>
            </div>
        </SidebarCard>
    );
}

export function CommentsCard() {
    return (
        <SidebarCard title="Comments">
            <div className="space-y-4">
                <Comment
                    name="Jane Doe"
                    date="2 days ago"
                    avatar="/placeholder-user.jpg"
                    comment="I really like the new design! The improved navigation and organization of topics makes it much easier to find what I'm looking for."
                />
                <Comment
                    name="John Smith"
                    date="1 week ago"
                    avatar="/placeholder-user.jpg"
                    comment="The new design looks great, but I'd love to see more customization options for users. Being able to personalize the forum experience would be a nice addition."
                />
                <Comment
                    name="Sarah Lee"
                    date="3 days ago"
                    avatar="/placeholder-user.jpg"
                    comment="The new forum design is a huge improvement. The layout is clean and intuitive, and the added features like category subscriptions are really useful."
                />
            </div>
        </SidebarCard>
    );
}

interface CommentProps {
    name: string;
    date: string;
    avatar: string;
    comment: string;
}

function Comment({ name, date, avatar, comment }: CommentProps) {
    return (
        <div className="flex items-start gap-4">
            <Avatar className="w-8 h-8">
                <AvatarImage src={avatar} />
                <AvatarFallback>{name.split(" ")[0][0]}{name.split(" ")[1][0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className="font-medium">{name}</div>
                    <div className="text-muted-foreground text-sm">{date}</div>
                </div>
                <div className="prose text-muted-foreground">
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
}