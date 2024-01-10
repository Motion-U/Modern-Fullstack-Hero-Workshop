import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHashHistory,createRouter,useRouter} from "vue-router";
import Content from "./components/Content.vue";
import Sample from "./components/Sample.vue";
import Todo from "./components/Todo.vue";
const routes = [
    { path: '/',component: Content,
        meta: { transition: 'slide-left' }},
    { path: '/about', component: Todo},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})


createApp(App).use(router).mount('#app')
