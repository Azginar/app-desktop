import InfoReferrals from '@/components/affiliate/info-referrals'
import { mount } from '@vue/test-utils'

describe('testing component InfoReferrals', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(InfoReferrals, {
      propsData: {
        content: [
          {
            country: 'Malaysia',
            language: 'English',
            date: '16 03 2018',
            balance: '10 355.83 USD',
            referrals: '44',
            commission: '1 451.50 USD',
            img: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
            imgCountry: 'https://social.tifia.com/images/flags/shiny/32/MY.png'
          }
        ]
      }
    })
  })

  it('is a PartnerTableAccounts component', () => {
    expect(wrapper.is(InfoReferrals)).toBe(true)
  })

  it('info-referrals in InfoReferrals exists', () => {
    expect(wrapper.find('.info-referrals').exists()).toBe(true)
  })

  it('div.info-referrals in InfoReferrals component has the .info-campaign class', () => {
    expect(wrapper.find('.info-referrals').classes()).toContain('info-referrals')
  })

  it('InfoReferrals has a content property', () => {
    expect(wrapper.props().content).toStrictEqual(
      [
        {
          country: 'Malaysia',
          language: 'English',
          date: '16 03 2018',
          balance: '10 355.83 USD',
          referrals: '44',
          commission: '1 451.50 USD',
          img: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
          imgCountry: 'https://social.tifia.com/images/flags/shiny/32/MY.png'
        }
      ]
    )
  })

  it('Find COUNTRY in component InfoReferrals', () => {
    const element = wrapper.find('.block-info .country span')
    expect(element.text()).toBe('Malaysia')
  })

  it('Find LANGUAGE in component InfoReferrals', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(3n) span')
    expect(element.text()).toBe('English')
  })
})
