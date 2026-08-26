import { JetBrains_Mono as FontMono } from 'next/font/google';
import { Space_Grotesk as FontSpaceGrotesk } from 'next/font/google';

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontSpaceGrotesk = FontSpaceGrotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});
