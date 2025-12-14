<script setup lang="ts">
const { t, tm, te } = useI18n()
const { global } = useAppConfig()

// Récupérer les données de timeline depuis les traductions
const experiences = computed(() => {
  const items = tm('timeline.experiences') as any[]
  const { t: tFn, te: teFn } = useI18n()
  return items.map((_, index) => {
    const descriptions = tm(`timeline.experiences.${index}.description`) as any[]
    return {
      title: tFn(`timeline.experiences.${index}.title`),
      date: tFn(`timeline.experiences.${index}.date`),
      company: teFn(`timeline.experiences.${index}.company`) ? tFn(`timeline.experiences.${index}.company`) : undefined,
      description: descriptions.map((__, dIndex) => tFn(`timeline.experiences.${index}.description.${dIndex}`))
    }
  })
})
const education = computed(() => {
  const items = tm('timeline.education') as any[]
  const { t: tFn, te: teFn } = useI18n()
  return items.map((_, index) => {
    const descriptions = tm(`timeline.education.${index}.description`) as any[]
    return {
      title: tFn(`timeline.education.${index}.title`),
      date: tFn(`timeline.education.${index}.date`),
      company: teFn(`timeline.education.${index}.company`) ? tFn(`timeline.education.${index}.company`) : undefined,
      description: descriptions.map((__, dIndex) => tFn(`timeline.education.${index}.description.${dIndex}`))
    }
  })
})
const distinctions = computed(() => {
  const items = tm('timeline.distinctions') as any[]
  const { t: tFn, te: teFn } = useI18n()
  return items.map((_, index) => {
    const descriptions = tm(`timeline.distinctions.${index}.description`) as any[]
    return {
      title: tFn(`timeline.distinctions.${index}.title`),
      date: tFn(`timeline.distinctions.${index}.date`),
      company: teFn(`timeline.distinctions.${index}.company`) ? tFn(`timeline.distinctions.${index}.company`) : undefined,
      description: descriptions.map((__, dIndex) => tFn(`timeline.distinctions.${index}.description.${dIndex}`))
    }
  })
})

useSeoMeta({
  title: t('seo.about.title'),
  ogTitle: t('seo.about.title'),
  description: t('seo.about.description'),
  ogDescription: t('seo.about.description')
})
</script>

<template>
  <UPage>
    <UPageHero :title="t('about.page.title')" :description="t('about.page.description')" orientation="horizontal" :ui="{
      container: 'lg:flex sm:flex-row items-center',
      title: '!mx-0 text-left',
      description: '!mx-0 text-left',
      links: 'justify-start'
    }">
      <img :src="global.picture?.light" :alt="global.picture?.alt"
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg object-cover" />
    </UPageHero>
    <UPageSection :ui="{
      container: '!pt-0'
    }">
      <!-- Introduction -->
      <p class="text-lg text-muted mb-8 whitespace-pre-line">{{ t('about.page.intro') }}</p>

      <!-- Expériences professionnelles -->
      <div>
        <h2 class="text-2xl font-bold mb-8">
          {{ t('about.sections.experiences') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(exp, index) in experiences" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
            <h4 class="text-lg font-semibold mb-1 leading-tight">{{ exp.title }}</h4>
            <h5 class="text-sm font-medium text-muted mb-3">{{ exp.date }}</h5>
            <p v-if="exp.company" class="flex items-center gap-2 text-primary font-medium mb-3">
              <UIcon name="i-lucide-building-2" class="size-4" />
              {{ exp.company }}
            </p>
            <ul class="mt-3 pl-5 list-disc space-y-2">
              <li v-for="(desc, i) in exp.description" :key="i" class="text-muted leading-relaxed marker:text-muted/60">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Éducation -->
      <div>
        <h2 class="text-2xl font-bold mb-8">
          {{ t('about.sections.education') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(edu, index) in education" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
            <h4 class="text-lg font-semibold mb-1 leading-tight">{{ edu.title }}</h4>
            <h5 class="text-sm font-medium text-muted mb-3">{{ edu.date }}</h5>
            <p v-if="edu.company" class="flex items-center gap-2 text-primary font-medium mb-3">
              <UIcon name="i-lucide-building-2" class="size-4" />
              {{ edu.company }}
            </p>
            <ul class="mt-3 pl-5 list-disc space-y-2">
              <li v-for="(desc, i) in edu.description" :key="i" class="text-muted leading-relaxed marker:text-muted/60">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Distinctions -->
      <div>
        <h2 class="text-2xl font-bold mb-8">
          {{ t('about.sections.distinctions') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(dist, index) in distinctions" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
            <h4 class="text-lg font-semibold mb-1 leading-tight">{{ dist.title }}</h4>
            <h5 class="text-sm font-medium text-muted mb-3">{{ dist.date }}</h5>
            <p v-if="dist.company" class="flex items-center gap-2 text-primary font-medium mb-3">
              <UIcon name="i-lucide-building-2" class="size-4" />
              {{ dist.company }}
            </p>
            <ul class="mt-3 pl-5 list-disc space-y-2">
              <li v-for="(desc, i) in dist.description" :key="i" class="text-muted leading-relaxed marker:text-muted/60">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Vision du développement -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">{{ t('about.page.visionTitle') }}</h2>
        <p class="text-lg text-muted whitespace-pre-line">{{ t('about.page.vision') }}</p>
      </div>
    </UPageSection>
  </UPage>
</template>
