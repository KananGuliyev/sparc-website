import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-8 sm:gap-y-10">
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About SPARC</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            SPARC is Suffolk University&apos;s Programming, AI and Research Club. We help students build practical technical skills through project work, workshops, and peer mentorship in a supportive academic environment.
          </p>
        </section>

        <div className="relative h-56 overflow-hidden rounded-2xl md:h-72">
          <Image
            src="/sparc-3.jpg"
            alt="SPARC club members at a university session"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Mission</CardTitle>
              <CardDescription>Why SPARC exists</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our mission is to advance AI and computing literacy at Suffolk by creating opportunities for students to learn collaboratively, work on real projects, and present their ideas with confidence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">What We Do</CardTitle>
              <CardDescription>Core activities throughout the semester</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-5">
                <li>Hands-on software and AI project teams.</li>
                <li>Research reading groups and paper discussions.</li>
                <li>Workshops on modern tools, workflows, and portfolios.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-[3fr,2fr] md:items-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Club Story</CardTitle>
              <CardDescription>How SPARC started and where it is heading</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                SPARC was founded in 2025 by students passionate about AI, software development, and research. What began as a small working group has grown into a broader student community across majors.
              </p>
              <p>
                Formerly Computational Science and Mathematics (CSMA), the club rebranded to SPARC in 2026 to better represent our applied project and research focus. Our goal is to continue expanding access to technical opportunities and cross-disciplinary collaboration at Suffolk.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

