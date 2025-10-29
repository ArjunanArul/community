<template>
  <section class="py-10 bg-gray-50 border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-block bg-slate-100 px-4 py-2 rounded-lg mb-4 fade-in-scroll">
          <h2 class="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">
            Join KPH
          </h2>
        </div>
        <p class="mt-4 text-lg leading-8 text-gray-600 fade-in-scroll fade-in-delay-200">
          Join Kerala's largest product community. Network &amp; grow together.
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Community -->
        <div class="bg-white rounded-xl border p-8 transition-all duration-300 fade-in-scale fade-in-delay-100">
          <Users class="h-8 w-8 text-green-700 mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Community</h3>
          <p class="text-gray-600 mb-6">
            Connect with Kerala's largest product community.
          </p>
          <a 
            href="https://nas.io/kph"
            target="_blank"
            class="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-700 group"
          >
            Join the Community
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <!-- Builder Accelerator -->
        <div class="bg-white rounded-xl border p-8 transition-all duration-300 fade-in-scale fade-in-delay-200">
          <Rocket class="h-8 w-8 text-blue-600 mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Builder Accelerator</h3>
          <p class="text-gray-600 mb-6">
            Get hands-on help with product, GTM, operations, hiring, and fundraising.
          </p>
          <NuxtLink 
            to="/accelerator"
            class="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group"
          >
            Learn More
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

        <!-- Investor Network -->
        <div class="bg-white rounded-xl border p-8 transition-all duration-300 fade-in-scale fade-in-delay-300">
          <Wallet class="h-8 w-8 text-green-700 mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Investor Network</h3>
          <p class="text-gray-600 mb-6">
            Back Kerala's top startups with our network of angel investors.
          </p>
          <a 
            href="https://kph.vc"
            target="_blank"
            class="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-700 group"
          >
            Connect
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, Rocket, Wallet, ArrowRight } from 'lucide-vue-next'
</script> 