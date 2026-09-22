import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function IconBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 7h12l1.2 13.2a1 1 0 0 1-1 1.0H5.8a1 1 0 0 1-1-1.08L6 7Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.93L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.2c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2Zm0 18.04c-1.44 0-2.85-.39-4.06-1.12l-.29-.17-3.18.83.85-3.1-.19-.3a8.1 8.1 0 0 1-1.25-4.34c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.21.85 5.74 2.38a8.1 8.1 0 0 1 2.38 5.75c0 4.48-3.65 8.13-8.13 8.13Zm4.66-6.1c-.25-.13-1.5-.74-1.73-.83-.24-.09-.41-.13-.58.13-.17.25-.66.82-.8.99-.15.17-.29.19-.54.06a6.84 6.84 0 0 1-2.02-1.25 7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.13-.58-1.4-.8-1.92-.2-.5-.41-.43-.58-.44h-.5c-.17 0-.45.06-.68.31-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.8 2.75 4.36 3.86.61.26 1.08.42 1.45.54.61.19 1.17.17 1.6.1.49-.08 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M14 8h3V4.5h-3A3.5 3.5 0 0 0 10.5 8v2.5H8v3.5h2.5V21h3.5v-7H16l.75-3.5H14V8Z" />
    </svg>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l1.5 4L8 9.6a11 11 0 0 0 6.4 6.4L16 13.5l4 1.5v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 6h12v10H2zM14 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 4.5 6v6c0 4.4 3.2 7.7 7.5 9 4.3-1.3 7.5-4.6 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function IconGear(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19" />
    </svg>
  );
}

export function IconReturn(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 4 9l5 5" />
      <path d="M4 9h10a6 6 0 0 1 6 6v1" />
    </svg>
  );
}