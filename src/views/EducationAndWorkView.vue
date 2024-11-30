<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <div class="timeline-section">
                    <h3 class="section-title">Professional Experience</h3>

                    <v-timeline
                        :cols="12"
                        :md="2"
                        :lg="2"
                        class="mx-auto"
                        justify="center"
                        line-inset="10"
                        size="10"
                    >
                        <v-timeline-item
                            v-for="job in jobs"
                            :key="job.company"
                            :color="job.color"
                            fill-dot
                        >
                            <template v-slot:opposite> {{ job.date }}</template>
                            <v-card elevation="1">
                                <v-card-title>{{ job.company }}</v-card-title>

                                <v-card-subtitle>{{ job.position }}</v-card-subtitle>
                                <v-card-text>{{ job.description }}</v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const jobs = reactive([
    {
        company: 'novomind AG',
        position: 'Fullstack Software Developer',
        date: 'Juni 2019 - current',
        description: 'Job description',
        color: '',
        icon: '',
    },
    {
        company: 'AKRA GmbH',
        position: 'Junior Software Developer',
        date: 'January 2019 - Mai 2019',
        description: 'Job description',
        color: '',
        icon: '',
    },
    {
        company: 'CodeLab Zielona Góra',
        position: 'Junior Python Software Developer',
        date: 'Mai 2018 - September 2018',
        description: 'Job description',
        color: '',
        icon: '',
    },
])
</script>

<style scoped>
.experience-timeline {
    margin: 0 auto; /* Center the timeline */
    width: 100%; /* Default to full width */
}

/* For large devices, set a specific width */
@media (min-width: 1200px) {
    .experience-timeline {
        width: 900px;
    }
}

/* For medium-sized devices, set a different width */
@media (min-width: 600px) and (max-width: 1199px) {
    .experience-timeline {
        width: 700px;
    }
}

/* For small devices, set a smaller width */
@media (max-width: 599px) {
    .experience-timeline {
        width: 100%;
    }
}
</style>
