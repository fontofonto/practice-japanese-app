export default {
  // Define the server connection variables for your application inside
  server: {
    host: '0.0.0.0', // default: localhost,
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
      { hid: 'description', name: 'description', content: '' },
      { name: "apple-mobile-web-app-title", content: "日文生字溫習" },
      { name: "application-name", content: "日文生字溫習" },
      { name: "msapplication-TileColor", content: "#ee3636" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=1.0.0" },
      { rel: "apple-touch-icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=1.0.0" },
      { rel: "apple-touch-icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=1.0.0" },
      { rel: "manifest", href: "/site.webmanifest?v=1.0.0" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg?v=1.0.0", color: "#e52828" },
      { rel: "shortcut icon", href: "/favicon.ico?v=1.0.0" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
