<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 sm:py-28 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <div class="inline-block bg-emerald-100 px-4 py-2 rounded-lg mb-4 opacity-0 animate-fade-in">
            <h1 class="text-5xl font-bold tracking-tight text-emerald-600 sm:text-7xl">
              KPH Builder Accelerator 🚀
            </h1>
          </div>
          <p class="mt-8 text-xl leading-8 text-gray-600 opacity-0 animate-fade-in animation-delay-400">
            Accelerating Builders who've built something real. Get hands-on help with Product, GTM, Operations, Hiring, and Fundraising.
          </p>
          <div class="mt-8 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="https://tally.so/r/nrY5MN"
              target="_blank"
              class="group inline-flex items-center gap-3 rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300"
            >
              Apply Now
              <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <WhoWeLookFor />

    <!-- How We Help -->
    <section class="py-20 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-block bg-amber-100 px-4 py-2 rounded-lg mb-4 opacity-0 animate-fade-in">
            <h2 class="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">How We Help</h2>
          </div>
          <p class="mt-4 text-lg leading-8 text-gray-600 opacity-0 animate-fade-in animation-delay-200">
            Comprehensive support to help you build and scale your product
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" 
            :key="index"
            class="bg-white rounded-xl border p-6 hover:shadow-sm transition-all duration-300 opacity-0 animate-slide-up"
            :style="`animation-delay: ${index * 100}ms`"
          >
            <component 
              :is="feature.icon" 
              class="h-8 w-8 text-emerald-600 mb-4"
            />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-emerald-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-block bg-emerald-100 px-4 py-2 rounded-lg mb-4 opacity-0 animate-fade-in">
          <h2 class="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
            Ready to Accelerate Your Growth?
          </h2>
        </div>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-200">
          Join KPH Accelerator and get the support you need to take your product to the next level.
        </p>
        <a 
          href="https://tally.so/r/nrY5MN"
          target="_blank"
          class="group inline-flex items-center gap-3 rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
        >
          Apply Now
          <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRight,
  Rocket,
  Users,
  Target,
  UserPlus,
  Wallet,
  GraduationCap
} from 'lucide-vue-next'

const features = [
  {
    icon: Rocket,
    title: 'Product Development',
    description: 'Get guidance on MVP refinement, product validation, user research, and building scalable solutions.'
  },
  {
    icon: Users,
    title: 'Operations & Processes',
    description: 'Learn to build efficient systems and processes that help your startup run smoothly and scale effectively.'
  },
  {
    icon: Target,
    title: 'Go-to-Market Strategy',
    description: 'Develop your positioning, marketing strategy, and sales playbook to reach and convert your target customers.'
  },
  {
    icon: UserPlus,
    title: 'Hiring & Team Building',
    description: 'Get help with recruitment strategy, building high-performance teams, and creating the right culture.'
  },
  {
    icon: Wallet,
    title: 'Funding Strategy',
    description: 'Whether bootstrapping or raising VC funding, get guidance on the best path for your startup.'
  },
  {
    icon: GraduationCap,
    title: 'Community Support',
    description: 'Access exclusive masterclasses, mentorship sessions, and support from the KPH community.'
  }
]
</script>

<style scoped>
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

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}
</style>
