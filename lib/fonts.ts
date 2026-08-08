import localFont from 'next/font/local';
import { Fraunces, Epilogue, Caveat, JetBrains_Mono } from 'next/font/google';

// Brand primary — Neue Haas Grotesk Display (from WWWESH brand package)
export const fontSans = localFont({
  src: [
    { path: '../public/fonts/HaasGrotDisp-55Roman.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-56Italic.otf', weight: '400', style: 'italic' },
    { path: '../public/fonts/HaasGrotDisp-65Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-66MediumItalic.otf', weight: '500', style: 'italic' },
    { path: '../public/fonts/HaasGrotDisp-75Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-76BoldItalic.otf', weight: '700', style: 'italic' },
    { path: '../public/fonts/HaasGrotDisp-95Black.otf', weight: '900', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-96BlackItalic.otf', weight: '900', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

// Brand accent display — Cooper Black (from WWWESH brand package)
export const fontDisplay = localFont({
  src: '../public/fonts/coopbl.ttf',
  weight: '900',
  variable: '--font-display',
  display: 'swap',
});

// Headlines — Fraunces SOFT axis for round/bouncy serif feel
export const fontSerif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

// Editorial headlines — heavy Epilogue for typographic punch
export const fontEditorial = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
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

// Numerical data — CFU counts, stats
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
