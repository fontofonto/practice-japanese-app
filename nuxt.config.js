export default {
  // Define the server connection variables for your application inside
  server: {
    host: '0.0.0.0', // default: localhost,
    port: 3456,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '日文生字溫習',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '為了溫習日文生字而製作的 Web App。' },
      { name: "apple-mobile-web-app-title", content: "日文生字溫習" },
      { name: "application-name", content: "日文生字溫習" },
      { name: "msapplication-TileColor", content: "#ee3636" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png?v=1.1.0" },
      { rel: "apple-touch-icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png?v=1.1.0" },
      { rel: "apple-touch-icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png?v=1.1.0" },
      { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg?v=1.1.0", color: "#e52828" },
      { rel: "shortcut icon", href: "/favicon/favicon.ico?v=1.1.0" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico?v=1.1.0' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/material-icons.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/lodash.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],
  content: {
    liveEdit: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'app-icon.png',
    },
    manifest: {
      name: '日文生字溫習',
      short_name: '日文溫習',
      lang: 'zh-HK',
      description: '為了溫習日文生字而製作的 Web App。',
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      useWebmanifestExtension: false,
      nativeUI: true,
    },
    workbox: {
      config: {
        debug: true
      },
      preCaching: [
        "/data/chapter1-5.json",
        "/data/chapter6-10.json",
        "/data/chapter11-15.json",
        "/data/chapter16-19.json",
        "/data/chapter20-23.json",
        "/data/number.json",
        "/data/datetime.json",
        "/data/family.json",
        "/data/verb.json",
        "/data/i-adjective.json",
        "/data/na-adjective.json"
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
