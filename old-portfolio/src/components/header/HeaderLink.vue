<script setup>
defineProps({
    href: {
        type: String,
        required: true,
    },
})
</script>
  
<template>
    <a
      :href="href"
      class="hidden md:block group text-lg font-medium text-white dark:text-gray-800 hover:text-accent dark:hover:text-accent transition"
    >
      <slot></slot>
      <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-white dark:bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
    </a>
</template>