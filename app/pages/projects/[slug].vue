<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: allProjects } = await useAsyncData(`projects-all`, () => {
    return queryCollection('projects').all()
})

const project = computed(() => {
    if (!allProjects.value) return null
    return allProjects.value.find(p => p.slug === slug)
})

// État du lecteur vidéo
const videoRef = ref<HTMLVideoElement>()
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isFullscreen = ref(false)

// Mettre à jour le temps actuel
const updateTime = () => {
    if (videoRef.value) {
        currentTime.value = videoRef.value.currentTime
    }
}

// Basculer lecture/pause
const togglePlay = () => {
    if (!videoRef.value) return
    if (isPlaying.value) {
        videoRef.value.pause()
    } else {
        videoRef.value.play()
    }
}

// Sauter à un chapitre
const jumpToChapter = (time: number) => {
    if (!videoRef.value) return
    videoRef.value.currentTime = time
    if (!isPlaying.value) {
        videoRef.value.play()
    }
}

// Formater le temps (secondes -> MM:SS)
const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Événements vidéo
onMounted(() => {
    if (videoRef.value) {
        videoRef.value.addEventListener('play', () => isPlaying.value = true)
        videoRef.value.addEventListener('pause', () => isPlaying.value = false)
        videoRef.value.addEventListener('timeupdate', updateTime)
        videoRef.value.addEventListener('loadedmetadata', () => {
            if (videoRef.value) {
                duration.value = videoRef.value.duration
            }
        })
    }
})

// Basculer plein écran
const toggleFullscreen = () => {
    if (!videoRef.value) return
    if (!document.fullscreenElement) {
        videoRef.value.requestFullscreen()
        isFullscreen.value = true
    } else {
        document.exitFullscreen()
        isFullscreen.value = false
    }
}

watchEffect(() => {
    if (project.value) {
        useSeoMeta({
            title: project.value.title,
            ogTitle: project.value.title,
            description: project.value.description,
            ogDescription: project.value.description,
            ogImage: project.value.cover
        })
    }
})
</script>

<template>
    <UContainer v-if="project">
        <!-- Retour -->
        <div class="mb-7 mt-14 md:mb-10 md:mt-20">
            <a href="/projects"
                class="focus-visible:outline-primary text-muted hover:text-default transition-colors text-sm flex items-center gap-1">
                <UIcon name="i-lucide-chevron-left" class="size-4" />
                Projets
            </a>
        </div>

        <!-- Header -->
        <div class="mb-12">
            <div class="flex items-start justify-between gap-6 mb-6">
                <div class="flex-1">
                    <h1 class="text-4xl font-bold mb-3">{{ project.title }}</h1>
                    <p class="text-lg text-muted">{{ project.description }}</p>
                </div>
                <UBadge :label="project.type" size="lg" color="primary" variant="subtle" class="shrink-0" />
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
                <UBadge v-for="tech in project.technologies" :key="tech" :label="tech" color="neutral"
                    variant="outline" />
            </div>
        </div>

        <!-- Vidéo Player + Chapitres -->
        <div v-if="project.videoDemo" class="mb-16">
            <!-- Lecteur vidéo -->
            <div class="relative bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 group mb-8">
                <video ref="videoRef" :src="project.videoDemo" class="w-full aspect-video object-contain" @click="togglePlay" />

                <!-- Contrôles overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div class="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto space-y-3">
                        <!-- Timeline -->
                        <input v-model="currentTime" type="range" min="0" :max="duration"
                            class="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary"
                            @input="(e) => videoRef && (videoRef.currentTime = parseFloat((e.target as HTMLInputElement).value))">

                        <!-- Boutons -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <button
                                    class="size-8 flex items-center justify-center rounded-md bg-neutral-800/80 hover:bg-neutral-700/80 transition-colors"
                                    @click="togglePlay">
                                    <UIcon :name="isPlaying ? 'i-lucide-pause' : 'i-lucide-play'"
                                        class="size-4 text-white" />
                                </button>
                                <span class="text-white text-xs font-mono">
                                    {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                                </span>
                            </div>
                            <button
                                class="size-8 flex items-center justify-center rounded-md bg-neutral-800/80 hover:bg-neutral-700/80 transition-colors"
                                @click="toggleFullscreen">
                                <UIcon :name="isFullscreen ? 'i-lucide-minimize' : 'i-lucide-maximize'"
                                    class="size-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chapitres en dessous -->
            <div v-if="project.chapters">
                <h3 class="text-sm font-semibold mb-4 text-muted uppercase tracking-wide">Chapitres</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <button v-for="(chapter, index) in project.chapters" :key="index"
                        class="text-left px-3 py-2.5 rounded-md transition-colors group" 
                        :class="currentTime >= chapter.time && (index === (project.chapters?.length ?? 0) - 1 || currentTime < (project.chapters?.[index + 1]?.time ?? Infinity))
                            ? 'bg-primary/5 border border-primary/20'
                            : 'hover:bg-elevated border border-transparent'" 
                        @click="jumpToChapter(chapter.time)">
                        <div class="flex items-start gap-2">
                            <UIcon name="i-lucide-circle-play"
                                class="size-3.5 shrink-0 mt-0.5 transition-transform group-hover:scale-110" 
                                :class="currentTime >= chapter.time && (index === (project.chapters?.length ?? 0) - 1 || currentTime < (project.chapters?.[index + 1]?.time ?? Infinity))
                                    ? 'text-primary'
                                    : 'text-muted'" />
                            <div class="flex-1 min-w-0">
                                <div class="text-xs font-medium truncate">{{ chapter.title }}</div>
                                <div class="text-[10px] text-muted font-mono mt-0.5">{{ formatTime(chapter.time) }}</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Lien externe si pas de vidéo -->
        <div v-else-if="project.links" class="mb-16">
            <div class="px-6 py-5 rounded-lg border border-border bg-elevated/50">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <h3 class="font-semibold mb-1">Voir le projet</h3>
                        <p class="text-sm text-muted">Ce projet est hébergé et accessible en ligne.</p>
                    </div>
                    <UButton v-for="link in project.links" :key="link.to" :label="link.label" :to="link.to"
                        :icon="link.icon" color="primary" target="_blank" external />
                </div>
            </div>
        </div>
    </UContainer>
</template>
