/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green-200": "#dff1e7",
        "primary-green-600": "#0c7d69",
        "primary-red": "#d73c3c",
        "neutral-grey-500": "#87a3a6",
        "neutral-grey-900": "#2b4246",
      },
    },
  },
  "plugins": ["prettier-plugin-tailwindcss"],
};
