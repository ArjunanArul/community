<template>
  <!-- Clean white for hero section -->
  <div ref="heroSection" class="bg-white py-16 sm:py-18">
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Animated title with staggered fade-in -->
        <h1 
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl fade-in-scroll ml-6"
        >
          Every Product happening in 
          <span class="glass-blue text-blue-600 px-3 py-1 rounded-glass inline-block transform -rotate-1">Kerala</span>
        </h1>
        <!-- Animated subtitle with delay -->
        <p 
          class="mt-8 text-xl leading-8 text-gray-600 fade-in-scroll fade-in-delay-200"
        >
          Kerala's brightest minds come together to build the future of internet products, connect with like-minded innovators, and grow together.
        </p>
      </div>
        
        <!-- Image Showcase Section - Row Layout with Fading Sides -->
        <div class="mt-12">
          <div class="relative">
            <!-- Navigation Buttons -->
            <button 
              @click="previousImage"
              :disabled="isTransitioning"
              class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft class="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <button 
              @click="nextImage"
              :disabled="isTransitioning"
              class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight class="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <!-- Main Container with Fade Overlays -->
            <div class="relative">
              <!-- Left Fade Overlay -->
              <div class="absolute left-0 top-0 bottom-0 w-24 sm:w-32 fade-overlay bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              
              <!-- Right Fade Overlay -->
              <div class="absolute right-0 top-0 bottom-0 w-24 sm:w-32 fade-overlay bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <!-- Images Row Container -->
              <div class="overflow-hidden">
                <div 
                  ref="imageContainer"
                  class="flex image-row-container will-change-transform"
                >
                  <div 
                    v-for="(image, index) in homepageImages" 
                    :key="index"
                    class="flex-shrink-0 rounded-xl overflow-hidden w-120 sm:w-100 h-80 sm:h-70 mx-2 image-item relative group cursor-pointer"
                  >
                    <div class="relative h-full overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <img
                        :src="image.src"
                        :alt="image.alt"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        :class="index === 3 || index === 4 ? 'object-[center_20%]' : 'object-center'"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-white text-sm font-medium">
                          {{ image.caption }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Button with hover effect -->
        <div class="mx-auto max-w-2xl text-center">
        <div class="mt-8 fade-in-scroll fade-in-delay-400">
          <a href="http://nas.io/kph" target="_blank" rel="noopener noreferrer" 
            class="group inline-flex items-center gap-3 rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300"
          >
            Request an Invite
            <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Section - Separate below Hero -->
  <div class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Stats in Circle with Rotation -->
        <div class="circular-stats-container mb-12">
          <div class="circular-stats-layout" ref="circularStatsLayout" :class="{ 'rotate-in-view': isStatsInView }">
            <!-- Big Circle Background -->
            <div class="absolute inset-0 rounded-full bg-white shadow-lg border-4 border-blue-100"></div>
            
            <!-- Stats positioned on the circle line -->
            <div v-for="(stat, index) in stats" :key="stat.id" 
                 class="circular-stat-item"
                 :class="[`fade-in-delay-${(index + 1) * 100}`, `stat-${index}`]">
              <div class="stat-content">
                <div class="flex flex-col items-center p-6 rounded-2xl bg-white fade-in-scale hover:bg-gray-50 transition-all duration-300 cursor-default group shadow-xl border border-gray-200 w-40 h-36 hover:shadow-2xl hover:scale-105">
                  <div class="mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <component :is="stat.icon" class="h-8 w-8" />
                  </div>
                  <div class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {{ stat.currentValue }}+
                  </div>
                  <div class="text-sm text-gray-600 text-center leading-tight font-medium">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Description below circle -->
        <div class="max-w-4xl mx-auto">
          <p class="text-lg leading-8 text-gray-600">
            Kerala's innovation hub, where founders, makers, and mentors collaborate to turn ideas into products. Through hands-on programs and events, we focus on rapid prototyping, market validation, and scaling, providing the resources and networking needed for success.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Users, Building2, UserPlus, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const circularStatsLayout = ref(null)

const stats = ref([
  { id: 1, icon: Building2, value: 100, currentValue: 0, label: 'Startups' },
  { id: 2, icon: Users, value: 50, currentValue: 0, label: 'Meetups' },
  { id: 3, icon: UserPlus, value: 1000, currentValue: 0, label: 'People in the waitlist' }
])

// Image slider state
const currentImageIndex = ref(0)
const isTransitioning = ref(false)
const isMobile = ref(false)
const resizeHandler = ref(null)
const scrollProgress = ref(0)
const heroSection = ref(null)
const imageContainer = ref(null)
const smoothScrollHandler = ref(null)
const isStatsInView = ref(false)

const originalImages = ref([
  {
    src: '/homepage/community-handshake.webp',
    alt: 'KPH Community Handshake',
    caption: 'Join Kerala\'s thriving product ecosystem'
  },
  {
    src: '/homepage/KPH HACKATHON.webp',
    alt: 'KPH Hackathon',
    caption: 'Innovation through intense collaboration'
  },
  {
    src: '/homepage/mafia house.webp',
    alt: 'KPH Mafia House',
    caption: 'Strategic thinking and networking'
  },
  {
    src: '/homepage/DSC02979.webp',
    alt: 'KPH Community Event',
    caption: 'Building connections and fostering innovation'
  },
  {
    src: '/homepage/DSC02984.webp',
    alt: 'KPH Community Gathering',
    caption: 'Collaborative learning and growth'
  },
  {
    src: '/homepage/kph banglr meetup.webp',
    alt: 'KPH Bangalore Meetup',
    caption: 'Expanding our reach across cities'
  },
  {
    src: '/homepage/kph meetup kochi.webp',
    alt: 'KPH Kochi Meetup',
    caption: 'Local community building in action'
  },
  {
    src: '/homepage/sales dinner.webp',
    alt: 'KPH Sales Dinner',
    caption: 'Learning from industry experts'
  },
  {
    src: '/homepage/shopify lunch.webp',
    alt: 'KPH Shopify Lunch',
    caption: 'Partnerships and knowledge sharing'
  }
])

// Create infinite scroll by duplicating images
const homepageImages = ref([])

/**
 * Initialize infinite scroll by creating duplicated images
 * This allows seamless infinite scrolling without visible jumps
 */
const initializeInfiniteScroll = () => {
  // Create 3 sets of images for infinite scroll effect
  homepageImages.value = [
    ...originalImages.value,
    ...originalImages.value,
    ...originalImages.value
  ]
  
  // Start at the middle set (second set) to allow scrolling in both directions
  currentImageIndex.value = originalImages.value.length
}

/**
 * Navigate to the next image in the row slider
 * Handles manual navigation with smooth scrolling
 */
const nextImage = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  currentImageIndex.value++
  
  // Calculate scroll position for manual navigation
  const imageWidth = isMobile.value ? 280 : 320
  const targetOffset = (currentImageIndex.value - originalImages.value.length) * imageWidth
  
  if (imageContainer.value) {
    imageContainer.value.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    imageContainer.value.style.transform = `translate3d(-${targetOffset}px, 0, 0)`
    lastScrollOffset = targetOffset
    
    setTimeout(() => {
      isTransitioning.value = false
      // Remove transition after animation to allow smooth scroll again
      if (imageContainer.value) {
        imageContainer.value.style.transition = ''
      }
    }, 500)
  }
}

