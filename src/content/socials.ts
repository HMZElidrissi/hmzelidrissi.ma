import type { SocialType } from "@/schemas/utils";
import type { FC } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa6";

type SocialsLevel = "primary" | "secondary";
interface Social {
  icon: FC;
  label: string;
  href: string;
  level: SocialsLevel;
}

const SOCIALS: Array<Social> = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hmzelidrissi/",
    icon: FaInstagram,
    level: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hmzelidrissi/",
    icon: FaLinkedin,
    level: "primary",
  },
  {
    label: "E-mail",
    href: "mailto:contact@hmzelidrissi.ma",
    icon: FaEnvelope,
    level: "primary",
  },
];

export function getSocialsItems(level?: SocialsLevel) {
  if (!level) return SOCIALS;
  return SOCIALS.filter((item) => item.level === level);
}

export const SOCIALS_TYPE_MAP = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  // Keep other mappings available for existing content types
  // without rendering them in the site-wide socials list.
  x: (() => null) as unknown as FC,
  github: (() => null) as unknown as FC,
  bluesky: (() => null) as unknown as FC,
  facebook: (() => null) as unknown as FC,
} satisfies Record<SocialType, FC>;
