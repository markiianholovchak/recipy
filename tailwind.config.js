import withMT from "@material-tailwind/react/utils/withMT";

// /** @type {import('tailwindcss').Config} */
// /*eslint-env node*/
export default withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#09180C",
                green: {
                    50: "#FBFCE5",
                    400: "#389357",
                    500: "#2d793b"
                }
            },
            fontFamily: {
                sans: ["Outfit", "Helvetica", "Arial", "sans-serif"]
                // You can add more font families for different styles if needed
            }
        }
    },
    plugins: []
});
