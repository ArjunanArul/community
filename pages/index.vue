<template>
  <div>
    <Navbar />
    <Hero />
    <LogoScroll />
    <FoundingStory />
    <Podcasts />
    <Events />
    <Wiki />
    <Programs />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'KPH - Building Kerala\'s Product Ecosystem',
  meta: [
    { name: 'description', content: 'KPH is building Kerala\'s largest product ecosystem through community, accelerator programs, and investor networks.' },
    { property: 'og:title', content: 'KPH - Building Kerala\'s Product Ecosystem' },
    { property: 'og:description', content: 'KPH is building Kerala\'s largest product ecosystem through community, accelerator programs, and investor networks.' },
    { property: 'og:url', content: 'https://kph.club' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'KPH - Building Kerala\'s Product Ecosystem' },
    { name: 'twitter:description', content: 'KPH is building Kerala\'s largest product ecosystem through community, accelerator programs, and investor networks.' },
    { name: 'twitter:image', content: '/og-image.png' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})
</script>
