"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuId = "mobile-primary-navigation";
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#13284C] shadow-[0_2px_10px_rgba(0,0,0,0.16)]">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-7 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-2.5 shrink-0 rounded-md px-1 py-1">
                    <SparcHeaderLogo />
                    <div className="hidden sm:flex flex-col gap-2 leading-tight">
                        <span className="text-xl font-semibold tracking-[0.03em] text-white">
                            {siteContent.club.shortName}
                        </span>
                        <span className="text-[9.5px] font-normal tracking-[0.045em] text-zinc-300">
                            Suffolk University Student Organization
                        </span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-12 text-[15px] lg:flex">
                    <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>
                    <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
                    <NavLink href="/team" isActive={pathname === "/team"}>Team</NavLink>
                    <NavLink href="/events" isActive={pathname === "/events"}>Events</NavLink>
                    <NavLink href="/projects" isActive={pathname === "/projects"}>Projects</NavLink>
                    <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <ThemeToggle buttonClassName="text-white/95 hover:bg-white/12 hover:text-white" />
                    <Button
                        asChild
                        size="sm"
                        className="hidden md:inline-flex min-w-[126px] border border-white/30 !bg-white !text-[#13284C] font-semibold shadow-md hover:!bg-zinc-100"
                    >
                        <Link href="/join">Join SPARC</Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="text-zinc-100 hover:bg-white/10 hover:text-white lg:hidden"
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
                <div className="border-t border-white/15 bg-[#13284C] shadow-sm lg:hidden">
                    <nav id={mobileMenuId} className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium">
                        <MobileNavItem href="/" isActive={pathname === "/"} onClick={() => setMobileMenuOpen(false)}>Home</MobileNavItem>
                        <MobileNavItem href="/about" isActive={pathname === "/about"} onClick={() => setMobileMenuOpen(false)}>About</MobileNavItem>
                        <MobileNavItem href="/team" isActive={pathname === "/team"} onClick={() => setMobileMenuOpen(false)}>Team</MobileNavItem>
                        <MobileNavItem href="/events" isActive={pathname === "/events"} onClick={() => setMobileMenuOpen(false)}>Events</MobileNavItem>
                        <MobileNavItem href="/projects" isActive={pathname === "/projects"} onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavItem>
                        <MobileNavItem href="/contact" isActive={pathname === "/contact"} onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavItem>
                        <Button
                            asChild
                            size="sm"
                            className="mt-2 border border-white/20 bg-white text-[#13284C] font-semibold shadow-sm hover:bg-zinc-100"
                        >
                            <Link href="/join" onClick={() => setMobileMenuOpen(false)}>Join SPARC</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}

function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`border-b-2 pb-1 text-[15px] font-medium tracking-[0.02em] transition-colors ${
        isActive
          ? "border-white text-white"
          : "border-transparent text-zinc-200 hover:border-white/50 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavItem({
  href,
  isActive,
  children,
  onClick,
}: {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-white/10 text-white"
          : "text-zinc-200 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function SparcHeaderLogo() {
  return (
    <div className="flex items-center">
      <div className="relative size-12.5 overflow-hidden rounded-sm border border-white/10">
        <Image
          src="/logos/sparc-logo.png"
          alt="SPARC logo"
          fill
          priority
          sizes="50px"
          className="object-cover object-[center_22%]"
        />
      </div>
    </div>
  );
}

