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
            console.log(payload.data)
            state.groceries = payload.data;
            console.log(state.groceries)
        },

        changeCount(state, payload) {
            state.groceries[payload.id].amount = payload.amount;
            //axios.post();
        }
    },
    getters: {
        getGroceries(state) {
            return state.groceries
        }
    },
    actions: {
        getAllGroceries({ commit }) {
            axios.get('api/Grocery').then(response => {
                commit('set_groceries', response)
            });
        },

        changeAmount({ commit }) {
            commit('changeCount', payload)
        },

        createGrocery({ commit }, payload) {
            axios.post('api/Grocery', payload).then(response => {
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