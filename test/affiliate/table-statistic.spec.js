import AffiliateTableStatistic from '@/components/affiliate/table-statistic'
import { mount } from '@vue/test-utils'

describe('testing component AffiliateTableStatistic', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(AffiliateTableStatistic, {
      propsData: {
        tableData: [
          {
            data: '09.07.2021',
            visits: '6',
            registrations: '1',
            commission: '64.33 USD'
          },
          {
            data: '08.07.2021',
            visits: '5',
            registrations: '0',
            commission: '228.04 USD'
          }
        ]
      }
    })
  })

  it('is a AffiliateTableStatistic component', () => {
    expect(wrapper.is(AffiliateTableStatistic)).toBe(true)
  })

  it('partners-table-statistic in AffiliateTableStatistic exists', () => {
    expect(wrapper.find('.partners-table-statistic').exists()).toBe(true)
  })

  it('div.partners-table-statistic in AffiliateTableStatistic component has the .info-campaign class', () => {
    expect(wrapper.find('.partners-table-statistic').classes()).toContain('partners-table-statistic')
  })

  it('AffiliateTableStatistic has a content property', () => {
    expect(wrapper.props().tableData).toStrictEqual(
      [
        {
          data: '09.07.2021',
          visits: '6',
          registrations: '1',
          commission: '64.33 USD'
        },
        {
          data: '08.07.2021',
          visits: '5',
          registrations: '0',
          commission: '228.04 USD'
        }
      ]
    )
  })

  it('Find date 09.07.2021 in component AffiliateTableStatistic', () => {
    const element = wrapper.find('.partners-table-statistic tr td')
    expect(element.text()).toBe('09.07.2021')
  })

  it('Find count VISITS in component AffiliateTableStatistic', () => {
    const element = wrapper.find('.partners-table-statistic tr td:first-child + td')
    expect(element.text()).toBe('6')
  })
})
