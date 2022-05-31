import axios from 'axios'
import {
  DATA_NOTIFICATIONS_INFO,
  LOAD_NOTIFICATIONS_IN_PROGRESS,
  MESSAGES_FROM_TIFIA,
  MESSAGES_FROM_TIFIA_NEWS,
  MESSAGES_FROM_TIFIA_SUPPORT,
  MESSAGES_FROM_USER,
  USERS_LIST,
  USER_ACTIVE
} from '@/modules/notifications/constants'
import {
  LOAD_DATA_ACCOUNT_NOTIFICATIONS_SUCCESS,
  CHANGE_LOAD_NOTIFICATIONS_IN_PROGRESS
} from '@/modules/notifications/mutation-types'
import {
  GET_DATA_NOTIFICATIONS_INFO,
  GET_LOAD_NOTIFICATIONS_IN_PROGRESS,
  GET_MESSAGES_FROM_TIFIA,
  GET_MESSAGES_FROM_TIFIA_NEWS,
  GET_MESSAGES_FROM_TIFIA_SUPPORT,
  GET_MESSAGES_FROM_USER,
  GET_USERS_LIST,
  GET_USER_ACTIVE
} from '@/modules/notifications/getter-types'
import {
  LOAD_NOTIFICATIONS
} from '@/modules/notifications/actions-types'
import API_ROOT from '../utils/api_root'

export const state = () => ({
  [DATA_NOTIFICATIONS_INFO]: {},
  [LOAD_NOTIFICATIONS_IN_PROGRESS]: false,
  [MESSAGES_FROM_TIFIA]: [
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia',
      date: '6 months ago',
      text: 'New trading alert ...'
    },
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia',
      date: '4 months ago',
      text: 'New trading alert ...'
    }
  ],
  [MESSAGES_FROM_TIFIA_NEWS]: [
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia News',
      date: '6 months ago',
      text: 'New trading alert ...'
    },
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia News',
      date: '4 months ago',
      text: 'New trading alert ...'
    }
  ],
  [MESSAGES_FROM_TIFIA_SUPPORT]: [
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia Support',
      date: '6 months ago',
      text: 'New trading alert ...'
    },
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia Support',
      date: '4 months ago',
      text: 'New trading alert ...'
    }
  ],
  [MESSAGES_FROM_USER]: [
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '5 months ago',
      text: 'Hello!'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '4 months ago',
      text: 'Hi!'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '3 months ago',
      text: 'Finished copying you'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '3 months ago',
      text: 'Started copying you'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '3 months ago',
      text: 'Subscribed to your feed'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'If you like to trade forex, then you might be interested to know how trading without leverage changes things. Leverage is an integral part of online forex trading and many beginners don’t fully understand it. You should fully understand how it works and be aware of its pros and cons.'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'The fact is that one of the most important and appealing characteristics of forex trading is the high amounts of leverage offered by brokers.'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'But trading with or without leverage has pros and cons. Today, we’re going to talk about the main advantages and disadvantages of trading without leverage in forex.'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'So without any further delay, let’s get started.'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'Trade with a broker that lets you choose your leverage, open your forex trading account today.'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'Hi'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow',
      date: '2 months ago',
      text: 'Many newcomers are told to start off trading without leverage or use small amounts of leverage when trading. For most part, this means not buying assets or instruments that are of much greater value than what is in your trading account. Instead, to only use your own money or small amounts of leverage to fund your deals.'
    }
  ],
  [USERS_LIST]: [
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia'
    },
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia News'
    },
    {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia Support'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow1'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow2'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow3'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow4'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow5'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow6'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow7'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow8'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow9'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow10'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow11'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow12'
    },
    {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow13'
    }
  ],
  [USER_ACTIVE]: {
    Tifia: {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia'
    },
    'Tifia News': {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia News'
    },
    'Tifia Support': {
      avatar: 'https://social.tifia.com/images/general/avatar_social_system.png',
      nickname: 'Tifia Support'
    },
    Dshadow: {
      avatar: 'https://social.tifia.com/uploads/avatars/003/362/76ac71159ef98ca469ab7c3f67a13f83.jpg',
      nickname: '@Dshadow13'
    }
  }
})

export const getters = {
  [GET_DATA_NOTIFICATIONS_INFO] (state) {
    return state[DATA_NOTIFICATIONS_INFO]
  },
  [GET_LOAD_NOTIFICATIONS_IN_PROGRESS] (state) {
    return state[LOAD_NOTIFICATIONS_IN_PROGRESS]
  },
  [GET_MESSAGES_FROM_TIFIA] (state) {
    return state[MESSAGES_FROM_TIFIA]
  },
  [GET_MESSAGES_FROM_TIFIA_NEWS] (state) {
    return state[MESSAGES_FROM_TIFIA_NEWS]
  },
  [GET_MESSAGES_FROM_TIFIA_SUPPORT] (state) {
    return state[MESSAGES_FROM_TIFIA_SUPPORT]
  },
  [GET_MESSAGES_FROM_USER] (state) {
    return state[MESSAGES_FROM_USER]
  },
  [GET_USERS_LIST] (state) {
    return state[USERS_LIST]
  },
  [GET_USER_ACTIVE] (state) {
    return state[USER_ACTIVE]
  }
}

export const mutations = {
  [LOAD_DATA_ACCOUNT_NOTIFICATIONS_SUCCESS] (state, payload) {
    state[DATA_NOTIFICATIONS_INFO] = payload
  },
  [CHANGE_LOAD_NOTIFICATIONS_IN_PROGRESS] (state, value) {
    state[LOAD_NOTIFICATIONS_IN_PROGRESS] = value
  }
}

export const actions = {
  async [LOAD_NOTIFICATIONS] (context) {
    const { rootGetters, commit } = context
    commit(CHANGE_LOAD_NOTIFICATIONS_IN_PROGRESS, true)
    const url = `${API_ROOT.HOST}/v2/notifications/list`
    const token = rootGetters['login/GET_TOKEN']
    try {
      const { data: response } = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const resultNotifiactions = response.data.map(
        function doubleNumber (currentValue) {
          if (!currentValue.avatar.includes('https://social.tifia.com')) {
            currentValue.avatar = `https://social.tifia.com/${currentValue.avatar}`
          }
          return currentValue
        }
      )
      commit(LOAD_DATA_ACCOUNT_NOTIFICATIONS_SUCCESS, resultNotifiactions)
      commit(CHANGE_LOAD_NOTIFICATIONS_IN_PROGRESS, false)
    } catch (e) {
      commit(CHANGE_LOAD_NOTIFICATIONS_IN_PROGRESS, true)
    }
  }
}
