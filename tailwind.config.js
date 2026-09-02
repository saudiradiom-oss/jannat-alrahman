/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F6B50',
        'primary-dark': '#094735',
        gold: '#C19E2B',
        background: '#FAF7F0',
        'card-bg': '#FFFFFF',
        text: '#19302A',
        border: '#E5DDCF',
      },
      fontFamily: {
        cairo: ['Cairo', 'system-ui', '-apple-system', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        'amiri-quran': ['Amiri Quran', 'serif'],
      },
      borderRadius: {
        xl: '24px',
        lg: '20px',
        md: '16px',
        sm: '14px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 25px -5px rgba(15, 107, 80, 0.3)',
      },
    },
  },
  plugins: [],
}
