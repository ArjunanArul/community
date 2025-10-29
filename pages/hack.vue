<template>
  <div>
    <Navbar />
    <div class="bg-gray-50">
        <!-- HERO SECTION: Styled like components/Hero.vue -->
        <section class="bg-white py-16 sm:py-18">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                <!-- Animated title with highlighted, tilted text -->
                <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl animate-fade-in">
                    KPH Hackathon
                    <br class="sm:hidden">
                    <span class="relative inline-block align-middle sm:ml-2">
                        <span class="glass-blue text-blue-600 px-3 py-1 rounded-glass inline-block font-extrabold animate-fade-in animation-delay-200 tilt-hero whitespace-nowrap">Build </span>
                    </span>
                    <br class="sm:hidden">
                    <span class="relative inline-block align-middle sm:ml-2">
                        <span class="glass-blue text-blue-600 px-3 py-1 rounded-glass inline-block font-extrabold animate-fade-in animation-delay-200 tilt-hero whitespace-nowrap">Launch </span>
                    </span>
                    <br class="sm:hidden">
                    <span class="relative inline-block align-middle sm:ml-2">
                        <span class="glass-blue text-blue-600 px-3 py-1 rounded-glass inline-block font-extrabold animate-fade-in animation-delay-200 tilt-hero whitespace-nowrap">Scale 🚀</span>
                    </span>
                </h1>
                <!-- Animated subtitle with delay -->
                <p class="mt-8 text-xl leading-8 text-gray-600 animate-fade-in animation-delay-200">
                    19,20,21 September 2025
                </p>
                <!-- HACKATHON PRODUCTS CTA -->
                <div class="mt-8">
                    <a href="https://launches.kph.club/hackathon" target="_blank" class="group inline-flex items-center gap-3 rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
                        Hackathon Products
                        <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </div>
        </section>

        <!-- WHY KPH HACKATHON (Podcasts.vue style) -->
        <section class="py-10 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <div class="inline-block bg-green-100 px-4 py-2 rounded-lg mb-4">
                        <h2 class="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
                            Why KPH Hackathon?
                        </h2>
                    </div>
                    <p class="mt-4 text-lg leading-8 text-gray-600">
                        The mission: Make Kerala the best place to build and launch successful products. We help you go from zero to launch with funding, mentorship, GTM, and your first users. Exciting prizes await!
                    </p>
                </div>
                <!-- Card Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div class="group animate-slide-up" style="animation-delay:0ms">
                        <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
                            <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                                <Rocket class="h-12 sm:h-14 w-12 sm:w-14 text-green-600" />
                            </div>
                            <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                                    <div class="bg-green-100 px-2 py-1 sm:px-2.5 rounded-md">
                                        <span class="text-xs sm:text-sm font-medium text-green-700">Mentorship</span>
                                    </div>
                                    <div class="glass-blue-sm px-2 py-1 sm:px-2.5 rounded-glass-sm">
                                        <span class="text-xs sm:text-sm font-medium text-blue-700">Launch</span>
                                    </div>
                                </div>
                                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">Build & Launch</h3>
                                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Go from idea to product launch. Get hands-on support, mentorship, and resources.</p>
                            </div>
                        </div>
                    </div>
                    <div class="group animate-slide-up" style="animation-delay:100ms">
                        <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
                            <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                                <Wallet class="h-12 sm:h-14 w-12 sm:w-14 text-green-600" />
                            </div>
                            <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                                    <div class="bg-green-100 px-2 py-1 sm:px-2.5 rounded-md">
                                        <span class="text-xs sm:text-sm font-medium text-green-700">Funding</span>
                                    </div>
                                    <div class="glass-blue-sm px-2 py-1 sm:px-2.5 rounded-glass-sm">
                                        <span class="text-xs sm:text-sm font-medium text-blue-700">GTM</span>
                                    </div>
                                </div>
                                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-gray-700">Funding & GTM</h3>
                                <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Winners get funding, GTM help, and access to KPH's investor and mentor network.</p>
                            </div>
                        </div>
                    </div>
                    <div class="group animate-slide-up" style="animation-delay:200ms">
                        <div class="block transform-gpu hover:-translate-y-1 transition-all duration-300">
                            <div class="aspect-video overflow-hidden rounded-xl border group-hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                                <Gift class="h-12 sm:h-14 w-12 sm:w-14 text-green-500" />
                            </div>
                            <div class="mt-5 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                                    <div class="bg-green-100 px-2 py-1 sm:px-2.5 rounded-md">
                                        <span class="text-xs sm:text-sm font-medium text-green-700">Prizes</span>
                                    </div>
                                    <div class="glass-blue-sm px-2 py-1 sm:px-2.5 rounded-glass-sm">
                                        <span class="text-xs sm:text-sm font-medium text-blue-700">Opportunity</span>
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

        <!-- JUDGES SECTION -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <div class="inline-block bg-green-100 px-4 py-2 rounded-lg mb-4">
                        <h2 class="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
                            Meet Our Judges
                        </h2>
                    </div>
                    <p class="mt-4 text-lg leading-8 text-gray-600">
                        Industry experts, successful founders, and seasoned investors who will evaluate and guide your hackathon projects.
                    </p>
                </div>

                <!-- Judges Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <!-- Judge 1: Felix Josemon -->
                    <div class="group animate-slide-up" style="animation-delay: 0ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
                                <img src="/judge 1.jpg" alt="Felix Josemon" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Felix Josemon</h3>
                                <p class="mt-1 text-sm text-gray-600">Founder & CEO of Kerala Product Hub</p>
                                <a href="https://www.linkedin.com/in/felixjosemon/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 2: Shan Salam -->
                    <div class="group animate-slide-up" style="animation-delay: 100ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center p-6">
                                <img src="/judge 2.jpg" alt="Shan Salam" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Shan Salam</h3>
                                <p class="mt-1 text-sm text-gray-600">Entrepreneur & Startup Mentor</p>
                                <a href="https://www.linkedin.com/in/shansalam/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 3: Narayan Babu -->
                    <div class="group animate-slide-up" style="animation-delay: 200ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-green-50 to-sky-50 flex items-center justify-center p-6">
                                <img src="/judge 3.JPG" alt="Narayan Babu" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Narayan Babu</h3>
                                <p class="mt-1 text-sm text-gray-600 whitespace-nowrap">Investment Advisor & Startup Mentor</p>
                                <a href="https://www.linkedin.com/in/nyn/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 4: Mufeed VH -->
                    <div class="group animate-slide-up" style="animation-delay: 300ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center p-6">
                                <img src="/judge 4.jpg" alt="Mufeed VH" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Mufeed VH</h3>
                                <p class="mt-1 text-sm text-gray-600">Entrepreneur & Product Builder</p>
                                <a href="https://www.linkedin.com/in/mufeed-vh/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 5: Vivek R -->
                    <div class="group animate-slide-up" style="animation-delay: 400ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-green-50 to-green-50 flex items-center justify-center p-6">
                                <img src="/judge 5.jpg" alt="Vivek R" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Vivek R</h3>
                                <p class="mt-1 text-sm text-gray-600">Tech Entrepreneur & Startup Advisor</p>
                                <a href="https://www.linkedin.com/in/123vivekr/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 6: Kiran Johns -->
                    <div class="group animate-slide-up" style="animation-delay: 500ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-green-50 to-green-50 flex items-center justify-center p-6">
                                <img src="/judge 6.jpg" alt="Kiran Johns" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Kiran Johns</h3>
                                <p class="mt-1 text-sm text-gray-600">Business Leader & Mentor</p>
                                <a href="https://www.linkedin.com/in/kiranjohns/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 7: Shyjal -->
                    <div class="group animate-slide-up" style="animation-delay: 600ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center p-6">
                                <img src="/judge 7.jpg" alt="Shyjal" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Shyjal</h3>
                                <p class="mt-1 text-sm text-gray-600">Entrepreneur & Startup Advisor</p>
                                <a href="https://www.linkedin.com/in/shyjal/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Judge 8: Abid Aboobaker -->
                    <div class="group animate-slide-up" style="animation-delay: 700ms">
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div class="aspect-square bg-gradient-to-br from-green-50 to-green-50 flex items-center justify-center p-6">
                                <img src="/judge 8.jpeg" alt="Abid Aboobaker" class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Abid Aboobaker</h3>
                                <p class="mt-1 text-sm text-gray-600">Entrepreneur & Business Leader</p>
                                <a href="https://www.linkedin.com/in/abidaboobaker/" target="_blank" class="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                    <span>LinkedIn</span>
                                    <ArrowRight class="h-3 w-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Watch Now Section -->
                <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-8">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-8">
                            <div class="inline-block bg-green-100 px-6 py-3 rounded-lg mb-6">
                                <h3 class="text-3xl font-bold text-green-600">Watch it now</h3>
                            </div>
                            <p class="text-lg text-gray-600">
                                Experience the energy, innovation, and excitement of the KPH Hackathon. Watch the complete playlist featuring pitches, demos, and the incredible journey of Kerala's brightest minds building the future.
                            </p>
                        </div>
                        
                        <!-- Playlist Thumbnail and Button -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <!-- Thumbnail -->
                            <div class="relative group">
                                <div class="relative rounded-xl overflow-hidden shadow-xl">
                                    <!-- Custom Thumbnail with KPH Branding -->
                                    <img 
                                        src="/thumbnailkph.jpg" 
                                        alt="KPH Hackathon 2025 Playlist Thumbnail"
                                        class="w-full h-64 object-cover"
                                    />
                                    <!-- Video Count Badge -->
                                    <div class="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        📹 Multiple Videos
                                    </div>
                                    <!-- Play Button Overlay -->
                                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                                        <div class="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                                            <svg class="h-8 w-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- YouTube Logo -->
                                    <div class="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                                        YouTube
                                    </div>
                                </div>
                                <!-- Playlist Info -->
                                <div class="mt-4 text-center">
                                    <h4 class="text-xl font-semibold text-gray-900 mb-2">KPH Hackathon 2025</h4>
                                    <p class="text-gray-600 text-sm">Complete Playlist • Multiple Videos</p>
                                </div>
                            </div>
                            
                            <!-- Call to Action -->
                            <div class="text-center lg:text-left">
                                <div class="space-y-6">
                                    <a 
                                        href="https://youtube.com/playlist?list=PLYhHP1R5OFVt46wBhf05VEudcSNmn_uSo&si=KncmfuZkr-LBHriJ" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        class="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        Watch on YouTube
                                        <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SPONSOR CTA SECTION (Wiki-inspired) -->
        <section class="py-10 bg-gray-50 border-t">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <div class="inline-block bg-sky-100 px-4 py-2 rounded-lg mb-4">
                        <h2 class="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
                            Sponsor the KPH Hackathon
                        </h2>
                    </div>
                    <p class="mt-4 text-lg leading-8 text-gray-600">
                        Support Kerala's next wave of founders and product builders. Get your brand in front of the most ambitious makers and innovators in the state. Sponsoring gives you unique access to talent, visibility, and impact.
                    </p>
                </div>
                <!-- Sponsor Reasons Grid (Wiki style) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <article class="relative group bg-white rounded-xl border p-6 hover:shadow-sm transition-all duration-300 animate-slide-in" style="animation-delay: 0ms">
                        <div class="flex items-start gap-3 sm:gap-4">
                            <div class="flex-shrink-0 mt-1 transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                <Users class="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                            </div>
                            <div class="flex-1">
                                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                                    <div class="glass-blue-sm px-2 py-1 sm:px-2.5 rounded-glass-sm">
                                        <span class="text-xs sm:text-sm font-medium text-blue-700">Talent</span>
                                    </div>
                                    <div class="bg-green-100 px-2 py-1 sm:px-2.5 rounded-md">
                                        <span class="text-xs sm:text-sm font-medium text-green-700">High Impact</span>
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
                        <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </article>
                    <article class="relative group bg-white rounded-xl border p-6 hover:shadow-sm transition-all duration-300 animate-slide-in" style="animation-delay: 300ms">
                        <div class="flex items-start gap-3 sm:gap-4">
                            <div class="flex-shrink-0 mt-1 transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                <Building2 class="h-5 sm:h-6 w-5 sm:w-6 text-green-500" />
                            </div>
                            <div class="flex-1">
                                <div class="flex gap-2 mb-2 sm:mb-3 flex-wrap">
                                    <div class="glass-blue-sm px-2 py-1 sm:px-2.5 rounded-glass-sm">
                                        <span class="text-xs sm:text-sm font-medium text-blue-700">Ecosystem</span>
                                    </div>
                                    <div class="bg-green-100 px-2 py-1 sm:px-2.5 rounded-md">
                                        <span class="text-xs sm:text-sm font-medium text-green-700">Impact</span>
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
                        <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </article>
                </div>
                <!-- CTA -->
                <div class="text-center mt-12">
                    <div class="inline-block bg-blue-50 p-1 rounded-2xl">
                        <button @click="sponsorCTA"
                            class="group inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
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
        <button @click="sponsorCTA" class="fixed z-40 bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200 text-sm">
            <Rocket class="h-5 w-5" />
            Support the Hackathon
        </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rocket, Wallet, Gift, ArrowRight, Users, Building2 } from 'lucide-vue-next'

