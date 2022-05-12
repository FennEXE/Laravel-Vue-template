import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: { 
        groceries: [],
        grocery: null,
        formtype: null,
    },

    mutations: {
        set_groceries: function (state, payload) {
            state.groceries = payload.data;
        },
        set_grocery: function (state, payload) {
            state.grocery = payload.data
        }
    },

    getters: {
        getGroceries(state) {
            return state.groceries
        },
        getGrocery(state) {
            return state.grocery
        }
    },

    actions: {
        getAllGroceries({ commit }) {
            axios.get('api/grocery').then(response => {
                commit('set_groceries', response)
            });
        },

        getGrocery(payload) {
            console.log(payload);
            axios.get('api/grocery/' + payload).then(response => {
                console.log(response);
            });
        },

        changeAmount({ commit }, payload) {
            let newPayload = payload.i
            newPayload.amount = payload.newAmount
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
            console.log('test')
            axios.delete('api/grocery/' + payload.id).then(response => {
                console.log(response.data);
                commit('set_groceries', response)
            });
        },

        createProduct({ commit }, payload) {
            axios.post('api/grocery', payload).then(response => {
                commit('set_groceries', response)
            });
        },
    }
});