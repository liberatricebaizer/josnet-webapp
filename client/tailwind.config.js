/** @type {import('tailwindcss').UserConfig} */
export default {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    safelist: [],
  },
  theme: {
    extend: {
      colors: {
        groon: "#5DBBFF",
        main: "#000000",
        subMain: "#F20000",
        // dry: "#0B0F29",
        dry: "#1a1a1a",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
      },
      backgroundImage: {
        "hero-pattern": "url('images/ex.jpg')",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")],
};
