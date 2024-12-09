<template>
    <v-footer border app elevation="1" style="padding: 0 90px">
        <div>{{ new Date().getFullYear() }} - Dawid Haniewicz</div>
        <v-spacer />
        <v-list v-for="(link, idx) in links" :key="idx" class="d-flex align-center">
            <v-btn
                class="mx-2"
                :href="link.href"
                icon
                rounded="0"
                density="compact"
                variant="text"
                target="_blank"
            >
                <v-icon :icon="link.icon" size="x-large" />
            </v-btn>
        </v-list>
    </v-footer>
</template>

<script setup lang="ts">
interface Link {
    name: string
    icon: string
    href: string
}

const links: Link[] = [
    {
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/dawid-haniewicz-36975215a/',
    },
    {
        name: 'GitHub',
        icon: 'mdi-github',
        href: 'https://github.com/ShadowCurrent',
    },
]
</script>

<style scoped></style>
