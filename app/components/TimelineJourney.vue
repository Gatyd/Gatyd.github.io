<script setup lang="ts">
defineProps<{
  items: Array<{
    year: string
    title: string
    company?: string
    description: string[]
  }>
}>()
</script>

<template>
  <div class="relative">
    <div class="space-y-8">
      <Motion
        v-for="(item, index) in items"
        :key="index"
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: index * 0.1 }"
        class="relative flex gap-6"
      >
        <!-- Point sur la timeline avec ligne qui s'arrête à la fin -->
        <div class="relative shrink-0">
          <!-- Rond blanc avec bordure -->
          <div class="size-4 rounded-full bg-elevated border-2 border-border relative z-10" />
          <!-- Ligne qui part du rond et va jusqu'à la fin du contenu -->
          <div
            v-if="index < items.length - 1"
            class="absolute left-1/2 top-4 bottom-0 w-0.5 bg-border -translate-x-1/2"
          />
        </div>

        <!-- Contenu -->
        <div class="flex-1 pb-4">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="text-sm font-mono text-muted">{{ item.year }}</span>
            <span class="text-xs text-muted">•</span>
            <h3 class="text-lg font-semibold">
              {{ item.title }}
            </h3>
          </div>
          <p
            v-if="item.company"
            class="text-sm text-primary font-medium mb-3 flex items-center gap-2"
          >
            <UIcon name="i-lucide-building-2" class="size-4" />
            {{ item.company }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="(desc, i) in item.description"
              :key="i"
              class="text-sm text-muted flex gap-2"
            >
              <span class="mt-0.5">•</span>
              <span>{{ desc }}</span>
            </li>
          </ul>
        </div>
      </Motion>
    </div>
  </div>
</template>
