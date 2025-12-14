<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()

// Données des entreprises avec leurs couleurs
const companies = {
  upwork: { name: 'Upwork', url: 'https://www.upwork.com/freelancers/thierrya?mp_source=share', color: '#FFFFFF' },
  polygone: { name: 'Polygone +', url: '#', color: '#E0AD78' },
  transimpex: { name: 'Transimpex BJ', url: '#', color: '#5088A1' }
}

const experiences = computed(() => [
  {
    position: t('experience.items.freelance.position'),
    date: t('experience.items.freelance.date'),
    company: companies.upwork
  },
  {
    position: t('experience.items.polygone.position'),
    date: t('experience.items.polygone.date'),
    company: companies.polygone
  },
  {
    position: t('experience.items.transimpex.position'),
    date: t('experience.items.transimpex.date'),
    company: companies.transimpex
  }
])

const getCompanyColor = (company: any) => {
  if (company.color === '#FFFFFF' || company.color === '#FFF') {
    return colorMode.value === 'dark' ? '#FFFFFF' : '#000000'
  }
  return company.color
}
</script>

<template>
  <UPageSection
    :title="t('experience.title')"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in experiences"
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
            <div class="inline-flex items-center gap-2">
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
