<template>
    <v-container fluid>
        <!-- Backend Section -->
        <v-row>
            <v-col cols="12">
                <h3>Backend</h3>
            </v-col>

            <!-- Each item in the backend stack -->
            <v-col v-for="(tech, index) in backendStack" :key="index" cols="2" md="2">
                <v-card class="d-flex flex-column align-center pa-3">
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                    <span>{{ tech.name }}</span>
                </v-card>
            </v-col>
        </v-row>

        <!-- Frontend Section -->
        <v-row>
            <v-col cols="12">
                <h3>Frontend</h3>
            </v-col>

            <!-- Each item in the frontend stack -->
            <v-col v-for="(tech, index) in frontendStack" :key="index" cols="2" md="2">
                <v-card class="d-flex flex-column align-center pa-3">
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                    <span>{{ tech.name }}</span>
                </v-card>
            </v-col>
        </v-row>

        <!-- DevOps Section -->
        <v-row>
            <v-col cols="12">
                <h3>DevOps</h3>
            </v-col>

            <!-- Each item in the DevOps stack -->
            <v-col v-for="(tech, index) in devOpsStack" :key="index" cols="2" md="2">
                <v-card class="d-flex flex-column align-center pa-3">
                    <v-icon size="40">{{ tech.icon }}</v-icon>
                    <span>{{ tech.name }}</span>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define your tech stack categories with names and Vuetify icons or custom icons
const backendStack = ref([
    { name: 'Java', icon: 'mdi-language-java' },
    { name: 'Spring Boot', icon: 'mdi-spring' },
    { name: 'PostgreSQL', icon: 'mdi-database' },
    { name: 'MongoDB', icon: 'mdi-leaf' },
])

const frontendStack = ref([
    { name: 'VueJS', icon: 'mdi-vuejs' },
    { name: 'Angular', icon: 'mdi-angular' },
    { name: 'JavaScript', icon: 'mdi-language-javascript' },
    { name: 'TypeScript', icon: 'mdi-language-typescript' },
])

const devOpsStack = ref([
    { name: 'Docker', icon: 'mdi-docker' },
    { name: 'GitLab CI', icon: 'mdi-gitlab' },
    { name: 'Jenkins', icon: 'mdi-jenkins' },
])
</script>

<style scoped>
/* Optional styling to adjust icon and card appearance */
h3 {
    margin-bottom: 1rem;
    font-weight: bold;
}

.v-card {
    transition: box-shadow 0.3s ease;
}

.v-card:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
