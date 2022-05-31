import { shallowMount } from '@vue/test-utils'

import tableAccountDate from '@/components/tableAccountDate'
import AccountIndexPage from '@/pages/accounts/index/index'
import { GET_DATA_REAL_ACCOUNTS } from '@/modules/accounts/getter-types'

describe('tableAccountDate: card', () => {
  const componentProp = [{ type: 'ecn-classic', login: 6131220, label: 'PROFIT-6131220', server_id: 30, server: 'Tifia-MT4', leverage: '1:400', currency: 'USD', balance: 0, margin_free: 0, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 0, credit: 0, equity: 0, floating: '0.00', margin: 0, regdate: '2019-12-02 12:24:11', lastdate: '2019-12-02 12:24:11', is_swap_free: false }]

  let component
  beforeEach(() => {
    component = shallowMount(tableAccountDate, {
      propsData: {
        tableData: componentProp
      }
    })
  })

  test('table card view correct', () => {
    const elementAccount = component.find('.table-accounts table tbody tr td:first-child')
    expect(elementAccount.text()).toBe('PROFIT-6131220')

    const elementLeverage = component.find('.table-accounts table tbody tr td:first-child + td')
    expect(elementLeverage.text()).toBe('1:400')

    const elementBalance = component.find('.table-accounts table tbody tr td:first-child + td + td')
    expect(elementBalance.text()).toBe('0')
  })

  test('after click call method goToAccountPage if global in progress in false', () => {
    const pushSpy = jest.fn()
    const router = {
      push: pushSpy
    }

    const componentWithRouter = shallowMount(tableAccountDate, {
      mocks: {
        $router: router
      },
      propsData: {
        tableData: componentProp
      }
    })
    componentWithRouter.find('.table-accounts table tbody tr td').trigger('click')
    expect(pushSpy).toHaveBeenCalledWith('/accounts/info?login=6131220&server=30')
  })
  test('click call method linkAccount', () => {
    const pushSpy = jest.fn()
    const router = {
      push: pushSpy
    }

    const componentWithRouter = shallowMount(tableAccountDate, {
      mocks: {
        $router: router
      },
      propsData: {
        tableData: componentProp
      }
    })

    componentWithRouter.vm.linkAccount()
    expect(pushSpy).toHaveBeenCalledTimes(1)
  })
})

describe('Page: page index', () => {
  test('should render all incoming accounts from store', () => {
    const accounts = [{ name: 'ECN CLASSIC', items: [{ type: 'ecn-classic', login: 6131220, label: 'PROFIT-6131220', server_id: 30, server: 'Tifia-MT4', leverage: '1:400', currency: 'USD', balance: 0, margin_free: 0, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 0, credit: 0, equity: 0, floating: '0.00', margin: 0, regdate: '2019-12-02 12:24:11', lastdate: '2019-12-02 12:24:11', is_swap_free: false }] }, { name: 'START (micro)', items: [{ type: 'start', login: 6330650, label: 'STR-6330650', server_id: 30, server: 'Tifia-MT4', leverage: '1:400', currency: 'USD', balance: 0, margin_free: 0, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 0, credit: 0, equity: 0, floating: '0.00', margin: 0, regdate: '2021-11-24 10:38:19', lastdate: '2021-11-24 10:38:19', is_swap_free: true }, { type: 'start', login: 6330651, label: 'STR-6330651', server_id: 30, server: 'Tifia-MT4', leverage: '1:400', currency: 'USD', balance: 0, margin_free: 0, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 0, credit: 0, equity: 0, floating: '0.00', margin: 0, regdate: '2021-11-24 10:38:47', lastdate: '2021-11-24 10:38:47', is_swap_free: true }] }, { name: 'Affiliate accounts', items: [{ type: 'ecn-classic', login: 6145221, label: 'PARTNER-6145221', server_id: 30, server: 'Tifia-MT4', leverage: '1:1', currency: 'USD', balance: 40.78, margin_free: 40.78, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 40.78, credit: 0, equity: 40.78, floating: '0.00', margin: 0, regdate: '2020-03-02 09:47:31', lastdate: '2020-08-28 11:53:51', is_swap_free: false }, { type: 'mt5-partner', login: 5007937, label: 'MT5-PARTNERS-5007937', server_id: 60, server: 'Tifia MT5 (Classic)', leverage: '1:1', currency: 'USD', balance: 1.5, margin_free: 1.5, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 1.5, credit: 0, equity: 1.5, floating: '0.00', margin: 0, regdate: '2020-03-02 09:47:31', lastdate: '2020-03-02 09:47:31', is_swap_free: false }] }]
    const storeKey = `accounts/${GET_DATA_REAL_ACCOUNTS}`
    const page = shallowMount(AccountIndexPage, {
      mocks: {
        $store: {
          getters: {
            [storeKey]: accounts
          }
        }
      }
    })

    const typeAccountsTitle = page.find('h3')
    expect(typeAccountsTitle.text()).toBe('ECN CLASSIC')

    const typeAccountsCard = page.findAllComponents(tableAccountDate)
    expect(typeAccountsCard).toHaveLength(3)
  })
})
