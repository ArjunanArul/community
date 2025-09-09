<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KPH Hackathon - Build and Launch</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body class="font-inter">
    <div id="app">
        <!-- Navigation -->
        <nav class="bg-white shadow-sm border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <h1 class="text-xl font-bold text-gray-900">KPH Hackathon</h1>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="#about" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#sponsor" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sponsor</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBuFNEMLgs5OL8kSIbrzaQoyShcIgHHwV65A0GAS4kLDUdCQ/viewform?usp=send_form" target="_blank" class="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- HERO SECTION -->
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
                            <i data-lucide="arrow-right" class="h-5 w-5 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                    
                    <!-- COUNTDOWN TIMER -->
                    <div class="mt-8 sm:mt-10 text-center">
                        <div class="inline-block bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Hackathon Starts In</h3>
                            <div class="grid grid-cols-4 gap-3 sm:gap-4">
                                <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border">
                                    <div class="text-2xl sm:text-3xl font-bold text-emerald-600" v-text="timeLeft.days">{{ timeLeft.days }}</div>
                                    <div class="text-xs sm:text-sm text-gray-600 font-medium">Days</div>
                                </div>
                                <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border">
                                    <div class="text-2xl sm:text-3xl font-bold text-emerald-600" v-text="timeLeft.hours">{{ timeLeft.hours }}</div>
                                    <div class="text-xs sm:text-sm text-gray-600 font-medium">Hours</div>
                                </div>
                                <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border">
                                    <div class="text-2xl sm:text-3xl font-bold text-emerald-600" v-text="timeLeft.minutes">{{ timeLeft.minutes }}</div>
                                    <div class="text-xs sm:text-sm text-gray-600 font-medium">Minutes</div>
                                </div>
                                <div class="bg-white rounded-lg p-3 sm:p-4 shadow-sm border">
                                    <div class="text-2xl sm:text-3xl font-bold text-emerald-600" v-text="timeLeft.seconds">{{ timeLeft.seconds }}</div>
                                    <div class="text-xs sm:text-sm text-gray-600 font-medium">Seconds</div>
                                </div>
                            </div>
                            <p class="mt-4 text-sm text-gray-600">September 19, 2025 at 9:00 AM IST</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WHY KPH HACKATHON -->
            <section id="about" class="py-8 sm:py-10 bg-white">
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
                                    <i data-lucide="rocket" class="h-12 sm:h-14 w-12 sm:w-14 text-emerald-600"></i>
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
                                    <i data-lucide="wallet" class="h-12 sm:h-14 w-12 sm:w-14 text-amber-600"></i>
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
                                    <i data-lucide="gift" class="h-12 sm:h-14 w-12 sm:w-14 text-orange-500"></i>
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

            <!-- SPONSOR CTA SECTION -->
            <section id="sponsor" class="py-8 sm:py-10 bg-white border-t mt-12 sm:mt-16">
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
                    <!-- Sponsor Reasons Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
                        <article class="relative group bg-white rounded-xl border p-4 sm:p-5 hover:shadow-sm transition-all duration-300 opacity-0 animate-slide-in" style="animation-delay: 0ms">
                            <div class="flex items-start gap-3 sm:gap-4">
                                <div class="flex-shrink-0 mt-1 transform-gpu group-hover:rotate-12 transition-transform duration-300">
                                    <i data-lucide="rocket" class="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600"></i>
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
                                    <i data-lucide="gift" class="h-5 sm:h-6 w-5 sm:w-6 text-orange-500"></i>
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
                            <button @click="sponsorCTA"
                                class="group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-gray-900 transition-all duration-300">
                                <i data-lucide="rocket" class="h-5 w-5"></i>
                                <span>Sponsor the Hackathon</span>
                                <i data-lucide="arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                        <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">Partner with us to power Kerala's innovation journey</p>
                    </div>
                </div>
            </section>

            <!-- Floating Sponsor Button -->
            <button @click="sponsorCTA" class="fixed z-40 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 sm:px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 text-sm sm:text-base">
                <i data-lucide="rocket" class="h-5 w-5"></i>
                Support the Hackathon
            </button>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-50 border-t mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">KPH Hackathon</h3>
                    <p class="text-sm text-gray-600 mb-4">Building Kerala's next generation of successful products</p>
                    <div class="flex justify-center space-x-6">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBuFNEMLgs5OL8kSIbrzaQoyShcIgHHwV65A0GAS4kLDUdCQ/viewform?usp=send_form" target="_blank" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Join Now</span>
                            <i data-lucide="arrow-right" class="h-5 w-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    timeLeft: {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    },
                    timer: null
                }
            },
            methods: {
                sponsorCTA() {
                    try {
                        window.open('https://api.whatsapp.com/send/?phone=917025437098&text=Hi%2C+I%27d+love+to+sponsor+and+support+the+hackathon', '_blank');
                    } catch (error) {
                        console.error('Error opening WhatsApp:', error);
                        // Fallback: copy phone number to clipboard
                        navigator.clipboard.writeText('+917025437098').then(() => {
                            alert('Phone number copied to clipboard: +917025437098');
                        });
                    }
                },
                updateCountdown() {
                    const now = new Date().getTime();
                    const hackathonDate = new Date('2025-09-19T09:00:00+05:30').getTime();
                    const distance = hackathonDate - now;

                    console.log(hackathonDate, now);

                    if (distance < 0) {
                        // Hackathon has started
                        this.timeLeft = {
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        };
                        clearInterval(this.timer);
                        return;
                    }

                    this.timeLeft = {
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000)
                    };
                },
                startCountdown() {
                    this.updateCountdown();
                    this.timer = setInterval(this.updateCountdown, 1000);
                }
            },
            mounted() {
                // Initialize Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
                // Start countdown timer
                this.startCountdown();
            },
            beforeUnmount() {
                // Clean up timer when component is destroyed
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        }).mount('#app');
    </script>

    <style>
        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        html, body {
            width: 100vw;
            overflow-x: hidden;
        }

        body {
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

        /* Smooth scrolling for anchor links */
        html {
            scroll-behavior: smooth;
        }

        /* Focus styles for accessibility */
        button:focus,
        a:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }
    </style>
</body>
</html>
