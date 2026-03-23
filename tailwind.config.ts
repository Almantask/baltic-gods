import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#111210',
        'bg-card': '#1a1c18',
        'bg-sidebar': '#14160f',
        amber: {
          DEFAULT: '#c8860a',
          light: '#d4940f',
          muted: '#8a5e07',
          dim: '#5a3d05',
        },
        moss: {
          DEFAULT: '#2d4a2d',
          border: '#3d5c3d',
          light: '#3a5c3a',
        },
        parchment: {
          DEFAULT: '#e8e4d9',
          muted: '#8a8578',
          dim: '#5a574f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
