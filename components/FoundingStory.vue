<template>
  <!-- Reduce section padding -->
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image container -->
        <div class="relative h-[400px] lg:h-[480px] rounded-xl overflow-hidden border shadow-sm">
          <img
            src="/felix-josemon.jpg"
            alt="Felix Josemon, founder of KPH"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Story content -->
        <div class="space-y-6">
          <div class="inline-block bg-amber-100 px-4 py-2 rounded-lg">
            <h2 class="text-4xl font-bold tracking-tight text-amber-600 sm:text-5xl">
              Our Founding Story
            </h2>
          </div>
          <div class="text-xl leading-8 text-gray-600 space-y-6">
            <p>
              Felix Josemon started KPH in 2017 during his college years as a small WhatsApp group for like-minded peers. Inspired by his visit to Silicon Valley as a Google Venkat Panchapakesan Memorial Scholar, he envisioned fostering a culture of innovation and collaboration in Kerala.
            </p>
            <p>
              Today, KPH thrives as an exclusive, invite-only community of around 1,000 top talents and startup founders. Members build impactful internet products, attend in-person meetups, explore engaging Malayalam podcasts, and share knowledge, fueling growth and inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script> 