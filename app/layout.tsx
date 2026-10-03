import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'eSports Wala',
  description: 'Esports community and tournament platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
