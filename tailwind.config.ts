import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#effaf6",
          "100": "#d8f3e7",
          "200": "#a3e0c8",
          "300": "#83d2b8",
          "400": "#50b799",
          "500": "#2d9c7e",
          "600": "#1e7d65",
          "700": "#186453",
          "800": "#155043",
          "900": "#134138",
          "950": "#092520",
        },
        secondary: {
          "50": "#ffffe9",
          "100": "#ffffc1",
          "200": "#feff7e",
          "300": "#fffa3a",
          "400": "#ffec0d",
          "500": "#ffc900",
          "600": "#ef9c00",
          "700": "#c66e00",
          "800": "#aa5900",
          "900": "#834404",
          "950": "#4c2300",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