/**
 * Navigate to the previous image in the row slider
 * Handles manual navigation with smooth scrolling
 */
const previousImage = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  currentImageIndex.value--
  
  // Calculate scroll position for manual navigation
  const imageWidth = isMobile.value ? 280 : 320
  const targetOffset = (currentImageIndex.value - originalImages.value.length) * imageWidth
  
  if (imageContainer.value) {
    imageContainer.value.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    imageContainer.value.style.transform = `translate3d(-${targetOffset}px, 0, 0)`
    lastScrollOffset = targetOffset
    
    setTimeout(() => {
      isTransitioning.value = false
      // Remove transition after animation to allow smooth scroll again
      if (imageContainer.value) {
        imageContainer.value.style.transition = ''
      }
    }, 500)
  }
}

/**
 * Navigate directly to a specific slide
 * @param {number} index - The index of the slide to navigate to (0-based from original images)
 */
const goToSlide = (index) => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  // Calculate the scroll position needed to show this image
  const imageWidth = isMobile.value ? 280 : 320
  const targetOffset = index * imageWidth
  
  // Smoothly scroll to the position that would show this image
  if (imageContainer.value) {
    imageContainer.value.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    imageContainer.value.style.transform = `translate3d(-${targetOffset}px, 0, 0)`
    
    // Update current index for dots
    currentImageIndex.value = originalImages.value.length + index
    lastScrollOffset = targetOffset
    
    setTimeout(() => {
      isTransitioning.value = false
      // Remove transition after animation to allow smooth scroll again
      if (imageContainer.value) {
        imageContainer.value.style.transition = ''
      }
    }, 500)
  }
}

