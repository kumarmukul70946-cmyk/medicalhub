import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthHub Medical | Comprehensive Healthcare',
  description: 'Providing exceptional healthcare services with compassion and cutting-edge technology in Vadodara.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
