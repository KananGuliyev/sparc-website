import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";
import { UpcomingEventCard } from "@/components/sections/upcoming-event-card";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-8 sm:gap-y-10">
        <section className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {siteContent.club.heroLine}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {siteContent.club.heroTitle}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {siteContent.club.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/join">Join SPARC</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64 md:h-72">
            <Image
              src="/sparc-1.jpg"
              alt="SPARC student members in a collaborative session"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {siteContent.homeHighlights.map((item) => (
            <Card key={item} size="sm">
              <CardContent className="text-sm text-muted-foreground">{item}</CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Who We Are
          </h2>
          <Card>
            <CardContent className="text-base leading-relaxed text-muted-foreground">
              We are an interdisciplinary community of Suffolk students who meet regularly to practice technical skills, discuss research, and support one another through hands-on learning. Whether you are just starting out or already experienced, SPARC offers an inclusive environment where your curiosity is valued.
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Upcoming Events
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.upcomingEvents.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))}
          </div>
          {siteContent.links.eventCalendar ? (
            <Button asChild variant="outline">
              <a href={siteContent.links.eventCalendar} target="_blank" rel="noreferrer">
                See Full Events Calendar
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/events">See Full Events Calendar</Link>
            </Button>
          )}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How to Join</CardTitle>
              <CardDescription>Open membership for Suffolk students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Submit the join interest form and our leadership team will follow up with next steps within one week.</p>
              <Button asChild>
                <Link href="/join">Start Your Application</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact</CardTitle>
              <CardDescription>Questions, collaborations, or event ideas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Email us directly at {siteContent.club.email}.</p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact SPARC</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