/**
 * Calculate scroll progress and update image position
 * Optimized for performance with cached values
 */
let cachedElementTop = 0
let cachedElementHeight = 0
let lastScrollOffset = 0

const updateScrollProgress = () => {
  if (!heroSection.value) return
  
  // Cache element properties to avoid repeated getBoundingClientRect calls
  if (cachedElementTop === 0 || cachedElementHeight === 0) {
    const rect = heroSection.value.getBoundingClientRect()
    cachedElementTop = rect.top + (window.pageYOffset || document.documentElement.scrollTop)
    cachedElementHeight = rect.height
  }
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrolledPast = Math.max(0, scrollTop - cachedElementTop)
  const progress = Math.min(1, scrolledPast / (cachedElementHeight * 0.8))
  
  scrollProgress.value = progress
  
  // Calculate scroll offset with optimized math - reduced speed by 50%
  const totalImages = originalImages.value.length
  const imageWidth = isMobile.value ? 280 : 320
  const scrollOffset = progress * totalImages * imageWidth * 0.2
  
  // Only update if the offset has changed significantly (performance optimization)
  if (Math.abs(scrollOffset - lastScrollOffset) > 1) {
    if (imageContainer.value) {
      imageContainer.value.style.transform = `translate3d(-${scrollOffset}px, 0, 0)`
    }
    lastScrollOffset = scrollOffset
  }
  
  // Update current image index for dots indicator
  const targetIndex = Math.round(progress * (totalImages - 1))
  if (targetIndex !== (currentImageIndex.value % originalImages.value.length)) {
    currentImageIndex.value = originalImages.value.length + targetIndex
  }
}

/**
 * Handle scroll events for image slider
 * Throttled for better performance
 */
let scrollTimeout = null
const handleScroll = () => {
  if (isTransitioning.value) return
  
  if (scrollTimeout) return
  
  scrollTimeout = setTimeout(() => {
    updateScrollProgress()
    scrollTimeout = null
  }, 16) // ~60fps throttling
}

onMounted(() => {
  // Initialize infinite scroll
  initializeInfiniteScroll()
  
  // Detect mobile device and reset cached values
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
    // Reset cached values when window resizes
    cachedElementTop = 0
    cachedElementHeight = 0
    lastScrollOffset = 0
  }
  
  checkMobile()
  resizeHandler.value = checkMobile
  window.addEventListener('resize', resizeHandler.value)
  
  // Add scroll event listener for image slider with optimized performance
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Initial scroll progress calculation
  setTimeout(() => {
    updateScrollProgress()
  }, 100)
  
  // Set up intersection observer for stats circle rotation
  if (circularStatsLayout.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isStatsInView.value = true
            // Unobserve after animation triggers to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
      }
    )
    
    observer.observe(circularStatsLayout.value)
  }
  
  // Animate stats
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

