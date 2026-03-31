import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SocialLinksGroup } from "@/components/sections/social-links";
import { siteContent } from "@/data/site-content";

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col gap-y-8 sm:gap-y-10">
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Contact</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Have a question about membership, events, or collaboration? Reach out to SPARC using the channels below and a student leader will respond.
          </p>
        </section>

        <div className="relative h-56 overflow-hidden rounded-2xl md:h-72">
          <Image
            src="/sparc-contact.jpeg"
            alt="SPARC club members in conversation"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card size="sm">
            <CardHeader className="mb-2 border-b-0 pb-0">
              <CardTitle className="text-base">Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>Contact us anytime at our official club email address: {siteContent.club.email}</p>
              <Button asChild variant="outline">
                <a href={`mailto:${siteContent.club.email}`}>Email SPARC</a>
              </Button>
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader className="mb-2 border-b-0 pb-0">
              <CardTitle className="text-base">Social and Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Follow our updates and connect with members through our external channels.
              </p>
              <SocialLinksGroup links={siteContent.socials} />
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Location and Meeting Times</CardTitle>
              <CardDescription>Where to find SPARC on campus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Meetings are typically held in person at Suffolk University, with virtual or hybrid options when needed. Current meeting details are shared through member announcements and event postings.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

