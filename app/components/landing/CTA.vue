<script setup lang="ts">
const { t } = useI18n()
const { global } = useAppConfig()
</script>

<template>
  <UPageSection class="bg-muted/30">
    <div class="text-center max-w-2xl mx-auto">
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          {{ t('cta.title') }}
        </h2>
        <p class="text-lg text-muted-foreground mb-8">
          {{ t('cta.description') }}
        </p>
        <UButton
          :to="`mailto:${global.email}`"
          size="xl"
          color="primary"
          :label="t('cta.button')"
          trailing-icon="i-lucide-arrow-right"
        />
      </Motion>
    </div>
  </UPageSection>
</template>
