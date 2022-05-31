import InfoCampaigns from '@/components/affiliate/info-campaign'
import { mount } from '@vue/test-utils'

describe('testing component InfoCampaigns', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(InfoCampaigns, {
      propsData: {
        content: [
          {
            clicks: '1 034',
            registrations: '302',
            deposit: '8 344.22 USD',
            withdrawal: '0.00 USD',
            volume: '99.53',
            commission: '7 397.50 USD',
            img: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
            imgCountry: 'https://social.tifia.com/images/flags/shiny/32/MY.png'
          }
        ]
      }
    })
  })

  it('is a InfoCampaigns component', () => {
    expect(wrapper.is(InfoCampaigns)).toBe(true)
  })

  it('info-campaign in InfoCampaigns exists', () => {
    expect(wrapper.find('.info-campaign').exists()).toBe(true)
  })

  it('div.info-campaign in InfoCampaigns component has the .info-campaign class', () => {
    expect(wrapper.find('.info-campaign').classes()).toContain('info-campaign')
  })

  it('InfoCampaigns has a content property', () => {
    expect(wrapper.props().content).toStrictEqual(
      [
        {
          clicks: '1 034',
          registrations: '302',
          deposit: '8 344.22 USD',
          withdrawal: '0.00 USD',
          volume: '99.53',
          commission: '7 397.50 USD',
          img: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
          imgCountry: 'https://social.tifia.com/images/flags/shiny/32/MY.png'
        }
      ]
    )
  })

  it('Find Clicks in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:first-child span')
    expect(element.text()).toBe('1 034')
  })

  it('Find REGISTRATIONS in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(2n) span')
    expect(element.text()).toBe('302')
  })

  it('Find DEPOSIT in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(3n) span')
    expect(element.text()).toBe('8 344.22 USD')
  })

  it('Find WITHDRAWAL in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(4n) span')
    expect(element.text()).toBe('0.00 USD')
  })

  it('Find VOLUME in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(5n) span')
    expect(element.text()).toBe('99.53')
  })

  it('Find COMMISSION in component InfoCampaigns', () => {
    const element = wrapper.find('.block-info .col-line:nth-child(6n) span')
    expect(element.text()).toBe('7 397.50 USD')
  })

  it('button in PartnerMainInfo exists', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
