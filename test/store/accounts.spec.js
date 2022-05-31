import axios from 'axios'
import { getters, mutations, actions } from '@/store/accounts'
import {
  DATA_ACCOUNT_INFO,
  DATA_DEMO_ACCOUNTS,
  DATA_REAL_ACCOUNTS,
  LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  LOAD_DEMO_ACCOUNTS_IN_PROGRESS,
  MASSIVE_BUTTON, SOCIAL_ACCOUNT_INFO, TABLE_ACCOUNTS_INFO, FINANCE_INFO_ACCOUNT, SECURITY_INFO_ACCOUNT
} from '@/modules/accounts/constants'
import {
  CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS, CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS,
  CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  DATA_DEMO_ACCOUNTS_SUCCESS,
  DATA_REAL_ACCOUNTS_SUCCESS,
  LOAD_DATA_ACCOUNT_INFO_SUCCESS
} from '@/modules/accounts/mutation-types'
import {
  GET_LOGIN_ACCOUNT,
  GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS,
  GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS,
  GET_DATA_DEMO_ACCOUNTS,
  GET_DATA_REAL_ACCOUNTS,
  GET_DATA_GENERAL_ACCOUNTS,
  GET_MASSIVE_BUTTON,
  GET_VALUE_SWAP_FREE,
  GET_TYPE_ACCOUNT,
  GET_SOCIAL_ACCOUNT_INFO,
  GET_TABLE_ACCOUNTS_INFO,
  GET_FINANCE_INFO_ACCOUNT,
  GET_SECURITY_INFO_ACCOUNT,
  GET_DATA_FINANCE_ACCOUNTS,
  GET_LOGIN_ACCOUNT_FOR_URL,
  GET_SERVER_ACCOUNT_FOR_URL
} from '@/modules/accounts/getter-types'
import { GET_TOKEN } from '@/modules/login/getter-types'

import mockedDemoAccountList from '@/test/mocked-data/accounts-demo.json'
import mockedRealAccountList from '@/test/mocked-data/accounts-real.json'
import mockedAccountInfo from '@/test/mocked-data/account-info.json'
import API_ROOT from '@/utils/api_root'
import { LOAD_REAL_ACCOUNT, LOAD_DEMO_ACCOUNT, LOAD_ACCOUNT_BY_LOGIN } from '@/modules/accounts/actions-types'
import promiseBody from '@//utils/test-helpers'
jest.mock('axios')

describe('accounts mutations', () => {
  test('DATA_DEMO_ACCOUNTS_SUCCESS', () => {
    const state = {
      [DATA_DEMO_ACCOUNTS]: []
    }
    mutations[DATA_DEMO_ACCOUNTS_SUCCESS](state, mockedDemoAccountList.all)
    expect(state[DATA_DEMO_ACCOUNTS]).toEqual(mockedDemoAccountList.all)
  })

  test('DATA_REAL_ACCOUNTS_SUCCESS', () => {
    const state = {
      [DATA_REAL_ACCOUNTS]: []
    }
    mutations[DATA_REAL_ACCOUNTS_SUCCESS](state, mockedRealAccountList.all)
    expect(state[DATA_REAL_ACCOUNTS]).toEqual(mockedRealAccountList.all)
  })

  test('CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS', () => {
    const state = {
      [LOAD_DEMO_ACCOUNTS_IN_PROGRESS]: false
    }
    mutations[CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS](state, true)
    expect(state[LOAD_DEMO_ACCOUNTS_IN_PROGRESS]).toBe(true)
  })

  test('CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS', () => {
    const state = {
      [LOAD_REAL_ACCOUNTS_IN_PROGRESS]: false
    }
    mutations[CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS](state, true)
    expect(state[LOAD_REAL_ACCOUNTS_IN_PROGRESS]).toBe(true)
  })

  test('LOAD_DATA_ACCOUNT_INFO_SUCCESS', () => {
    const state = {
      [DATA_ACCOUNT_INFO]: []
    }
    mutations[LOAD_DATA_ACCOUNT_INFO_SUCCESS](state, mockedAccountInfo.all)
    expect(state[DATA_ACCOUNT_INFO]).toEqual(mockedAccountInfo.all)
  })
})

