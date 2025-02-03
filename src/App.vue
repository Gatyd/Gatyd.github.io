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