import type { Metadata } from 'next';

import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ResumeButton from './components/ResumeButton';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio of Adrian Podraza Frontend Developer',
  description:
    'Portfolio of Adrian Podraza Frontend Developer based in Poland. I am a passionate and dedicated frontend developer with a strong focus on creating user-friendly and efficient web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} bg-grid-and-gradient relative h-auto min-h-screen overflow-x-hidden font-sans antialiased`}
      >
        <div className="bg-grid-and-gradient min-h-screen overflow-hidden">
          <ResumeButton />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
