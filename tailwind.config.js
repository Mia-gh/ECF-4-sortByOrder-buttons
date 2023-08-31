import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    safelist: [
        { pattern: /bg-(gray|yellow|green)-(50)/ },
        { pattern: /text-(gray|yellow|green)-(700)/ },
        { pattern: /ring-(gray|yellow|green)-(600\/20)/ },
        { pattern: /border-(gray|yellow|green)-(400)/ },
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                gray: {
                    '50': '#F9FAFB',
                },
                yellow: {
                    '700': '#B7791F',
                },
                green: {
                    '500': '#48BB78',
                },
            },
        },
    },

    plugins: [forms, typography],
};
