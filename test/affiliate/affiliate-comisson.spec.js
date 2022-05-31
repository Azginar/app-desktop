import AffiliateCommission from '@/components/affiliate/affiliate-comisson'
import { mount } from '@vue/test-utils'

describe('testing component InfoCommission', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(AffiliateCommission, {
      propsData: {
        affiliateCommissionData: [
          {
            title: 'Direct Commission',
            value: '2 197.28 USD'
          },
          {
            title: 'Total number of referrals',
            value: '265'
          },
          {
            title: 'Direct volume',
            value: '153.52 lots'
          },
          {
            title: 'SUB-IB commission',
            value: '100.00 USD'
          },
          {
            title: 'Total number of SUB-IBs',
            value: '4'
          }
        ]
      }
    })
  })

  it('is a AffiliateCommission component', () => {
    expect(wrapper.is(AffiliateCommission)).toBe(true)
  })

  it('partners-commission-block in AffiliateCommission exists', () => {
    expect(wrapper.find('.partners-commission-block').exists()).toBe(true)
  })

  it('div.row-line in AffiliateCommission component has the .row-line class', () => {
    expect(wrapper.find('.row-line').classes()).toContain('row-line')
  })

  it('AffiliateCommission has a content property', () => {
    expect(wrapper.props().affiliateCommissionData).toStrictEqual(
      [
        {
          title: 'Direct Commission',
          value: '2 197.28 USD'
        },
        {
          title: 'Total number of referrals',
          value: '265'
        },
        {
          title: 'Direct volume',
          value: '153.52 lots'
        },
        {
          title: 'SUB-IB commission',
          value: '100.00 USD'
        },
        {
          title: 'Total number of SUB-IBs',
          value: '4'
        }
      ]
    )
  })

  it('Find Total number of SUB-IBs in component AffiliateCommission', () => {
    const element = wrapper.find('.row-line .col-row:last-child span')
    expect(element.text()).toBe('4')
  })

  it('Find TOTAL NUMBER OF REFERRALS in component AffiliateCommission', () => {
    const element = wrapper.find('.row-line .col-row:first-child + .col-row span')
    expect(element.text()).toBe('265')
  })
})
