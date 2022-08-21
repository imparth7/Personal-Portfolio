/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '3rem',
                lg: '4rem',
            }
        },
        extend: {
            colors: {
                primary: {
                    // DEFAULT: '#00ADB5',
                    DEFAULT: '#31558b',
                    black: '#111111',
                    // gray: '#393E46',
                    gray: '#282b2e',
                    white: '#eeeeee',
                }
            }
        },
    },
    plugins: [],
}
