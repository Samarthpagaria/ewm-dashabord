import type { Metadata } from 'next';
import { Poppins, Geist } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EWEM Dashboard | Environmental Waste & E-Waste Management',
  description: 'Clean, modern academic workspace showcasing assignments, activities, presentations, research papers, and coursework.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${geist.variable}`}>
      <body className="font-poppins font-sans antialiased text-[#1E232A] bg-[#FAFBFD] min-h-screen selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
