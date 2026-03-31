import { Button } from "@/components/ui/button";
import type { SocialLinks } from "@/data/site-content";
import Link from "next/link";

type SocialLinksProps = {
  links: SocialLinks;
};

export function SocialLinksGroup({ links }: SocialLinksProps) {
  const renderSocialLink = (href: string, label: string) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Button asChild variant="outline">
          <Link href={href}>{label}</Link>
        </Button>
      );
    }

    return (
      <Button asChild variant="outline">
        <a href={href} target="_blank" rel="noreferrer">{label}</a>
      </Button>
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {links.linkedin ? (
        renderSocialLink(links.linkedin, "LinkedIn")
      ) : (
        <p className="text-sm text-muted-foreground">TODO: Add official SPARC LinkedIn URL.</p>
      )}

      {links.instagram ? (
        renderSocialLink(links.instagram, "Instagram")
      ) : null}

      {links.discord ? (
        renderSocialLink(links.discord, "Discord")
      ) : null}
    </div>
  );
}
