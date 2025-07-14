<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import VueIcon from '../icons/skills/VueIcon.vue';
import TechCard from './TechCard.vue';
import TailwindCSSIcon from '../icons/skills/TailwindCSSIcon.vue';
import NuxtJsIcon from '../icons/skills/NuxtJsIcon.vue';
import FlutterIcon from '../icons/skills/FlutterIcon.vue';
import DjangoIcon from '../icons/skills/DjangoIcon.vue';
import MySqlIcon from '../icons/skills/MySqlIcon.vue';
import FigmaIcon from '../icons/tools/FigmaIcon.vue';
import VSCodeIcon from '../icons/tools/VSCodeIcon.vue';
import PostmanIcon from '../icons/tools/PostmanIcon.vue';
import GitHubIcon from '../icons/tools/GitHubIcon.vue';
import GitIcon from '../icons/tools/GitIcon.vue';
import AndroidStudioIcon from '../icons/tools/AndroidStudioIcon.vue';

const techs = [
{ 
        name: "Vue JS", 
        icon: VueIcon, 
        description: "Développement d'applications web dynamiques et réactives avec une structure modulaire." 
    },
    { 
        name: "Tailwind CSS", 
        icon: TailwindCSSIcon, 
        description: "Création d'interfaces utilisateur modernes et responsives grâce à un système de classes utilitaires." 
    },
    { 
        name: "Nuxt JS", 
        icon: NuxtJsIcon, 
        description: "Construction de sites web statiques et d'applications côté serveur avec Vue JS, optimisés pour le SEO." 
    },
    { 
        name: "Flutter", 
        icon: FlutterIcon, 
        description: "Développement d'applications mobiles multiplateformes avec une interface utilisateur native et fluide." 
    },
    { 
        name: "Django", 
        icon: DjangoIcon, 
        description: "Développement de backends robustes et sécurisés pour des applications web en Python." 
    },
    { 
        name: "My SQL", 
        icon: MySqlIcon, 
        description: "Gestion de bases de données relationnelles pour stocker et manipuler les données des applications." 
    }
];

const tools = [
{ 
        name: "Figma", 
        icon: FigmaIcon, 
        description: "Conception et prototypage d'interfaces utilisateur pour les applications web et mobiles." 
    },
    { 
        name: "VS Code", 
        icon: VSCodeIcon, 
        description: "Édition de code et développement grâce à un IDE flexible et extensible." 
    },
    { 
        name: "Android Studio", 
        icon: AndroidStudioIcon, 
        description: "Développement et débogage d'applications Android avec des outils natifs." 
    },
    { 
        name: "Postman", 
        icon: PostmanIcon, 
        description: "Test et documentation des API pour garantir leur bon fonctionnement." 
    },
    { 
        name: "Git", 
        icon: GitIcon, 
        description: "Gestion du contrôle de version pour suivre et collaborer efficacement sur les projets." 
    },
    { 
        name: "GitHub", 
        icon: GitHubIcon, 
        description: "Hébergement de projets et collaboration via des dépôts Git." 
    }
];

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    const skills = gsap.utils.toArray('.skill');
    const tools = gsap.utils.toArray('.tool');
    gsap.fromTo(
        skills,
        {
            opacity: 0,
            y: -30,
        },
        {
            scrollTrigger: {
                trigger: '.skills',
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1, 
            y: 0,
            stagger: 0.3,
            duration: 2,
            ease: "power2.out"
        }
    )
    gsap.fromTo(
        tools,
        {
            opacity: 0,
            y: -30,
        },
        {
            scrollTrigger: {
                trigger: '.tools',
                start: "top 80%",
                end: "top 20%"
            },
            opacity: 1, 
            y: 0,
            stagger: 0.3,
            duration: 2,
            ease: "power2.out"
        }
    )
})
</script>

<template>
    <section class="px-8 md:px-16" id="skills">
        <h2 class="skills text-4xl text-center font-poppins pb-16 font-bold text-accent relative" ref="header">
            Compétences techniques
        </h2>
        <div class="flex flex-wrap justify-center gap-14 md:gap-x-20 lg:gap-x-32 mt-8">
            <TechCard v-for="(tech, index) in techs" :key="tech.name" :name="tech.name" :icon="tech.icon" class="skill"
                :description="tech.description" :class="index % 2 !== 0 ? 'xl:mt-32' : 'xl:mb-32'" />
        </div>
        <h2 class="tools text-4xl text-center font-poppins py-16 font-bold text-accent relative" ref="header">
            Outils de développement
        </h2>
        <div class="flex flex-wrap justify-center gap-14 md:gap-x-20 lg:gap-x-32 mt-8">
            <TechCard v-for="(tool, index) in tools" :key="tool.name" :name="tool.name" :icon="tool.icon" class="tool"
            :description="tool.description" :class="index % 2 !== 0 ? 'xl:mt-32' : 'xl:mb-32'" />
        </div>
    </section>
</template>