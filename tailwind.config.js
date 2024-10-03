/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Main_Lowest: "#ffffff",
        Main_lower: "#f5f5f5",
        Main_low: "#e6e6e6",
        Main_medium: "#37475a",
        Main_high: "#232f3e",
        Main_highter: "#131921",
        Main_highest: "#000000",
        Brand_primary: "#ff9900",
        Brand_grey: "#6f7373",
      },
      fill: {
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
