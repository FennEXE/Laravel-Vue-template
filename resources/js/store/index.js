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
                id: Number(payload.nid+1),
                name: state.groceries[payload.nid].name,
                price: state.groceries[payload.nid].price,
                amount: payload.amount,
                max_amount: state.groceries[payload.nid].max_amount
            };
            axios.put('api/Grocery/' + newPayload.id, newPayload).then(response => {
                console.log(response);
            });
        },

        sqlEdit(state, payload) {
            console.log(payload)
            state.groceries[payload.nid] = payload;
            let newPayload = {
                nid: payload.nid,
                id: Number(payload.nid+1),
                name: payload.name,
                price: Number(payload.price),
                amount: Number(payload.amount),
                max_amount: Number(payload.max_amount)
            }
            console.log(newPayload);
            axios.put('api/Grocery/' + newPayload.id, newPayload).then(response => {
                console.log(response);
            })
        },

        sqlDestroy(state, payload) {
            console.log(payload + state)
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

        changeAmount({ commit }, payload) {
            commit('changeCount', payload)
        },

        editProduct({ commit }, payload) {
            
            commit('sqlEdit', payload)
        },

        createGrocery({ commit }, payload) {
            axios.post('api/Grocery', payload).then(
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