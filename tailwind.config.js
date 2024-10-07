/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          HOVER: '#6db6ff',
          DEFAULT: '#157ee8',
          OUTLINE: '#002e73',
        },
        font: {
          PARAGRAPH: '#687188',
          DEFAULT: '#3d4350',
          HEADER: '#464b53',
          BUTTON: '#ffffff',
        },
        nav: {
          DEFAULT: '#157ee8',
          BACKGROUND: 'rgb(29,163,167)',

          ITEM_BG: '#ffffff',
          HOVER: '#ffffff',

          TEXT: '#222222',
          TEXT_HOVER: '#001f55',
        },
        background: {
          DEFAULT: '#f8f9fb',
        },
        error: {
          light: '#ffb7b7',
          DEFAULT: '#EF4444',
          dark: '#991B1B',
        },
        primary: '#4f46e5',
        // You can add as many colors as you need
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bn17.jpg')", // Replace with your image path
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        fadeInDown: 'fadeInDown 1s ease-in-out',
      },
    },
  },
  plugins: [],
}


