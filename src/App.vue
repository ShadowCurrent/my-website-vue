<template>
    <v-app>
        <app-header />
        <v-main class="main-content">
            <router-view />
        </v-main>
        <app-footer />
    </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.main-content {
    min-height: calc(100vh - 64px - 56px); /* Adjust height for header and footer */
    padding-bottom: 56px; /* Footer height */
    box-sizing: border-box;
}
</style>
