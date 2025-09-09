<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KPH Hackathon</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
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
</head>
<body class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- NOTE: Navbar component was removed for a single file render. -->
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
                    19,20,21 September 2025
                </p>
                <!-- JOIN NOW CTA -->
                <div class="mt-6 sm:mt-8 text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBuFNEMLgs5OL8kSIbrzaQoyShcIgHHwV65A0GAS4kLDUdCQ/viewform?usp=send_form" target="_blank" class="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300 min-w-[120px] sm:min-w-[160px]">
                        JOIN NOW
                        <!-- ArrowRight Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- Redesigned Timer and Hurry-up Message -->
                <div class="mt-8">
                    <div id="countdown-timer" class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-800">
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm min-w-[70px] sm:min-w-[90px]">
                            <div id="days-value" class="text-3xl sm:text-4xl font-extrabold text-indigo-600">00</div>
                            <div class="text-xs sm:text-sm text-gray-500 font-semibold mt-1">DAYS</div>
                        </div>
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm min-w-[70px] sm:min-w-[90px]">
                            <div id="hours-value" class="text-3xl sm:text-4xl font-extrabold text-indigo-600">00</div>
                            <div class="text-xs sm:text-sm text-gray-500 font-semibold mt-1">HOURS</div>
                        </div>
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm min-w-[70px] sm:min-w-[90px]">
                            <div id="minutes-value" class="text-3xl sm:text-4xl font-extrabold text-indigo-600">00</div>
                            <div class="text-xs sm:text-sm text-gray-500 font-semibold mt-1">MINUTES</div>
                        </div>
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm min-w-[70px] sm:min-w-[90px]">
                            <div id="seconds-value" class="text-3xl sm:text-4xl font-extrabold text-indigo-600">00</div>
                            <div class="text-xs sm:text-sm text-gray-500 font-semibold mt-1">SECONDS</div>
                        </div>
                    </div>
                    <p id="hurry-up-message" class="mt-4 text-red-500 font-semibold opacity-0 animate-fade-in animation-delay-200 text-center">Hurry up, spots are limited!</p>
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
                                <!-- Rocket Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 sm:h-14 w-12 sm:w-14 text-emerald-600">
                                    <path d="M15 22v-4.14a2 2 0 0 0-1-1.73l-.4-.2c-.7-.4-1.5-.7-2.3-.7a.93.93 0 0 1-.6-1.9L9 11l-3 3-1.6-1.6a1.5 1.5 0 0 0 0-2.1L6 8 8 6l2.1-.7c1-.3 1.9.1 2.5 1.1a1 1 0 0 0 1.9.6l.2.4a2 2 0 0 0 1.7 1z" />
                                    <path d="m19 5-7 7" />
                                    <path d="M13 14h.01" />
                                    <path d="M15 16h.01" />
                                </svg>
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
                                <!-- Wallet Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 sm:h-14 w-12 sm:w-14 text-amber-600">
                                    <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" />
                                    <path d="M17 10h-6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                                    <path d="M12 17v-3" />
                                    <path d="M15 17v-3" />
                                    <path d="M18 17v-3" />
                                </svg>
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
                                <!-- Gift Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 sm:h-14 w-12 sm:w-14 text-orange-500">
                                    <path d="M18 10a2 2 0 0 0 2-2c0-1.1-.9-2-2-2H6a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12zm0 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zm-6 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zm-6 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2z" />
                                    <path d="M12 2v20" />
                                </svg>
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
                                <!-- Rocket Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600">
                                    <path d="M15 22v-4.14a2 2 0 0 0-1-1.73l-.4-.2c-.7-.4-1.5-.7-2.3-.7a.93.93 0 0 1-.6-1.9L9 11l-3 3-1.6-1.6a1.5 1.5 0 0 0 0-2.1L6 8 8 6l2.1-.7c1-.3 1.9.1 2.5 1.1a1 1 0 0 0 1.9.6l.2.4a2 2 0 0 0 1.7 1z" />
                                    <path d="m19 5-7 7" />
                                    <path d="M13 14h.01" />
                                    <path d="M15 16h.01" />
                                </svg>
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
                                <!-- Gift Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 sm:h-6 w-5 sm:w-6 text-orange-500">
                                    <path d="M18 10a2 2 0 0 0 2-2c0-1.1-.9-2-2-2H6a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12zm0 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zm-6 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zm-6 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2z" />
                                    <path d="M12 2v20" />
                                </svg>
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
                        <button id="sponsor-button"
                            class="group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
                            <!-- Rocket Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                                <path d="M15 22v-4.14a2 2 0 0 0-1-1.73l-.4-.2c-.7-.4-1.5-.7-2.3-.7a.93.93 0 0 1-.6-1.9L9 11l-3 3-1.6-1.6a1.5 1.5 0 0 0 0-2.1L6 8 8 6l2.1-.7c1-.3 1.9.1 2.5 1.1a1 1 0 0 0 1.9.6l.2.4a2 2 0 0 0 1.7 1z" />
                                <path d="m19 5-7 7" />
                                <path d="M13 14h.01" />
                                <path d="M15 16h.01" />
                            </svg>
                            <span>Sponsor the Hackathon</span>
                            <!-- ArrowRight Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">Partner with us to power Kerala's innovation journey</p>
                </div>
            </div>
        </section>

        <!-- Floating Sponsor Button -->
        <button id="floating-sponsor-button" class="fixed z-40 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 sm:px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 text-sm sm:text-base">
            <!-- Rocket Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M15 22v-4.14a2 2 0 0 0-1-1.73l-.4-.2c-.7-.4-1.5-.7-2.3-.7a.93.93 0 0 1-.6-1.9L9 11l-3 3-1.6-1.6a1.5 1.5 0 0 0 0-2.1L6 8 8 6l2.1-.7c1-.3 1.9.1 2.5 1.1a1 1 0 0 0 1.9.6l.2.4a2 2 0 0 0 1.7 1z" />
                <path d="m19 5-7 7" />
                <path d="M13 14h.01" />
                <path d="M15 16h.01" />
            </svg>
            Support the Hackathon
        </button>
        <!-- NOTE: Footer component was removed for a single file render. -->
    </div>

    <script>
        const sponsorCTA = () => {
            window.open('https://api.whatsapp.com/send/?phone=917025437098&text=Hi%2C+I%27d+love+to+sponsor+and+support+the+hackathon', '_blank')
        }
        document.getElementById('sponsor-button').addEventListener('click', sponsorCTA);
        document.getElementById('floating-sponsor-button').addEventListener('click', sponsorCTA);

        // Timer functionality
        const daysElement = document.getElementById('days-value');
        const hoursElement = document.getElementById('hours-value');
        const minutesElement = document.getElementById('minutes-value');
        const secondsElement = document.getElementById('seconds-value');
        const hurryUpMessage = document.getElementById('hurry-up-message');
        
        // Use the event date from the hero section's text
        const eventDate = new Date('September 19, 2025 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                // Event has passed
                clearInterval(countdownInterval);
                document.getElementById('countdown-timer').innerHTML = '<span class="text-3xl font-bold text-emerald-600">The Hackathon is LIVE!</span>';
                hurryUpMessage.style.display = 'none';
                return;
            }

            // Calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result with leading zeros
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        };

        // Update the countdown every 1 second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Initial call to display the timer immediately
        updateCountdown();
    </script>
</body>
</html>
