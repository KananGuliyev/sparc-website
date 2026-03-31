import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";
import { UpcomingEventCard } from "@/components/sections/upcoming-event-card";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-10 sm:gap-y-12">
        <section className="grid gap-8 rounded-2xl border border-border bg-muted/35 p-5 sm:p-6 md:grid-cols-[3fr,2fr] md:items-center lg:p-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {siteContent.club.heroLine}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {siteContent.club.heroTitle}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {siteContent.club.heroDescription}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteContent.club.heroSecondary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/join">Join SPARC</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-60 overflow-hidden rounded-2xl border border-border shadow-sm sm:h-64 md:h-72 lg:h-80">
            <Image
              src="/sparc-1.jpg"
              alt="SPARC student members in a collaborative session"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Why Students Join
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.homeHighlights.map((item) => (
              <Card key={item} size="sm" className="border-border/80">
                <CardContent className="text-sm leading-relaxed text-muted-foreground">{item}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Club Snapshot
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {siteContent.credibilitySignals.map((item) => (
              <Card key={item} size="sm" className="bg-muted/30">
                <CardContent className="text-sm leading-relaxed text-muted-foreground">{item}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Who We Are
          </h2>
          <Card className="border-border/80 bg-muted/20">
            <CardContent className="text-base leading-relaxed text-muted-foreground">
              {siteContent.homeWhoWeAre}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Upcoming Events
            </h2>
            <p className="text-sm text-muted-foreground">Current semester highlights and member sessions</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.upcomingEvents.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="pt-1">
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
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/80 bg-muted/20">
            <CardHeader>
              <CardTitle className="text-base">How to Join</CardTitle>
              <CardDescription>Open membership for Suffolk students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{siteContent.joinSummary}</p>
              <Button asChild>
                <Link href="/join">Start Your Application</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-border/80 bg-muted/20">
            <CardHeader>
              <CardTitle className="text-base">Contact</CardTitle>
              <CardDescription>Questions, collaborations, or event ideas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{siteContent.contactSummary}</p>
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
