<template>
  <!-- Clean white for hero section -->
  <div class="bg-white py-16 sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Animated title with staggered fade-in -->
        <h1 
          class="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl opacity-0 animate-fade-in"
        >
          Every Product happening in 
          <span class="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg inline-block transform -rotate-1">Kerala</span> 🌴
        </h1>
        <!-- Animated subtitle with delay -->
        <p 
          class="mt-8 text-xl leading-8 text-gray-600 opacity-0 animate-fade-in animation-delay-200"
        >
          Kerala's brightest minds come together to build the future of internet products, connect with like-minded innovators, and grow together.
        </p>
        <!-- Button with hover effect -->
        <div class="mt-8">
          <a href="http://nas.io/kph" target="_blank" rel="noopener noreferrer" 
            class="group inline-flex items-center gap-3 rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300"
          >
            Request an Invite
            <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        </div>

        <!-- Stats with counter animation -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div v-for="(stat, index) in stats" 
            :key="stat.id" 
            class="flex flex-col items-center p-4 rounded-xl bg-gray-50 opacity-0 animate-fade-in hover:bg-gray-100 transition-all duration-300 cursor-default group"
            :style="`animation-delay: ${400 + (index * 100)}ms`"
          >
            <div class="mb-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
              <component :is="stat.icon" class="h-8 w-8" />
            </div>
            <div class="text-4xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {{ stat.currentValue }}+
            </div>
            <div class="mt-2 text-base text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Users, Building2, UserPlus, ArrowRight } from 'lucide-vue-next'

const stats = ref([
  { id: 1, icon: Users, value: 50, currentValue: 0, label: 'Meetups' },
  { id: 2, icon: Building2, value: 100, currentValue: 0, label: 'Startups' },
  { id: 3, icon: UserPlus, value: 1000, currentValue: 0, label: 'People in the waitlist' }
])

onMounted(() => {
  stats.value.forEach((stat, index) => {
    setTimeout(() => {
      const duration = 1000 // 1 second (reduced from 2 seconds)
      const steps = 30 // reduced steps for faster animation
      const increment = stat.value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          stat.currentValue = stat.value
          clearInterval(timer)
        } else {
          stat.currentValue = Math.floor(current)
        }
      }, duration / steps)
    }, 500 + (index * 100))
  })
})
</script>

<style scoped>
/* Add smooth spring animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}
</style> 