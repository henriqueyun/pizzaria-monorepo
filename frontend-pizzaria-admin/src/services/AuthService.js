import axios from 'axios'

async function login(username, password) {
  const jwt = await axios.post(`${process.env.VUE_APP_API_URL}/auth/login`, {username, password})
  localStorage.setItem('jwt', jwt.data.token)
}

async function authorize(token) {
  const authorization = await axios.post(`${process.env.VUE_APP_API_URL}/auth/authorize`, {}, { headers: { authorization: token }})
  return authorization.data.authorized
}

async function logout(token) {
  localStorage.jwt = null
  delete localStorage.jwt
  await axios.post(`${process.env.VUE_APP_API_URL}/auth/logout`, {}, { headers: { authorization: token }})
}

export default {
  login,
  authorize,
  logout
}