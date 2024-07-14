import { PostCard } from "~~/components/ownerpage/PostCard";
import { TransactionHistory } from "~~/components/ownerpage/TransactionHistory";
import { DonateCard } from "./ownerpage/SideCard/Dondation";
import { DonateList } from "./ownerpage/SideCard/DonationList";


export function OwnerPageHome() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">

      <main className="flex-1 bg-muted/40 p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <PostCard />
              <TransactionHistory />
            </div>
            <div className="space-y-6">
              <DonateCard />
              <DonateList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


