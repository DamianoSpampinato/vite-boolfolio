import { createRouter, createWebHistory } from 'vue-router';

 import AppHome from './pages/AppHome.vue';
 import AppAbout from './pages/AppAbout.vue';
 import ProjectsList from './pages/ProjectsList.vue'
 import ProjectShow from './pages/ProjectShow.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name:'home',
        component: AppHome
        },
        {
            path: '/about',
            name:'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name:'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name:'project-show',
            component: ProjectShow
        },
        ]
    });
export { router };
