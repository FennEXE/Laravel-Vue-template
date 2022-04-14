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
            state.groceries = payload.data;
        },

        changeCount(state, payload) {
            state.groceries[payload.nid].amount = payload.amount;
            let newPayload = {
                nid: payload.nid,
                id: state.groceries[payload.nid].id,
                name: state.groceries[payload.nid].name,
                price: state.groceries[payload.nid].price,
                amount: payload.amount,
                max_amount: state.groceries[payload.nid].max_amount
            };
            axios.put('api/grocery/' + newPayload.id, newPayload).then(response => {
                console.log(response);
            });
        },

        sqlEdit(state, payload) {
            console.log(payload)
            let newPayload = {
                nid: payload.nid,
                id: state.groceries[payload.nid].id,
                name: payload.name,
                price: Number(payload.price),
                amount: Number(payload.amount),
                max_amount: Number(payload.max_amount)
            }
            state.groceries[payload.nid] = newPayload;
            console.log(newPayload);
            axios.put('api/grocery/' + newPayload.id, newPayload).then(response => {
                console.log(response);
            })
        },

        sqlDestroy(state, payload) {
            let newPayload = state.groceries[payload];
            axios.delete('api/grocery/' + newPayload.id).then(response => {
                state.groceries = response;
            })
        }
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
            commit('changeCount', payload)
        },

        editProduct({ commit }, payload) {
            commit('sqlEdit', payload)
        },

        deleteProduct({ commit }, payload) {
            commit('sqlDestroy', payload)
        },

        createGrocery({ commit }, payload) {
            axios.post('api/grocery', payload).then(
                commit('getAllGroceries')
            )
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