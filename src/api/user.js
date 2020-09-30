import { post } from '@/utils/request'
import { baseURL } from '@/config'

const userApi = {
  login (params) {
    return post(`${baseURL}/login`, params)
  },
  logout () {
    return post(`${baseURL}/logout`)
  }
}

export default userApi
