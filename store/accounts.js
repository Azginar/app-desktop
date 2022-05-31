import axios from 'axios'
import get from 'lodash/get'
import {
  DATA_DEMO_ACCOUNTS,
  DATA_ACCOUNT_INFO,
  TABLE_ACCOUNTS_INFO,
  SOCIAL_ACCOUNT_INFO,
  MASSIVE_BUTTON,
  FINANCE_INFO_ACCOUNT,
  SECURITY_INFO_ACCOUNT,
  LOAD_DEMO_ACCOUNTS_IN_PROGRESS,
  LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  LOAD_INFO_ACCOUNTS_IN_PROGRESS,
  DATA_REAL_ACCOUNTS,
  OPEN_ACCOUNT_INFO,
  OPEN_ACCOUNT_TYPE,
  SELECTED_OPEN_ACCOUNT_TYPE,
  LEVERAGE,
  SELECTED_LEVERAGE,
  CURRENCY_ACCOUNT,
  SELECTED_CURRENCY_ACCOUNT
} from '@/modules/accounts/constants'
import {
  DATA_DEMO_ACCOUNTS_SUCCESS,
  LOAD_DATA_ACCOUNT_INFO_SUCCESS,
  CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS,
  CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS,
  DATA_REAL_ACCOUNTS_SUCCESS,
  CHANGE_SELECTED_OPEN_ACCOUNT_TYPE,
  CHANGE_SELECTED_LEVERAGE,
  CHANGE_CURRENCY_ACCOUNT
} from '@/modules/accounts/mutation-types'
import {
  GET_DATA_DEMO_ACCOUNTS,
  GET_DATA_GENERAL_ACCOUNTS,
  GET_LOGIN_ACCOUNT,
  GET_VALUE_SWAP_FREE,
  GET_DATA_FINANCE_ACCOUNTS,
  GET_TYPE_ACCOUNT,
  GET_TABLE_ACCOUNTS_INFO,
  GET_SOCIAL_ACCOUNT_INFO,
  GET_MASSIVE_BUTTON,
  GET_FINANCE_INFO_ACCOUNT,
  GET_SECURITY_INFO_ACCOUNT,
  GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS,
  GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  GET_LOAD_INFO_ACCOUNTS_IN_PROGRESS,
  GET_DATA_REAL_ACCOUNTS,
  GET_LOGIN_ACCOUNT_FOR_URL,
  GET_SERVER_ACCOUNT_FOR_URL,
  GET_OPEN_ACCOUNT_INFO,
  GET_OPEN_ACCOUNT_TYPE,
  GET_SELECTED_OPEN_ACCOUNT_TYPE,
  GET_LEVERAGE,
  GET_SELECTED_LEVERAGE,
  GET_CURRENCY_ACCOUNT,
  GET_SELECTED_CURRENCY_ACCOUNT
} from '@/modules/accounts/getter-types'
import {
  LOAD_DEMO_ACCOUNT,
  LOAD_ACCOUNT_BY_LOGIN,
  LOAD_REAL_ACCOUNT
} from '@/modules/accounts/actions-types'
import API_ROOT from '../utils/api_root'

