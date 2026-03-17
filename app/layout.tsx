import type {Metadata} from 'next';
import { Share_Tech_Mono, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import { SmoothScroll } from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Enhance Digital // AI Agency',
  description: 'AI-first digital agency helping small businesses automate tasks and get more sales.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="font-mono bg-[#050505] text-zinc-100 antialiased selection:bg-[#0ff] selection:text-black cursor-none">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
