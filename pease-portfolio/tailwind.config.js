const { withRouter } = require('next/router')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        typewriter: "typewriter 1s steps(8) forwards",
        blink: "blink 1s step-end infinite"
      },
      keyframes: {
        typewriter: {
          to: {left: "100%"}
        },
        blink: {
          from: {background: 'black'},
          to: {background: 'black'},
          '50%': {background: 'white'}
        }
      }
    },
  },
  plugins: [],
};
