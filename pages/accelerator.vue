<template>
    <div>
      <Navbar />
      <Accelerator />
      <Footer />
    </div>
  </template>
  
  <script setup>
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    title: 'KPH Accelerator - Empowering Kerala\'s Startups',
    meta: [
      { name: 'description', content: 'KPH Accelerator program helps early-stage startups from Kerala with mentorship, resources, and investor connections.' },
      { property: 'og:title', content: 'KPH Accelerator - Empowering Kerala\'s Startups' },
      { property: 'og:description', content: 'KPH Accelerator program helps early-stage startups from Kerala with mentorship, resources, and investor connections.' },
      { property: 'og:url', content: 'https://kph.club/accelerator' },
      { property: 'og:image', content: '/accelerator-og.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'KPH Accelerator - Empowering Kerala\'s Startups' },
      { name: 'twitter:description', content: 'KPH Accelerator program helps early-stage startups from Kerala with mentorship, resources, and investor connections.' },
      { name: 'twitter:image', content: '/accelerator-og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  })
  </script>
  