<template>
    <v-app-bar style="padding: 0 90px" color="white" elevation="1" scroll-behavior="elevate">
        <v-toolbar-title>Dawid Haniewicz</v-toolbar-title>
        <v-spacer />
        <v-list class="d-flex align-center">
            <v-list-item link v-for="(menu, idx) in links" :key="idx" :to="menu.route">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <contact-me/>
    </v-app-bar>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ContactMe from '@/components/dialog/ContactMe.vue'

const links = reactive([
    {
        title: 'Home',
        route: '/',
    },
    {
        title: 'About Me',
        route: '/about-me',
    },
    {
        title: 'Education and Work',
        route: '/education-and-work',
    },
    {
        title: 'Stack',
        route: '/stack',
    },
])
</script>

<style scoped></style>
