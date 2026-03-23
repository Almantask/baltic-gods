import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        charcoal: '#1a1a1a',
        'moss-green': '#2d4a3e',
        'moss-light': '#3d5a4e',
        'amber-warm': '#d4a574',
        'amber-gold': '#c9a961',
        'amber-glow': '#f5c98b',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
