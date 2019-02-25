import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
  //
}

const getters = {
  //
}

const mutations = {
  //
}

const actions = {
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login({ username, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('登录错误'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (res.code === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
