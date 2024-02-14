/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Screen Sizes
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Portfolio Color Scheme
      colors:{
        bgColor: '#1f1f38',
        bg2Color: '#2c2c6c',
        primaryColor: '4db5ff',
        primary2Color: 'rgb(77, 181, 125, 0.4)',
        whiteColor: '#fff',
        lightColor: 'rgb(255, 255, 255, 0.6)',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
