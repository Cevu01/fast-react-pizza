/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace ',
    },
    extend: {
      //ovo je za telefone, zato sto nekad 100vh ne radi
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
