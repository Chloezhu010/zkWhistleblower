import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";

export function PostCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Introducing the new forum design</CardTitle>
                <CardDescription>
                    Discuss the latest updates to the forum design and provide feedback.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <img
                            src="/placeholder.svg"
                            width="800"
                            height="400"
                            alt="Forum Design"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="prose">
                        <p>
                            The new forum design introduces a fresh and modern look, with improved navigation and better
                            organization of topics. We've also added new features to enhance the user experience, such as
                            the ability to subscribe to specific categories and receive notifications.
                        </p>
                        <p>
                            We'd love to hear your feedback on the changes. What do you like or dislike about the new
                            design? Are there any features you'd like to see added or improved? Please share your thoughts
                            in the comments below.
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">John Doe</div>
                            <div className="text-muted-foreground text-sm">Forum Admin</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                            <span>Like</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                            <span>Comment</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                            <span>Share</span>
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
