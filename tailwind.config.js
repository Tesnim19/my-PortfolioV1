const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
        'Roboto': ['sans-serif'],
        'Grotesk': ['sans-serif'],
        'mono': ["SF Mono","Fira Code","Fira Mono","Roboto Mono",'monospace'],
        "sans" : ['Calibre','Inter',"San Francisco","SF Pro Text",'-apple-system','system-ui','sans-serif']
        
        },
        fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
          },
        extend: {
            backdropBlur: {
                'md': 'blur(20px)',
              },
            colors: {
                //add your own color
                //https://tailwindcss.com/docs/customizing-colors
            },
            container: {
                center: true,
            },
            backgroundImage: {
                'grayscale' :"linear-gradient(45deg, #243949 10%, #517fa4 100%)",
                'bluescale': "linear-gradient(45.4deg,  rgba(7,7,9,1) 16.5%, rgba(27,24,113,1) 130.2% )"
            }
        },
    },
    variants: {
        extend: {
            backdropBlur: ['responsive'],
        },
    },
    plugins: [],
}