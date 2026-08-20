import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15.9 6.9 18l1.2-5.6L4 8.6l5.6-.6z" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12M8 11l4 4 4-4M4 21h16" />
    </svg>
  );
}

export function ApertureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function OrbitIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

export function MirrorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 21v-2a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 4 1.5 6 4 2-2.5 4-4 6-4 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9l9-6 9 6v12M9 21v-6h6v6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15.9 6.9 18l1.2-5.6L4 8.6l5.6-.6z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7L22 6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.1.26 2.6.46.6.24 1.1.55 1.6 1.05.5.5.8 1 1.05 1.6.2.5.4 1.4.46 2.6.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 2.1-.46 2.6-.24.6-.55 1.1-1.05 1.6-.5.5-1 .8-1.6 1.05-.5.2-1.4.4-2.6.46-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.1-.26-2.6-.46-.6-.24-1.1-.55-1.6-1.05-.5-.5-.8-1-1.05-1.6-.2-.5-.4-1.4-.46-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-2.1.46-2.6.24-.6.55-1.1 1.05-1.6.5-.5 1-.8 1.6-1.05.5-.2 1.4-.4 2.6-.46C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.58.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.36-.31.92-.36 1.94C3.4 9.48 3.4 9.85 3.4 12s0 2.52.07 3.76c.05 1.02.22 1.58.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.36.14.92.31 1.94.36 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c1.02-.05 1.58-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.36.31-.92.36-1.94.07-1.24.07-1.61.07-3.76s0-2.52-.07-3.76c-.05-1.02-.22-1.58-.36-1.94-.19-.49-.42-.84-.79-1.2-.36-.37-.71-.6-1.2-.79-.36-.14-.92-.31-1.94-.36C15.52 4 15.15 4 12 4zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm4.6-2a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06z"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"
      />
    </svg>
  );
}

export const iconMap = {
  camera: CameraIcon,
  sparkle: SparkleIcon,
  cloud: CloudIcon,
  aperture: ApertureIcon,
  orbit: OrbitIcon,
  mirror: MirrorIcon,
  heart: HeartIcon,
  building: BuildingIcon,
  star: StarIcon,
  pin: PinIcon,
  mail: MailIcon,
};

export type IconName = keyof typeof iconMap;
