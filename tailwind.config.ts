import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PawBite brand palette — Maev/Dog-is-Human soft blue refresh
        mist: '#E2EAF1',
        'mist-deep': '#D4DEE8',
        'mist-soft': '#EEF3F8',
        navy: '#0F2540',
        'navy-deep': '#091833',
        'slate-soft': '#C5CFD9',
        'slate-mid': '#9CA8B5',
        'slate-deep': '#6B7785',
        'slate-ink': '#4B5563',
        // Legacy tokens — kept so existing pages keep rendering during pivot
        cream: '#E2EAF1',
        'cream-2': '#EEF3F8',
        forest: '#0F2540',
        'forest-deep': '#091833',
        'forest-mid': '#1A3357',
        terracotta: '#C8765B',
        'terracotta-dark': '#B05D43',
        warmyellow: '#E8B547',
        pinky: '#F4B8A8',
        mint: '#B8D4C4',
        offwhite: '#FAFAFA',
        charcoal: '#0F2540',
        'cream-muted': '#D4DEE8',
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        // Stacked drop shadow used on bouncy CTAs (Design 8 hybrid)
        stack: '0 8px 0 -2px #1F3A2E',
        'stack-sm': '0 4px 0 -2px #1F3A2E',
        soft: '0 12px 32px -8px rgba(31, 58, 46, 0.18)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-editorial)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'system-ui', 'sans-serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
