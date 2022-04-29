import Vue from "vue";
import VueRouter from "vue-router";

import GroceryList from "../pages/Grocerylist.vue";
import GroceryForm from "../components/groceryform.vue";

Vue.use(VueRouter);



export default new VueRouter({
    routes: [{
            name: "home",
            path: "/",
            component: GroceryList
        },
        {
            name: "create",
            path: "/create",
            component: GroceryForm
        },
        {
            name: "edit",
            path: "/edit",
            component: GroceryForm
        }
    ]
});