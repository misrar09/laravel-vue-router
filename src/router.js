import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/AppHome.vue';
import AboutPage from './pages/AppAbout.vue';
import EventDetail from './pages/EventDetail.vue';
import TagsPage from './pages/TagsPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/event/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsPage,
        },

    ]
});

export { router };