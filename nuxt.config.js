
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "libs/morris-js/morris.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      },
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      // }
    ],
    script: [
    
      { src: "js/vendor.min.js" },
      { src: "js/vendor.js" },
      { src: "js/scrolling-nav.js" },
      { src: "js/jquery.nav.js" },
      { src: "libs/jquery-knob/jquery.knob.min.js" },
      { src: "libs/jquery-knob/jquery.knob.min.js" },
      // { src: "libs/morris-js/morris.min.js" },
      // { src: "libs/raphael/raphael.min.js" },
      // { src: "js/pages/dashboard.init.js" },
      { src: "js/app.min.js" },
      { src: "js/main.js" },
      { src: "js/wow.js" },
      { src: "https://code.jquery.com/jquery-3.4.1.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      },
      {
        src: "https://unpkg.com/element-ui/lib/index.js"
      }
  ],
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/static/css/bootstrap.min.css",
    // "@/static/css/icons.min.css",
    // "@/static/css/app.min.css",
    // "@/static/css/owl.carousel.min.css",
    // "@/static/css/owl.theme.css",
    "@/static/css/magnific-popup.css",
    "@/static/css/nivo-lightbox.css",
    // "@/static/css/animate.css",
    "@/static/css/main.css",
    "@/static/css/responsive.css",
    // "@/assets/fonts/line-icons.css",
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: "~/static/libs/morris-js/morris.min.js", ssr: false },
    { src: "~/plugins/element.js", ssr: false },
    { src: "~/plugins/sweetalert.js", ssr: false },
    { src: "~plugins/axios.js", ssr: false },
    { src: "~plugins/animate.js", ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@neneos/nuxt-animate.css'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "https://staging-api.thespottrapp.com/"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3500
  }
}


