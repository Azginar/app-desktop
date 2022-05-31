import PartnerTableAccounts from '@/components/affiliate/partner-card'
import { mount } from '@vue/test-utils'

describe('testing component InfoCampaigns', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PartnerTableAccounts, {
      propsData: {
        partnersCardData: [
          {
            account: 'PARTNER-6040102',
            activeReferrals: '201',
            balance: '4 792.51 USD',
            lastWeek: '+ 665.12 USD'
          },
          {
            account: 'MT5-PARTNERS-5002595',
            activeReferrals: '64',
            balance: '134.76 USD',
            lastWeek: '+ 12.44 USD'
          }
        ]
      }
    })
  })

  it('is a PartnerTableAccounts component', () => {
    expect(wrapper.is(PartnerTableAccounts)).toBe(true)
  })

  it('partners-table-block in PartnerTableAccounts exists', () => {
    expect(wrapper.find('.partners-table-block').exists()).toBe(true)
  })

  it('div.info-campaign in PartnerTableAccounts component has the .info-campaign class', () => {
    expect(wrapper.find('.partners-table-block').classes()).toContain('partners-table-block')
  })

  it('PartnerTableAccounts has a content property', () => {
    expect(wrapper.props().partnersCardData).toStrictEqual(
      [
        {
          account: 'PARTNER-6040102',
          activeReferrals: '201',
          balance: '4 792.51 USD',
          lastWeek: '+ 665.12 USD'
        },
        {
          account: 'MT5-PARTNERS-5002595',
          activeReferrals: '64',
          balance: '134.76 USD',
          lastWeek: '+ 12.44 USD'
        }
      ]
    )
  })

  it('Find account PARTNER-6040102 in component PartnerTableAccounts', () => {
    const element = wrapper.find('.partners-table-block tr td')
    expect(element.text()).toBe('PARTNER-6040102')
  })

  it('Find count ACTIVE REFERRALS in component PartnerTableAccounts', () => {
    const element = wrapper.find('.partners-table-block tr td:first-child + td')
    expect(element.text()).toBe('201')
  })
})
