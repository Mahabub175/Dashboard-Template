/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        primary: "#D9F27E",
        textColor: "#70747B",
        grey: "#f1f1f1",
      },
      boxShadow: {
        xl: "0 0 10px 5px #e5e5e5",
      },
      screens: {
        sm: "580px",
        md: "600px",
      },
    },
  },
  plugins: [],
};
