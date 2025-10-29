<template>
  <section class="py-12 bg-gray-50 border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-block glass-blue px-3 py-1.5 rounded-glass mb-3">
          <h2 class="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">Who We Look For</h2>
        </div>
        <p class="mt-2 text-base leading-7 text-gray-600">
          We support founders who have moved beyond ideas to building real products
        </p>
      </div>
      
      <div class="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <!-- Perfect For You Card -->
        <div class="bg-white rounded-xl p-6 border transition-all duration-300 opacity-0 animate-slide-up" style="animation-delay: 100ms">
          <div class="flex flex-col items-start gap-3">
            <div class="flex items-center gap-2">
              <div class="flex-shrink-0 glass-blue-sm p-2 rounded-glass-sm">
                <Check class="h-6 w-6 text-blue-600" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Perfect For You If:</h3>
            </div>
            <ul class="w-full space-y-2">
              <li v-for="(item, index) in perfectForItems" :key="index" class="flex items-center gap-2 p-2 rounded-lg">
                <CircleDot class="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Not For You Card -->
        <div class="bg-white rounded-xl p-6 border transition-all duration-300 opacity-0 animate-slide-up" style="animation-delay: 200ms">
          <div class="flex flex-col items-start gap-3">
            <div class="flex items-center gap-2">
              <div class="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <XCircle class="h-6 w-6 text-green-600" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">Not For You If:</h3>
            </div>
            <ul class="w-full space-y-2">
              <li v-for="(item, index) in notForItems" :key="index" class="flex items-center gap-2 p-2 rounded-lg">
                <XCircle class="h-4 w-4 text-green-500 flex-shrink-0" />
                <span class="text-sm text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check, XCircle, CircleDot } from 'lucide-vue-next'

const perfectForItems = [
  "You're a maker/founder with a live product",
  "You have early users/customers",
  "Need help with GTM, product scaling, or operations"
]

const notForItems = [
  "You're still at the idea stage without a built product",
  "You haven't validated your idea with potential users",
  "You're looking for pure ideation or conceptual help"
]
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