<template>
  <!-- Reduce section padding -->
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-block bg-blue-100 px-4 py-2 rounded-lg mb-4">
          <h2 class="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            Learn from the best
          </h2>
        </div>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Insights, Stories, and Lessons from Kerala's Top Innovators.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        <p class="mt-4 text-gray-600">Loading latest podcasts...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-green-600 mb-4">Unable to load podcasts: {{ error }}</p>
        <button @click="fetchPodcasts" class="text-blue-600 hover:text-blue-800 underline">
          Try again
        </button>
      </div>

      <!-- Podcast Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="podcast in podcasts" :key="podcast.id" 
          class="group opacity-0 animate-slide-up"
          :style="`animation-delay: ${podcast.id * 100}ms`"
        >
          <a :href="`https://www.youtube.com/watch?v=${podcast.videoId}`" target="_blank" 
            class="block transform-gpu hover:-translate-y-1 transition-all duration-300"
          >
            <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-green-200 transition-colors">
              <div class="relative">
                <img 
                  :src="`https://img.youtube.com/vi/${podcast.videoId}/maxresdefault.jpg`"
                  :alt="podcast.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <!-- Play button overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-black/75 p-4 rounded-full transform-gpu scale-75 group-hover:scale-100 transition-transform">
                    <Play class="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 border rounded-lg">
              <div class="flex gap-2 mb-3">
                <div class="bg-green-200 px-2.5 py-1 rounded-md">
                  <span class="text-sm font-medium text-green-700">YouTube</span>
                </div>
                <div class="bg-green-200 px-2.5 py-1 rounded-md">
                  <span class="text-sm font-medium text-green-700">Podcast</span>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-gray-700">{{ podcast.title }}</h3>
              <p class="mt-2 text-sm text-gray-600">{{ podcast.guest }}</p>
            </div>
          </a>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <div class="inline-block bg-green-50 p-1 rounded-2xl">
          <a 
            href="https://www.youtube.com/@FelixJosemonOfficial/videos" 
            target="_blank"
            class="group inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-base font-semibold text-white hover:bg-gray-900 transition-all duration-300"
          >
            <Youtube class="h-5 w-5" />
            <span>Watch More Podcasts</span>
            <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Youtube, Play, ArrowUpRight } from 'lucide-vue-next'

// Use the YouTube podcasts composable
const { podcasts, loading, error, fetchPodcasts } = useYouTubePodcasts()

// Fetch podcasts on component mount
onMounted(() => {
  fetchPodcasts()
})
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
</style> 