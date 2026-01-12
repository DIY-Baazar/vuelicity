import defaultTheme from "tailwindcss/defaultTheme";
// import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.vue"],

    theme: {
        extend: {
            height: {
                76: "19rem",
                84: "21rem",
                88: "22rem",
                92: "23rem"
            },
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
                heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
                mono: ["SFMono-Regular", ...defaultTheme.fontFamily.mono]
            },
            colors: {
                blue: {
                    light: "#6681df",
                    DEFAULT: "#3457d5",
                    dark: "#4c60a7"
                },
                red: {
                    light: "#f15e6a",
                    DEFAULT: "#ed2939",
                    dark: "#b4464f"
                },
                green: {
                    light: "#65d965",
                    DEFAULT: "#32cd32",
                    dark: "#4ba24b"
                },
                yellow: {
                    light: "#FFF58A",
                    DEFAULT: "#FFED4A",
                    dark: "#E6C300"
                },
                tertiary: {
                    light: "#A89FB0",
                    DEFAULT: "#70677E",
                    dark: "#4B4452"
                },
                danger: {
                    light: "#FF7B74",
                    DEFAULT: "#DB3A34",
                    dark: "#A82720"
                },
                light: {
                    light: "#FFFFFF",
                    DEFAULT: "#FAFAFA",
                    dark: "#F2F2F2"
                },
                dark: {
                    light: "#3A3A3A",
                    DEFAULT: "#282828",
                    dark: "#0F0F0F"
                }
            }
        }
    },

    plugins: [forms, require("flowbite/plugin")]
};
