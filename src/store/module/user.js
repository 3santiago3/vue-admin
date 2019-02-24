import { login } from '@/api/user'

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
  login ({ commit }, { userName, password }) {
    login({ userName, password }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
