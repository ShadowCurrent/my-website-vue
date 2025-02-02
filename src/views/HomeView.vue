<template>
    <v-container id="home-section" class="home-container d-flex flex-wrap" fluid>
      <v-row class="align-center" style="margin: 5% 25%">
        <v-row class="flex">
          <v-col class="d-flex align-center justify-center">
            <v-avatar size="350" :image="image"> </v-avatar>
          </v-col>
          <v-col class="d-flex align-center justify-center">
            <v-card class="pa-2">
              <v-card-title class="text-h5">Hello, I'm Dawid Haniewicz</v-card-title>
              <v-card-subtitle>Full Stack Software Developer</v-card-subtitle>
              <v-card-text>
                I specialize in Java, Kotlin, Angular, and VueJS, creating efficient,
                high-quality applications.
              </v-card-text>
              <v-btn color="primary">Learn More About Me</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref } from 'vue'
import avatar from '@/assets/DSC_7210z.jpg'

export default {
    setup() {
        const image = ref(avatar) // Reactive variable for the image

        return {
            image: image,
        }
    },
}
</script>

<style scoped></style>
