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
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_4c": "#0000004c",
          "900_19": "#00000019",
          "900_0c": "#0000000c",
        },
        blue_gray: { 100: "#d8d8d8", "100_7f": "#d8d8d87f" },
        white: { A700: "#ffffff" },
        gray: { 300: "#dedede" },
        amber: { A400: "#ffc600" },
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
