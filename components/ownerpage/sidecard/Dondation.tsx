import { Button } from "~~/components/ui/button";
import { SidebarCard } from "./Comment";

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