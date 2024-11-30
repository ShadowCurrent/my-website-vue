import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import StackView from '@/views/StackView.vue'
import EducationAndWorkView from '@/views/EducationAndWorkView.vue'

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
            path: '/education-and-work',
            name: 'education-and-work',
            component: EducationAndWorkView,
        },
        {
            path: '/stack',
            name: 'stack',
            component: StackView,
        },
    ],
})

export default router
