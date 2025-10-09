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
                primary: {
                    light: "#66A7D9",
                    DEFAULT: "#2C72AC",
                    dark: "#005A92"
                },
                secondary: {
                    light: "#FF5B91",
                    DEFAULT: "#E72064",
                    dark: "#B21348"
                },
                tertiary: {
                    light: "#A89FB0",
                    DEFAULT: "#70677E",
                    dark: "#4B4452"
                },
                success: {
                    light: "#6EE36A",
                    DEFAULT: "#29B432",
                    dark: "#138828"
                },
                warning: {
                    light: "#FFF58A",
                    DEFAULT: "#FFED4A",
                    dark: "#E6C300"
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
