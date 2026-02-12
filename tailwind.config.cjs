/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vite-purple': '#bd34fe',
        'vite-blue': '#41d1ff',
        'vite-cyan': '#22d3ee',
        'vite-indigo': '#818cf8',
        'vite-dark': '#0a0a0a',
        'vite-card': '#1a1a1a',
        'vite-text': '#ffffff',
        'vite-dim': '#a1a1aa',
        'vite-border': '#27272a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'blob': 'blob 10s infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'background-shine': {
          'from': {
            'backgroundPosition': '0 0'
          },
          'to': {
            'backgroundPosition': '-200% 0'
          }
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(45deg, #41d1ff, #bd34fe)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      boxShadow: {
        'glow': '0 0 20px -5px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}
