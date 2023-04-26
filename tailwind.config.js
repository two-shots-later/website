/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
     colors: {
        feiryOrange: '#b14515',
        mocha: '#77311a',
        espresso: '#5a2416',
        mountainMist: '#8c8b8e',
        edward: '#a2aba9',
      }     
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}