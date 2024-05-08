import Vue from 'vue'
import VueRouter from 'vue-router'
import Workbench from '@/views/Workbench.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/workbench',
        name: 'Workbench',
        component: Workbench
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router