// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            height: {
                "fill-available": "-webkit-fill-available"
            },
            minHeight: {
                "fill-available": "-webkit-fill-available"
            },
            maxHeight: {
                "fill-available": "-webkit-fill-available"
            }
        },
        fontFamily: {
            japanese: ['Noto Serif JP', 'serif']
        },
    },
})