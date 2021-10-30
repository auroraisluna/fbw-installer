'use strict';

const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    purge: {
        options: { safelist: [...reactComponentsSafeList] },
        content: [
            './src/**/*.html',
            './src/**/*.jsx',
            './src/**/*.tsx',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderRadius: {
                '5px': '5px',
            },
            height: {
                '450px': '450px',
              },
            width: {
                '520px': '520px',
                '700px': '700px',
              },
            colors: {
                navy: {
                    'lightest': '#273347',
                    'lighter': '#222c3d',
                },
                red: {
                    'DEFAULT': '#FC3A3A',
                    'dark': '#F70404',
                    'darker': '#E40303',
                    'darkest': "#D10303",
                    'light': '#FC4E4E',
                },
                pink: {
                    'DEFAULT': '#BC05E1',
                    'light': '#C31EE4'
                },
                orange: {
                    'DEFAULT': '#FA8C16',
                    'light': '#FB982D',
                },
                green: {
                    'DEFAULT': '#00B853',
                    'light': '#1ABF64',
                },
                mutedGreen: {
                    'DEFAULT': '#2E995E',
                    'light': '#43A36E'
                },
                disabled: {
                    'DEFAULT': '#2E3236',
                }
            },
            boxShadow: {
                'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            },
            animation: {
                'spin-reverse': 'spin 1s linear infinite reverse',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['first']
        }
    },
    plugins: [require('@flybywiresim/tailwind-config')],
};
