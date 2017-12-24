module.exports = {
  head: {
    title: 'UWRi3D | Robot in 3 Days at the University of Waterloo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'We build FIRST robots in 3 days at the University of Waterloo.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,500,700' },
    ],
  },

  loading: { color: '#e4b429' },

  build: {
    vendor: ['element-ui'],
  },

  plugins: [
    { src: '~plugins/element-ui' },
    { src: '~plugins/vuex-persistedstate.js', ssr: false },
  ],

  css: ['element-ui/lib/theme-chalk/index.css'],
};
