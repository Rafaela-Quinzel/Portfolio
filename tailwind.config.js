/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0b0b0f',
          surface: '#0e0f13',
          card: '#121318',
          border: '#1f2630',
          text: '#e5e7eb',
          muted: '#9ca3af',
        },
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
        padding: {
          DEFAULT: '1.5rem',
          sm: '1rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
};
