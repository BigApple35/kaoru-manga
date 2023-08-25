/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs' : {'max' : '639px'},

      'sm': {'min': '640px', 'max': '767.9px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023.9px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279.9px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535.9px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      content: {
        'check': 'url("./public/icons8-done.svg")',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'discord' : {
          'blue' : '#7289da',
          'gray' : {
            100 : '#424549',
            200 : '#36393e',
            300 : '#282b30',
            400 : '#1e2124'
          }
        },
        'prim' : {
          'black' : '#212121',
          'gray' : {
            100 : '#e6e6e6',
            200 :'#4d4545',
            300 : "#323232",
          },
          'teal' : "#0D7377",
          'blue' : '#14FFEC'
        },
        "light" : {
          "text" : {
              100 : '#0d030a',
          },
          "bg" : {
              100 : '#fefbfd'
          },
          "prim" : {
              100 : '#fcb982',
              200 : '#fb923c',
              300 : "#fa7305",
              400 : "#e16805",
              500 : "#af5104",
              600 : "#642e02"
          },
          "second" : {
              100 : "#d1f5ef",
              200 : "#a7c4bf",
              300 : "#697b78",
              400 : "#3f4948"
          },
          "accent" : {
              100 : "#1c5110"
          }
        }
      },
      animation : {
        'slide' : "enter .5s ease-in-out 1",
        "loader" : "loader 1s ease infinite",
        "loader-inner" : "loader-inner 1s ease infinite "
      },
      keyframes : {
          "enter" : {
            '0%' : {
              "opacity": 1,
              "transform": "translateX(100%)"
            },

            '100%' :{
              "opacity": 1,
              "transform": "translateX(0)"
            }
          },
          
          'loader' : {
            '0%' : {
              "transform": "rotate(0deg);"
            },
            
            '25%' : {
              "transform": "rotate(90eg)"
            },
            
            '50%' : {
              "transform": "rotate(90deg)"
            },
            
            '75%' : {
              "transform": "rotate(180deg)"
            },
            
            "100%" : {
              "transform": "rotate(180deg)"
            }
          },

          "loader-inner" : {
            "0%" : {
              "height" : "0%"
            },
            
            "25%" : {
              "height" : "0%"
            },
            
            "50%" : {
              "height" : "100%"
            },
            
            "75%" : {
              "height" : "100%"
            },
            
            "100%" : {
              "height" : "0%"
            }
          },


      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("@xpd/tailwind-3dtransforms")
  ],
}
