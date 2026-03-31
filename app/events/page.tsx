import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { UpcomingEventCard } from "@/components/sections/upcoming-event-card";

export default function EventsPage() {
  const pastHighlights = [
    {
      title: "SPARC Website Intro Panel",
      date: "February 12, 2026",
      type: "Panel",
      description:
        "Join us for an introductory panel discussion about the SPARC website and how members can get involved.",
    },
    {
      title: "Professor Z. Huang's Guest Lecture on ML",
      date: "February 5, 2026",
      type: "Guest",
      description:
        "We had the privilege of having Professor Z. Huang, a professor in the Computer Science department, for a guest lecture on machine learning research. Professor Huang shared insights from their latest work in natural language processing and engaged in a lively Q&A session with our members. It was an inspiring event that sparked great discussions and motivated many of us to dive deeper into ML research.",
    }
  ];

  const pastRecordings = [
    {
      title: "Meeting 1",
      date: "February 26, 2026",
      type: "Zoom Recording",
      link: "https://suffolk.zoom.us/rec/play/YM0vPAyEnmg06qQFb73LIOqeUnd9X67yeQSyNJXdzkEwY0vVwo9RndIrFkl0rmV4UJTNAsH_mx9T8jj5.YWen7KysJWaujsOP?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&oldStyle=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fsuffolk.zoom.us%2Frec%2Fshare%2FjGnuwrQ-G0zXyDXA59_caQ3csajOglqWP7PbkDq0uKWIp-dY-Ty_vTLrIay41wCv.f6L6cPvH2Zs29L60",
      description: "Development meeting recording covering project updates and implementation discussion.",
    },
    {
      title: "Meeting 2",
      date: "March 24, 2026",
      type: "Zoom Recording",
      link: "https://suffolk.zoom.us/rec/play/OVjfXxrQKRNvOOhjp7zAcx5pHCTUHQ3w2FhEN0SRORkWo7BcFtoH3edi0NKLOeO4xyrcy3jBIX4PxW_n.9Wg9uEz-vEWMVDfa?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&oldStyle=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fsuffolk.zoom.us%2Frec%2Fshare%2FdTUmT8tGpGdRxRpJPIiAIOEHpPA9us7CADcmqsHNAOmGqovD0qOOh9ZsQA_VcujY.BjJrVRW8NNpaCBAk",
      description: "Development meeting recording focused on planning and next milestones.",
    },
  ];

  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-8 sm:gap-y-10">
        <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Events</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              SPARC hosts workshops, speaker sessions, and project meetings throughout the semester. Join us to learn practical skills, meet peers, and contribute to club initiatives.
            </p>
          </div>
        </section>

        <div className="relative h-56 overflow-hidden rounded-2xl md:h-72">
          <Image
            src="/sparc-events.jpeg"
            alt="Students at a SPARC event"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {siteContent.upcomingEvents.map((event) => (
                <UpcomingEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Past Highlights
            </h2>
            <div className="space-y-4">
              {pastHighlights.map((event) => (
                <Card key={event.title}>
                  <CardHeader>
                    <CardTitle className="text-base">{event.title}</CardTitle>
                    <CardDescription className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>{event.date}</span>
                      <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                        {event.type}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Past Zoom Recordings
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {pastRecordings.map((recording) => (
              <Card key={recording.title}>
                <CardHeader>
                  <CardTitle className="text-base">{recording.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span>{recording.date}</span>
                    <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                      {recording.type}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>{recording.description}</p>
                  <a
                    href={recording.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Watch Recording
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

