import { siteContent } from "@/data/site-content";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-surface py-5 text-sm text-muted-foreground">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:text-left sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm">
                    © {new Date().getFullYear()} {siteContent.club.fullName} ({siteContent.club.shortName})
                </p>
                <div className="flex flex-col gap-1 text-sm sm:items-end">
                    <p>Suffolk University · {siteContent.club.city}</p>
                    <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${siteContent.club.email}`}>
                        {siteContent.club.email}
                    </a>
                </div>
            </div>
        </footer>
    )
}