import PartnersMainInfo from '@/components/affiliate/partner-main-info'
import { mount } from '@vue/test-utils'

describe('testing component PartnerMainInfo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PartnersMainInfo, {
      propsData: {
        partnersMainData: [
          {
            status: 'Master IB',
            uid: '1373771679',
            linkUid: 'https://tifia.com?uid=1373771679',
            totalCommission: '2 297.28 USD',
            numberReferrals: '198'
          }
        ]
      }
    })
  })

  it('is a PartnerMainInfo component', () => {
    expect(wrapper.is(PartnersMainInfo)).toBe(true)
  })

  it('col-row in PartnerMainInfo exists', () => {
    expect(wrapper.find('.col-row').exists()).toBe(true)
  })

  it('col-row in PartnerMainInfo component has the .col-row class', () => {
    expect(wrapper.find('.col-row').classes()).toContain('col-row')
  })

  it('PartnerMainInfo has a partnersMainData property', () => {
    expect(wrapper.props().partnersMainData).toStrictEqual(
      [
        {
          status: 'Master IB',
          uid: '1373771679',
          linkUid: 'https://tifia.com?uid=1373771679',
          totalCommission: '2 297.28 USD',
          numberReferrals: '198'
        }
      ]
    )
  })

  it('Find MASTER IB in component PartnerMainInfo', () => {
    const element = wrapper.find('.line-block .col-row:first-child span')
    expect(element.text()).toBe('Master IB')
  })

  it('Find uid 1373771679 in component PartnerMainInfo', () => {
    const element = wrapper.find('.line-block .col-row:first-child + .col-row span')
    expect(element.text()).toBe('1373771679')
  })

  it('Find TOTAL COMMISSION SUM 2 297.28 USD in component PartnerMainInfo', () => {
    const element = wrapper.find('.line-block:first-child + .line-block .col-row:first-child span')
    expect(element.text()).toBe('2 297.28 USD')
  })

  it('Find NUMBER OF CURRENT ACTIVE REFERRALS 198 in component PartnerMainInfo', () => {
    const element = wrapper.find('.line-block:first-child + .line-block .col-row:first-child + .col-row span')
    expect(element.text()).toBe('198')
  })

  it('Find link https://tifia.com?uid=1373771679 in component PartnerMainInfo', () => {
    const element = wrapper.find('.line-block .col-row:first-child + .col-row + .col-row span')
    expect(element.text()).toBe('https://tifia.com?uid=1373771679')
  })

  it('button in PartnerMainInfo exists', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  /* it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  }) */
})
