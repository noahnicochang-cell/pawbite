import { Modak, Fraunces, Inter, Manrope, Caveat, JetBrains_Mono } from 'next/font/google';

// Wordmark only — the PawBite logotype (Modak = bubbly balloon-style display)
export const fontDisplay = Modak({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

// Headlines — use the SOFT axis for round/bouncy feel via CSS
export const fontSerif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

// Body text
export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Editorial / Founders-Grotesk-alt — headlines + body in the Maev style
export const fontEditorial = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-editorial',
  display: 'swap',
});

// Handwriting accents — founder signature, callouts
export const fontHand = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-hand',
  display: 'swap',
});

// Numerical data — strain names, CFU counts
export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Convenience export — all font CSS variables for the root layout
export const fontVariables = [
  fontDisplay.variable,
  fontSerif.variable,
  fontSans.variable,
  fontEditorial.variable,
  fontHand.variable,
  fontMono.variable,
].join(' ');
