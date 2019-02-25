import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}

export const login = ({ username, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization'
  })
}