describe('accounts actions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('LOAD_REAL_ACCOUNT positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(true, { data: mockedRealAccountList })))
    const expectedMap = [
      {
        name: 'ECN CLASSIC',
        items: [
          {
            type: 'ecn-classic',
            login: 6268433,
            label: 'PROFIT-6268433',
            server_id: 30,
            server: 'Tifia-MT4',
            leverage: '1:400',
            currency: 'USD',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2021-04-14 10:22:46',
            lastdate: '2021-04-14 10:22:46',
            is_swap_free: false
          },
          {
            type: 'ecn-classic',
            login: 6308338,
            label: 'CLS-6308338',
            server_id: 30,
            server: 'Tifia-MT4',
            leverage: '1:400',
            currency: 'USD',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2021-09-01 19:10:25',
            lastdate: '2021-09-01 19:10:25',
            is_swap_free: true
          },
          {
            type: 'ecn-classic',
            login: 6316398,
            label: 'CLS-6316398',
            server_id: 30,
            server: 'Tifia-MT4',
            leverage: '1:400',
            currency: 'USD',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2021-10-06 13:32:20',
            lastdate: '2021-10-06 13:32:20',
            is_swap_free: true
          }
        ]
      },
      {
        name: 'ECN PRO',
        items: [
          {
            type: 'ecn-pro',
            login: 6332032,
            label: 'PRO-6332032',
            server_id: 30,
            server: 'Tifia-MT4',
            leverage: '1:100',
            currency: 'EUR',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2021-11-30 10:45:32',
            lastdate: '2021-11-30 10:45:32',
            is_swap_free: true
          }
        ]
      },
      {
        name: 'Affiliate accounts',
        items: [
          {
            type: 'mt5-partner',
            login: 5012049,
            label: 'MT5-PARTNERS-5012049',
            server_id: 60,
            server: 'Tifia MT5 (Classic)',
            leverage: '1:1',
            currency: 'USD',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2020-12-16 14:35:09',
            lastdate: '2020-12-22 08:41:03',
            is_swap_free: false
          }
        ]
      },
      {
        name: 'MT5 ECN CLASSIC',
        items: [
          {
            type: 'mt5-classic',
            login: 5015633,
            label: 'MT5-C-5015633',
            server_id: 60,
            server: 'Tifia MT5 (Classic)',
            leverage: '1:100',
            currency: 'USD',
            balance: 0,
            margin_free: 0,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 0,
            credit: 0,
            equity: 0,
            floating: '0.00',
            margin: 0,
            regdate: '2021-05-26 16:59:44',
            lastdate: '2021-05-26 16:59:44',
            is_swap_free: true
          }
        ]
      }
    ]

    await actions[LOAD_REAL_ACCOUNT]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/real`
    })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(DATA_REAL_ACCOUNTS_SUCCESS)
    expect(commitSpy.mock.calls[1][1]).toEqual(expectedMap)
    expect(commitSpy.mock.calls[2][0]).toEqual(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS)
  })

  test('LOAD_REAL_ACCOUNT negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(false)))

    await actions[LOAD_REAL_ACCOUNT]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/real`
    })

    expect(commitSpy).toHaveBeenCalledTimes(2)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toEqual(CHANGE_LOAD_REAL_ACCOUNTS_IN_PROGRESS)
  })

  test('LOAD_DEMO_ACCOUNT positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(true, { data: mockedDemoAccountList })))
    const expectedMap = [
      {
        name: 'DEMO START',
        items: [
          {
            type: 'demo-start',
            login: 69868,
            label: 'DSTR-69868',
            server_id: 40,
            server: 'Tifia-Demo',
            leverage: '1:400',
            currency: 'USD',
            balance: 10000,
            margin_free: 10000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 10000,
            credit: 0,
            equity: 10000,
            floating: '0.00',
            margin: 0,
            regdate: '2020-09-01 12:35:59',
            lastdate: '2020-09-01 12:35:59',
            is_swap_free: false
          }
        ]
      },
      {
        name: 'DEMO CLASSIC',
        items: [
          {
            type: 'demo-classic',
            login: 80343,
            label: 'DCLS-80343',
            server_id: 40,
            server: 'Tifia-Demo',
            leverage: '1:400',
            currency: 'USD',
            balance: 10000,
            margin_free: 10000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 10000,
            credit: 0,
            equity: 10000,
            floating: '0.00',
            margin: 0,
            regdate: '2020-11-24 11:04:55',
            lastdate: '2020-11-24 11:04:55',
            is_swap_free: false
          },
          {
            type: 'demo-classic',
            login: 110110,
            label: 'DCLS-110110',
            server_id: 40,
            server: 'Tifia-Demo',
            leverage: '1:400',
            currency: 'USD',
            balance: 10000,
            margin_free: 10000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 10000,
            credit: 0,
            equity: 10000,
            floating: '0.00',
            margin: 0,
            regdate: '2021-09-22 12:27:07',
            lastdate: '2021-09-22 12:27:07',
            is_swap_free: false
          }
        ]
      },
      {
        name: 'DEMO PRO',
        items: [
          {
            type: 'demo-pro',
            login: 113819,
            label: 'DPRO-113819',
            server_id: 40,
            server: 'Tifia-Demo',
            leverage: '1:400',
            currency: 'USD',
            balance: 50000,
            margin_free: 50000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 50000,
            credit: 0,
            equity: 50000,
            floating: '0.00',
            margin: 0,
            regdate: '2021-11-09 11:22:55',
            lastdate: '2021-11-09 11:22:55',
            is_swap_free: false
          }
        ]
      },
      {
        name: 'DEMO MT5 CLASSIC',
        items: [
          {
            type: 'mt5-demo-classic',
            login: 5018313,
            label: 'MT5-DEMO-5018313',
            server_id: 60,
            server: 'unknown',
            leverage: '1:400',
            currency: 'USD',
            balance: 10000,
            margin_free: 10000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 10000,
            credit: 0,
            equity: 10000,
            floating: '0.00',
            margin: 0,
            regdate: '2021-11-16 18:15:11',
            lastdate: '2021-11-16 18:15:11',
            is_swap_free: true
          },
          {
            type: 'mt5-demo-classic',
            login: 5018314,
            label: 'MT5-DEMO-5018314',
            server_id: 60,
            server: 'unknown',
            leverage: '1:400',
            currency: 'USD',
            balance: 10000,
            margin_free: 10000,
            margin_level: '0,00%',
            total_profit: 0,
            total_swap: 0,
            available: 10000,
            credit: 0,
            equity: 10000,
            floating: '0.00',
            margin: 0,
            regdate: '2021-11-16 18:15:42',
            lastdate: '2021-11-16 18:15:42',
            is_swap_free: true
          }
        ]
      }
    ]

    await actions[LOAD_DEMO_ACCOUNT]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/demo`
    })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(DATA_DEMO_ACCOUNTS_SUCCESS)
    expect(commitSpy.mock.calls[1][1]).toEqual(expectedMap)
    expect(commitSpy.mock.calls[2][0]).toEqual(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS)
  })

  test('LOAD_DEMO_ACCOUNT negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    axios.mockImplementation(jest.fn(() => promiseBody(false)))

    await actions[LOAD_DEMO_ACCOUNT]({ commit: commitSpy, rootGetters: rootGettersMock })
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/demo`
    })

    expect(commitSpy).toHaveBeenCalledTimes(2)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toEqual(CHANGE_LOAD_DEMO_ACCOUNTS_IN_PROGRESS)
  })

  test('LOAD_ACCOUNT_BY_LOGIN positive load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }
    const mockData = { data: { type: 'ecn-classic', login: 6131220, label: 'PROFIT-6131220', server_id: 30, server: 'Tifia-MT4', leverage: '1:400', currency: 'USD', balance: 0, margin_free: 0, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 0, credit: 0, equity: 0, floating: '0.00', margin: 0, regdate: '2019-12-02 12:24:11', lastdate: '2019-12-02 12:24:11', is_swap_free: false } }

    axios.mockImplementation(jest.fn(() => promiseBody(true, mockData)))

    const payload = { query: { login: 6131220, server: 30 } }

    await actions[LOAD_ACCOUNT_BY_LOGIN]({ commit: commitSpy, rootGetters: rootGettersMock }, payload)
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/info?login=${payload.query.login}&server=${payload.query.server}`
    })

    expect(commitSpy).toHaveBeenCalledTimes(3)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(LOAD_DATA_ACCOUNT_INFO_SUCCESS)
    expect(commitSpy.mock.calls[1][1]).toEqual(mockData.data)
    expect(commitSpy.mock.calls[2][0]).toBe(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS)
  })

  test('LOAD_ACCOUNT_BY_LOGIN negative load', async () => {
    const commitSpy = jest.fn()
    const rootGettersMock = {
      [`login/${GET_TOKEN}`]: 'mockedToken'
    }

    const payload = { query: { login: 6131220, server: 30 } }

    axios.mockImplementation(jest.fn(() => promiseBody(false)))
    await actions[LOAD_ACCOUNT_BY_LOGIN]({ commit: commitSpy, rootGetters: rootGettersMock }, payload)
    expect(axios).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockedToken'
      },
      url: `${API_ROOT.HOST}/v2/accounts/info?login=${payload.query.login}&server=${payload.query.server}`
    })

    expect(commitSpy).toHaveBeenCalledTimes(2)
    expect(commitSpy.mock.calls[0][0]).toBe(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS)
    expect(commitSpy.mock.calls[1][0]).toBe(CHANGE_LOAD_INFO_ACCOUNTS_IN_PROGRESS)
  })
})

describe('accounts getters', () => {
  it('GET_LOGIN_ACCOUNT', () => {
    const state = {
      DATA_ACCOUNT_INFO: {
        account: {
          label: 'CLS-6304538'
        }
      }
    }
    const result = getters[GET_LOGIN_ACCOUNT](state)
    expect(result).toBe('CLS-6304538')
  })

  it('GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS', () => {
    const state = {
      [LOAD_DEMO_ACCOUNTS_IN_PROGRESS]: false
    }
    const result = getters[GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS](state)
    expect(result).toBe(false)
  })

  it('GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS', () => {
    const state = {
      [LOAD_REAL_ACCOUNTS_IN_PROGRESS]: false
    }
    const result = getters[GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS](state)
    expect(result).toBe(false)
  })

  it('GET_DATA_DEMO_ACCOUNTS', () => {
    const state = {
      [DATA_DEMO_ACCOUNTS]: []
    }
    const result = getters[GET_DATA_DEMO_ACCOUNTS](state)
    expect(result).toEqual([])
  })

  it('GET_DATA_REAL_ACCOUNTS', () => {
    const state = {
      [DATA_REAL_ACCOUNTS]: []
    }
    const result = getters[GET_DATA_REAL_ACCOUNTS](state)
    expect(result).toEqual([])
  })

  it('GET_MASSIVE_BUTTON', () => {
    const state = {
      [MASSIVE_BUTTON]: []
    }
    const result = getters[GET_MASSIVE_BUTTON](state)
    expect(result).toEqual([])
  })

  it('GET_VALUE_SWAP_FREE', () => {
    const state = {
      DATA_ACCOUNT_INFO: {
        account: {
          is_swap_free: true
        }
      }
    }
    const result = getters[GET_VALUE_SWAP_FREE](state)
    expect(result).toBe(true)
  })

  it('GET_TYPE_ACCOUNT', () => {
    const state = {
      DATA_ACCOUNT_INFO: {
        account: {
          type: 'demo-start'
        }
      }
    }
    const result = getters[GET_TYPE_ACCOUNT](state)
    expect(result).toBe('demo-start')
  })

  it('GET_LOGIN_ACCOUNT_FOR_URL', () => {
    const state = {
      DATA_ACCOUNT_INFO: {
        account: {
          login: '6131220'
        }
      }
    }
    const result = getters[GET_LOGIN_ACCOUNT_FOR_URL](state)
    expect(result).toBe('6131220')
  })

  it('GET_SERVER_ACCOUNT_FOR_URL', () => {
    const state = {
      DATA_ACCOUNT_INFO: {
        account: {
          server_id: '30'
        }
      }
    }
    const result = getters[GET_SERVER_ACCOUNT_FOR_URL](state)
    expect(result).toBe('30')
  })

  it('GET_SOCIAL_ACCOUNT_INFO', () => {
    const state = {
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
      ]
    }
    const result = getters[GET_SOCIAL_ACCOUNT_INFO](state)
    expect(result).toEqual([
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
    ])
  })

  it('GET_TABLE_ACCOUNTS_INFO', () => {
    const state = {
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
      ]
    }
    const result = getters[GET_TABLE_ACCOUNTS_INFO](state)
    expect(result).toEqual([
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
    ])
  })

  it('GET_FINANCE_INFO_ACCOUNT', () => {
    const state = {
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
      ]
    }
    const result = getters[GET_FINANCE_INFO_ACCOUNT](state)
    expect(result).toEqual([
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
    ])
  })

  it('GET_SECURITY_INFO_ACCOUNT', () => {
    const state = {
      [SECURITY_INFO_ACCOUNT]: []
    }
    const result = getters[GET_SECURITY_INFO_ACCOUNT](state)
    expect(result).toEqual([])
  })

  it('GET_DATA_GENERAL_ACCOUNTS', () => {
    const state = {
      [DATA_ACCOUNT_INFO]: mockedAccountInfo
    }
    const result = getters[GET_DATA_GENERAL_ACCOUNTS](state)
    expect(result).toEqual([
      {
        title: 'Login',
        value: 6268433
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
        time: '10:22:46',
        date: '2021-04-14'
      },
      {
        title: 'Last login',
        time: '10:22:46',
        date: '2021-04-14'
      }
    ])
  })

  it('GET_DATA_FINANCE_ACCOUNTS', () => {
    const state = {
      [DATA_ACCOUNT_INFO]: mockedAccountInfo
    }
    const result = getters[GET_DATA_FINANCE_ACCOUNTS](state)
    expect(result).toEqual([
      {
        title: 'Balance',
        value: '0 USD'
      },
      {
        title: 'Equity',
        value: '0 USD'
      },
      {
        title: 'Credit',
        value: '0 USD'
      },
      {
        title: 'Floating Profit/Loss',
        value: '0.00 USD'
      },
      {
        title: 'Free margin',
        value: '0 USD'
      },
      {
        title: 'Margin',
        value: '0 USD'
      },
      {
        title: 'Total profit',
        value: '0 USD'
      },
      {
        title: 'Total swap',
        value: '0 USD'
      },
      {
        title: 'Margin Level',
        value: '0,00%'
      },
      {
        title: 'Available for withdrawal',
        value: '0 USD'
      }
    ])
  })
})
