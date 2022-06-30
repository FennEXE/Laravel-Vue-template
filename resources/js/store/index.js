import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        posts: [],
        comments: [],
        votes: [],
        categories: [],
    },


    mutations: {
        set_posts: function(state, payload) {
            state.posts = payload;
        },
        set_comments: function(state, payload) {
            state.comments = payload;
        },
        set_votes: function(state, payload) {
            state.votes = payload;
        },
        set_categories: function(state, payload) {
            state.categories = payload;
        },
    },


    getters: {
        get_posts(state) {
            return state.posts
        }
    },


    actions: {
        //postController
        async getAllPosts({ commit }) {
            const { data } = await axios.get('api/posts');
            commit('set_posts', data);
        },

        async getPost({ commit }) {
            const { data } = await axios.get('api/posts/' + payload.id);
            commit('set_posts', data);
        },

        async editPost({ commit }, payload) {
            const { data } = await axios.put('api/posts/' + payload.id, payload);
            commit('set_posts', data);
        },

        async deletePost({ commit }, payload) {
            const { data } = await axios.delete('api/posts/' + payload.id);
            commit('set_posts', data);
        },

        async createPost({ commit }, payload) {
            const { data } = await axios.post('api/posts', payload);
            commit('set_posts', data);
        },

        //CommentsController
        async getAllComments({ commit }) {
            const { data } = await axios.get('api/comments');
            commit('set_comments', data);
        },

        async getComment({ commit }) {
            const { data } = await axios.get('api/comments/' + payload.id);
            commit('set_comments', data);
        },

        async editComment({ commit }, payload) {
            const { data } = await axios.put('api/comments/' + payload.id, payload);
            commit('set_comments', data);
        },

        async deleteComment({ commit }, payload) {
            const { data } = await axios.delete('api/comments/' + payload.id);
            commit('set_comments', data);
        },

        async createComment({ commit }, payload) {
            const { data } = await axios.post('api/comments', payload);
            commit('set_comments', data);
        },

        //Votes
        async getVotes({ commit }) {
            const { data } = await axios.get('api/votes/' + payload.id);
            commit('set_votes', data);
        },

        async vote({ commit }) {

        },

        async changevote({ commit }) {

        },

        //Categories
        async getAllCategories({ commit }) {
            const { data } = await axios.get('api/categories');
            commit('set_categories', data);
        },
    }
});