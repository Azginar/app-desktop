import InfoCommission from '@/components/affiliate/info-commission'
import { mount } from '@vue/test-utils'

describe('testing component InfoCommission', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(InfoCommission, {
      propsData: {
        content: [
          {
            title: 'Affiliate commission',
            details: [
              {
                title: 'Direct Commission',
                value: '2 197.28 USD'
              },
              {
                title: 'Sub-IB Commission',
                value: '0.00 USD'
              },
              {
                title: 'Volume',
                value: '153.52 lots'
              }
            ]
          }
        ]
      }
    })
  })

  it('is a InfoCommission component', () => {
    expect(wrapper.is(InfoCommission)).toBe(true)
  })

  it('info-commission in InfoCommission exists', () => {
    expect(wrapper.find('.info-commission').exists()).toBe(true)
  })

  it('div.info-commission in InfoCommission component has the .info-commission class', () => {
    expect(wrapper.find('.info-commission').classes()).toContain('info-commission')
  })

  it('InfoCommission has a content property', () => {
    expect(wrapper.props().content).toStrictEqual(
      [
        {
          title: 'Affiliate commission',
          details: [
            {
              title: 'Direct Commission',
              value: '2 197.28 USD'
            },
            {
              title: 'Sub-IB Commission',
              value: '0.00 USD'
            },
            {
              title: 'Volume',
              value: '153.52 lots'
            }
          ]
        }
      ]
    )
  })

  it('Find DIRECT COMMISSION in component InfoCommission', () => {
    const element = wrapper.find('.info-commission .element-item .block-info .col-line:first-child span')
    expect(element.text()).toBe('2 197.28 USD')
  })

  it('h4 in InfoCommission exists', () => {
    expect(wrapper.find('.info-commission .element-item h4').exists()).toBe(true)
  })
})
