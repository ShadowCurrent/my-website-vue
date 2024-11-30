<template>
    <v-container fluid>
        <v-card class="ma-5">
            <v-avatar size="100" class="mx-auto mb-4">
                <!--                <img src="your-profile-pic.jpg" alt="Profile Picture" />-->
            </v-avatar>
            <v-card-title>About Me</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <p>
                    Background: I hold a B.Sc. in Technical Physics and enjoy solving complex
                    problems.
                </p>
                <p>Values: I believe in continuous learning and effective communication.</p>
                <p>
                    Vision: My goal is to join dynamic teams focused on impactful software
                    solutions.
                </p>
            </v-card-text>
        </v-card>

        <v-sheet
            class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
            elevation="4"
            height="250"
            max-width="700"
            width="100%"
            rounded
        >
            <div>
                <h2 class="text-h4 font-weight-black text-left">Background</h2>

                <p class="text-body-2 mt-8 mb-2 text-justify">
                    I hold a Bachelor’s degree in Technical Physics from the University of Zielona
                    Góra. My technical background and passion for programming have driven me to
                    build solutions that streamline workflows and enhance data management processes.
                </p>
            </div>
        </v-sheet>

        <v-card class="mx-auto" prepend-icon="$vuetify" width="700">
            <template v-slot:title>
                <span class="font-weight-black">Background</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                I hold a Bachelor’s degree in Technical Physics from the University of Zielona Góra.
                My technical background and passion for programming have driven me to build
                solutions that streamline workflows and enhance data management processes.
            </v-card-text>
        </v-card>

        <v-card class="mx-auto" prepend-icon="$vuetify" width="700">
            <template v-slot:title>
                <span class="font-weight-black">Personal Values and Interests</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                I believe in continuous improvement, clear communication, and a structured approach
                to complex problems. Outside of work, I enjoy diving into new technologies,
                experimenting with DevOps practices, and learning about data science.
            </v-card-text>
        </v-card>

        <v-card class="mx-auto" prepend-icon="$vuetify" width="700">
            <template v-slot:title>
                <span class="font-weight-black">Vision</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                I aim to advance my career by joining dynamic teams focused on innovation and
                high-quality software development. My goal is to continually develop my skills while
                delivering meaningful results.
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
