import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          'dark-red': '#991B1B',
        },
        neutral: {
          black: '#0A0A0A',
          'dark-gray': '#262626',
          'medium-gray': '#737373',
          'light-gray': '#E5E5E5',
          white: '#FFFFFF',
          'bg-light': '#FAFAFA',
        },
        accent: {
          success: '#16A34A',
          warning: '#EAB308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '48px',
        'h1-mobile': '32px',
        'h2-desktop': '36px',
        'h2-mobile': '28px',
        'h3-desktop': '28px',
        'h3-mobile': '24px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'badge': '4px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
      },
      transitionDuration: {
        'standard': '200ms',
        'slow': '300ms',
        'fast': '150ms',
      },
    },
  },
  plugins: [],
}

export default config
