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
