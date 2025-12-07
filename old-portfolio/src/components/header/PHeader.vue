<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import ColorModeButton from './ColorModeButton.vue';
import HeaderLink from './HeaderLink.vue';
import CloseIcon from '../icons/CloseIcon.vue';

const links = [
    {
        label: "À propos",
        href: "#about"
    },
    {
        label: "Compétences",
        href: "#skills"
    },
    {
        label: "Portfolio",
        href: "#portfolio"
    }
]

const lastScrollPosition = ref(0);
const isMenuOpen = ref(false)

const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition.value && currentScrollPosition > 50) {
        gsap.to('.header', { y: -80, opacity: 0, duration: 1 })
    } else {
        gsap.to('.header', { y: 0, opacity: 1, duration: 1 })
    }
    lastScrollPosition.value = currentScrollPosition;
};

const handleMouseMove = (event) => {
  if (event.clientY < 70) {
    gsap.to('.header', { y: 0, opacity: 1, duration: 0.8 });
  }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

let tl = gsap.timeline()
const screenWidth = window.innerWidth;

onMounted(() => {
    const linksClass = gsap.utils.toArray('.link');
    tl.fromTo('.header', {
        x: screenWidth
    },
        {
            x: 0,
            opacity: 1,
            duration: 2
        }
    )
        .fromTo(linksClass[0], { x: -100, opacity: 0, duration: 0.2 }, { x: 0, opacity: 1, duration: 0.2 }, "-=1")
        .fromTo(linksClass[1], { y: -30, opacity: 0, duration: 0.2 }, { y: 0, opacity: 1, duration: 0.2 }, ">")
        .fromTo(linksClass[2], { x: 100, opacity: 0, duration: 0.2 }, { x: 0, opacity: 1, duration: 0.2 }, ">")
        tl.fromTo(".contact", { y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.2, ease: "bounce.out"}, screenWidth > 768 ? '>':'-=1')

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('mousemove', handleMouseMove);
});

</script>

<template>
    <header class="header opacity-20 fixed top-0 left-0 w-full z-50 bg-primary dark:bg-white" >
        <div class="container mx-auto px-6 py-2.5 flex justify-between items-center">
            <div class="logo flex text-2xl md:text-3xl font-extrabold tracking-widest">
                <a href="#accueil" class="hover:text-accent text-white dark:text-gray-800 transition">T.<span
                        class="text-accent hover:text-black">A</span></a>
                <ColorModeButton />
            </div>

            <nav class="flex space-x-8">
                <HeaderLink class="link" v-for="link in links" :href="link.href">{{ link.label }}</HeaderLink>
            </nav>

            <div class="flex items-center space-x-4">
                <a class="contact bg-accent text-white font-semibold py-[3px] md:py-1.5 px-3 md:px-4.5 lg:py-2 lg:px-6 rounded-full shadow-lg transition border border-accent hover:bg-transparent hover:text-accent"
                    href="#contact">
                    Me Contacter
                </a>
            </div>

            <button @click="toggleMenu" class="md:hidden text-primary-dark dark:text-primary-light">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8 text-white dark:text-gray-dark" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" v-if="!isMenuOpen">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <component :is="CloseIcon" class="size-5 md:size-6 text-white dark:text-gray-dark" v-else></component>
            </button>
        </div>
        <div v-if="isMenuOpen"
            class="md:hidden bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light">
            <nav class="flex flex-col items-center space-y-4 py-4">
                <a v-for="(link, index) in links" :key="index" :href="link.href"
                    class="hover:text-accent text-white dark:text-gray-dark font-medium transition">
                    {{ link.label }}
                </a>
            </nav>
        </div>
    </header>
</template>
