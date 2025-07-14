<script setup>
import AboutSection from './components/about/AboutSection.vue';
import ContactSection from './components/contact/ContactSection.vue';
import PHeader from './components/header/PHeader.vue';
import PortfolioSection from './components/portfolio/PortfolioSection.vue';
import SkillsSection from './components/skills/SkillsSection.vue';

</script>

<template>
  <PHeader />
  <main class="bg-gray-light pb-16 text-gray-dark dark:bg-primary dark:text-white">
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
  </main>
</template>

<style>
/* Scrollbar très petite et simple */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.6);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 114, 128, 0.8);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.6);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 114, 128, 0.8);
}

/* Pour Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.6) transparent;
}

.dark * {
  scrollbar-color: rgba(75, 85, 99, 0.6) transparent;
}
</style>