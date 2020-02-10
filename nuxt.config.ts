export default {
  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-135058128-1'
      }
    ]
  ],

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
  css: ['~/assets/styles/main.scss'],
  modules: ['@bazzite/nuxt-netlify', '@nuxtjs/style-resources', 'nuxt-fontawesome'],

  styleResources: {
    scss: ['assets/styles/variables.scss']
  },

  fontawesome: {
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
  },

  netlify: {
    redirects: [
      {
        from: '/*',
        to: '/',
        status: 404
      },
      {
        from: 'http://gardev.com/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'https://gardev.com/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'http://www.gardev.com/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'https://www.gardev.com/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'http://georgi.dev/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'https://georgi.dev/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'http://www.georgi.dev/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      },
      {
        from: 'https://www.georgi.dev/*',
        to: 'https://gar.dev/:splat',
        status: 301,
        force: true
      }
    ]
  }
};
