<template>
  <div>
    <Navbar />
<AnnouncementBanner
  message="🚀 KPH founder’s PerfAgents acquired by Testing Mavens in key deal"
  type="success"
  cta="Read More"
  ctaLink="https://finance.yahoo.com/news/testing-mavens-acquires-perfagents-perfagents-160000503.html"
/>    <Hero />
    <LogoScroll />
    <FoundingStory />
    <RecentLaunches />
    <Podcasts />
    <Events />
    <Wiki />
    <Programs />
    <Footer />
  </div>
</template>

<script setup>
import RecentLaunches from '~/components/RecentLaunches.vue'
import AnnouncementBanner from '~/components/AnnouncementBanner.vue'
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
