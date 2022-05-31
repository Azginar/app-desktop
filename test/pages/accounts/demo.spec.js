import { shallowMount } from '@vue/test-utils'

import tableAccountDate from '@/components/tableAccountDate'
import AccountDemoPage from '@/pages/accounts/demo'
import { GET_DATA_DEMO_ACCOUNTS } from '@/modules/accounts/getter-types'

describe('tableAccountDate', () => {
  const componentProp = [{ type: 'demo-start', login: 89763, label: 'DSTR-89763', server_id: 40, server: 'Tifia-Demo', leverage: '1:400', currency: 'USD', balance: 10000, margin_free: 10000, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 10000, credit: 0, equity: 10000, floating: '0.00', margin: 0, regdate: '2021-02-10 17:29:20', lastdate: '2021-02-10 17:29:20', is_swap_free: false }]

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
    expect(elementAccount.text()).toBe('DSTR-89763')

    const elementLeverage = component.find('.table-accounts table tbody tr td:first-child + td')
    expect(elementLeverage.text()).toBe('1:400')

    const elementBalance = component.find('.table-accounts table tbody tr td:first-child + td + td')
    expect(elementBalance.text()).toBe('10000')
  })

  test('click call method goToAccountPage', () => {
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
    expect(pushSpy).toHaveBeenCalledWith('/accounts/info?login=89763&server=40')
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

describe('Page: page demo', () => {
  test('should render all incoming accounts from store', () => {
    const accounts = [{ name: 'DEMO START', items: [{ type: 'demo-start', login: 89763, label: 'DSTR-89763', server_id: 40, server: 'Tifia-Demo', leverage: '1:400', currency: 'USD', balance: 10000, margin_free: 10000, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 10000, credit: 0, equity: 10000, floating: '0.00', margin: 0, regdate: '2021-02-10 17:29:20', lastdate: '2021-02-10 17:29:20', is_swap_free: false }, { type: 'demo-start', login: 89987, label: 'DSTR-89987', server_id: 40, server: 'Tifia-Demo', leverage: '1:400', currency: 'USD', balance: 10000, margin_free: 10000, margin_level: '0,00%', total_profit: 0, total_swap: 0, available: 10000, credit: 0, equity: 10000, floating: '0.00', margin: 0, regdate: '2021-02-12 13:30:23', lastdate: '2021-02-12 13:30:23', is_swap_free: false }] }]
    const storeKey = `accounts/${GET_DATA_DEMO_ACCOUNTS}`
    const page = shallowMount(AccountDemoPage, {
      mocks: {
        $store: {
          getters: {
            [storeKey]: accounts
          }
        }
      }
    })

    const typeAccountsTitle = page.find('h3')
    expect(typeAccountsTitle.text()).toBe('DEMO START')

    const typeAccountsCard = page.findAllComponents(tableAccountDate)
    expect(typeAccountsCard).toHaveLength(1)
  })
})
