import Vue from "vue";
import VueRouter from "vue-router";

import Blog from '../components/blog.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Blog
        }
    ]
});
