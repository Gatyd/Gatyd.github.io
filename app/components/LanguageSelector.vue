<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value)
})

const switchLocale = (code: string) => {
  setLocale(code)
}
</script>

<template>
  <UDropdownMenu>
    <UButton
      variant="ghost"
      color="neutral"
      :label="currentLocale?.code.toUpperCase()"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
    />

    <template #content>
      <UDropdownMenuItem
        v-for="loc in availableLocales"
        :key="loc.code"
        :label="loc.name"
        @click="switchLocale(loc.code)"
      />
    </template>
  </UDropdownMenu>
</template>
