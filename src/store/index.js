import { createStore } from 'vuex'
import user from './modules/user'
import status from './modules/status'

export default createStore({
  modules: {
    user,
    status
  }
})
