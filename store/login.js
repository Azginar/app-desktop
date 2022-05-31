import Cookie from 'js-cookie'
import { AUTH_USER, INIT_AUTH_MIDDLEWARE, LOGOUT } from '../modules/login/actions-types'
import { EMAIL, EXPIRE_DATE, PASSWORD, TOKEN, ERRORS, LIGHT_THEME } from '../modules/login/constants'
import { CHANGE_EMAIL, CHANGE_PASSWORD, SET_EXPIRE_DATE, SET_TOKEN, SET_ERRORS, CLEAR_ERRORS } from '../modules/login/mutation-types'
import request from '../utils/request'
import { getTokenAndExpireDateFromRequest, validateTokenAndExpireDate } from '../utils/helpers'
import { TOKEN_EXPIRE_DATE_KEY, TOKEN_KEY } from '../utils/constants'
import { GET_TOKEN, IS_AUTHENTICATED_MIDDLEWARE } from '../modules/login/getter-types'

export const state = () => ({
  [EMAIL]: '',
  [PASSWORD]: '',
  [TOKEN]: '',
  [EXPIRE_DATE]: '',
  [ERRORS]: [],
  [LIGHT_THEME]: ''
})

export const getters = {
  [IS_AUTHENTICATED_MIDDLEWARE] (state) {
    return state[TOKEN] !== null && state[TOKEN] !== undefined
  },
  [GET_TOKEN] (state) {
    return state[TOKEN]
  }
}

export const mutations = {
  [CHANGE_EMAIL] (state, value) {
    state[EMAIL] = value
  },
  [CHANGE_PASSWORD] (state, value) {
    state[PASSWORD] = value
  },
  [SET_EXPIRE_DATE] (state, value) {
    state[EXPIRE_DATE] = value
  },
  [SET_TOKEN] (state, value) {
    state[TOKEN] = value
  },
  [SET_ERRORS] (state, errors) {
    state[ERRORS] = errors
  },
  [CLEAR_ERRORS] (state) {
    state[ERRORS] = []
  }
}

export const actions = {
  [AUTH_USER] (context, router) {
    const { state, commit, dispatch } = context

    const body = `${'email'}=${state[EMAIL]}&${'password'}=${state[PASSWORD]}`
    const url = 'https://api.tifia.com/v2/login'
    request(url, {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'

      }
    }).then(({ token, expire_date: expireDate }) => {
      localStorage.setItem(TOKEN_KEY, token)
      Cookie.set(TOKEN_KEY, token)
      commit(SET_TOKEN, token)

      const formattedExpireDate = expireDate.replace(' ', 'T')

      localStorage.setItem(TOKEN_EXPIRE_DATE_KEY, formattedExpireDate)
      Cookie.set(TOKEN_EXPIRE_DATE_KEY, formattedExpireDate)
      commit(SET_EXPIRE_DATE, formattedExpireDate)

      router.push('/')
    })
      .catch(e => dispatch(SET_ERRORS, e))
  },
  [SET_ERRORS] ({ commit }, ERRORS) {
    // todo add real auth errors
    const AutMessageParser = new Map()
      .set('Specified user not found', [{ attribute: 'email', message: 'Wrong user name' }])
      .set('Invalid credentials specified', [{ attribute: 'password', message: 'Wrong password' }])
    const { message } = ERRORS
    commit(SET_ERRORS, AutMessageParser.get(message))
  },
  [CHANGE_EMAIL] ({ commit }, value) {
    commit(CHANGE_EMAIL, value)
    commit(CLEAR_ERRORS)
  },
  [CHANGE_PASSWORD] ({ commit }, value) {
    commit(CHANGE_PASSWORD, value)
    commit(CLEAR_ERRORS)
  },

  [INIT_AUTH_MIDDLEWARE] (context, req) {
    const { commit, dispatch } = context
    const { token, expireDate } = getTokenAndExpireDateFromRequest(req)

    if (validateTokenAndExpireDate(token, expireDate)) {
      commit(SET_TOKEN, token)
      commit(SET_EXPIRE_DATE, expireDate)
    } else {
      commit(SET_TOKEN, null)
      commit(SET_EXPIRE_DATE, null)
      dispatch(LOGOUT, false)
    }
  },

  [LOGOUT] (context, isNeedClearToken) {
    if (isNeedClearToken) {
      const { commit } = context
      commit(SET_TOKEN, null)
      commit(SET_EXPIRE_DATE, null)
    }

    Cookie.remove(TOKEN)
    Cookie.remove(EXPIRE_DATE)
    if (process.client) {
      localStorage.removeItem(TOKEN)
      localStorage.removeItem(EXPIRE_DATE)
    }
  }
}
