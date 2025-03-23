<template>
  <!-- Warm light background -->
  <section class="py-20 bg-sky-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
          Join the movement of creators, dreamers, and doers from Kerala
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          We host invite-only meet-ups to accelerate turning bold ideas into successful products.
        </p>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="event in events" :key="event.id" 
          class="group bg-white rounded-xl overflow-hidden border hover:shadow-sm transition-all duration-300"
        >
          <div class="aspect-[4/3] overflow-hidden border-b">
            <img 
              :src="event.image"
              :alt="event.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-5">
            <div class="inline-flex items-center gap-2">
              <div class="bg-orange-100 px-2.5 py-1 rounded-md">
                <time class="text-sm font-medium text-orange-700">{{ event.date }}</time>
              </div>
              <div class="bg-emerald-100 px-2.5 py-1 rounded-md">
                <span class="text-sm font-medium text-emerald-700">{{ event.location }}</span>
              </div>
            </div>
            <h3 class="mt-3 text-xl font-semibold text-gray-900 leading-tight group-hover:text-gray-700">
              {{ event.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600">{{ event.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <div class="inline-block p-1 rounded-2xl">
          <NuxtLink 
            to="/meetups"
            class="group inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-base font-semibold text-white hover:bg-gray-900 transition-all duration-300"
          >
            <CalendarDays class="h-5 w-5" />
            <span>View All Meetups</span>
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
        <p class="mt-4 text-sm text-gray-500">Join our next meetup and connect with fellow builders</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CalendarDays, ArrowRight } from 'lucide-vue-next'

const events = [
  {
    id: 1,
    title: "KPH Kochi Meetup",
    date: "February 2024",
    location: "Kochi",
    description: "A day of networking and knowledge sharing with Kerala's top product builders.",
    image: "/events/kochi-meetup.jpeg"
  },
  {
    id: 2,
    title: "KPH San Francisco Meetup",
    date: "May 2024",
    location: "San Francisco",
    description: "Connect with Kerala founders building for the global market in Silicon Valley.",
    image: "/events/sf-meetup.jpeg"
  },
  {
    id: 3,
    title: "KPH Toronto Ecommerce Meetup",
    date: "May 2024",
    location: "Toronto",
    description: "Special focus on ecommerce innovations and cross-border commerce strategies.",
    image: "/events/toronto-meetup.jpeg"
  }
]
</script> 