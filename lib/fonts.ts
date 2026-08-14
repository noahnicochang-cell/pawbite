import localFont from 'next/font/local';
import { Fraunces } from 'next/font/google';

export const fontFraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

// Body text — Neue Haas Grotesk Display (WWWESH primary)
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

// Heavy editorial headlines — Neue Haas Grotesk Display
export const fontEditorial = localFont({
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
  variable: '--font-editorial',
  display: 'swap',
});

// Numerical data / stats — Neue Haas Grotesk Display
export const fontMono = localFont({
  src: [
    { path: '../public/fonts/HaasGrotDisp-55Roman.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-75Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/fonts/HaasGrotDisp-95Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
});

// Wordmark + accent display — Cooper Black (WWWESH accent)
export const fontDisplay = localFont({
  src: '../public/fonts/coopbl.ttf',
  weight: '900',
  variable: '--font-display',
  display: 'swap',
});

// Serif italic accents ("chews", "formulated") — Cooper Black
export const fontSerif = localFont({
  src: '../public/fonts/coopbl.ttf',
  weight: '900',
  variable: '--font-serif',
  display: 'swap',
});

// Callout accents — Cooper Black
export const fontHand = localFont({
  src: '../public/fonts/coopbl.ttf',
  weight: '900',
  variable: '--font-hand',
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
  fontFraunces.variable,
].join(' ');
