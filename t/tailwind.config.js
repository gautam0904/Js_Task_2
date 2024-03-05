module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          300: "#e3e3e3",
          500: "#a0a0a0",
          600: "#818181",
          800: "#403c3c",
          "800_01": "#393939",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { 400: "#fec828", A200: "#ffd741" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
