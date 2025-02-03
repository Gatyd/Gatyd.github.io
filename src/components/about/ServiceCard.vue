<template>
    <div class="service relative flex flex-col items-center p-6 bg-gray-light dark:bg-primary rounded-lg shadow-lg dark:shadow-2xl hover:text-accent"
        ref="serviceCard" @mouseenter="animate" @mouseleave="resetAnimation">
        <div class="icon w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-dark mb-4" ref="icone">
            <component :is="icon"></component>
        </div>

        <h3
            class="text-xl font-semibold text-center  mb-2">
            {{ title }}
        </h3>
    </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
    icon: { type: [String, Object], required: true },
    title: { type: String, required: true },
});

const serviceCard = ref(null);
const icone = ref(null);

function animate(){
    gsap.to(
        serviceCard.value,
        { scale: 1.05, duration: 0.5 },
    );
    gsap.to(
        icone.value,
        { rotate: 360, ease: "bounce.out", duration: 1 },
    );
}

function resetAnimation(){
    gsap.to(
        serviceCard.value,
        { scale: 1.00, duration: 0.5 },
    );
    gsap.to(
        icone.value,
        { rotate: 0, duration: 1 },
    );
}
</script>