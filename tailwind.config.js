import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
            figtree: ['Figtree', 'sans-serif'],
            rosca: ['Rosca', 'sans-serif'],
            "rosca-slant": ['Rosca-Slant', 'sans-serif'],
        },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
