export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Georgi Gardev',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Georgi Gardev' },
      { name: 'owner', content: 'Georgi Gardev' },
      { name: 'description', content: 'Personal Homepage of Georgi Gardev' },
      { name: 'copyright', content: 'Georgi Gardev 2014' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '2 days' },
      { name: 'GOOGLEBOT', content: 'index, follow, all' },
      { name: 'audience', content: 'all' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [{ lang: 'scss', src: '@/assets/styles/main.scss' }],
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  plugins: [{ src: '~/plugins/ga.js', ssr: false }]
};
