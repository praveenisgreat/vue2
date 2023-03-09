import axios from 'axios'

export default {
  // namespaced: true,
  state: {
    success: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },

  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },

    AUTH_SUCCESS(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },

    AUTH_ERROR(state) {
      state.status = 'error'
    },

    AUTH_LOGOUT(state) {
      state.status = ''
      state.token = ''
    },

  },
  actions: {
    LOGIN({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios.post('http://localhost:8080/auth/login', {
          username: user.email,
          password: user.password,
        })

          .then(response => {
            const { token } = response.data
            const { user } = response.data

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

            axios.defaults.headers.common.Authorization = `Bearer${token}`
            commit('AUTH_SUCCESS', token, user)

            resolve(response)
          }).catch(err => {
            commit('AUTH_ERROR')
            localStorage.removeItem('token')

            reject(err)
          })
      })
    },

    LOGOUT({ commit }) {
      return new Promise(resolve => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

  modules: {
  },
}
