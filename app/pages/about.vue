<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" orientation="horizontal" :ui="{
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
      <MDC :value="page.intro" unwrap="p" class="mb-4" />

      <!-- Expériences professionnelles -->
      <div>
        <h2 class="text-2xl font-bold mb-8">
          Expériences professionnelles
        </h2>
        <div class="space-y-8">
          <div v-for="(exp, index) in page.experiences" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
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
          Éducation
        </h2>
        <div class="space-y-8">
          <div v-for="(edu, index) in page.education" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
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
          Distinctions
        </h2>
        <div class="space-y-8">
          <div v-for="(dist, index) in page.distinctions" :key="index" class="relative pl-6 mb-8 border-l-2 border-muted">
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
      <MDC :value="page.vision" unwrap="p" class="mb-12" />

      <!-- Images Polaroid (commentées pour l'instant) -->
      <div v-if="page.images && page.images.length > 0"
        class="flex flex-row justify-center items-center py-10 -space-x-8">
        <PolaroidItem v-for="(image, index) in page.images" :key="index" :image="image" :index />
      </div>
    </UPageSection>
  </UPage>
</template>
