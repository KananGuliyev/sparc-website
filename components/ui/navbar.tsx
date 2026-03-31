"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuId = "mobile-primary-navigation";

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg bg-primary text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm">
                        SP
                    </div>
                    <div className="hidden sm:flex flex-col leading-tight">
                        <span className="text-sm font-semibold tracking-tight text-foreground">
                            {siteContent.club.shortName}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {siteContent.club.tagline}
                        </span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <NavLink href="/events">Events</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/join">Join</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                        asChild
                        size="sm"
                        className="hidden lg:inline-flex"
                    >
                        <Link href="/join">Join</Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-controls={mobileMenuId}
                        aria-expanded={mobileMenuOpen}
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {mobileMenuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </Button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="border-t border-border bg-surface/95 backdrop-blur-sm lg:hidden">
                    <nav id={mobileMenuId} className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium">
                        <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                        <MobileNavLink href="/team" onClick={() => setMobileMenuOpen(false)}>Team</MobileNavLink>
                        <MobileNavLink href="/events" onClick={() => setMobileMenuOpen(false)}>Events</MobileNavLink>
                        <MobileNavLink href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="/join" onClick={() => setMobileMenuOpen(false)}>Join</MobileNavLink>
                        <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
                        {/*<div className="border-t border-zinc-200 pt-3 dark:border-zinc-800 mt-2">
                            <Button
                                asChild
                                className="w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Link href="/join">Apply</Link>
                            </Button>
                        </div>*/}
                    </nav>
                </div>
            )}
        </header>
    )
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className="px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      className="justify-start px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

