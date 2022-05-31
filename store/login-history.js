import axios from 'axios'
import get from 'lodash/get'
import {
  LIST,
  HEAD_LOGIN_HISTORY,
  CURRENT_PAGE,
  GENERAL_INFO_LOGIN_HISTORY,
  LOGIN_HISTORY_LIST,
  LOGIN_HISTORY_IN_PROGRESS
} from '../modules/login-history/constants'
import {
  CHANGE_CURRENT_PAGE,
  LOGIN_HISTORY_ADD_MORE,
  LOGIN_HISTORY_CAN_VIEW,
  LOGIN_HISTORY_SUCCESS,
  LOGIN_HISTORY_PROGRESS,
  LOGIN_HISTORY_LIST_SUCCESS,
  CAN_VIEW_LOAD_MORE_BUTTON
} from '../modules/login-history/mutation-types'
import {
  GET_CURRENT_PAGE,
  GET_LOGIN_HISTORY,
  GET_LAST_PAGE,
  IS_ALL_DATA_IN_STORE,
  HISTORY_LIST,
  HISTORY_LIST_META_COUNT,
  GET_CAN_VIEW_LOAD_MORE_BUTTON,
  GET_LIST
} from '../modules/login-history/getter-types'
import {
  LOAD_LOGIN_HISTORY_LIST,
  LOGIN_HISTORY_LOAD_MORE
} from '../modules/login-history/actions-types'

export const state = () => ({
  [LIST]: [],
  [HEAD_LOGIN_HISTORY]: [
    {
      value: 'Date'
    },
    {
      value: 'IP'
    },
    {
      value: 'Browser'
    }
  ],
  [CURRENT_PAGE]: 1,
  [GENERAL_INFO_LOGIN_HISTORY]: '',
  [LOGIN_HISTORY_LIST]: {},
  [CAN_VIEW_LOAD_MORE_BUTTON]: false,
  [LOGIN_HISTORY_IN_PROGRESS]: false
})

export const mutations = {
  [LOGIN_HISTORY_PROGRESS] (state, payload) {
    const { inProgress } = payload
    state[LOGIN_HISTORY_IN_PROGRESS] = inProgress
  },
  [LOGIN_HISTORY_SUCCESS] (state, payload) {
    const { data } = payload
    state[LOGIN_HISTORY_LIST] = data
  },
  [LOGIN_HISTORY_ADD_MORE] (state, payload) {
    const { data } = payload
    state[LOGIN_HISTORY_LIST].data = data
  },
  [LOGIN_HISTORY_CAN_VIEW] (state, payload) {
    const { canView } = payload
    state[CAN_VIEW_LOAD_MORE_BUTTON] = canView
  },
  [CHANGE_CURRENT_PAGE] (state, payload) {
    const { page } = payload
    state[CURRENT_PAGE] = page
  }
}

export const getters = {
  [GET_LOGIN_HISTORY] (state) {
    return state[LIST]
  },
  [GET_CURRENT_PAGE] (state) {
    return state[CURRENT_PAGE]
  },
  [GET_LAST_PAGE] (state) {
    return state[GENERAL_INFO_LOGIN_HISTORY]
  },
  [IS_ALL_DATA_IN_STORE] (state, getters) {
    return getters[HISTORY_LIST].length === getters[HISTORY_LIST_META_COUNT]
  },
  [HISTORY_LIST] (state) {
    return get(state, `${LOGIN_HISTORY_LIST}.data`, [])
  },
  [GET_CAN_VIEW_LOAD_MORE_BUTTON] (state) {
    return state[CAN_VIEW_LOAD_MORE_BUTTON]
  },
  [GET_CURRENT_PAGE] (state) {
    return state[CURRENT_PAGE]
  },
  [HISTORY_LIST_META_COUNT] (state) {
    return parseInt(get(state, `${LOGIN_HISTORY_LIST}._meta.count`, 0), 10)
  },
  [GET_LIST] (state) {
    return state[LOGIN_HISTORY_LIST]
  }
}

export const actions = {
  async [LOAD_LOGIN_HISTORY_LIST] (context) {
    const { rootGetters, dispatch, getters } = context
    const isFirstPageLoaded = getters[HISTORY_LIST]
    if (isFirstPageLoaded.length === 0) {
      const currentPage = 1
      const token = rootGetters['login/GET_TOKEN']
      const url = `https://api.tifia.com/v2/login-history/list?page=${currentPage}`
      try {
        const { data: response } = await axios({
          method: 'get',
          url: `${url}`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`
          }
        })
        const data = response
        const currentPage = get(data, '_meta.page', 1)
        await dispatch(CHANGE_CURRENT_PAGE, currentPage)
        await dispatch(LOGIN_HISTORY_LIST_SUCCESS, data)
        await dispatch(LOGIN_HISTORY_PROGRESS, false)

        setTimeout(() => {
          // by default in state this variable equals false
          dispatch(CAN_VIEW_LOAD_MORE_BUTTON, true)
        }, 3000)
      } catch (e) {
        console.log(e)
      }
    }
  },
  async [LOGIN_HISTORY_LOAD_MORE] (context) {
    const { getters, rootGetters, dispatch } = context
    await dispatch(CAN_VIEW_LOAD_MORE_BUTTON, false)

    const token = rootGetters['login/GET_TOKEN']
    const url = `https://api.tifia.com/v2/login-history/list?page=${getters[GET_CURRENT_PAGE] + 1}`

    try {
      const { data: response } = await axios({
        method: 'get',
        url: `${url}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        }
      })
      const data = response
      const currentPage = get(data, '_meta.page', 1)
      await dispatch(CHANGE_CURRENT_PAGE, currentPage)
      await dispatch(LOGIN_HISTORY_ADD_MORE, get(data, 'data'))
      setTimeout(() => {
        dispatch(CAN_VIEW_LOAD_MORE_BUTTON, true)
      }, 3000)
    } catch (e) {
      console.log(e)
    }
  },
  [CAN_VIEW_LOAD_MORE_BUTTON] ({ commit }, canView) {
    commit(LOGIN_HISTORY_CAN_VIEW, { canView })
  },
  [CHANGE_CURRENT_PAGE] ({ commit }, page) {
    commit(CHANGE_CURRENT_PAGE, { page })
  },
  [LOGIN_HISTORY_LIST_SUCCESS] ({ commit }, data) {
    commit(LOGIN_HISTORY_SUCCESS, { data })
  },
  [LOGIN_HISTORY_PROGRESS] ({ commit }, inProgress) {
    commit(LOGIN_HISTORY_PROGRESS, { inProgress })
  },
  [LOGIN_HISTORY_ADD_MORE] ({ commit, getters }, data) {
    const alreadyExistingLists = get(getters[GET_LIST], 'data', [])

    commit(LOGIN_HISTORY_ADD_MORE, { data: alreadyExistingLists.concat(data) })
  }
}
