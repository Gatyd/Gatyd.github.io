<template>
  <Teleport to="body">
    <div v-if="showModal" v-show="!isPIPActive"
      class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white dark:bg-gray-dark text-gray-dark dark:text-white p-6 rounded-lg shadow-lg w-11/12 max-w-5xl flex flex-col max-h-[90vh]">
        
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-accent">{{ project.name }}</h3>
          <component :is="CloseIcon" @click="closeModal" class="text-gray-dark dark:text-white cursor-pointer"></component>
        </div>

        <div class="flex flex-col xl:flex-row overflow-y-auto">
          <div class="flex-1">
            <video ref="videoPlayer" controls class="w-full h-full rounded-lg">
              <source :src="project.videoDemo" type="video/mp4" />
              Votre navigateur ne supporte pas les vidéos.
            </video>
            <p class="mt-4">{{ project.description }}</p>
          </div>
          <div class="xl:ms-4 mt-4 xl:mt-0 min-w-60">
            <h4 class="text-lg font-semibold mb-2 text-accent">Chapitres</h4>
            <ul class="border-t border-gray-300 pt-4 overflow-y-auto">
              <li v-for="chapter in project.chapters" :key="chapter.time"
                class="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg" @click="seekTo(chapter.time)">
                {{ chapter.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import CloseIcon from '../icons/CloseIcon.vue';

const props = defineProps({
  project: Object,
  showModal: Boolean
});
const emit = defineEmits(['update:showModal']);

const videoPlayer = ref(null);
const isPIPActive = ref(false);
const lastTime = ref(0);

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const closeModal = () => {
  emit('update:showModal', false);
  enableScroll();
};

const handlePIPEnter = () => {
  isPIPActive.value = true;
};

const handlePIPLeave = () => {
  isPIPActive.value = false;
  if (videoPlayer.value) {
    videoPlayer.value.currentTime = lastTime.value;
    videoPlayer.value.play();
  }
};

const seekTo = (time) => {
  if (videoPlayer.value) {
    videoPlayer.value.currentTime = time;
  }
};

const updateLastTime = () => {
  if (videoPlayer.value) {
    lastTime.value = videoPlayer.value.currentTime;
  }
};

onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.addEventListener('enterpictureinpicture', handlePIPEnter);
    videoPlayer.value.addEventListener('leavepictureinpicture', handlePIPLeave);
    videoPlayer.value.addEventListener('timeupdate', updateLastTime);
  }
  disableScroll()
});

onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.removeEventListener('enterpictureinpicture', handlePIPEnter);
    videoPlayer.value.removeEventListener('leavepictureinpicture', handlePIPLeave);
    videoPlayer.value.removeEventListener('timeupdate', updateLastTime);
  }
  enableScroll()
});

</script>
