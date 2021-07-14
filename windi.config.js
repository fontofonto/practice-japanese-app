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
            japanese: ['ヒラギノ明朝 ProN', 'Hiragino Mincho ProN', '游明朝', '游明朝体', 'YuMincho', 'Yu Mincho', 'ＭＳ 明朝', 'MS Mincho', 'HiraMinProN-W3', 'TakaoEx明朝', 'TakaoExMincho', 'MotoyaLCedar', 'Droid Sans Japanese', 'serif']
        },
    },
})