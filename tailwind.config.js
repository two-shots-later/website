/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      // 'tsl-black' : {
      //   DEFAULT : '#2d2f31'
      // },
      // 'tsl-orange' : {
      //   DEFAULT: '#b14515',
      //   100: '#f2b296',
      //   200: '#ee9b76',
      //   300: '#ea8456',
      //   400: '#e76c36',
      //   500: '#df571a',
      //   600: '#bf4a16',
      //   700: '#9f3e12',
      //   800: '#7f310f',
      //   900: '#5f250b',
      // },
      // 'tsl-mocha' : {
      //   DEFAULT: '#77311a',
      //   100: '#e9b19e',
      //   200: '#e39981',
      //   300: '#dd8264',
      //   400: '#d66a46',
      //   500: '#cd542c',
      //   600: '#af4826',
      //   700: '#923c20',
      //   800: '#753019',
      //   900: '#572413',
      // },
      // 'tsl-espresso' : {
      //   DEFAULT: '#5a2416',
      //   100: '#e7afa0',
      //   200: '#e09784',
      //   300: '#d97e67',
      //   400: '#d2664a',
      //   500: '#c85031',
      //   600: '#ac442a',
      //   700: '#8f3923',
      //   800: '#562215',
      //   900: '#572413',
      // },
      // 'tsl-mist' : {
      //   DEFAULT: '#8c8b8e',
      //   100: '#c4c3c5',
      //   200: '#b2b1b3',
      //   300: '#a09fa1',
      //   400: '#8e8d90',
      //   500: '#7c7b7e',
      //   600: '#6a696c',
      //   700: '#58585a',
      //   800: '#474648',
      //   900: '#353436',
      // },
      // 'tsl-mint' : {
      //   DEFAULT: '#a2aba9',
      //   100: '#c1c7c6',
      //   200: '#aeb6b4',
      //   300: '#9ba5a3',
      //   400: '#899491',
      //   500: '#768380',
      //   600: '#65706e',
      //   700: '#545d5b',
      //   800: '#434b49',
      //   900: '#323837',
      // },
    },
    extend: {
     colors: {
        feiryOrange: '#b14515',
        mocha: '#77311a',
        espresso: '#5a2416',
        mountainMist: '#8c8b8e',
        edward: '#a2aba9',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}