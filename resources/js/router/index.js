import Vue from "vue";
import VueRouter from "vue-router";

import Sample from "../pages/Sample.vue";

import GroceryList from "../pages/Grocerylist.vue";
import GroceryCreate from "../pages/Grocerycreate.vue";
import GroceryEdit from "../pages/Groceryedit.vue";

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
            component: GroceryCreate
        },
        {
            name: "edit",
            path: "/edit/:id",
            component: GroceryEdit,
        },
        {
            name: "Sample",
            path: "/Sample",
            component: Sample,
        }
    ]
});