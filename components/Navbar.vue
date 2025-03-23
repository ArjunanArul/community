<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="font-serif font-black text-2xl">
          <NuxtLink to="/" class="text-gray-900">
            KPH
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-500 hover:text-gray-600">
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden md:flex md:space-x-8">
          <NuxtLink to="/accelerator" class="text-gray-700 hover:text-emerald-600">
            Accelerator
          </NuxtLink>
          <a href="https://kph.vc" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-emerald-600">
            Investor Network
          </a>
          <a href="https://nas.io/kphjobs" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-emerald-600">
            Jobs
          </a>
          <a href="https://wiki.kph.club" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-emerald-600">
            Wiki
          </a>
          <NuxtLink to="/blog" class="text-gray-700 hover:text-emerald-600">
            Blog
          </NuxtLink>
        </div>

        <!-- Right side social icons -->
        <div class="hidden md:flex md:space-x-6">
          <a href="https://www.instagram.com/kerala.ph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
            <Instagram class="h-5 w-5" />
          </a>
          <a href="https://x.com/keralaph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
            <Twitter class="h-5 w-5" />
          </a>
          <a href="https://www.youtube.com/@FelixJosemonOfficial/videos" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
            <Youtube class="h-5 w-5" />
          </a>
          <a href="https://in.linkedin.com/company/keralaph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
            <Linkedin class="h-5 w-5" />
          </a>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isOpen" class="md:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink to="/accelerator" class="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Accelerator
          </NuxtLink>
          <a href="https://kph.vc" target="_blank" rel="noopener noreferrer" class="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Investor Network
          </a>
          <a href="https://nas.io/kphjobs" target="_blank" rel="noopener noreferrer" class="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Jobs
          </a>
          <a href="https://wiki.kph.club" target="_blank" rel="noopener noreferrer" class="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Wiki
          </a>
          <NuxtLink to="/blog" class="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Blog
          </NuxtLink>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex space-x-6 px-3">
            <a href="https://www.instagram.com/kerala.ph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
              <Instagram class="h-5 w-5" />
            </a>
            <a href="https://x.com/keralaph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@FelixJosemonOfficial/videos" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
              <Youtube class="h-5 w-5" />
            </a>
            <a href="https://in.linkedin.com/company/keralaph" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-600">
              <Linkedin class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Instagram, Twitter, Youtube, MessageCircle, Menu, X, Linkedin } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
</script> 