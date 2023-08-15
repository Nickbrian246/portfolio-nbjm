/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '500': '500ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
    screens: {
      '2xl': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (max-width: 639px) { ... } Max es hasta
      // min es apartir de 
    },
  },
  plugins: [],
}

