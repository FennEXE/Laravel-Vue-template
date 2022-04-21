import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groceries: [],
        blogs: [],
    },

    mutations: {
        set_groceries(state, payload) {
            state.groceries = payload.data;
        },

        set_blog(state, payload) {
            state.blogs = payload.data;
        },

        changeCount(state, payload) {
            let newPayload = state.groceries[payload.nid];
            newPayload.amount = payload.amount;
            axios.put('api/grocery/' + newPayload.id, newPayload)
        },

        sqlEdit(state, payload) {
            axios.put('api/grocery/' + payload.id, payload).then(response => {
                let newGroceries = response.data;
                state.groceries = newGroceries;
            })
        },

        sqlDestroy(state, payload) {
            let newPayload = state.groceries[payload];
            axios.delete('api/grocery/' + newPayload.id).then(response => {
                let newGroceries = response.data;
                state.groceries = newGroceries;
            })
        },

        sqlCreate(state, payload) {
            axios.post('api/grocery', payload).then(response => {
                let newGroceries = response.data;
                state.groceries = newGroceries;
            })
        }
    },

    getters: {
        getGroceries(state) {
            return state.groceries
        },
        getBlogs(state) {
            return state.blogs
        },
        getComments(state) {
            return state.comments
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

        createProduct({ commit }, payload) {
            commit('sqlCreate', payload)
        },

        //=====================================================

        getAllBlogs({ commit }) {
            axios.get('api/blog').then(response => {
                commit('set_blog', response)
            });
        },
        getComments({commit}, blogId) {
            axios.get('api/comment').then(response => {
                commit('set_comment', response)
            });
        }
    }
});