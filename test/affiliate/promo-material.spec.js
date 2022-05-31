import PromoMaterial from '@/components/affiliate/promo-material'
import { mount } from '@vue/test-utils'

describe('testing component PromoMaterial', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(PromoMaterial, {
      propsData: {
        promoBlockData: [{
          title: 'Business Card Black Design',
          btnFirstText: 'PDF',
          btnSecondText: 'EPS',
          image: 'https://social.tifia.com/promo/PROMO_62_FILE_60fab20dda549.png',
          downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
          downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
        }]
      }
    })
  })

  it('is a PromoMaterial component', () => {
    expect(wrapper.is(PromoMaterial)).toBe(true)
  })

  it('partners-promo-material in PromoMaterial exists', () => {
    expect(wrapper.find('.partners-promo-material').exists()).toBe(true)
  })

  it('div.content-block in PromoMaterial component has the .content-block class', () => {
    expect(wrapper.find('.content-block').classes()).toContain('content-block')
  })

  it('promoBlockData has a content PromoMaterial', () => {
    expect(wrapper.props().promoBlockData).toStrictEqual(
      [{
        title: 'Business Card Black Design',
        btnFirstText: 'PDF',
        btnSecondText: 'EPS',
        image: 'https://social.tifia.com/promo/PROMO_62_FILE_60fab20dda549.png',
        downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
        downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
      }]
    )
  })

  it('Find h5 in component PromoMaterial', () => {
    const element = wrapper.find('.partners-promo-material .block-promo:first-child .content-block h5')
    expect(element.text()).toBe('Business Card Black Design')
  })
})
