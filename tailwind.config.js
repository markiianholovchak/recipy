import withMT from "@material-tailwind/react/utils/withMT";

// /** @type {import('tailwindcss').Config} */
// /*eslint-env node*/
export default withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#212529",
                green: {
                    50: "#FBFCE5",
                    400: "#389357",
                    500: "#2d793b"
                },
                gray: {
                    50: "#f1f2f4",
                    100: "#d5d9dd",
                    200: "#b8bfc6",
                    300: "#b8bfc6",
                    400: "#808c99",
                    500: "#66737f",
                    600: "#505963",
                    700: "#394047",
                    800: "#394047"
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
