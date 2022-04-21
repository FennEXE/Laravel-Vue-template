import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groceries: [],
    },

    mutations: {
        set_groceries(state, payload) {
            state.groceries = payload.data;
        },
    },

    getters: {
        getGroceries(state) {
            return state.groceries
        }
    },

    actions: {
        getAllGroceries({ commit }) {
            axios.get('api/grocery').then(response => {
                commit('set_groceries', response)
            });
        },

        changeAmount({ commit }, payload) {
            let newPayload = state.groceries[payload.nid];
            newPayload.amount = payload.amount;
            axios.put('api/grocery/' + newPayload.id, newPayload).then(response => {
                commit('set_groceries', response)
            });
        },

        editProduct({ commit }, payload) {
            axios.put('api/grocery/' + payload.id, payload).then(response => {
                commit('set_groceries', response)
            });
        },

        deleteProduct({ commit }, payload) {
            let newPayload = state.groceries[payload];
            axios.delete('api/grocery/' + newPayload.id).then(response => {
                commit('set_groceries', response.data)
            });
        },

        createProduct({ commit }, payload) {
            axios.post('api/grocery', payload).then(response => {
                commit('set_groceries', response.data)
            });
        }
    }
});