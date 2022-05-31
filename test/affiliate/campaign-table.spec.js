import CampaignTable from '@/components/affiliate/campaign-table'
import { mount } from '@vue/test-utils'

describe('testing component AffiliateTableStatistic', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(CampaignTable, {
      propsData: {
        campaignData: [
          {
            campaignName: 'bbmascaner',
            slug: 'bbmascaner',
            status: 'active',
            clicks: '242',
            registrations: '18',
            deposit: '1 590.70 USD',
            withdrawal: '3 228.00 USD',
            volume: '5.50',
            commission: '97.11 USD'
          },
          {
            campaignName: 'Victory7',
            slug: 'victory7',
            status: 'active',
            clicks: '1 034',
            registrations: '302',
            deposit: '8 344.22 USD',
            withdrawal: '0.00 USD',
            volume: '99.53',
            commission: '7 397.50 USD'
          },
          {
            campaignName: 'miraclefx',
            slug: 'miraclefx',
            status: 'inactive',
            clicks: '0',
            registrations: '0',
            deposit: '0.00 USD',
            withdrawal: '0.00 USD',
            volume: '0',
            commission: '0.00 USD'
          }
        ]
      }
    })
  })

  it('is a CampaignTable component', () => {
    expect(wrapper.is(CampaignTable)).toBe(true)
  })

  it('campaigns-table-block in CampaignTable exists', () => {
    expect(wrapper.find('.campaigns-table-block').exists()).toBe(true)
  })

  it('div.campaigns-table-block in CampaignTable component has the .campaigns-table-block class', () => {
    expect(wrapper.find('.campaigns-table-block').classes()).toContain('campaigns-table-block')
  })

  it('CampaignTable has a campaignData property', () => {
    expect(wrapper.props().campaignData).toStrictEqual(
      [
        {
          campaignName: 'bbmascaner',
          slug: 'bbmascaner',
          status: 'active',
          clicks: '242',
          registrations: '18',
          deposit: '1 590.70 USD',
          withdrawal: '3 228.00 USD',
          volume: '5.50',
          commission: '97.11 USD'
        },
        {
          campaignName: 'Victory7',
          slug: 'victory7',
          status: 'active',
          clicks: '1 034',
          registrations: '302',
          deposit: '8 344.22 USD',
          withdrawal: '0.00 USD',
          volume: '99.53',
          commission: '7 397.50 USD'
        },
        {
          campaignName: 'miraclefx',
          slug: 'miraclefx',
          status: 'inactive',
          clicks: '0',
          registrations: '0',
          deposit: '0.00 USD',
          withdrawal: '0.00 USD',
          volume: '0',
          commission: '0.00 USD'
        }
      ]
    )
  })

  it('Find name CAMPAIGN in component CampaignTable', () => {
    const element = wrapper.find('tr td:first-child span')
    expect(element.text()).toBe('bbmascaner')
  })

  it('Find Status in component CampaignTable', () => {
    const element = wrapper.find('tr td:first-child i')
    expect(element.text()).toBe('active')
  })
})
