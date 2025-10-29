// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    'nuxt-umami',
  ],
  umami: {
    id: 'ac831b9d-bc42-4c1c-b187-5a78c30a1cf3',
    host: 'https://cloud.umami.is',
    autoTrack: true,
  },
  site: {
    url: 'https://kph.club'
  },
  sitemap: {
    urls: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        url: '/accelerator',
        changefreq: 'weekly',
        priority: 0.9
      },
      {
        url: '/meetups',
        changefreq: 'weekly',
        priority: 0.8
      }
    ],
    exclude: [
      '/404'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 0.5,
      lastmod: new Date().toISOString()
    }
  },
  app: {
    head: {
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico?v=4' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png?v=4' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png?v=4' }
      ]
    }
  },
  tailwindcss: {
    exposeConfig: false,
    viewer: false,
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
            serif: ['Playfair Display', 'Times New Roman', 'Times', 'serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Source Code Pro', 'monospace'],
            display: ['Playfair Display', 'Times New Roman', 'Times', 'serif'],
            body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
          },
          colors: {
            primary: {
              50: '#eef9ff',
              100: '#dcf3ff',
              200: '#b3e9ff',
              300: '#75dbff',
              400: '#2cc9ff',
              500: '#00b1f0',
              600: '#008dcd',
              700: '#0071a6',
              800: '#065f89',
              900: '#0b4f72',
              950: '#083347',
            },
            secondary: {
              50: '#fdf4ff',
              100: '#fae8ff',
              200: '#f5d0fe',
              300: '#f0abfc',
              400: '#e879f9',
              500: '#d946ef',
              600: '#c026d3',
              700: '#a21caf',
              800: '#86198f',
              900: '#701a75',
              950: '#4a044e',
            },
            accent: {
              blue: '#00B1F0',
              purple: '#10B981',
              pink: '#10B981',
              orange: '#10B981',
              green: '#00C853',
              yellow: '#10B981',
            }
          },
          keyframes: {
            fadeIn: {
              from: {
                opacity: '0',
                transform: 'translateY(20px)'
              },
              to: {
                opacity: '1',
                transform: 'translateY(0)'
              }
            }
          },
          animation: {
            'fade-in': 'fadeIn 0.6s ease-out forwards'
          }
        },
      },
    }
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: 'Playfair Display',
        weights: [400, 500, 600, 700, 800, 900],
      },
      {
        name: 'JetBrains Mono',
        weights: [100, 200, 300, 400, 500, 600, 700, 800],
      }
    ]
  }
})