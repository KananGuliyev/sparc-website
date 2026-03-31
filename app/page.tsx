import Image from "next/image";
import Link from "next/link";
import WritingText from "@/components/ui/writing-text";

const quickLinks = [
  {
    href: "/about",
    title: "About",
    description: "Learn SPARC's mission, focus areas, and story.",
    image: "/sparc-3.jpg",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Reach out by email and stay updated on community channels.",
    image: "/sparc-contact.jpeg",
  },
  {
    href: "/events",
    title: "Events",
    description: "See upcoming workshops, panels, and past highlights.",
    image: "/sparc-events.jpeg",
  },
  {
    href: "/join",
    title: "Join",
    description: "Apply to SPARC and learn how recruitment works.",
    image: "/sparc-join.jpeg",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Explore hands-on projects and proposals from members.",
    image: "/sparc-projects.jpeg",
  },
  {
    href: "/team",
    title: "Team",
    description: "Meet the student leaders and founding members of SPARC.",
    image: "/sparc-2.jpg",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-screen flex-col text-zinc-900 dark:text-zinc-50 gap-y-6 sm:gap-y-8">
        <section className="grid gap-6 sm:gap-8 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Suffolk University · Student Club
            </p>
            <WritingText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" text="Suffolk Programming, AI & Research Club" />
            <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              SPARC is a student club at Suffolk University focused on applied machine learning and AI research. We build real projects, host workshops, and create a space for students across majors to explore the world of AI together.
            </p>
          </div>
        </section>

        <div className="relative h-48 sm:h-56 rounded-2xl bg-transparent md:h-64">
          <Image
            unoptimized
            src="/sparc-1.jpg"
            alt="SPARC Hero Image"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <section className="space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Explore Pages
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white/80 text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950"
                aria-label={`Go to ${item.title} page`}
              >
                <div className="relative h-28 sm:h-32">
                  <Image
                    unoptimized
                    src={item.image}
                    alt={`${item.title} page image`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent" />
                </div>
                <div className="space-y-2 p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm font-semibold">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
