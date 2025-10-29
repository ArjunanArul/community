<template>
  <div class="glass-page">
    <Navbar />
<AnnouncementBanner
  message="🚀 KPH founder's PerfAgents acquired by Testing Mavens in key deal"
  type="success"
  cta="Read More"
  ctaLink="https://blog.kph.club/big-news-from-the-kph-community-testing-mavens-acquires-perfagents"
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

// Setup scroll animations
const { observeElements } = useScrollAnimation()

onMounted(() => {
  // Observe all elements with fade-in classes
  observeElements('.fade-in-scroll')
  observeElements('.fade-in-left')
  observeElements('.fade-in-right')
  observeElements('.fade-in-scale')
})

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
    { rel: 'shortcut icon', href: '/favicon.ico?v=4' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png?v=4' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png?v=4' }
  ]
})
</script>

<style scoped>
/* Glass morphism effect for index.vue page only */
.glass-page {
  /* Keep original white background with subtle gradient */
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

/* Override component styles for glass effect */
.glass-page :deep(.bg-white) {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.1);
}

.glass-page :deep(.bg-gray-50) {
  background: rgba(248, 250, 252, 0.6) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.glass-page :deep(.bg-gray-100) {
  background: rgba(241, 245, 249, 0.7) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* Glass effect for colored boxes */
.glass-page :deep(.bg-blue-100) {
  background: rgba(59, 130, 246, 0.2) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 4px 16px 0 rgba(59, 130, 246, 0.1);
}

.glass-page :deep(.bg-green-100) {
  background: rgba(251, 146, 60, 0.2) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(251, 146, 60, 0.3);
  box-shadow: 0 4px 16px 0 rgba(251, 146, 60, 0.1);
}

.glass-page :deep(.bg-green-100) {
  background: rgba(245, 158, 11, 0.2) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(245, 158, 11, 0.3);
  box-shadow: 0 4px 16px 0 rgba(245, 158, 11, 0.1);
}

.glass-page :deep(.bg-slate-100) {
  background: rgba(148, 163, 184, 0.2) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 4px 16px 0 rgba(148, 163, 184, 0.1);
}

.glass-page :deep(.bg-sky-100) {
  background: rgba(14, 165, 233, 0.2) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(14, 165, 233, 0.3);
  box-shadow: 0 4px 16px 0 rgba(14, 165, 233, 0.1);
}

/* Glass effect for black buttons */
.glass-page :deep(.bg-black) {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.glass-page :deep(.hover\\:bg-gray-900:hover) {
  background: rgba(0, 0, 0, 0.9) !important;
  backdrop-filter: blur(20px);
}

/* Glass effect for card containers */
.glass-page :deep(.rounded-xl) {
  border-radius: 16px;
}

.glass-page :deep(.rounded-lg) {
  border-radius: 12px;
}

/* Enhanced glass effect for main content areas */
.glass-page :deep(section) {
  background: rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

/* Glass effect for announcement banner */
.glass-page :deep(.announcement-pill) {
  background: rgba(255, 255, 255, 0.6) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.1);
}

/* Glass effect for success banner */
.glass-page :deep(.announcement-banner--success) {
  background: rgba(59, 130, 246, 0.15) !important;
  border-color: rgba(59, 130, 246, 0.3) !important;
  backdrop-filter: blur(15px);
}

/* Glass effect for logo scroll section */
.glass-page :deep(.bg-gradient-to-r),
.glass-page :deep(.bg-gradient-to-l) {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.6), transparent) !important;
}

.glass-page :deep(.bg-gradient-to-l) {
  background: linear-gradient(to left, rgba(255, 255, 255, 0.6), transparent) !important;
}

/* Glass effect for image containers */
.glass-page :deep(.border) {
  border: 1px solid rgba(59, 130, 246, 0.2) !important;
}

/* Glass effect for shadow */
.glass-page :deep(.shadow-sm) {
  box-shadow: 0 4px 16px 0 rgba(59, 130, 246, 0.1) !important;
}

/* Glass effect for hover states */
.glass-page :deep(.hover\\:shadow-sm:hover) {
  box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.2) !important;
}

/* Ensure text remains readable on white background */
.glass-page :deep(.text-gray-900) {
  color: rgba(15, 23, 42, 0.9) !important;
}

.glass-page :deep(.text-gray-600) {
  color: rgba(71, 85, 105, 0.8) !important;
}

.glass-page :deep(.text-gray-500) {
  color: rgba(100, 116, 139, 0.7) !important;
}

/* Glass effect for specific colored text - maintain original colors */
.glass-page :deep(.text-blue-600) {
  color: rgba(37, 99, 235, 0.9) !important;
}

.glass-page :deep(.text-green-600) {
  color: rgba(234, 88, 12, 0.9) !important;
}

.glass-page :deep(.text-green-600) {
  color: rgba(217, 119, 6, 0.9) !important;
}

.glass-page :deep(.text-sky-600) {
  color: rgba(2, 132, 199, 0.9) !important;
}

.glass-page :deep(.text-slate-600) {
  color: rgba(71, 85, 105, 0.9) !important;
}
</style>
