<script setup lang="ts">
const { t } = useI18n()

const languages = [
  { name: 'JavaScript', icon: 'i-simple-icons:javascript', color: '#F7DF1E', textColor: '#000000' },
  { name: 'TypeScript', icon: 'i-simple-icons:typescript', color: '#3178C6' },
  { name: 'Python', icon: 'i-simple-icons:python', color: '#3776AB' },
  { name: 'PHP', icon: 'i-simple-icons:php', color: '#777BB4' },
  { name: 'Dart', icon: 'i-simple-icons:dart', color: '#0175C2' }
]

const frameworks = [
  { name: 'Vue.js', icon: 'i-simple-icons:vuedotjs', color: '#4FC08D' },
  { name: 'React', icon: 'i-simple-icons:react', color: '#61DAFB', textColor: '#000000' },
  { name: 'Nuxt', icon: 'i-simple-icons:nuxtdotjs', color: '#00DC82' },
  { name: 'Next.js', icon: 'i-simple-icons:nextdotjs', color: '#000000' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons:tailwindcss', color: '#06B6D4' },
  { name: 'Flutter', icon: 'i-simple-icons:flutter', color: '#02569B' },
  { name: 'Django', icon: 'i-simple-icons:django', color: '#092E20' },
  { name: 'FastAPI', icon: 'i-simple-icons:fastapi', color: '#009688' },
  { name: 'Laravel', icon: 'i-simple-icons:laravel', color: '#FF2D20' }
]
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 mb-16',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #title>
      {{ t('techStack.title') }}
    </template>

    <template #description>
      {{ t('techStack.description') }}
    </template>

    <div class="space-y-8 mt-8">
      <!-- Langages -->
      <div>
        <h3 class="text-sm font-medium text-muted mb-4">
          {{ t('techStack.languages') }}
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Motion
            v-for="(lang, index) in languages"
            :key="lang.name"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <div
              class="relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-default bg-elevated hover:shadow-lg transition-all duration-300 cursor-pointer group"
              :style="{
                '--hover-color': lang.color
              }"
            >
              <UIcon
                :name="lang.icon"
                class="text-5xl transition-transform duration-300 group-hover:scale-110"
                :style="{ color: lang.color }"
              />
              <span class="text-sm font-medium text-center">{{ lang.name }}</span>
              <div
                class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="{
                  boxShadow: `0 0 0 2px ${lang.color}20`
                }"
              />
            </div>
          </Motion>
        </div>
      </div>

      <!-- Frameworks & Bibliothèques -->
      <div>
        <h3 class="text-sm font-medium text-muted mb-4">
          {{ t('techStack.frameworksLibs') }}
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Motion
            v-for="(framework, index) in frameworks"
            :key="framework.name"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.5 + index * 0.08 }"
          >
            <div
              class="relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-default bg-elevated hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <UIcon
                :name="framework.icon"
                class="text-4xl transition-transform duration-300 group-hover:scale-110"
                :style="{ color: framework.color }"
              />
              <span class="text-xs font-medium text-center">{{ framework.name }}</span>
              <div
                class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="{
                  boxShadow: `0 0 0 2px ${framework.color}20`
                }"
              />
            </div>
          </Motion>
        </div>
      </div>

      <!-- Lien vers projets -->
      <Motion
        :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 1 }"
        class="text-end mt-8"
      >
        <ULink
          to="/projects"
          class="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4"
        >
          Découvrir mes projets
          <UIcon name="i-lucide-arrow-right" class="size-4" />
        </ULink>
      </Motion>
    </div>
  </UPageSection>
</template>
