import axios from 'axios'
import router from '../router'
import store from '../store/index'

var instance = axios.create({
  timeout: 7000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 拦截器
instance.interceptors.request.use(
  config => {
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error)
)
// 响应拦截器
instance.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // store.commit('changeNetwork', false)
    }
  }
)
/**
  * 跳转登录页
  * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
  */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
* 请求失败后的错误统一处理
* @param {Number} status 请求失败的状态码
*/
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    case 403:
      // tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      store.commit('loginSuccess', null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    // 404请求不存在
    case 404:
      // tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

export default instance
