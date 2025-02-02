<template>
    <v-container fluid class="w-75">
        <!-- Backend Section -->
        <v-row align="center" justify="center">
            <v-col cols="12">
                <h3>Backend</h3>
            </v-col>

            <!-- Each item in the backend stack -->
            <v-col v-for="(card, index) in backendStack" :key="index" cols="2" md="2">
                <transition name="flip">
                    <v-card
                        @click="flipCard(card)"
                        class="d-flex flex-column align-center pa-3"
                        :ripple="false"
                    >
                        <p v-if="!card.flipped" key="1">
                            <v-icon size="40">{{ card.icon }}</v-icon>
                            <span>{{ card.text }}</span>
                        </p>

                        <p v-else key="2">
                            <span>{{ card.flippedText }}</span>
                        </p>
                    </v-card>
                </transition>
            </v-col>
        </v-row>

        <!-- Frontend Section -->
        <v-row align="center" justify="center">
            <v-col cols="12">
                <h3>Frontend</h3>
            </v-col>

            <!-- Each item in the frontend stack -->
            <v-col v-for="(tech, index) in frontendStack" :key="index" cols="2" md="2">
                <v-card class="d-flex flex-column align-center pa-3">
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                    <span>{{ tech.text }}</span>
                </v-card>
            </v-col>
        </v-row>

        <!-- DevOps Section -->
        <v-row align="center" justify="center">
            <v-col cols="12">
                <h3>DevOps</h3>
            </v-col>

            <!-- Each item in the DevOps stack -->
            <v-col v-for="(tech, index) in devOpsStack" :key="index" cols="2" md="2">
                <v-card class="d-flex flex-column align-center pa-3">
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                    <span>{{ tech.text }}</span>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Card {
    text: string
    flippedText: string
    icon: string
    flipped?: boolean
}

// Define your tech stack categories with names and Vuetify icons or custom icons
const backendStack: Card[] = reactive([
    { text: 'Java', flipped: false, flippedText: '5+ years', icon: 'mdi-language-java' },
    { text: 'Spring Boot', flippedText: '4 years', icon: 'mdi-spring' },
    { text: 'PostgreSQL', flippedText: '3 years', icon: 'mdi-database' },
    { text: 'MongoDB', flippedText: '1 year', icon: 'mdi-leaf' },
])

const frontendStack: Card[] = reactive([
    { text: 'VueJS', flippedText: '2 years', icon: 'mdi-vuejs' },
    { text: 'Angular', flippedText: '2 year', icon: 'mdi-angular' },
    { text: 'JavaScript', flippedText: '3 years', icon: 'mdi-language-javascript' },
    { text: 'TypeScript', flippedText: '3 years', icon: 'mdi-language-typescript' },
])

const devOpsStack: Card[] = reactive([
    { text: 'Docker', flippedText: '4 years', icon: 'mdi-docker' },
    { text: 'GitLab CI', flippedText: '3 years', icon: 'mdi-gitlab' },
    { text: 'Jenkins', flippedText: '1 year', icon: 'mdi-jenkins' },
])

function flipCard(card: Card) {
    card.flipped = !card.flipped
}
</script>

<style scoped>
/* Optional styling to adjust icon and card appearance */
h3 {
    margin-bottom: 1rem;
    font-weight: bold;
}

.flip-enter-active,
.flip-leave-active {
    transition: all 0.5s ease;
}

.flip-enter-from,
.flip-leave-to {
    transform: rotateY(180deg);
    opacity: 0;
}
</style>
