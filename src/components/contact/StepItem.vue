<template>
    <li class="step flex items-start">
        <div
            class="w-8 h-8 p-2 md:p-0 lg:p-2 xl:p-0 bg-tranparent text-accent border border-accent flex justify-center items-center rounded-full font-bold mr-4">
            {{ position }}
        </div>
        <div class=" max-w-[600px]">
            <h4 class="font-bold">{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </li>
</template>
<script setup lang="ts">
defineProps({
    position: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})
</script>