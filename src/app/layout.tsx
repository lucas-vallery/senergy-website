import { type ReactNode } from 'react';

// Root layout - required by Next.js App Router
// The actual HTML structure (html, body) is provided by [locale]/layout.tsx
// This pattern allows locale-specific lang attributes in static export
export default function RootLayout({ children }: { children: ReactNode }) {
  return children as JSX.Element;
}
