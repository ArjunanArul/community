<template>
    <div>
      <Navbar />
      <EventTimeline />
      <Footer />
    </div>
  </template>
  
  <script setup>
  useHead({
    htmlAttrs: {
    lang: 'en'
    },
    title: 'KPH Meetups - Product Community Events in Kerala',
    meta: [
      { name: 'description', content: 'Join KPH\'s product community meetups and events. Network with founders, builders, and investors from Kerala\'s tech ecosystem.' },
      { property: 'og:title', content: 'KPH Meetups - Product Community Events in Kerala' },
      { property: 'og:description', content: 'Join KPH\'s product community meetups and events. Network with founders, builders, and investors from Kerala\'s tech ecosystem.' },
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://kph.club/meetups' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'KPH Meetups - Product Community Events in Kerala' },
      { name: 'twitter:description', content: 'Join KPH\'s product community meetups and events. Network with founders, builders, and investors from Kerala\'s tech ecosystem.' },
      { name: 'twitter:image', content: '/og-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  })
  </script>
  