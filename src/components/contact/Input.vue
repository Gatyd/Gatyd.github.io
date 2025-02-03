<template>
    <div class="input flex flex-col">
        <label class="font-semibold my-2" :for="label">{{ label }}</label>
        <input :type="type" v-model="model" :id="label" class="bg-transparent border border-gray-500 rounded-lg p-2" />
    </div>
</template>
<script setup lang="ts">
const model = defineModel()
defineProps({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "text"
    },
})
</script>