<template>
    <section class="px-6 mw:px-16" id="contact">
        <div class="flex flex-col lg:flex-row justify-center items-center md:gap-x-20">
            <div class="">
                <h2 class="contact text-4xl font-bold font-poppins text-accent mb-4">
                    Contact
                </h2>
                <p class="contact-text">
                    Je serai ravi de mettre mon savoir à votre disposition pour qu'on collabore sur vos projet
                </p>
                <form @submit.prevent="handleSubmit" class="mt-3">
                    <div class="flex flex-col md:grid md:grid-cols-2 md:gap-10">
                        <Input label="Nom complet" v-model="state.fullName" type="text" />
                        <Input label="Téléphone (Whatsapp)" class="my-2 md:my-0" v-model="state.phone" type="tel" />
                    </div>
                    <Input label="Objet" class="my-2" v-model="state.object" type="text" />
                    <div class=" mt-3">
                        <label class="font-semibold" for="message">Message</label>
                        <textarea rows="4" id="message"
                            class="bg-transparent mt-2 min-h-20 w-full border border-gray-500 rounded-lg p-2"
                            v-model="state.message">
                        </textarea>
                    </div>

                    <!-- Message de confirmation -->
                    <transition name="fade">
                        <div v-if="successMessage"
                            class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                            {{ successMessage }}
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="errorMessage"
                            class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                            {{ errorMessage }}
                        </div>
                    </transition>
                    <div class="flex justify-between items-center mt-2">
                        <button type="submit"
                            class="bg-transparent text-accent font-semibold border border-accent hover:text-white hover:bg-accent rounded-2xl px-6 py-3"
                            :disabled="loading">
                            <span v-if="!loading">Envoyer</span>
                            <span v-else class="flex items-center gap-2">
                                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                Envoi...
                            </span>
                        </button>
                        <div class="md:flex md:flex-row lg:flex-col xl:flex-row md:gap-x-10">
                            <Social href="https://wa.me/+22943745963" target="blank" :icon="WhatsapIcon" label="(+229) 01 43 74 59 63" />
                            <Social href="mailto:devgatyd@gmail.com" :icon="MailIcon" label="devgatyd@gmail.com" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="mt-6 lg:mt-0">
                <h3 class="processus text-2xl font-semibold mb-4">
                    Processus de Collaboration
                </h3>
                <ol class="space-y-6 text-gray-dark dark:text-gray-light">
                    <StepItem v-for="(step, index) in steps" :position="index + 1" :title="step.title"
                        :description="step.description" />
                </ol>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Input from './Input.vue';
import StepItem from './StepItem.vue';
import WhatsapIcon from '../icons/about/WhatsapIcon.vue';
import MailIcon from '../icons/about/MailIcon.vue';
import Social from '../about/Social.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

const steps = [
    { title: "Prise de Contact", description: "Nous discutons de vos besoins et définissons ensemble les grandes lignes de votre projet." },
    { title: "Analyse & Planification", description: "Une étude approfondie pour clarifier les objectifs, créer un plan et organiser les étapes du projet." },
    { title: "Design & Développement", description: "Création du design et développement de la solution en respectant vos attentes." },
    { title: "Livraison & Suivi", description: "Finalisation du projet avec tests approfondis et accompagnement post-livraison si nécessaire." },
]

const state = reactive({
    fullName: '',
    phone: '',
    object: '',
    message: ''
})

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
    if (!state.fullName || !state.phone || !state.message) {
        errorMessage.value = 'Tous les champs sont obligatoires.';
        setTimeout(() => (errorMessage.value = ''), 2000);
        return;
    }
    loading.value = true;
    successMessage.value = '';
    errorMessage.value = '';

    try {
        await emailjs.send(
          'service_dsvuzyl',
          'template_cbpz6tg',
          {
            full_name: state.fullName,
            object: state.object,
            phone: state.phone,
            message: state.message,
          },
          's6-26eje_427lIrBq'
        );
        successMessage.value = 'Votre message a été envoyé avec succès !';
        state.fullName = '';
        state.phone = '';
        state.object = '';
        state.message = '';
        successMessage.value = 'Votre message a été envoyé avec succès !';
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message :', error);
        errorMessage.value = 'Une erreur est survenue. Veuillez réessayer.';
    } finally {
        loading.value = false;
        setTimeout(() => {
            successMessage.value = '';
            errorMessage.value = '';
        }, 2000);
    }
};

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    const inputs = gsap.utils.toArray('.input');
    const stepsItems = gsap.utils.toArray('.step');
    gsap.fromTo(
        inputs[0],
        { opacity: 0, x: -22 },
        {
            scrollTrigger: {
                trigger: '.contact-text',
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1, x: 0, duration: 2
        }
    )
    gsap.fromTo(
        inputs[1],
        { opacity: 0, x: 22 },
        {
            scrollTrigger: {
                trigger: '.contact-text',
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1, x: 0, duration: 2
        }
    )
    gsap.fromTo(
        inputs[2],
        { opacity: 0, y: -100 },
        {
            scrollTrigger: {
                trigger: inputs[1],
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1, y: 0, duration: 2
        }
    )
    gsap.fromTo(
        "#message",
        { opacity: 0, y: 100 },
        {
            scrollTrigger: {
                trigger: inputs[1],
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1, y: 0, duration: 2
        }
    )
    gsap.fromTo(
        stepsItems,
        {
            opacity: 0,
            y: -100
        },
        {
            scrollTrigger: {
                trigger: '.processus',
                start: "top 80%",
                end: "top 20%",
            },
            opacity: 1,
            y: 0,
            stagger: 0.5,
            duration: 1
        }
    )
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
