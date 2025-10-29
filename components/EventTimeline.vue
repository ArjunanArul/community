<template>
  <section class="py-12 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12 opacity-0 animate-fade-in">
        <div class="inline-block bg-green-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg mb-4">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            Meetups Timeline
          </h2>
        </div>
        <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Join us at our upcoming events and be part of Kerala's growing tech community
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-green-200 origin-top animate-grow-down"></div>

        <!-- Timeline Items -->
        <div class="space-y-8 sm:space-y-12">
          <div v-for="event in paginatedEvents" 
            :key="event.id"
            class="relative pl-8 sm:pl-12 group opacity-0 animate-slide-in"
            :style="`animation-delay: ${400 + (event.id * 150)}ms`"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-green-200 bg-white group-hover:border-green-400 transition-colors duration-300 animate-scale-in" 
              :style="`animation-delay: ${500 + (event.id * 150)}ms`">
            </div>
            
            <!-- Event Card -->
            <div class="bg-white rounded-xl border p-4 sm:p-6 hover:shadow-sm transition-all duration-300">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-3">
                <div class="bg-green-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                  <time class="text-xs sm:text-sm font-medium text-green-700">{{ event.date }}</time>
                </div>
                <div class="glass-blue-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-glass-sm">
                  <span class="text-xs sm:text-sm font-medium text-blue-700">{{ event.location }}</span>
                </div>
                <div class="bg-green-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                  <span class="text-xs sm:text-sm font-medium text-green-700">{{ event.theme }}</span>
                </div>
              </div>

              <!-- Event Title -->
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ event.name }}</h3>

              <!-- Description -->
              <p class="mt-2 text-xs sm:text-sm text-gray-600">{{ event.description }}</p>

              <!-- Action Button -->
              <div class="mt-4">
                <a 
                  v-if="event.registrationUrl"
                  :href="event.registrationUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 sm:gap-2 text-green-600 text-xs sm:text-sm font-medium group-hover:text-green-700"
                >
                  Register Now
                  <ArrowRight class="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <span v-else class="text-xs sm:text-sm text-gray-500">Registration closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-8 sm:mt-12 flex justify-center gap-2 opacity-0 animate-fade-in" style="animation-delay: 800ms">
          <button 
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-md bg-green-100 text-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button 
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-md bg-green-100 text-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const currentPage = ref(1)
const eventsPerPage = 5

const events = [
  {
    "id": 1,
    "name": "KPH VC Dinner",
    "theme": "Venture Capital & Startups",
    "date": "February 2025",
    "location": "Kochi",
    "description": "An exclusive dinner for venture capitalists and startup founders to connect and discuss the future of investments.",
    "registrationUrl": null
  },
  {
    "id": 2,
    "name": "KPH Community Meetup",
    "theme": "Startup Community",
    "date": "February 2025",
    "location": "Bangalore",
    "description": "A gathering of Kerala's startup community in Bangalore to network, share insights, and collaborate.",
    "registrationUrl": null
  },
  {
    "id": 3,
    "name": "KPH Community Meetup",
    "theme": "Startup Community",
    "date": "December 2024",
    "location": "Kozhikode",
    "description": "Meet and network with entrepreneurs, builders, and investors from Kerala's startup ecosystem in Kozhikode.",
    "registrationUrl": null
  },
  {
    "id": 4,
    "name": "KPH at Huddle 2024",
    "theme": "Startup & Innovation",
    "date": "November 2024",
    "location": "Trivandrum",
    "description": "Join KPH at Huddle 2024, Kerala's biggest startup event, featuring pitches, networking, and insights from industry leaders.",
    "registrationUrl": null
  },
  {
    "id": 5,
    "name": "KPH Community Meetup",
    "theme": "Startup Community",
    "date": "October 2024",
    "location": "Kochi",
    "description": "A gathering of Kerala's startup community in Kochi to network, share insights, and collaborate.",
    "registrationUrl": null
  },
  {
    "id": 6,
    "name": "KPH Ecommerce Meetup",
    "theme": "Ecommerce",
    "date": "May 2024",
    "location": "Toronto",
    "description": "A gathering of ecommerce community in Toronto to network, share insights, and collaborate.",
    "registrationUrl": null
  },
  {
    "id": 7,
    "name": "KPH Community Meetup",
    "theme": "Startup Community",
    "date": "May 2024",
    "location": "San Francisco",
    "description": "A gathering of startup community in San Francisco to network, share insights, and collaborate.",
    "registrationUrl": null
  },
  {
    "id": 8,
    "name": "KPH Community Meetup",
    "theme": "Startup Community",
    "date": "February 2024",
    "location": "Kochi",
    "description": "A gathering of startup community in Kochi to network, share insights, and collaborate.",
    "registrationUrl": null
  }
]


// Add sorting logic
const sortedEvents = computed(() => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB - dateA  // Sort in descending order (newest first)
  })
})

const totalPages = computed(() => Math.ceil(sortedEvents.value.length / eventsPerPage))

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * eventsPerPage
  const end = start + eventsPerPage
  return sortedEvents.value.slice(start, end)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes growDown {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-slide-in {
  animation: slideIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-grow-down {
  animation: growDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: 300ms;
}
</style> 