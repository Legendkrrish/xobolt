/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B4ED9',
          'blue-hover': '#083BB0',
          'blue-light': '#EBF2FF',
          'blue-tint': '#F5FAFF',
          white: '#FFFFFF',
          grey: '#F7F8FA',
          slate: '#0F172A',
          muted: '#64748B',
          border: 'rgba(15, 23, 42, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Inter"', '"Geist"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-blue': '0 20px 40px -15px rgba(11, 78, 217, 0.12)',
        'blue-glow': '0 0 30px rgba(11, 78, 217, 0.25)',
        'apple-card': '0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'apple-hover': '0 25px 50px -12px rgba(11, 78, 217, 0.15), 0 2px 6px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
