import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../pages/Home.vue'

import GroceryList from "./components/groceries.vue";
import GroceryForm from "./components/groceryform.vue";

Vue.use(VueRouter);



export default new VueRouter({
    routes: [{
            path: "/",
            component: GroceryList,
        },
        {
            path: "/create",
            component: GroceryForm
        }
    ]
});