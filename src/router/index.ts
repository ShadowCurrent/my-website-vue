import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import StackView from '@/views/StackView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutView,
        },
        {
            path: '/experience',
            name: 'experience',
            component: ExperienceView,
        },
        {
            path: '/stack',
            name: 'stack',
            component: StackView,
        },
    ],
})

export default router
