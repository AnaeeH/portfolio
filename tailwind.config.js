/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Custom palette matching the original CSS variables
        navy: {
          DEFAULT: '#2f3e5e',
          soft: '#5b6e93',
        },
        sky: {
          light: '#bac9e6',
          hover: '#d9dee9',
        },
        surface: {
          block: '#e7e7e7',
          bg: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 0.5rem rgba(0,0,0,0.2)',
        header: '0 0 1rem rgba(0,0,0,0.3)',
      },
      borderRadius: {
        'card-tl': '30px 0 30px 0',
      },
    },
  },
  plugins: [],
};
