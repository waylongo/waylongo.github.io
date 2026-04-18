import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconScholar from "@/assets/icons/IconScholar.svg";
import IconKaggle from "@/assets/icons/IconKaggle.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/waylongo",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=jIFN8T4AAAAJ&hl=en",
    linkTitle: `${SITE.title} on Google Scholar`,
    icon: IconScholar,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wenlong-wu/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/waylongo",
    linkTitle: `${SITE.title} on Kaggle`,
    icon: IconKaggle,
  },
] as const;
