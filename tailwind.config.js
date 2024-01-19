import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // gray: {
                //     // 100: '#E1E1E6',
                //     // 300: '#C4C4CC',
                //     // 400: '#8D8D99',
                //     // 500: '#7C7C8A',
                //     // 600: '#323238',
                //     // 700: '#29292E',
                //     // 800: '#202024',
                //     // 900: '#121214',

                // ZINC
                50: '#fafafa',
                100: '#f4f4f5',
                200: '#e4e4e7',
                300: '#d4d4d8',
                400: '#a1a1aa',
                500: '#71717a',
                600: '#52525b',
                700: '#3f3f46',
                800: '#27272a',
                900: '#18181b',
                950: '#09090b',


                // NEUTRAL
                //     50: '#fafafa',
                //     100: '#f5f5f5',
                //     200: '#e5e5e5',
                //     300: '#d4d4d4',
                //     400: '#a3a3a3',
                //     500: '#737373',
                //     600: '#525252',
                //     700: '#404040',
                //     800: '#262626',
                //     900: '#171717',
                //     950: '#0a0a0a',
                // },
            },
        },
    },

    plugins: [forms],
};
