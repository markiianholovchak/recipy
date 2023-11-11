/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#09180C",
                green: {
                    500: "#2d793b"
                }
            },
            fontFamily: {
                sans: ["Outfit", "Helvetica", "Arial", "sans-serif"]
            }
        }
    },
    plugins: []
};
