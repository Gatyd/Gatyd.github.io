<template>
  <section id="portfolio" class="py-16">
    <div class="px-6">

      <h2 class="projects text-4xl font-bold font-poppins text-accent text-center mb-12">
        Mes Projets
      </h2>

      <div class="flex flex-wrap justify-center space-x-4 mb-8">
        <button v-for="filter in filters" :key="filter" @click="setFilter(filter)" :class="[
          'filter px-4 py-2 rounded-lg font-medium mb-4',
          activeFilter === filter ? 'bg-accent-light text-white' : 'bg-white dark:bg-gray-dark text-gray-dark dark:text-gray-light'
        ]">
          <div class="flex items-center">
            <component v-if="filter !== 'Tous'"
              :is="filter === 'Web' ? WebIcon : filter === 'Mobile' ? MobileIcon : UXIcon" class="me-2 size-5">
            </component>
            {{ filter }}
          </div>
        </button>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" :animate="animate"
            @openModal="openModal" />
        </div>
      </div>
    </div>

    <ProjectModal v-if="showModal" :project="modalProject" :showModal="showModal"
      @update:showModal="showModal = $event;" />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import WebIcon from '../icons/WebIcon.vue'
import MobileIcon from '../icons/MobileIcon.vue'
import UXIcon from '../icons/UXIcon.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { projects } from '@/datas/projects'

gsap.registerPlugin(ScrollTrigger);

const filters = ref(['Tous', 'Ui / Ux', 'Web', 'Mobile'])
const activeFilter = ref('Tous')
const animate = ref(false);

const filteredProjects = computed(() =>
  activeFilter.value === 'Tous'
    ? projects
    : projects.filter(p => activeFilter.value === p.type)
)

const setFilter = (filter) => {
  if (!animate.value) {
    animate.value = true;
  }
  activeFilter.value = filter;
};

const showModal = ref(false)
const modalProject = ref(null)

const openModal = (project) => {
  modalProject.value = project
  showModal.value = true
}
onMounted(() => {
  const projectsClass = gsap.utils.toArray('.project');
  const filters = gsap.utils.toArray('.filter');
  gsap.fromTo(
    filters,
    {
      opacity: 0,
      x: -50
    },
    {
      scrollTrigger: {
        trigger: '.projects',
        start: "top 80%",
        end: "top 20%",
      },
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 2
    }
  )

  gsap.fromTo(
    projectsClass,
    {
      opacity: 0,
      x: () => Math.floor(Math.random() * 41) - 20,
      y: () => Math.floor(Math.random() * 201) - 100,
    },
    {
      scrollTrigger: {
        trigger: filters[filters.length - 1],
        start: "top 80%",
        end: "top 20%"
      },
      opacity: 1,
      x: 0,
      y: 0,
      delay: 0.3,
      stagger: 0.8,
      duration: 1,
    }
  );
})
</script>