import { shallowMount } from '@vue/test-utils'

import PopularInstrumentsTable from '@/components/instruments/popularInstruments'
import PopularInstrumentsPage from '@/pages/instruments/index'
import { GET_LIST_POPULAR_INSTRUMENTS } from '@/modules/instruments/getter-types'


describe('instruments list component test', () => {
  const componentProp = [
    {
      images: [
        'https://social.tifia.com/images/instruments/XAU.png',
        'https://social.tifia.com/images/flags/flat/32/US.png'
      ],
      instrument: 'XAUUSDx',
      traders: '22849',
      percentBuy: '48.89%',
      percentSell: '51.11%'
    }
  ]

  let component
  beforeEach(() => {
    component = shallowMount(PopularInstrumentsTable, {
      propsData: {
        tableData: componentProp
      }
    })
  })

  test('instruments table component test', () => {
    const elementTitleInstrument = component.find('.popular-instruments-table .instrument-block span')
    expect(elementTitleInstrument.text()).toBe('XAUUSDx')

    const elementCountTraders = component.find('.popular-instruments-table i')
    expect(elementCountTraders.text()).toBe('22849')

    const elementPercentBuy = component.find('.popular-instruments-table td.buy')
    expect(elementPercentBuy.text()).toBe('48.89%')

    const elementPercentSell = component.find('.popular-instruments-table td.sell')
    expect(elementPercentSell.text()).toBe('51.11%')

    const elementPercentBuyBlock = component.find('.popular-instruments-table .percent-buy .green-block')
    expect(elementPercentBuyBlock.attributes().style).toBe('width: 48.89%;')

    const elementPercentSellBlock = component.find('.popular-instruments-table .percent-sell .red-block')
    expect(elementPercentSellBlock.attributes().style).toBe('width: 51.11%;')

    const elementImgInstrument = component.findAll('.popular-instruments-table .instrument-block img')
    expect(elementImgInstrument.length).toBe(2);
  })
})

describe('Page: instruments', () => {
  test('testing page instruments', () => {
    const tableInstruments = [
      {
        images: [
          'https://social.tifia.com/images/instruments/XAU.png',
          'https://social.tifia.com/images/flags/flat/32/US.png'
        ],
        instrument: 'XAUUSDx',
        traders: '22849',
        percentBuy: '48.89%',
        percentSell: '51.11%'
      },
    ]
    const storeGetter = `instruments/${GET_LIST_POPULAR_INSTRUMENTS}`
    const page = shallowMount(PopularInstrumentsPage, {
      mocks: {
        $store: {
          getters: {
            [storeGetter]: tableInstruments
          }
        }
      }
    })

    const pageTitle = page.find('h1')
    expect(pageTitle.text()).toBe('Popular instruments')

    const InstrumentsTable = page.findAllComponents(PopularInstrumentsTable)
    expect(InstrumentsTable).toHaveLength(1)
  })
})
