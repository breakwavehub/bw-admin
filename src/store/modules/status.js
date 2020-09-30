// initial state
const state = {
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  setLoading ({ commit, rootGetters }, loading) {
    console.log(rootGetters, rootGetters['user/loadingStatus'])
    commit('SET_LOADING', loading)
  }
}

// mutations
const mutations = {
  SET_LOADING (state, loading) {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
