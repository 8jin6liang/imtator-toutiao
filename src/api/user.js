import request from '@/utils/request.js'

const login = (data) => {
  return request({
    method: 'POST',
    url: '/login/authorizations',
    data
  })
}

const getUserInfo = (tokenInfo) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
    // headers: {
    //   Authorization: `Bearer ${tokenInfo}`
    // }
  })
}

export { login, getUserInfo }
