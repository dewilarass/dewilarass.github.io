/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        "neo-yellow": "#FFE500",
        "neo-pink": "#FF6B9D",
        "neo-blue": "#61DAFB",
        "neo-green": "#7CFF6B",
        "neo-orange": "#FF9F43",
        "neo-purple": "#A855F7",
        "neo-bg": "#F5F0E8",
        "neo-black": "#1A1A1A",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #1A1A1A",
        "neo-lg": "6px 6px 0px 0px #1A1A1A",
        "neo-xl": "8px 8px 0px 0px #1A1A1A",
        "neo-hover": "2px 2px 0px 0px #1A1A1A",
      },
    },
  },
  plugins: [],
};
