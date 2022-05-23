module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
          brand:{
            300: '#996DFF',
            500:'#8257e6',
            200: '#6856e7',
          }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
