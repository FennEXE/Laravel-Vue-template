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
        set_groceries: function(state, payload) {
            state.groceries = payload.data;
        },
        set_grocery: function(state, payload) {
            state.grocery = payload.data
        },
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
        async getAllGroceries({ commit }) {
            const { data } = await axios.get('api/grocery');
            commit('set_groceries', data);
        },

        async changeAmount({ commit }, payload) {
            let newPayload = payload.i
            newPayload.amount = payload.newAmount
            if (newPayload.amount > newPayload.max_amount) {
                newPayload.amount = newPayload.max_amount;
            }
            const { data } = await axios.put('api/grocery/' + newPayload.id, newPayload);
            commit('set_groceries', data);
        },

        async editProduct({ commit }, payload) {
            const { data } = await axios.put('api/grocery/' + payload.id, payload);
            commit('set_groceries', data);
        },

        async deleteProduct({ commit }, payload) {
            const { data } = await axios.delete('api/grocery/' + payload.id);
            commit('set_groceries', data);
        },

        async createProduct({ commit }, payload) {
            const { data } = await axios.post('api/grocery', payload);
            commit('set_groceries', data);
        },
    }
});