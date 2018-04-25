import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: []
  },
  getters: {
    errors: state => state.errors
  },
  mutations: {
    addError: (state, err) => {
      state.errors.push(err)
    },
    removeError: (state, err) => {
      state.errors = state.errors.filter(error => error !== err)
    }

  },
  actions: {
    addError: ({ commit }, err) => {
      commit('addError', err)
    },
    removeError: ({ commit }, err) => {
      commit('removeError', err)
    }
  },
  plugins: [
    createLogger(),
    store => {
      store.subscribe((mutation, state) => {
        if (mutation.type === 'addError') {
          const error = mutation.payload
          store.commit('removeError', error)
        }
      })
    }]
})
