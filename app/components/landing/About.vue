<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UPageSection
    :title="t('about.title')"
    :description="t('about.description')"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted whitespace-pre-line',
      links: 'justify-start'
    }"
  >
    <template #links>
      <Motion
        :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <ULink
          to="/about"
          class="inline-flex items-center text-primary gap-1 text-sm font-medium hover:underline underline-offset-4"
        >
          {{ t('about.link') }}
          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </ULink>
      </Motion>
    </template>
  </UPageSection>
</template>
