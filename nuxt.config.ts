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
            sans: ['Nunito Sans', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
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
              purple: '#9C27B0',
              pink: '#FF1493',
              orange: '#FF6B2B',
              green: '#00C853',
              yellow: '#FFD600',
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
        name: 'Nunito Sans',
        weights: [400, 500, 600, 700],
      },
      {
        name: 'Merriweather',
        weights: [400, 700],
      }
    ]
  }
})
