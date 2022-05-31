import AffiliateTableReferrals from '@/components/affiliate/table-referrals'
import { shallowMount } from '@vue/test-utils'

describe('testing component AffiliateTableReferrals', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AffiliateTableReferrals, {
      propsData: {
        tableData: [
          {
            uid: '2531436775',
            verification: 'verified',
            registered: '09.07.2021',
            fullName: 'NIK FAISAL BIN NIK AZIZ',
            account: 'PROFIT-6278955',
            deposit: '400.00 USD',
            withdrawal: '0.00 USD',
            balance: '206.11 USD',
            profit: '0.00 USD',
            volume: '5.50',
            commission: '97.11 USD',
            accounts: [
              {
                account: 'PROFIT-6278955',
                deposit: '400.00 USD',
                withdrawal: '0.00 USD',
                balance: '206.11 USD',
                profit: '0.00 USD',
                volume: '5.50',
                commission: '97.11 USD'
              },
              {
                account: 'CLS-6293859',
                deposit: '–',
                withdrawal: '–',
                balance: '0.00 USD',
                profit: '–',
                volume: '–',
                commission: '–'
              },
              {
                account: 'CLS-6293880',
                deposit: '–',
                withdrawal: '–',
                balance: '0.00 USD',
                profit: '–',
                volume: '–',
                commission: '–'
              }
            ]
          }
        ]
      }
    })
  })

  it('is a AffiliateTableReferrals component', () => {
    expect(wrapper.is(AffiliateTableReferrals)).toBe(true)
  })

  it('uid in AffiliateTableReferrals exists', () => {
    expect(wrapper.find('.uid').exists()).toBe(true)
  })

  it('div.left-table in AffiliateTableReferrals component has the .left-table class', () => {
    expect(wrapper.find('.left-table').classes()).toContain('left-table')
  })

  it('Find NIK FAISAL BIN NIK AZIZ in component AffiliateTableReferrals', () => {
    const element = wrapper.find('.left-table table tr td h4')
    expect(element.text()).toBe('NIK FAISAL BIN NIK AZIZ')
  })

  it('Find status VERIFIED in component AffiliateTableReferrals', () => {
    const element = wrapper.find('.left-table table tr td .status-info span')
    expect(element.text()).toBe('Verified')
  })
})
