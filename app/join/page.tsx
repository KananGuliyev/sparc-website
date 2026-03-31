import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { siteContent } from "@/data/site-content";

export default function JoinPage() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-8 sm:gap-y-10">
        <section className="grid gap-4 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Join SPARC
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              SPARC welcomes Suffolk students from all majors and backgrounds. Join us to build technical skills, work on projects, and participate in a collaborative learning community.
            </p>

            <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-foreground">
                Recruiting
              </span>
              <span>Open membership for Spring 2026.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {siteContent.links.joinForm ? (
                <Button asChild>
                  <a
                    href={siteContent.links.joinForm}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Submit Interest Form
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  TODO: Add official SPARC membership form URL in `data/site-content.ts`.
                </p>
              )}
              <Button asChild variant="outline">
                <a href={`mailto:${siteContent.club.email}`}>
                  Email Questions
                </a>
              </Button>
            </div>
          </div>

          <div className="relative h-56 overflow-hidden rounded-2xl md:h-72">
            <Image
              src="/sparc-join.jpeg"
              alt="Students collaborating during a SPARC club session"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <Card size="sm">
            <CardHeader>
              <CardTitle className="text-base">How Joining Works</CardTitle>
              <CardDescription>Simple, welcoming process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Start by completing the interest form with your background and interests. The leadership team reviews submissions on a rolling basis and responds with next steps, usually within one week. Some students may be invited to an orientation chat to learn about projects and available roles.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card size="sm">
            <CardHeader className="mb-2 border-b-0 pb-0">
              <CardTitle className="text-sm">Who Should Apply</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Students interested in programming, AI, or research are encouraged to apply, regardless of major. We value curiosity, reliability, and willingness to learn.
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader className="mb-2 border-b-0 pb-0">
              <CardTitle className="text-sm">Time Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Weekly attendance is encouraged, but we understand students have different schedules. Members can contribute through meetings, asynchronous project work, or event support.
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader className="mb-2 border-b-0 pb-0">
              <CardTitle className="text-sm">Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              No prior experience is required. We support members through mentorship, shared resources, and recordings when available to help everyone participate.
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

