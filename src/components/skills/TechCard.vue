<template>
  <div class="relative inline-flex flex-col items-center" ref="techCard" v-bind="$attrs">
    <div class="flex flex-col items-center">
      <component :is="icon" class="w-14 h-14 md:w-24 md:h-24 lg:w-[105px] lg:h-[105px]" ref="iconElement"></component>
      <h2 class="font-semibold text-gray-800 dark:text-gray-200">
        {{ name }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const props = defineProps({
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: Object, required: true }
});

const techCard = ref(null);
const iconElement = ref(null);

onMounted(() => {
  gsap.to(techCard.value, {
    y: "+=6",
    duration: 1,
    repeat: -1,
    yoyo: true
  });
  tippy(techCard.value, {
    content: props.description,
    placement: 'top'
  });
});
</script>
