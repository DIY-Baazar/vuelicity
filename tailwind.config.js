import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.vue',
    ],

    theme: {
        extend: {
            height: {
                '76': '19rem',
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
            },
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
                heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
                mono: ['SFMono-Regular', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                primary: {
                    light: '#2a6ca2',
                    DEFAULT: '#2C72AC',
                    dark: '#3487cb',
                },
                secondary: {
                    light: '#e71861',
                    DEFAULT: '#E72064',
                    dark: '#e92f70',
                },
                tertiary: {
                    light: '#70677e',
                    DEFAULT: '#70677e',
                    dark: '#70677e',
                },
                success: {
                    light: '#29b432',
                    DEFAULT: '#29b432',
                    dark: '#29b432',
                },
                warning: {
                    light: '#ffed4a',
                    DEFAULT: '#ffed4a',
                    dark: '#ffed4a',
                },
                danger: {
                    light: '#db3a34',
                    DEFAULT: '#db3a34',
                    dark: '#db3a34',
                },
                light: {
                    light: '#FEFEFE',
                    DEFAULT: '#FEFEFE',
                    dark: '#FEFEFE',
                },
                dark: {
                    light: '#282828',
                    DEFAULT: '#282828',
                    dark: '#282828',
                },
            },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin')
    ],
};