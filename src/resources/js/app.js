import './bootstrap';
import { createRouter, createWebHashHistory } from 'vue-router';
import {createApp} from "vue";

import app from './components/app.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';




const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const myApp = createApp(app);

myApp.use(router);

myApp.mount('#app');



