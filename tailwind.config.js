/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': '#1fb6ff',
      'secondary': '#5222D0',
      'third': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'primary-text': '#273444',
      'secondary-text': '#8492a6',
      'light-text': '#d3dce6',
      'white': '#ffffff',
      'black': '#000000',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      'transparent': 'transparent',
      'current': 'currentColor',
      red: {
        500: '#f56565',
      },
      teal: {
        400: '#38b2ac',
      },
      blue: {
        500: '#4299e1',
      },
      pink: {
        400: "#f472b6",
        500: '#ed64a6',
      },
      orange: {
        500: '#f6ad55',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
}