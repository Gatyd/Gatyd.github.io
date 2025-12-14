<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('seo.home.title'),
  ogTitle: t('seo.home.title'),
  description: t('seo.home.description'),
  ogDescription: t('seo.home.description')
})
</script>

<template>
  <UPage>
    <LandingHero />
    <UPageSection :ui="{
      container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
    }">
      <LandingAbout />
      <LandingWorkExperience />
    </UPageSection>
    <LandingTechStack />
    <LandingTestimonials />
    <LandingFAQ />
  </UPage>
</template>
