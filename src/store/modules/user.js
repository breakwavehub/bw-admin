import { userApi } from '@/api/index'

// initial state
const state = {
  userInfo: {},
  someData: {}
}

// getters
const getters = {
  loadingStatus (state, getters, rootState) {
    return rootState.status.loading
  }
}

// actions
const actions = {
  async login ({ commit, rootState }) {
    rootState.loading = true
    // dispatch('status/setLoading', true, { root: true })
    const response = await userApi.login()
    if (response.result.c === 200) {
      commit('SET_USER_INFO', response.data)
      rootState.loading = false
      // dispatch('status/setLoading', false, { root: true })
    }
  },
  setData ({ commit }, payload) {
    commit('SET_DATA', payload)
  }
}

// mutations
const mutations = {
  SET_USER_INFO (state, data) {
    state.userInfo = data
  },
  SET_DATA (state, payload) {
    state.someData = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
