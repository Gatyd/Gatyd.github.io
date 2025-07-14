<template>
  <section class="flex lg:flex-col xl:flex-row items-center justify-center mt-[52px] md:mt-14 lg:mt-16 py-4 md:py-8 xl:py-16 pb-20"
    id="about">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-8 items-center">

      <div
        class="flex flex-row lg:flex-col lg:col-span-2 xl:col-span-1 justify-between md:justify-start items-center ps-2 pe-6 lg:ps-6 lg:pe-6 ">
        <div
          class="w-40 h-40 lg:w-96 lg:h-96 lg:mx-auto rounded-full overflow-hidden shadow-lg transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-out"
          @mouseover="animateImage" @mouseleave="resetImage">
          <img src="/moi.png" alt="Thierry Aplogan" class="w-full h-full object-cover" ref="profileImage" />
        </div>
        <div class="mt-2 md:ms-5 lg:ms-0">
          <span class="text-xl font-bold lg:hidden">Thierry Aplogan</span>
          <div class="md:flex md:flex-row lg:hidden xl:block xl:flex-col md:gap-10 lg:gap-0">
            <Social href="https://wa.me/+22943745963" target="blank" :icon="WhatsapIcon"
              label="(+229) 01 43 74 59 63" />
            <Social href="mailto:devgatyd@gmail.com" :icon="MailIcon" label="devgatyd@gmail.com" />
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 xl:col-span-2 px-6 lg:pe-6">
        <h2 class="text-4xl font-poppins font-bold mb-4 text-accent relative" ref="header">
          <span class="">
            À propos de moi
          </span>
        </h2>
        <p class="text-lg font-open-sans mb-6 leading-relaxed text-gray-800 dark:text-white relative group"
          ref="description">
          Je suis <span class="text-xl font-bold hidden lg:inline">Thierry Aplogan</span><span
            class="hidden lg:inline">,</span> un développeur passionné par la
          création
          d'expériences web et mobiles.
          Mon approche combine <span class="font-semibold">créativité</span>, <span
            class="font-semibold">optimisation</span>, et <span class="font-semibold">innovation</span>.
          J’aime transformer des idées complexes en solutions intuitives.
        </p>
        <div class="hidden lg:flex lg:gap-10 xl:hidden ">
          <Social href="https://wa.me/+22943745963" target="blank" :icon="WhatsapIcon" label="(+229) 01 43 74 59 63" />
          <Social href="mailto:devgatyd@gmail.com" :icon="MailIcon" label="devgatyd@gmail.com" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden xl:grid">
          <ServiceCard v-for="(service, index) in services" :key="index" :icon="service.icon" :title="service.title" />
        </div>
      </div>
    </div>
    <div class="hidden grid-cols-2 gap-4 lg:grid xl:hidden px-6">
      <ServiceCard v-for="(service, index) in services" :key="index" :icon="service.icon" :title="service.title" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ServiceCard from './ServiceCard.vue';
import MobileIcon from '../icons/MobileIcon.vue';
import WebIcon from '../icons/WebIcon.vue';
import SolutionIcon from '../icons/about/SolutionIcon.vue';
import BackendIcon from '../icons/about/BackendIcon.vue';
import Social from './Social.vue';
import WhatsapIcon from '../icons/about/WhatsapIcon.vue';
import MailIcon from '../icons/about/MailIcon.vue';

const profileImage = ref(null);
const header = ref(null);
const description = ref(null);

const services = [
  {
    icon: MobileIcon, title: 'Développement d\'applications mobiles'
  },
  {
    icon: WebIcon, title: 'Création de sites web modernes'
  },
  {
    icon: BackendIcon, title: 'Solutions backend robustes'
  },
  {
    icon: SolutionIcon, title: 'Approche orientée solution'
  },
];

onMounted(() => {

  gsap.fromTo(
    profileImage.value,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
  );

  gsap.fromTo(
    header.value,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
  );

  gsap.fromTo(
    description.value,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power2.out' }
  );

  gsap.fromTo(
    gsap.utils.toArray('.service'),
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 2,
      delay: 1,
      ease: 'power2.out',
    }
  );
});

function animateImage() {
  gsap.to(profileImage.value, {
    scale: 1.1,
    rotation: 10,
    duration: 0.5,
    ease: 'power1.out',
  });
}

function resetImage() {
  gsap.to(profileImage.value, {
    scale: 1,
    rotation: 0,
    duration: 0.5,
    ease: 'power1.inOut',
  });
}
</script>

<style scoped>
section {
  transition: background-color 0.5s, color 0.5s;
}
</style>
