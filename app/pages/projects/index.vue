<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('projectsPage').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

// Trier les projets par ordre (si défini) sinon par date
const sortedProjects = computed(() => {
  if (!projects.value) return []
  return [...projects.value].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order
    }
    if (a.order !== undefined) return -1
    if (b.order !== undefined) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

// Fonction pour déterminer le lien du projet
const getProjectLink = (project: any) => {
  // Si le projet a un lien externe (hébergé), rediriger directement
  if (project.links && project.links.length > 0) {
    return project.links[0].to
  }
  // Sinon, aller vers la page détail avec slug
  return `/projects/${project.slug}`
}

// Vérifier si c'est un lien externe
const isExternalLink = (project: any) => {
  return !!(project.links && project.links.length > 0)
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <UButton
          :to="`mailto:${global.email}`"
          label="M'envoyer un email"
          icon="i-lucide-mail"
          color="neutral"
        />
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <Motion
        v-for="(project, index) in sortedProjects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="getProjectLink(project)"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          :target="isExternalLink(project) ? '_blank' : undefined"
          :external="isExternalLink(project)"
          class="group"
          :ui="{
            wrapper: 'max-sm:order-last'
          }"
        >
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <div class="flex items-center gap-2 mb-4">
              <UBadge
                v-for="tech in project.technologies?.slice(0, 4)"
                :key="tech"
                :label="tech"
                color="neutral"
                variant="outline"
                size="sm"
              />
              <UBadge
                v-if="project.technologies && project.technologies.length > 4"
                :label="`+${project.technologies.length - 4}`"
                color="neutral"
                variant="subtle"
                size="sm"
              />
            </div>
            <ULink
              :to="getProjectLink(project)"
              :target="isExternalLink(project) ? '_blank' : undefined"
              :external="isExternalLink(project)"
              class="text-sm text-primary flex items-center"
            >
              {{ isExternalLink(project) ? 'Voir le site' : 'Voir la démo' }}
              <UIcon
                :name="isExternalLink(project) ? 'i-lucide-external-link' : 'i-lucide-arrow-right'"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>
          <img
            :src="project.cover"
            :alt="project.title"
            class="object-cover w-full h-48 rounded-lg"
          >
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
