import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useRouter } from 'next/navigation';

export function DashboardHome() {

    const router = useRouter();
  
    const handleUploadClick = () => {
      router.push('/upload');
    };
  return (
    
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
              <FlagIcon className="w-6 h-6" />
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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">WhistleBlowing</h1>
            <Button onClick={handleUploadClick}>Upload</Button>
          </div>
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
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                          Introducing the new forum design
                        </Link>
                        <p className="text-gray-400 text-sm">Post by: xxx</p>
                        <p className="text-muted-foreground text-sm">
                          Discuss the latest updates to the forum design and provide feedback.
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">42</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">2 days ago</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                          Best practices for forum moderation
                        </Link>
                        <p className="text-muted-foreground text-sm">
                          Discuss effective strategies for moderating online forums.
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">18</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">1 week ago</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                          Feedback on the new forum features
                        </Link>
                        <p className="text-muted-foreground text-sm">
                          Share your thoughts and suggestions on the latest forum features.
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">32</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">3 days ago</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                          Suggestions for future forum updates
                        </Link>
                        <p className="text-muted-foreground text-sm">
                          Brainstorm ideas for improving the forum experience.
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">54</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">5 days ago</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        <Link href="#" className="hover:text-primary" prefetch={false}>
                          Troubleshooting forum issues
                        </Link>
                        <p className="text-muted-foreground text-sm">
                          Discuss and find solutions for common forum-related problems.
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">21</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="text-muted-foreground">1 day ago</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View More</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
