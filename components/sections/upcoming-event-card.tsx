import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ClubEvent } from "@/data/site-content";

type UpcomingEventCardProps = {
  event: ClubEvent;
};

export function UpcomingEventCard({ event }: UpcomingEventCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{event.title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>{event.date}</span>
          <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
            {event.type}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Time:</strong> {event.time}</p>
          <p><strong className="text-foreground">Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
