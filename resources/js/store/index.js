import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: { groceries: [] },

    mutations: {
        set_groceries: function (state, payload) {
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
            console.log("Reaches actions changeAmount()");
            let newPayload = state.groceries[payload.nid];
            console.log("Reaches state.groceries");
            newPayload.amount = payload.amount;
            console.log("Reaches newPayload.amount");
            axios.put('api/grocery/' + newPayload.id, newPayload).then(response => {
                commit('set_groceries', response)
            });
            console.log("Reaches Axios command");
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