<template>
    <a :href="href" v-bind="$attrs" class="flex items-center hover:text-accent-light my-2">
        <component :is="icon" class="text-accent-light"></component>
        <p class="ms-3">{{ label }}</p>
    </a>
</template>

<script setup>

const props = defineProps({
    icon: { type: [String, Object], required: true },
    href: { type: String, required: true },
    label: { type: String, required: true },
});

</script>