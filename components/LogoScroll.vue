<template>
  <section class="py-20 bg-white border-b overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-block glass-blue px-4 py-2 rounded-glass mb-4 fade-in-scroll">
          <h2 class="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            Made in Kerala
          </h2>
        </div>
        <p class="mt-4 text-lg leading-8 text-gray-600 fade-in-scroll fade-in-delay-200">
          Innovative tech products and startups that originated from God's Own Country.
        </p>
      </div>

      <!-- Logo Scroll -->
      <div class="relative">
        <div class="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div class="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <!-- Logo grid with hover effects - Centered -->
        <div class="flex justify-center overflow-hidden group/scroll">
          <div class="flex items-center animate-scroll group-hover/scroll:pause">
            <div v-for="logo in logos" :key="logo.id" 
              class="flex-none w-32 mx-8 group/logo"
            >
              <div class="transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <img 
                  :src="logo.image" 
                  :alt="logo.name" 
                  class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                >
                <div class="mt-2 text-sm text-center text-gray-600 opacity-0 group-hover/logo:opacity-100 transition-opacity">
                  {{ logo.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- Duplicate Set for Seamless Loop -->
          <div class="flex items-center animate-scroll group-hover/scroll:pause">
            <div v-for="logo in logos" :key="`dup-${logo.id}`" class="flex-none w-32 mx-8 group/logo">
              <div class="transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <img 
                  :src="logo.image" 
                  :alt="logo.name" 
                  class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                >
                <div class="mt-2 text-sm text-center text-gray-600 opacity-0 group-hover/logo:opacity-100 transition-opacity">
                  {{ logo.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  {
    id: 1,
    name: "ToolJet",
    image: "/logos/tooljet.avif"
  },
  {
    id: 2,
    name: "Chatwoot",
    image: "/logos/chatwoot.avif"
  },
  {
    id: 3,
    name: "Hoppscotch",
    image: "/logos/hoppscotch.avif"
  },
  {
    id: 4,
    name: "Appmaker",
    image: "/logos/appmaker.avif"
  },
  {
    id: 5,
    name: "Engagespot",
    image: "/logos/engagespot.avif"
  },
  {
    id: 6,
    name: "BuyMeACoffee",
    image: "/logos/buymeacoffee.avif"
  },
  {
    id: 7,
    name: "Docket",
    image: "/logos/docket.png"
  },
  {
    id: 8,
    name: "Store Link",
    image: "/logos/store-link.png"
  },
    
]
</script>

<style scoped>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50%)); /* Change to -50% to ensure smooth looping */
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.pause {
  animation-play-state: paused;
}
</style> 