onUnmounted(() => {
  // Clean up event listeners when component is destroyed
  if (resizeHandler.value) {
    window.removeEventListener('resize', resizeHandler.value)
  }
  window.removeEventListener('scroll', handleScroll)
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

/* Circular Stats Layout Styles */
.circular-stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
}

.circular-stats-layout {
  position: relative;
  width: 440px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-stat-item {
  position: absolute;
  width: 160px;
  height: 140px;
  transform-origin: center;
}

/* Individual box positioning - evenly spaced circle arrangement */
.stat-0 {
  /* 100+ Startups - top position */
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.stat-1 {
  /* 50+ Meetups - bottom left position */
  left: 15%;
  top: 75%;
  transform: translateX(-50%) translateY(-50%);
}

.stat-2 {
  /* 1000+ Waitlist - bottom right position */
  right: 15%;
  top: 75%;
  transform: translateX(50%) translateY(-50%);
}

.stat-content {
  width: 100%;
  height: 100%;
}

/* Performance optimizations for smooth scrolling */
.image-row-container {
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
  backface-visibility: hidden;
  perspective: 1000px;
}

.image-item {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Stats circle rotation animation */
.circular-stats-layout {
  transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(0deg);
  transform-origin: center;
}

.circular-stats-layout.rotate-in-view {
  transform: rotate(180deg); /* Rotate 180 degrees instead of 360 */
}

/* Individual stat items counter-rotate to stay upright */
.circular-stat-item {
  transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

/* Counter-rotate stats to keep them upright while circle rotates */
.rotate-in-view .circular-stat-item {
  transform: rotate(-180deg);
}

/* Override the positioning transforms when rotating with offset */
.rotate-in-view .stat-0 {
  transform: translateX(-50%) translateY(-20px) rotate(-180deg);
}

.rotate-in-view .stat-1 {
  transform: translateX(-50%) translateY(-50%) translateX(-20px) translateY(-20px) rotate(-180deg);
}

.rotate-in-view .stat-2 {
  transform: translateX(50%) translateY(-50%) translateX(20px) translateY(-20px) rotate(-180deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .circular-stats-container {
    min-height: 400px;
  }
  
  .circular-stats-layout {
    width: 330px;
    height: 330px;
  }
  
  .circular-stat-item {
    width: 120px;
    height: 110px;
  }
  
  /* Individual mobile positioning - evenly spaced circle arrangement */
  .stat-0 {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .stat-1 {
    left: 15%;
    top: 75%;
    transform: translateX(-50%) translateY(-50%);
  }
  
  .stat-2 {
    right: 15%;
    top: 75%;
    transform: translateX(50%) translateY(-50%);
  }
  
  /* Mobile counter-rotation with offset */
  .rotate-in-view .stat-0 {
    transform: translateX(-50%) translateY(-15px) rotate(-180deg);
  }
  
  .rotate-in-view .stat-1 {
    transform: translateX(-50%) translateY(-50%) translateX(-15px) translateY(-15px) rotate(-180deg);
  }
  
  .rotate-in-view .stat-2 {
    transform: translateX(50%) translateY(-50%) translateX(15px) translateY(-15px) rotate(-180deg);
  }
  
  /* Mobile image row adjustments */
  .image-item {
    width: 280px;
    height: 200px;
    margin: 0 8px;
  }
  
  .fade-overlay {
    width: 24px;
  }
  
  /* Mobile navigation button adjustments */
  .nav-arrow {
    padding: 8px;
  }
  
  /* Ensure navigation buttons are visible on mobile */
  .absolute.left-4,
  .absolute.right-4 {
    left: 8px;
    right: 8px;
  }
  
  .absolute.left-4 button,
  .absolute.right-4 button {
    padding: 8px;
  }
}
</style>