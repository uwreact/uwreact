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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700' }
    ]
  },

  loading: { color: '#e4b429' },

  build: {
    analyze: false,
    vendor: ['element-ui']
  },

  plugins: [
    '~plugins/element-ui'
  ],

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ]
}
