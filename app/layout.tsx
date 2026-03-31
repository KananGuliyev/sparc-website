import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { siteContent } from "@/data/site-content";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparc-su.vercel.app"),
  title: `${siteContent.club.shortName} | Suffolk University Student Organization`,
  description:
    `Student-led programming, AI, and research organization at Suffolk University: ${siteContent.club.fullName}.`,
  openGraph: {
    title: `${siteContent.club.shortName} at Suffolk University`,
    description:
      `Join workshops, projects, and events with ${siteContent.club.fullName}.`,
    type: "website",
    siteName: "SPARC",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.club.shortName} at Suffolk University`,
    description:
      `Join workshops, projects, and events with ${siteContent.club.fullName}.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "dim"]}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

