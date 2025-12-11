<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const colorMode = useColorMode()

defineProps<{
  page: IndexCollectionItem
}>()

const getCompanyColor = (company: any) => {
  // Si c'est Upwork (blanc), adapter selon le mode
  if (company.color === '#FFFFFF' || company.color === '#FFF') {
    return colorMode.value === 'dark' ? '#FFFFFF' : '#000000'
  }
  return company.color
}
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url !=='#' ? experience.company.url : undefined"
            :target="experience.company.url !=='#' ? '_blank' : undefined"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-2"
            >
              <ClientOnly>
                <span class="font-medium" :style="{ color: getCompanyColor(experience.company) }">
                  {{ experience.company.name }}
                </span>
                <template #fallback>
                  <span class="font-medium" :style="{ color: experience.company.color === '#FFFFFF' || experience.company.color === '#FFF' ? '#FFFFFF' : experience.company.color }">
                    {{ experience.company.name }}
                  </span>
                </template>
              </ClientOnly>
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
