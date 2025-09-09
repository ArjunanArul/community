<template>
  <Navbar/>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- HERO SECTION: Styled like components/Hero.vue -->
    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Animated title with highlighted, tilted text -->
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl opacity-0 animate-fade-in">
          KPH Hackathon
          <span class="relative inline-block align-middle ml-2">
            <span class="bg-emerald-100 text-emerald-600 px-2.5 py-1 rounded-lg inline-block font-extrabold shadow-sm animate-fade-in animation-delay-200 tilt-hero whitespace-nowrap">Build and Launch</span>
          </span>
        </h1>
        <!-- Animated subtitle with delay -->
        <p class="mt-6 sm:mt-8 text-base sm:text-xl leading-7 sm:leading-8 text-gray-600 opacity-0 animate-fade-in animation-delay-200">
          Get notified when the KPH Hackathon launches. Build and launch successful products from Kerala! Win funding, GTM support, and prizes.
        </p>
        <!-- JOIN NOW CTA -->
        <div class="mt-6 sm:mt-8 text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBuFNEMLgs5OL8kSIbrzaQoyShcIgHHwV65A0GAS4kLDUdCQ/viewform?usp=send_form">
            JOIN NOW
            <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>

    <!-- WHY KPH HACKATHON (Podcasts.vue style) -->
    <section class="py-8 sm:py-10 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div class="inline-block bg-orange-100 px-3 sm:px-4 py-2 rounded-lg mb-4">
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">
              Why KPH Hackathon?
            </h2>
          </div>
          <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            The mission: Make Kerala the best place to build and launch successful products. We help you go from zero to launch with funding, mentorship, GTM, and your first users. Exciting prizes await!
          </p>
        </div>
        <!-- Card Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div class="group opacity-0 animate-slide-up" style="animation-delay:0ms">
            <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
              <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-emerald-50 flex items-center justify-center">
                <Rocket class="h-12 sm:h-14 w-12 sm:w-14 text-emerald-600" />
              </div>
              <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                  <div class="bg-orange-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-orange-700">Mentorship</span>
                  </div>
                  <div class="bg-emerald-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-emerald-700">Launch</span>
                  </div>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">Build & Launch</h3>
                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Go from idea to product launch. Get hands-on support, mentorship, and resources.</p>
              </div>
            </div>
          </div>
          <div class="group opacity-0 animate-slide-up" style="animation-delay:100ms">
            <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
              <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-emerald-50 flex items-center justify-center">
                <Wallet class="h-12 sm:h-14 w-12 sm:w-14 text-amber-600" />
              </div>
              <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                  <div class="bg-orange-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-orange-700">Funding</span>
                  </div>
                  <div class="bg-emerald-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-emerald-700">GTM</span>
                  </div>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">Funding & GTM</h3>
                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Winners get funding, GTM help, and access to KPH's investor and mentor network.</p>
              </div>
            </div>
          </div>
          <div class="group opacity-0 animate-slide-up" style="animation-delay:200ms">
            <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
              <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-emerald-50 flex items-center justify-center">
                <Gift class="h-12 sm:h-14 w-12 sm:w-14 text-orange-500" />
              </div>
              <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                  <div class="bg-orange-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-orange-700">Prizes</span>
                  </div>
                  <div class="bg-emerald-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-emerald-700">Opportunity</span>
                  </div>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">Exciting Prizes</h3>
                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Win cash prizes, tools, and exclusive opportunities for your product/startup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SPONSOR CTA SECTION (Wiki-inspired) -->
    <section class="py-8 sm:py-10 bg-white border-t mt-12 sm:mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div class="inline-block bg-sky-100 px-3 sm:px-4 py-2 rounded-lg mb-4">
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
              Sponsor the KPH Hackathon
            </h2>
          </div>
          <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Support Kerala's next wave of founders and product builders. Get your brand in front of the most ambitious makers and innovators in the state. Sponsoring gives you unique access to talent, visibility, and impact.
          </p>
        </div>
        <!-- Sponsor Reasons Grid (Wiki style) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          <article class="relative group bg-white rounded-xl border p-4 sm:p-5 hover:shadow-sm transition-all duration-300 opacity-0 animate-slide-in" style="animation-delay: 0ms">
            <div class="flex items-start gap-3 sm:gap-4">
              <div class="flex-shrink-0 mt-1 transform-gpu group-hover:rotate-12 transition-transform duration-300">
                <Rocket class="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600" />
              </div>
              <div class="flex-1">
                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                  <div class="bg-blue-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-blue-700">Talent</span>
                  </div>
                  <div class="bg-amber-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-amber-700">High Impact</span>
                  </div>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">
                  Reach Top Talent
                </h3>
                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                  Connect with Kerala's brightest founders, makers, and early-stage startups. Be the first to discover and support emerging talent.
                </p>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-500"></div>
          </article>
          <article class="relative group bg-white rounded-xl border p-4 sm:p-5 hover:shadow-sm transition-all duration-300 opacity-0 animate-slide-in" style="animation-delay: 300ms">
            <div class="flex items-start gap-3 sm:gap-4">
              <div class="flex-shrink-0 mt-1 transform-gpu group-hover:rotate-12 transition-transform duration-300">
                <Gift class="h-5 sm:h-6 w-5 sm:w-6 text-orange-500" />
              </div>
              <div class="flex-1">
                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                  <div class="bg-blue-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-blue-700">Ecosystem</span>
                  </div>
                  <div class="bg-orange-100 px-2 py-1 sm:px-2.5 rounded-md">
                    <span class="text-xs sm:text-sm font-medium text-orange-700">Impact</span>
                  </div>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">
                  Shape the Ecosystem
                </h3>
                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                  Help shape Kerala's product/startup ecosystem and support the next generation of builders. Your sponsorship creates real, lasting impact.
                </p>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-500"></div>
          </article>
        </div>
        <!-- CTA -->
        <div class="text-center mt-10 sm:mt-12">
          <div class="inline-block bg-emerald-50 p-1 rounded-2xl">
            <button @click="sponsorCTA"
              class="group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
              <Rocket class="h-5 w-5" />
              <span>Sponsor the Hackathon</span>
              <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">Partner with us to power Kerala's innovation journey</p>
        </div>
      </div>
    </section>

    <!-- Floating Sponsor Button -->
    <button @click="sponsorCTA" class="fixed z-40 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 sm:px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 text-sm sm:text-base">
      <Rocket class="h-5 w-5" />
      Support the Hackathon
    </button>
  </div>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, Rocket, Wallet, Gift } from 'lucide-vue-next'

const sponsorCTA = () => {
  window.open('https://api.whatsapp.com/send/?phone=917025437098&text=Hi%2C+I%27d+love+to+sponsor+and+support+the+hackathon', '_blank')
}
</script>

<style scoped>
html, body, #__nuxt, #__layout {
  width: 100vw;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
}

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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.tilt-hero {
  display: inline-block;
  transform: rotate(-2deg);
}
</style>
