import type { SVGProps } from "react";

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20h-3.37v-5.6c0-1.34-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V20H9.74V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M7 3h7l5 5v13H7z" strokeLinejoin="round" />
      <path d="M14 3v5h5" strokeLinejoin="round" />
      <path d="M9.5 13h5M9.5 16.5h5" strokeLinecap="round" />
    </svg>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.36 1.43c.1 1.02-.28 2.02-.9 2.75-.64.75-1.68 1.34-2.7 1.26-.12-.98.34-2.02.94-2.7.66-.75 1.8-1.3 2.66-1.31ZM19.9 17.2c-.34.79-.5 1.14-.94 1.84-.6 1-1.46 2.24-2.52 2.25-.94.01-1.18-.61-2.46-.6-1.28 0-1.55.61-2.5.6-1.06-.01-1.87-1.13-2.48-2.13-1.7-2.77-1.88-6.02-.83-7.75.75-1.24 1.93-1.97 3.04-1.97 1.13 0 1.84.62 2.78.62.9 0 1.46-.62 2.78-.62.98 0 2.02.53 2.76 1.45-2.43 1.33-2.04 4.79.37 5.31Z" />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4.3 2.6c-.3.28-.45.71-.45 1.26v16.28c0 .55.15.98.45 1.26l.1.08 9.13-9.13v-.2L4.4 2.52l-.1.08Z" fill="#00d2ff" />
      <path d="M16.5 14.02 13.4 10.9v-.2l3.1-3.12 3.72 2.11c1.06.6 1.06 1.59 0 2.2l-3.72 2.13Z" fill="#ffcf00" />
      <path d="m16.5 14.02-3.16-3.17L4.4 21.48c.34.36.9.4 1.53.05l10.57-7.5Z" fill="#ff3053" />
      <path d="M16.5 7.58 5.93 1.98c-.63-.35-1.19-.3-1.53.06l8.94 8.9 3.16-3.36Z" fill="#00f076" />
    </svg>
  );
}

export function LinkGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 15 15 9" strokeLinecap="round" />
      <path d="M10 6.5 11 5.5a3.5 3.5 0 1 1 4.95 4.95l-1 1M14 17.5l-1 1A3.5 3.5 0 1 1 8.05 13.55l1-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlatformIcon({ label, className }: { label: string; className?: string }) {
  if (label === "App Store") return <AppleIcon className={className} />;
  if (label === "Play Store") return <GooglePlayIcon className={className} />;
  return <LinkGlyph className={className} />;
}
