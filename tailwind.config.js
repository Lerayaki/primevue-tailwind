/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: ["selector", '[class*="app-dark"]'],
    theme: {
        extend: {},
    },
    plugins: [require("tailwindcss-primeui")],
};
