/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      'primary-700': 'hsl(158,42%,18%)',
      'primary-500': 'hsl(158, 36%, 37%)',
      secondary: 'hsl(30, 38%, 92%)',
      'neutral-900': 'hsl(212, 21%, 14%)',
      'neutral-600': 'hsl(228, 12%, 48%)',
      'neutral-100': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      fontSize: {
        sm: ['14px', 1.65],
        '3xl': ['2rem', 1],
      },
      letterSpacing: {
        tighter: '-.04em',
        widest: '.4em',
      },
    },
  },
  plugins: [],
};