export const state = () => ({
  [LOAD_DEMO_ACCOUNTS_IN_PROGRESS]: false,
  [DATA_DEMO_ACCOUNTS]: {},
  [DATA_ACCOUNT_INFO]: {},
  [TABLE_ACCOUNTS_INFO]: [
    {
      title: 'Login',
      value: '6117769'
    },
    {
      title: 'Server',
      value: 'Tifia-MT4'
    },
    {
      title: 'Leverage',
      value: '1:400'
    },
    {
      title: 'Registered',
      time: '12:22',
      date: '30.09.2019'
    },
    {
      title: 'Last login',
      time: '09:45',
      date: '01.01.2020'
    }
  ],
  [SOCIAL_ACCOUNT_INFO]: [
    {
      title: 'Attached to',
      value: '@HighRiskTrader'
    },
    {
      title: 'Trader account',
      value: 'PRO-6161721'
    },
    {
      title: 'Trader\'s commission',
      value: '20%'
    },
    {
      title: 'Copy type',
      value: 'In proportion to my equity'
    },
    {
      title: 'Stop loss for Copying',
      value: '- 1 500 USD'
    },
    {
      title: 'Take PROFIT for Copying',
      value: '+ 5 000 USD'
    },
    {
      title: 'Start balance',
      value: '18 000.00 USD'
    },
    {
      title: 'Current balance',
      value: '18 500.88 USD'
    },
    {
      title: 'PROFIT of trading',
      value: '+ 500.88 USD'
    },
    {
      title: 'Commission',
      value: '- 100.22 USD'
    },
    {
      title: 'Total earned',
      value: '+ 400.66 USD'
    }
  ],
  [MASSIVE_BUTTON]: [
    {
      value: '1 days'
    },
    {
      value: '1 week'
    },
    {
      value: '2 weeks'
    },
    {
      value: '1 month'
    },
    {
      value: '3 month'
    },
    {
      value: '6 month'
    },
    {
      value: '1 year'
    }
  ],
  [FINANCE_INFO_ACCOUNT]: [
    {
      title: 'Balance',
      value: '18 000.00 USD'
    },
    {
      title: 'Equity',
      value: '18 000.00 USD'
    },
    {
      title: 'Credit',
      value: '0.00 USD'
    },
    {
      title: 'Floating Profit/Loss',
      value: '0.00 USD'
    },
    {
      title: 'Free margin',
      value: '18 000.00 USD'
    },
    {
      title: 'Margin',
      value: '0.00 USD'
    },
    {
      title: 'Total profit',
      value: '0.00 USD'
    },
    {
      title: 'Total swap',
      value: '0.00 USD'
    },
    {
      title: 'Margin Level',
      value: '0.00 %'
    },
    {
      title: 'Available for withdrawal',
      value: '18 000.00 USD'
    }
  ],
  [SECURITY_INFO_ACCOUNT]: [
    {
      title: 'Trader\'s password',
      value: '******',
      button: 'CHANGE'
    },
    {
      title: 'INVESTOR\'S PASSWORD',
      value: '******',
      button: 'CHANGE'
    },
    {
      title: 'PHONE PASSWORD',
      value: '******',
      button: 'VIEW'
    }
  ],
  [DATA_REAL_ACCOUNTS]: [],
  [LOAD_REAL_ACCOUNTS_IN_PROGRESS]: false,
  [LOAD_INFO_ACCOUNTS_IN_PROGRESS]: false,
  [OPEN_ACCOUNT_INFO]: {
    'Start (Micro) / MT4': {
      labelAccount: 'Start (Micro)',
      infoAccount: [
        {
          title: 'Minimum deposit',
          value: '10 USD'
        },
        {
          title: 'Spread from',
          value: '2.2'
        },
        {
          title: 'Platform',
          value: 'MetaTrader 4'
        }
      ]
    },
    'ECN Classic / MT4': {
      labelAccount: 'ECN Classic',
      infoAccount: [
        {
          title: 'Minimum deposit',
          value: '100 USD'
        },
        {
          title: 'Spread from',
          value: '1.1'
        },
        {
          title: 'Platform',
          value: 'MetaTrader 4'
        }
      ]
    },
    'ECN Classic / MT5': {
      labelAccount: 'ECN Classic',
      infoAccount: [
        {
          title: 'Minimum deposit',
          value: '100 USD'
        },
        {
          title: 'Spread from',
          value: '1.1'
        },
        {
          title: 'Platform',
          value: 'MetaTrader 5'
        }
      ]
    },
    'ECN Pro / MT4': {
      labelAccount: 'ECN PRO',
      infoAccount: [
        {
          title: 'Minimum deposit',
          value: '500 USD'
        },
        {
          title: 'Spread from',
          value: '0.0'
        },
        {
          title: 'Platform',
          value: 'MetaTrader 4'
        }
      ]
    }
  },
  [OPEN_ACCOUNT_TYPE]: ['Start (Micro) / MT4', 'ECN Classic / MT4', 'ECN Classic / MT5', 'ECN Pro / MT4'],
  [SELECTED_OPEN_ACCOUNT_TYPE]: 'Start (Micro) / MT4',
  [LEVERAGE]: {
    'Start (Micro) / MT4': ['1:100', '1:200', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Classic / MT4': ['1:1', '1:10', '1:50', '1:100', '1:200', '1:300', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Classic / MT5': ['1:1', '1:10', '1:50', '1:100', '1:200', '1:300', '1:400', '1:500', '1:600', '1:1000'],
    'ECN Pro / MT4': ['1:1', '1:10', '1:20', '1:50', '1:100', '1:200', '1:400', '1:500']
  },
  [SELECTED_LEVERAGE]: {
    'Start (Micro) / MT4': '1:400',
    'ECN Classic / MT4': '1:400',
    'ECN Classic / MT5': '1:100',
    'ECN Pro / MT4': '1:100'
  },
  [CURRENCY_ACCOUNT]: ['USD', 'EUR'],
  [SELECTED_CURRENCY_ACCOUNT]: 'USD'
})

export const getters = {
  [GET_DATA_DEMO_ACCOUNTS] (state) {
    return state[DATA_DEMO_ACCOUNTS]
  },
  [GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS] (state) {
    return state[LOAD_DEMO_ACCOUNTS_IN_PROGRESS]
  },
  [GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS] (state) {
    return state[LOAD_REAL_ACCOUNTS_IN_PROGRESS]
  },
  [GET_LOAD_INFO_ACCOUNTS_IN_PROGRESS] (state) {
    return state[LOAD_INFO_ACCOUNTS_IN_PROGRESS]
  },
  [GET_LOGIN_ACCOUNT] (state) {
    return get(state[DATA_ACCOUNT_INFO], 'account.label')
  },
  [GET_VALUE_SWAP_FREE] (state) {
    return get(state[DATA_ACCOUNT_INFO], 'account.is_swap_free')
  },
  [GET_DATA_GENERAL_ACCOUNTS] (state) {
    const fullDateReg = get(state[DATA_ACCOUNT_INFO], 'account.regdate')
    const fullDateLastLogin = get(state[DATA_ACCOUNT_INFO], 'account.lastdate')

    const timeReg = (fullDateReg || '').split(' ')[1]
    const dateReg = (fullDateReg || '').split(' ')[0]

    const timeLastLogin = (fullDateLastLogin || '').split(' ')[1]
    const dateLastLogin = (fullDateLastLogin || '').split(' ')[0]
    return [
      {
        title: 'Login',
        value: get(state[DATA_ACCOUNT_INFO], 'account.login')
      },
      {
        title: 'Server',
        value: get(state[DATA_ACCOUNT_INFO], 'account.server')
      },
      {
        title: 'Leverage',
        value: get(state[DATA_ACCOUNT_INFO], 'account.leverage')
      },
      {
        title: 'Registered',
        time: timeReg,
        date: dateReg
      },
      {
        title: 'Last login',
        time: timeLastLogin,
        date: dateLastLogin
      }
    ]
  },
  [GET_DATA_FINANCE_ACCOUNTS] (state) {
    return [
      {
        title: 'Balance',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.balance')} USD`
      },
      {
        title: 'Equity',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.equity')} USD`
      },
      {
        title: 'Credit',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.credit')} USD`
      },
      {
        title: 'Floating Profit/Loss',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.floating')} USD`
      },
      {
        title: 'Free margin',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.margin_free')} USD`
      },
      {
        title: 'Margin',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.margin')} USD`
      },
      {
        title: 'Total profit',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.total_profit')} USD`
      },
      {
        title: 'Total swap',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.total_swap')} USD`
      },
      {
        title: 'Margin Level',
        value: get(state[DATA_ACCOUNT_INFO], 'account.margin_level')
      },
      {
        title: 'Available for withdrawal',
        value: `${get(state[DATA_ACCOUNT_INFO], 'account.available')} USD`
      }
    ]
  },
  [GET_TYPE_ACCOUNT] (state) {
    return get(state[DATA_ACCOUNT_INFO], 'account.type')
  },
  [GET_TABLE_ACCOUNTS_INFO] (state) {
    return state[TABLE_ACCOUNTS_INFO]
  },
  [GET_SOCIAL_ACCOUNT_INFO] (state) {
    return state[SOCIAL_ACCOUNT_INFO]
  },
  [GET_MASSIVE_BUTTON] (state) {
    return state[MASSIVE_BUTTON]
  },
  [GET_FINANCE_INFO_ACCOUNT] (state) {
    return state[FINANCE_INFO_ACCOUNT]
  },
  [GET_SECURITY_INFO_ACCOUNT] (state) {
    return state[SECURITY_INFO_ACCOUNT]
  },
  [GET_DATA_REAL_ACCOUNTS] (state) {
    return state[DATA_REAL_ACCOUNTS]
  },
  [GET_LOGIN_ACCOUNT_FOR_URL] (state) {
    return get(state[DATA_ACCOUNT_INFO], 'account.login')
  },
  [GET_SERVER_ACCOUNT_FOR_URL] (state) {
    return get(state[DATA_ACCOUNT_INFO], 'account.server_id')
  },
  [GET_OPEN_ACCOUNT_INFO] (state) {
    return state[OPEN_ACCOUNT_INFO]
  },
  [GET_OPEN_ACCOUNT_TYPE] (state) {
    return state[OPEN_ACCOUNT_TYPE]
  },
  [GET_SELECTED_OPEN_ACCOUNT_TYPE] (state) {
    return state[SELECTED_OPEN_ACCOUNT_TYPE]
  },
  [GET_LEVERAGE] (state) {
    return state[LEVERAGE]
  },
  [GET_SELECTED_LEVERAGE] (state) {
    return state[SELECTED_LEVERAGE]
  },
  [GET_CURRENCY_ACCOUNT] (state) {
    return state[CURRENCY_ACCOUNT]
  },
  [GET_SELECTED_CURRENCY_ACCOUNT] (state) {
    return state[SELECTED_CURRENCY_ACCOUNT]
  }
}

export const mutations = {
  [DATA_DEMO_ACCOUNTS_SUCCESS] (state, payload) {
    state[DATA_DEMO_ACCOUNTS] = payload
  },
  [LOAD_DATA_ACCOUNT_INFO_SUCCESS] (state, payload) {
    state[DATA_ACCOUNT_INFO] = payload
  },
  [CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS] (state, value) {
    state[LOAD_DEMO_ACCOUNTS_IN_PROGRESS] = value
  },
  [CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS] (state, value) {
    state[LOAD_REAL_ACCOUNTS_IN_PROGRESS] = value
  },
  [CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS] (state, value) {
    state[LOAD_INFO_ACCOUNTS_IN_PROGRESS] = value
  },
  [DATA_REAL_ACCOUNTS_SUCCESS] (state, payload) {
    state[DATA_REAL_ACCOUNTS] = payload
  },
  [CHANGE_SELECTED_OPEN_ACCOUNT_TYPE] (state, selected) {
    state[SELECTED_OPEN_ACCOUNT_TYPE] = selected
  },
  [CHANGE_SELECTED_LEVERAGE] (state, payload) {
    const { leverage, typeAccount } = payload
    state[SELECTED_LEVERAGE][typeAccount] = leverage
  },
  [CHANGE_CURRENCY_ACCOUNT] (state, selected) {
    state[SELECTED_CURRENCY_ACCOUNT] = selected
  }
}

export const actions = {
  async [LOAD_DEMO_ACCOUNT] (context) {
    const { rootGetters, commit } = context
    commit(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS, true)
    const token = rootGetters['login/GET_TOKEN']
    const url = `${API_ROOT.HOST}/v2/accounts/demo`

    try {
      const { data: response } = await axios({
        url: `${url}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const resultDemoAccount = get(response, 'all', null)
      const resultDemoAccountNoEmpty = []

      if (resultDemoAccount) {
        for (const prop in resultDemoAccount) {
          const getNameAccount = get(resultDemoAccount[prop], 'name')
          const getItemsAccount = get(resultDemoAccount[prop], 'items')
          if (getItemsAccount.length > 0) {
            resultDemoAccountNoEmpty.push({ name: getNameAccount, items: getItemsAccount })
          }
        }
        commit(DATA_DEMO_ACCOUNTS_SUCCESS, resultDemoAccountNoEmpty)
      }
      commit(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS, false)
    } catch (e) {
      commit(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS, true)
    }
  },

  async [LOAD_REAL_ACCOUNT] (context) {
    const { rootGetters, commit } = context
    commit(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS, true)
    const token = rootGetters['login/GET_TOKEN']
    const url = `${API_ROOT.HOST}/v2/accounts/real`

    try {
      const { data: response } = await axios({
        url: `${url}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const resultRealAccount = get(response, 'all', null)
      const resultRealAccountNoEmpty = []
      if (resultRealAccount) {
        for (const prop in resultRealAccount) {
          const getNameAccount = get(resultRealAccount[prop], 'name')
          const getItemsAccount = get(resultRealAccount[prop], 'items')
          if (getItemsAccount.length > 0) {
            resultRealAccountNoEmpty.push({ name: getNameAccount, items: getItemsAccount })
          }
        }
        commit(DATA_REAL_ACCOUNTS_SUCCESS, resultRealAccountNoEmpty)
      }
      commit(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS, false)
    } catch (e) {
      commit(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS, true)
    }
  },

  async [LOAD_ACCOUNT_BY_LOGIN] (context, payload) {
    const { rootGetters, commit } = context
    commit(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS, true)
    const loginForUrl = get(payload, 'query.login', null)
    const serverForUrl = get(payload, 'query.server', null)
    const url = `${API_ROOT.HOST}/v2/accounts/info?login=${loginForUrl}&server=${serverForUrl}`
    // eslint-disable-next-line valid-typeof
    if (typeof loginForUrl != null && typeof serverForUrl != null) {
      const token = rootGetters['login/GET_TOKEN']
      try {
        const { data: response } = await axios({
          url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        commit(LOAD_DATA_ACCOUNT_INFO_SUCCESS, response)
        commit(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS, false)
      } catch (e) {
        commit(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS, true)
      }
    }
  },
  [CHANGE_SELECTED_OPEN_ACCOUNT_TYPE] (vueContext, selected) {
    vueContext.commit('CHANGE_SELECTED_OPEN_ACCOUNT_TYPE', selected)
  },
  [CHANGE_SELECTED_LEVERAGE] (vueContext, payload) {
    vueContext.commit('CHANGE_SELECTED_LEVERAGE', payload)
  },
  [CHANGE_CURRENCY_ACCOUNT] (vueContext, selected) {
    vueContext.commit('CHANGE_CURRENCY_ACCOUNT', selected)
  }
}
