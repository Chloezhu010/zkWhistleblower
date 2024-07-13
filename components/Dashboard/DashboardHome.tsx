import { TopicsTable } from "./TopicTable";
import { UploadModal } from "../UploadModal";


const topicsData = [
  {
    title: "Introducing the new forum design",
    replies: 42,
    lastReply: "2 days ago",
  },
  {
    title: "Best practices for forum moderation",
    replies: 18,
    lastReply: "1 week ago",
  },
  {
    title: "Feedback on the new forum features",
    replies: 32,
    lastReply: "3 days ago",
  },
  {
    title: "Suggestions for future forum updates",
    replies: 54,
    lastReply: "5 days ago",
  },
  {
    title: "Troubleshooting forum issues",
    replies: 21,
    lastReply: "1 day ago",
  },
];

export function DashboardHome() {

  return (

    <div className="flex flex-col min-h-screen bg-muted/40">
      <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">WhistleBlowing</h1>
            <UploadModal />
          </div>
          <TopicsTable topics={topicsData} />
        </div>
      </main>
    </div>
  );
}
