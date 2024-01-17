/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans Variable", "ui-sans-serif"],
    },
    extend: {
      transitionProperty: {
        "max-height": "maxHeight",
      },
      colors: {
        accent: "#8a7b6f",
        "accent-light": "#af9d8f",
        "accent-dark": "#413125",
        secondary: "#d5b985",
        "secondary-light": "#dcd8d4",
        "secondary-dark": "#a58e6a",
        "secondary-alt": "#07485b",
        "background-alt": "#ebeae9",
        "background-alt-dark": "#524134",
        "background-light": "#f5f4f3",
        "background-dark": "#413125",
        color: "#101010",
        "color-light": "#e8e8e8",
        "accent-gradient-dark":
          "linear-gradient( 45deg, rgb(var(--accent-dark)), rgb(var(--accent-light)) 60%, white 90%); ",
        "accent-gradient-light":
          "linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%); ",
      },
    },
  },
  plugins: [require("daisyui")],
};
