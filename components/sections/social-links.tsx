import { Button } from "@/components/ui/button";
import type { SocialLinks } from "@/data/site-content";

type SocialLinksProps = {
  links: SocialLinks;
};

export function SocialLinksGroup({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.linkedin ? (
        <Button asChild variant="outline">
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </Button>
      ) : (
        <p className="text-sm text-muted-foreground">TODO: Add official SPARC LinkedIn URL.</p>
      )}

      {links.instagram ? (
        <Button asChild variant="outline">
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </Button>
      ) : null}

      {links.discord ? (
        <Button asChild variant="outline">
          <a href={links.discord} target="_blank" rel="noreferrer">Discord</a>
        </Button>
      ) : null}
    </div>
  );
}