// Meta tags and head configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'KPH Hackathon - Build Launch Scale | September 19-21, 2025',
  meta: [
    { name: 'description', content: 'Join the KPH Hackathon on September 19-21, 2025. Build, launch, and scale your product with funding, mentorship, GTM support, and exciting prizes. Make Kerala the best place to build successful products.' },
    { property: 'og:title', content: 'KPH Hackathon - Build Launch Scale | September 19-21, 2025' },
    { property: 'og:description', content: 'Join the KPH Hackathon on September 19-21, 2025. Build, launch, and scale your product with funding, mentorship, GTM support, and exciting prizes.' },
    { property: 'og:url', content: 'https://kph.club/hack' },
    { property: 'og:image', content: '/accelerator-og.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'KPH Hackathon - Build Launch Scale | September 19-21, 2025' },
    { name: 'twitter:description', content: 'Join the KPH Hackathon on September 19-21, 2025. Build, launch, and scale your product with funding, mentorship, GTM support, and exciting prizes.' },
    { name: 'twitter:image', content: '/accelerator-og.png' }
  ],
  link: [
    { rel: 'shortcut icon', href: '/favicon.ico?v=4' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png?v=4' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png?v=4' }
  ]
})

// Sponsor CTA function
const sponsorCTA = () => {
  window.open('https://api.whatsapp.com/send/?phone=917025437098&text=Hi%2C+I%27d+love+to+sponsor+and+support+the+hackathon', '_blank')
}
</script>

<style scoped>
/* Animation keyframes */
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes tiltHero {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out forwards;
}

.tilt-hero {
  animation: tiltHero 2s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

/* Ensure content is visible even without animations */
.opacity-0 {
  opacity: 0;
}

.animate-fade-in,
.animate-slide-up,
.animate-slide-in {
  opacity: 1;
}
</style>