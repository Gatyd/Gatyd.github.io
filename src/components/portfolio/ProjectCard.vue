<template>
  <div ref="cardRef"
    class="project relative bg-white dark:bg-gray-dark rounded-2xl overflow-hidden shadow-lg project-card"
    @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleCardClick">
    
    <div class="h-48 bg-cover bg-center project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>

    <div class="p-4">
      <h3 class="text-lg font-bold">
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-light mb-2">
        {{ project.description }}
      </p>
    </div>

    <div
      class="absolute inset-0 bg-black bg-opacity-30 flex flex-col pt-[72px] items-center opacity-0 hover:opacity-100 transition-opacity">
      <button v-if="project.liveUrl"
        class="bg-accent hover:bg-black hover:bg-opacity-50 hover:text-accent border border-accent text-white px-4 py-2 rounded-lg font-medium mb-2"
        @click.stop="openLink(project.liveUrl)">
        <component :is="EyeIcon"></component>
      </button>
      <button v-if="project.videoDemo"
        class="bg-accent hover:bg-black hover:bg-opacity-50 border-accent hover:text-accent text-white px-4 py-2 rounded-lg font-medium"
        @click.stop="$emit('openModal', project)">
        <component :is="PlayIcon"></component>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import EyeIcon from '../icons/portfolio/EyeIcon.vue';
import PlayIcon from '../icons/portfolio/PlayIcon.vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  animate: Boolean,
});

const emit = defineEmits(['openModal']);

const cardRef = ref(null);
const isMobile = ref(false);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleMouseEnter = () => {
  if (!isMobile.value) {
    gsap.to(cardRef.value, { scale: 1.05, duration: 0.3, boxShadow: '0px 4px 15px rgba(255, 99, 71, 0.5)' });
  }
};

const handleMouseLeave = () => {
  if (!isMobile.value) {
    gsap.to(cardRef.value, { scale: 1, duration: 0.3, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' });
  }
};

const handleCardClick = () => {
  if (isMobile.value) {
    if (props.project.liveUrl) {
      openLink(props.project.liveUrl);
    } else if (props.project.videoDemo) {
      emit('openModal', props.project);
    }
  }
};

onBeforeUnmount(() => {
  gsap.killTweensOf(cardRef.value);
});

onMounted(() => {
  checkIsMobile();
  if (props.animate) {
    gsap.from(
      cardRef.value, 
      { y: 100, opacity: 0, duration: 1 }
    );
  }
});

const openLink = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.project-card {
  perspective: 1000px;
}
</style>