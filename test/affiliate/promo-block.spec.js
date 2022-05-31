import PromoBlock from '@/components/affiliate/promo-block'
import { mount } from '@vue/test-utils'

describe('testing component PromoBlock', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PromoBlock, {
      propsData: {
        promoBlockData: [
          {
            title: 'Logo & Business cards',
            value: '4 files',
            link: 'logo'
          },
          {
            title: 'Presentations',
            value: '2 files',
            link: 'presentations'
          },
          {
            title: 'Web banners',
            value: '16 files',
            link: 'web-banners'
          }
        ]
      }
    })
  })

  it('is a PromoBlock component', () => {
    expect(wrapper.is(PromoBlock)).toBe(true)
  })

  it('partners-promo-block in PromoBlock exists', () => {
    expect(wrapper.find('.partners-promo-block').exists()).toBe(true)
  })

  it('div.partners-promo-block in PromoBlock component has the .partners-promo-block class', () => {
    expect(wrapper.find('.partners-promo-block').classes()).toContain('partners-promo-block')
  })

  it('promoBlockData has a content PromoBlock', () => {
    expect(wrapper.props().promoBlockData).toStrictEqual(
      [
        {
          title: 'Logo & Business cards',
          value: '4 files',
          link: 'logo'
        },
        {
          title: 'Presentations',
          value: '2 files',
          link: 'presentations'
        },
        {
          title: 'Web banners',
          value: '16 files',
          link: 'web-banners'
        }
      ]
    )
  })

  it('Find count Web banners in component PromoBlock', () => {
    const element = wrapper.find('.partners-promo-block .block-card:last-child span')
    expect(element.text()).toBe('16 files')
  })
})
