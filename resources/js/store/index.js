import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {},
//     mutations: {},
//     getters: {},
//     actions: {}
// });

export default new Vuex.Store({
    state: {
        groceries: [],
    },
    mutations: {
        set_groceries(state, payload) {
            state.groceries = payload;
        }
    },
    getters: {
        getGroceries(state) {
            axios.get('api/grocery').then(response => {
                commit('set_groceries', response.data)
            });
            console.log("Getter received");
            return state.groceries
        }
    },
    actions: {
        getAllGroceries({ commit }) {

            axios.get('api/grocery').then(response => {
                commit('set_groceries', response.data)
            });
            console.log("Action received");
            console.log(response.data);
        },

        createGrocery({ commit }, payload) {
            axios.post('api/grocery', payload).then(response => {
                commit('set_groceries', response.data)
            })
        },

        // deleteGrocery({ commit }, payload) {
        //     console.log(`api/crud/${payload.id}`);
        //     axios.delete(`api/crud/${payload.id}`).then(response => {
        //         commit('SET_CRUD', response.data)
        //     })
        // },

        // editGrocery({ commit }, payload) {
        //     axios.put(`api/crud/${payload.id}`, payload).then(response => {
        //         commit('SET_CRUD', response.data)
        //     })
        // },
    }
});