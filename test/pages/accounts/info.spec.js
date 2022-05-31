import { shallowMount } from '@vue/test-utils'
import AccountInfoPage from '../../../pages/accounts/info'
import tableAccountInfo from '../../../components/tableAccountInfo'
import financeInfoAccount from '../../../components/financeInfoAccount'

import {
  GET_DATA_GENERAL_ACCOUNTS,
  GET_LOGIN_ACCOUNT,
  GET_VALUE_SWAP_FREE,
  GET_DATA_FINANCE_ACCOUNTS,
  GET_TYPE_ACCOUNT,
  GET_SOCIAL_ACCOUNT_INFO,
  GET_MASSIVE_BUTTON,
  GET_SECURITY_INFO_ACCOUNT
} from '../../../modules/accounts/getter-types'

describe('account info page', () => {
  test('should show correct info from store', () => {
    const routerPushSpy = jest.fn()
    const dispatchSpy = jest.fn()
    const store = {
      dispatch: dispatchSpy,
      getters: {
        [`accounts/${GET_DATA_GENERAL_ACCOUNTS}`]: [{ title: 'Login', value: 6131220 }, { title: 'Server', value: 'Tifia-MT4' }, { title: 'Leverage', value: '1:400' }, { title: 'Registered', time: '12:24:11', date: '2019-12-02' }, { title: 'Last login', time: '12:24:11', date: '2019-12-02' }],
        [`accounts/${GET_SOCIAL_ACCOUNT_INFO}`]: {},
        [`accounts/${GET_DATA_FINANCE_ACCOUNTS}`]: [],
        [`accounts/${GET_MASSIVE_BUTTON}`]: [],
        [`accounts/${GET_SECURITY_INFO_ACCOUNT}`]: [],
        [`accounts/${GET_TYPE_ACCOUNT}`]: [],
        [`accounts/${GET_VALUE_SWAP_FREE}`]: [],
        [`accounts/${GET_LOGIN_ACCOUNT}`]: []
      }
    }

    const page = shallowMount(AccountInfoPage, {
      mocks: {
        $router: {
          push: routerPushSpy
        },
        $store: store
      }
    })
    const TableAccountInfoComponent = page.findComponent(tableAccountInfo)
    expect(TableAccountInfoComponent.isVisible()).toBe(true)
    expect(TableAccountInfoComponent.props()).toEqual({
      account: [
        { title: 'Login', value: 6131220 },
        { title: 'Server', value: 'Tifia-MT4' },
        { title: 'Leverage', value: '1:400' },
        { title: 'Registered', time: '12:24:11', date: '2019-12-02' },
        { title: 'Last login', time: '12:24:11', date: '2019-12-02' }],
      typeDemoAccount: false
    })
  })

  test('is account info block view correct', () => {
    const props = {
      account: [{ title: 'Login', value: 6131220 }, { title: 'Server', value: 'Tifia-MT4' }, { title: 'Leverage', value: '1:400' }, { title: 'Registered', time: '12:24:11', date: '2019-12-02' }, { title: 'Last login', time: '12:24:11', date: '2019-12-02' }]
    }

    const component = shallowMount(tableAccountInfo, { propsData: props })

    expect(component.find('.black-block .table-row .col-row > div > span').text()).toBe('6131220')
    expect(component.find('.black-block .table-row .col-row:nth-child(2) > div > span').text()).toBe('Tifia-MT4')
    expect(component.find('.black-block .table-row .col-row:nth-child(3) > div > span').text()).toBe('1:400')
    expect(component.find('.black-block .table-row .col-row:nth-child(4) > div > span.simple-text').text()).toBe('12:24:11 2019-12-02')
    expect(component.find('.black-block .table-row .col-row:nth-child(5) > div > span.simple-text').text()).toBe('12:24:11 2019-12-02')
  })

  test('is finance block view correct', () => {
    const props = {
      financeInfo: [{ title: 'Balance', value: '1.5 USD' }, { title: 'Equity', value: '1.5 USD' }, { title: 'Credit', value: '0 USD' }, { title: 'Floating Profit/Loss', value: '0.00 USD' }, { title: 'Free margin', value: '1.5 USD' }, { title: 'Margin', value: '0 USD' }, { title: 'Total profit', value: '0 USD' }, { title: 'Total swap', value: '0 USD' }, { title: 'Margin Level', value: '0,00%' }, { title: 'Available for withdrawal', value: '1.5 USD' }]
    }

    const componentFinanceInfo = shallowMount(financeInfoAccount, { propsData: props })

    expect(componentFinanceInfo.find('.table-row .col-row:first-child > span').text()).toBe('1.5 USD')
    expect(componentFinanceInfo.find('.table-row .col-row:last-child > span').text()).toBe('1.5 USD')
  })
})
