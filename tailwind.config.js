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
        Button_primary_default_bg: "#ff9900",
        Button_primary_default_border: "#e58a00",
        Button_primary_hover_bg: "#ffb84d",
        Button_primary_hover_border: "#ffad33",
        Button_primary_active_bg: "#ff9900",
        Button_primary_active_border: "#007185",
        Danger_medium: "#cc0c39",
      },
      fill: {
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
