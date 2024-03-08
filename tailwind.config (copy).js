import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "custom",
    defaultExtendTheme: "light",
    themes: {
      custom: {
        colors: {
          background: "#fff",

          primary: {
            DEFAULT: "#525FE1",
            foreground: "#fff",
            
          },
          secondary: {
            DEFAULT: "#ffcf59",
            foreground: "#000000",

          },
          white :{
            DEFAULT: "#fff",
          }

        },
      },
    },

  })],
}
