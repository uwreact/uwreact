module.exports = {
  head: {
    title: 'UWRi3D',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UWRi3D' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500,700' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/f9245cfd63.js' }
    ]
  },

  loading: { color: '#e4b429' },

  build: {
    analyze: false,
    vendor: ['element-ui']
  },

  plugins: ['~plugins/element-ui'],

  css: ['element-ui/lib/theme-chalk/index.css'],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://localhost:3001/api',
    disableDefaultErrorHandler: true,
    proxyHeaders: false
  }
};
