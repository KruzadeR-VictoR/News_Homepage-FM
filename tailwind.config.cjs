/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        Softorange: 'hsl(35, 77%, 62%)',
        Softred: 'hsl(5, 85%, 63%)',
        Offwhite: 'hsl(36, 100%, 99%)', //Almost white
        Grayishblue: 'hsl(233, 8%, 79%)', // grayish white
        Darkgrayishblue:' hsl(236, 13%, 42%)', //Grayish
        Verydarkblue: 'hsl(240, 100%, 5%)',
        },
        fontWeight:{
          '400':'400',
          '700':'700',
          '800':'800',
        }
    },
  },
  plugins: [],
}
