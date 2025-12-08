<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const languageOptions = computed(() => {
  return locales.value.map(l => ({
    value: l.code,
    label: l.code.toUpperCase()
  }))
})

const selectedLocale = computed({
  get: () => locale.value,
  set: (value) => setLocale(value as 'fr' | 'en')
})
</script>

<template>
  <USelect
    v-model="selectedLocale"
    :items="languageOptions"
    size="xs"
    variant="ghost"
    color="neutral"
  />
</template>
