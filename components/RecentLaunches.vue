<template>
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-block bg-orange-100 px-4 py-2 rounded-lg mb-4">
          <h2 class="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">
            Recent Launches
          </h2>
        </div>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Discover the latest products launched by Kerala's makers.
        </p>
      </div>

      <!-- Launches Grid -->
      <div v-if="loading" class="text-center py-8 text-gray-400">Loading recent launches...</div>
      <div v-else-if="error" class="text-center py-8 text-red-500">Failed to load launches. Please try again later.</div>
      <div v-else>
        <div v-if="launches.length === 0" class="text-center py-8 text-gray-400">No launches found.</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="(launch, idx) in launches" :key="idx"
            class="relative group bg-white rounded-xl border p-5 transition-all duration-300 opacity-0 animate-slide-in"
            :style="`animation-delay: ${idx * 120}ms`"
          >
            <div class="flex flex-col h-full">
              <div class="flex gap-2 mb-3">
                <div class="bg-orange-100 px-2.5 py-1 rounded-md">
                  <span class="text-sm font-medium text-orange-700 flex items-center gap-1">
                    <CalendarDays class="inline-block h-4 w-4 mr-1" />
                    {{ formatDate(launch['Date']) }}
                  </span>
                </div>
                <div class="bg-emerald-100 px-2.5 py-1 rounded-md">
                  <span class="text-sm font-medium text-emerald-700 flex items-center gap-1">
                    <User class="inline-block h-4 w-4 mr-1" />
                    {{ launch['Maker'] }}
                  </span>
                </div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-orange-700 mb-2 leading-tight transition-colors duration-200">
                {{ launch['Product Name'] }}
              </h3>
              <p class="text-sm text-gray-600 mb-4 flex-1">{{ launch['Product Description'] }}</p>
              <div class="mt-auto flex items-center justify-end">
                <a v-if="launch['Product Link']" 
                  :href="ensureHttps(launch['Product Link'])" 
                  target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-orange-600 hover:text-orange-800 font-medium text-sm group transition-colors duration-200"
                >
                  <span>View</span>
                  <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            <!-- Hover line effect -->
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            <!-- Icon micro interaction -->
            <div class="absolute top-5 right-5 transform-gpu group-hover:rotate-12 transition-transform duration-300">
              <Hammer class="h-5 w-5 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-12">
        <div class="inline-block bg-orange-50 p-1 rounded-2xl">
          <a 
            href="https://launches.kph.club" 
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-base font-semibold text-white hover:bg-gray-900 transition-all duration-300"
          >
            <span>View All Launches</span>
            <ArrowUpRight class="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Hammer, CalendarDays, User, ArrowUpRight } from 'lucide-vue-next'

const launches = ref([])
const loading = ref(true)
const error = ref(false)

const apiUrl = 'https://kph-mafia.microcompany.workers.dev/api/products';

function formatDate(utcDate) {
  if (!utcDate) return 'Today';
  try {
    const date = new Date(utcDate);
    if (isNaN(date.getTime())) return 'Today';
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    return 'Today';
  }
}

function ensureHttps(url) {
  if (!url) return '#';
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
}

onMounted(async () => {
  try {
    const res = await fetch(apiUrl)
    const data = await res.json()
    if (data.result === 'success' && Array.isArray(data.data)) {
      launches.value = data.data.slice(0, 3)
      loading.value = false
    } else {
      error.value = true
      loading.value = false
    }
  } catch (e) {
    error.value = true
    loading.value = false
  }
})
</script>

<style scoped>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out forwards;
}
</style>
