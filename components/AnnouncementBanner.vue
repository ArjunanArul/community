<template>
  <transition name="fade-slide">
    <div v-if="visible" :class="[
      baseClass,
      typeClass,
      'announcement-pill',
      'flex',
      'items-center',
      'justify-between',
      'px-4',
      'py-2',
      'rounded-lg',
      'border',
      'shadow',
      'mx-2',
      'sm:mx-auto',
      'my-4',
      'sm:my-6',
      'max-w-full',
      'sm:max-w-2xl',
      'bg-white',
      'gap-3'
    ]">
      <span class="announcement-text truncate text-sm sm:text-base font-bold text-gray-900 flex-1">
        <slot>{{ message }}</slot>
      </span>
      <div class="flex items-center gap-2 flex-shrink-0">
        <template v-if="cta && ctaLink">
          <a :href="ctaLink" target="_blank" rel="noopener noreferrer"
            class="cta-pill group inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-black text-white hover:bg-black transition-colors duration-200 shadow-sm"
          >
            {{ cta }}
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </template>
        <button class="close-btn flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-lg" @click="visible = false" aria-label="Dismiss announcement">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info', // options: 'info', 'success', 'warning', 'danger'
  },
  cta: {
    type: String,
    default: ''
  },
  ctaLink: {
    type: String,
    default: ''
  }
})

const visible = ref(true)

const baseClass = 'announcement-banner'
const typeClass = computed(() => `announcement-banner--${props.type}`)
</script>

<style scoped>
.announcement-pill {
  border-width: 1.5px;
  border-color: #e5e7eb;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(80, 80, 120, 0.08);
  transition: box-shadow 0.2s;
}
.announcement-banner--info {
  border-color: #c7d2fe;
  background: #f5faff;
}
.announcement-banner--success {
  border-color: #dbeafe;
  background: #eff6ff;
}
.announcement-banner--warning {
  border-color: #fde68a;
  background: #fefce8;
}
.announcement-banner--danger {
  border-color: #fecaca;
  background: #fef2f2;
}
.cta-pill {
  box-shadow: 0 1px 4px 0 rgba(80, 80, 120, 0.10);
}
.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
