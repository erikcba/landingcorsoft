/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aora-bella-vista': "url('./assets/Aora-web.png')",
        'arroyo-web': "url('./assets/arroyoweb.png')",
        'besingular-web': "url('./assets/besingular-web.png')",
        'prevencion-parasitosis': "url('./assets/parasitosis-web.png')",
        'gyd-web': "url('./assets/gyd-web.png')",
        'opercussion': "url('./assets/opercussion.jpg')",
        'chillhopworld': "url('./assets/chillhopImg.jpg')"
      },
    },
  },
  plugins: [],
}

