<script setup lang="ts">
const { t } = useI18n()

const techStack = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#4FC08D' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: '#06B6D4' },
  { name: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' },
  { name: 'Django', icon: 'i-simple-icons-django', color: '#092E20' },
  { name: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' },
  { name: 'GitHub', icon: 'i-simple-icons-github', color: '#181717' },
  { name: 'GitHub Copilot', icon: 'i-simple-icons-githubcopilot', color: '#000000' }
]
</script>

<template>
  <UPageSection
    :title="t('techStack.title')"
    :description="t('techStack.description')"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <Motion
        v-for="(tech, index) in techStack"
        :key="tech.name"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: index * 0.1 }"
      >
        <div
          class="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300 cursor-pointer group"
        >
          <div
            class="text-4xl transition-transform duration-300 group-hover:scale-110"
            :class="tech.icon"
            :style="{ color: tech.color }"
          />
          <span class="text-sm font-medium text-center">{{ tech.name }}</span>
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
