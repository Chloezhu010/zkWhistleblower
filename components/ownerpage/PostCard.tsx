import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import { Button } from "~~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~~/components/ui/card";

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
          <div className="prose">
            <p>
              The new forum design introduces a fresh and modern look, with
              improved navigation and better organization of topics. We've also
              added new features to enhance the user experience, such as the
              ability to subscribe to specific categories and receive
              notifications.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
