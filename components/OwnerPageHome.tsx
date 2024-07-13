import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~~/components/ui/table";

export function OwnerPageHome() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
              <span className="sr-only">Forum</span>
            </Link>
            <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
              <Link href="#" className="font-bold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Categories
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Popular
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Recent
              </Link>
              <Link href="#" className="text-muted-foreground" prefetch={false}>
                Trending
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/placeholder.svg" width="32" height="32" className="rounded-full border" alt="Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
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
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donate</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Jane Doe</div>
                          <div className="text-muted-foreground text-sm">2 days ago</div>
                        </div>
                        <div className="prose text-muted-foreground">
                          <p>
                            I really like the new design! The improved navigation and organization of topics makes it
                            much easier to find what I'm looking for.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">John Smith</div>
                          <div className="text-muted-foreground text-sm">1 week ago</div>
                        </div>
                        <div className="prose text-muted-foreground">
                          <p>
                            The new design looks great, but I'd love to see more customization options for users. Being
                            able to personalize the forum experience would be a nice addition.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Sarah Lee</div>
                          <div className="text-muted-foreground text-sm">3 days ago</div>
                        </div>
                        <div className="prose text-muted-foreground">
                          <p>
                            The new forum design is a huge improvement. The layout is clean and intuitive, and the added
                            features like category subscriptions are really useful.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


