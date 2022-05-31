import set from 'lodash/set'
import get from 'lodash/get'
import filter from 'lodash/filter'
import { searchElemByMassive } from '@/utils/helpers'
import {
  PARTNERS_MAIN_INFO,
  AFFILIATE_ACCOUNTS,
  AFFILIATE_COMMISSION_ALL_TIME,
  AFFILIATE_COMMISSION_LAST_MONTH,
  AFFILIATE_STATISTIC,
  PERIOD_CATEGORIES,
  PERIOD_CATEGORIES_SELECTED,
  REFERRALS_CATEGORIES,
  REFERRALS_CATEGORIES_SELECTED,
  COMMISSION_DATA_REF,
  AFFILIATE_REF,
  AFFILIATE_REF_ACCOUNTS,
  AFFILIATE_REF_UID,
  REFERRAL_INFO,
  CAMPAIGN_DATA,
  CAMPAIGN_NAME,
  CAMPAIGN_INFO,
  REBATE_START_MICRO_PERCENT,
  REBATE_ECN_CLASSIC_PERCENT,
  REBATE_ECN_PRO_PERCENT,
  REBATE_CARD_DATA,
  PROMO_BLOCK_DATA,
  PROMO_LOGO_AND_CARD,
  COUNTRY_LIST,
  SELECTED_COUNTRY_LIST,
  CURRENT_DATE
} from '@/modules/affiliate/constants'

import {
  GET_PARTNERS_MAIN_INFO,
  GET_USER_NAME,
  GET_AFFILIATE_ACCOUNTS,
  GET_AFFILIATE_COMMISSION_ALL_TIME,
  GET_AFFILIATE_COMMISSION_LAST_MONTH,
  GET_AFFILIATE_STATISTIC,
  GET_COMMISSION_DATA_REF,
  GET_AFFILIATE_REF,
  GET_NAME_REF_BY_UID,
  GET_STATUS_REF_BY_UID,
  GET_REFERRAL_INFO,
  GET_CAMPAIGN_DATA,
  GET_CAMPAIGN_DATA_BY_SLUG,
  GET_CAMPAIGN_STATUS_BY_SLUG,
  GET_CAMPAIGN_INFO,
  GET_REBATE_START_MICRO_PERCENT,
  GET_REBATE_ECN_CLASSIC_PERCENT,
  GET_REBATE_ECN_PRO_PERCENT,
  GET_REBATE_CARD_DATA,
  GET_PROMO_BLOCK_DATA,
  GET_COUNTRY_LIST,
  GET_SELECTED_COUNTRY_LIST,
  GET_PROMO_LOGO_AND_CARD,
  GET_DATE_CALENDAR
} from '@/modules/affiliate/getter-types'
import {
  CHANGE_PERIOD_CATEGORIES_SELECTED,
  CHANGE_REFERRALS_CATEGORIES_SELECTED,
  CHANGE_AFFILIATE_REF_UID,
  CHANGE_CAMPAIGN_NAME,
  SET_REBATE_START_MICRO_PERCENT,
  SET_REBATE_ECN_CLASSIC_PERCENT,
  SET_REBATE_ECN_PRO_PERCENT,
  SET_ACTIVE_PERCENT_ACCOUNT,
  CHANGE_SELECTED_COUNTRY_LIST
} from '@/modules/affiliate/mutation-types'
import { SET_PERCENT_ACCOUNTS, UPDATE_PERCENT_ACCOUNTS } from '@/modules/affiliate/actions-types'

export const state = () => ({
  [PARTNERS_MAIN_INFO]: [{
    status: 'Master IB',
    uid: '1373771679',
    linkUid: 'https://tifia.com?uid=1373771679',
    totalCommission: '2 297.28 USD',
    numberReferrals: '198'
  }],
  [AFFILIATE_ACCOUNTS]: [
    {
      account: 'PARTNER-6040102',
      activeReferrals: '201',
      balance: '4 792.51 USD',
      lastWeek: '+ 665.12 USD'
    },
    {
      account: 'MT5-PARTNERS-5002595',
      activeReferrals: '64',
      balance: '134.76 USD',
      lastWeek: '+ 12.44 USD'
    }
  ],
  [AFFILIATE_COMMISSION_ALL_TIME]: [
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
  ],
  [AFFILIATE_COMMISSION_LAST_MONTH]: [
    {
      title: 'Direct Commission',
      value: '450.28 USD'
    },
    {
      title: 'new direct referrals',
      value: '32'
    },
    {
      title: 'Direct volume',
      value: '36.52 lots'
    },
    {
      title: 'SUB-IB commission',
      value: '0.00 USD'
    },
    {
      title: 'New SUB-IBs',
      value: '1'
    }
  ],
  [AFFILIATE_STATISTIC]: [
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
    },
    {
      data: '07.07.2021',
      visits: '4',
      registrations: '0',
      commission: '145.47 USD'
    },
    {
      data: '06.07.2021',
      visits: '6',
      registrations: '0',
      commission: '260.48 USD'
    },
    {
      data: '05.07.2021',
      visits: '7',
      registrations: '0',
      commission: '75.89 USD'
    },
    {
      data: '04.07.2021',
      visits: '4',
      registrations: '1',
      commission: '0.00 USD'
    },
    {
      data: '03.07.2021',
      visits: '0',
      registrations: '0',
      commission: '0.00 USD'
    },
    {
      data: '02.07.2021',
      visits: '6',
      registrations: '2',
      commission: '164.84 USD'
    }
  ],
  [PERIOD_CATEGORIES]: ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month', 'Previous month'],
  [PERIOD_CATEGORIES_SELECTED]: 'Last 7 days',
  [REFERRALS_CATEGORIES]: ['All referrals', 'Direct referrals', 'Sub-IBs'],
  [REFERRALS_CATEGORIES_SELECTED]: 'All referrals',
  [COMMISSION_DATA_REF]: [
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
    },
    {
      title: 'Statistics of your direct referrals <span>(first level referrals)</span>',
      details: [
        {
          title: 'Deposits',
          value: '9 678.19 USD'
        },
        {
          title: 'Withdrawals',
          value: '- 2 637.91 USD'
        }
      ]
    },
    {
      title: 'Statistics of your referral network <span>(referrals of all levels)</span>',
      details: [
        {
          title: 'Referral network deposits',
          value: '10 642.00 USD'
        },
        {
          title: 'Referral network withdrawals',
          value: '- 3 610.37 USD'
        }
      ]
    }
  ],
  [AFFILIATE_REF]: [
    {
      uid: '2531436775',
      verification: 'verified',
      registered: '09.07.2021',
      fullName: 'NIK FAISAL BIN NIK AZIZ',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD',
      accounts: [
        {
          account: 'PROFIT-6278955',
          deposit: '400.00 USD',
          withdrawal: '0.00 USD',
          balance: '206.11 USD',
          profit: '0.00 USD',
          volume: '5.50',
          commission: '97.11 USD'
        },
        {
          account: 'CLS-6293859',
          deposit: '–',
          withdrawal: '–',
          balance: '0.00 USD',
          profit: '–',
          volume: '–',
          commission: '–'
        },
        {
          account: 'CLS-6293880',
          deposit: '–',
          withdrawal: '–',
          balance: '0.00 USD',
          profit: '–',
          volume: '–',
          commission: '–'
        }
      ]
    },
    {
      uid: '254531646',
      verification: 'partly-verified',
      registered: '09.07.2021',
      fullName: 'TEX X PAR',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD',
      accounts: [
        {
          account: 'PROFIT-6278955',
          deposit: '100.00 USD',
          withdrawal: '0.00 USD',
          balance: '124.76 USD',
          profit: '+ 24.76 USD',
          volume: '0.50',
          commission: '7.03 USD'
        }
      ]
    },
    {
      uid: '2531436345',
      verification: 'unverified',
      registered: '09.07.2021',
      fullName: 'RAMAZAN RAMZES',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD',
      accounts: [
        {
          account: 'PROFIT-6278955',
          deposit: '400.00 USD',
          withdrawal: '0.00 USD',
          balance: '206.11 USD',
          profit: '0.00 USD',
          volume: '5.50',
          commission: '97.11 USD'
        },
        {
          account: 'CLS-6293859',
          deposit: '–',
          withdrawal: '–',
          balance: '0.00 USD',
          profit: '–',
          volume: '–',
          commission: '–'
        },
        {
          account: 'CLS-6293880',
          deposit: '–',
          withdrawal: '–',
          balance: '0.00 USD',
          profit: '–',
          volume: '–',
          commission: '–'
        }
      ]
    },
    {
      uid: '254534346',
      partnerStatus: 'sub-IB',
      activeReferrals: 44,
      registered: '09.07.2021',
      fullName: 'EPIC FAIL DUDU TEX',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD',
      accounts: [
        {
          account: 'PROFIT-6278955',
          deposit: '400.00 USD',
          withdrawal: '0.00 USD',
          balance: '206.11 USD',
          profit: '0.00 USD',
          volume: '5.50',
          commission: '97.11 USD'
        },
        {
          account: 'CLS-6293859',
          deposit: '–',
          withdrawal: '–',
          balance: '0.00 USD',
          profit: '–',
          volume: '–',
          commission: '–'
        },
        {
          account: 'MT5-PARTNERS-5014628',
          deposit: '–',
          withdrawal: '–',
          balance: '3 124.00 USD',
          profit: '–',
          volume: '–',
          commission: '756.44 USD'
        }
      ]
    }
  ],
  [AFFILIATE_REF_ACCOUNTS]: [
    {
      uid: '254534346',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD'
    },
    {
      uid: '254531646',
      account: 'PROFIT-6278955',
      deposit: '400.00 USD',
      withdrawal: '0.00 USD',
      balance: '206.11 USD',
      profit: '0.00 USD',
      volume: '5.50',
      commission: '97.11 USD'
    }
  ],
  [AFFILIATE_REF_UID]: null,
  [REFERRAL_INFO]: [
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
  ],
  [CAMPAIGN_DATA]: [
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
  ],
  [CAMPAIGN_NAME]: null,
  [CAMPAIGN_INFO]: [
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
  ],
  [REBATE_START_MICRO_PERCENT]: {
    percentOld: 70,
    percentCurrent: 70
  },
  [REBATE_ECN_CLASSIC_PERCENT]: {
    percentOld: 0,
    percentCurrent: 0
  },
  [REBATE_ECN_PRO_PERCENT]: {
    percentOld: 55,
    percentCurrent: 55
  },
  [REBATE_CARD_DATA]: [
    {
      uid: '2531436775',
      fullName: 'MUHAMMAD HAZIM HAZMI BIN MD ISA',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295673',
          type: 'START (micro)',
          percent: 70,
          percentOld: 70
        }
      ]
    },
    {
      uid: '2531436905',
      fullName: 'ISA NURTUL MAGAM',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295927',
          type: 'START (micro)',
          percent: 70,
          percentOld: 70
        },
        {
          account: 'STR-6295401',
          type: 'START (micro)',
          percent: 20,
          percentOld: 20
        }
      ]
    },
    {
      uid: '253143677234',
      fullName: 'RALF GHOST',
      registered: '09.07.2021',
      data: [
        {
          account: 'PRO-6281411',
          type: 'ECN PRO',
          percent: 55,
          percentOld: 55
        }
      ]
    },
    {
      uid: '2531436778',
      fullName: 'MUHAMMAD ARIFF FITRI BIN ZULKAPLI',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295456',
          type: 'START (micro)',
          percent: 20,
          percentOld: 20
        }
      ]
    },
    {
      uid: '2531436779',
      fullName: 'GARA BIN USA',
      registered: '09.07.2021',
      data: [
        {
          account: 'STR-6295843',
          type: 'START (micro)',
          percent: 35,
          percentOld: 35
        },
        {
          account: 'STR-6295167',
          type: 'START (micro)',
          percent: 0,
          percentOld: 0
        }
      ]
    },
    {
      uid: '2531436778',
      fullName: 'ZOZO PITCHI BOOM',
      registered: '09.07.2021',
      data: [
        {
          account: 'PRO-6281614',
          type: 'ECN PRO',
          percent: 55,
          percentOld: 55
        }
      ]
    }
  ],
  [PROMO_BLOCK_DATA]: [
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
  ],
  [PROMO_LOGO_AND_CARD]: [
    {
      title: 'Business Card Black Design',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_62_FILE_60fab20dda549.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Business Card White Design',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_61_FILE_60fab1b21fc7c.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Logo white',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_34_FILE_60ec073779443.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    },
    {
      title: 'Logo black',
      btnFirstText: 'PDF',
      btnSecondText: 'EPS',
      image: 'https://social.tifia.com/promo/PROMO_33_FILE_60ec06cad6dc1.png',
      downloadLinkPDF: 'https://social.tifia.com/en/promo-materials/download-file/184',
      downloadLinkEPS: 'https://social.tifia.com/en/promo-materials/download-file/183'
    }
  ],
  [COUNTRY_LIST]: [
    {
      label: 'Indonesia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/indonesia.svg'
    },
    {
      label: 'Malaysia',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
    },
    {
      label: 'English',
      image: 'https://tifia.com/images/new-site/economic-calendar/flags/united-kingdom.svg'
    }
  ],
  [SELECTED_COUNTRY_LIST]: {
    label: 'English',
    image: 'https://tifia.com/images/new-site/economic-calendar/flags/united-kingdom.svg'
  },
  [CURRENT_DATE]: new Date(Date.now())
})

export const getters = {
  [GET_PARTNERS_MAIN_INFO] (state) {
    return state[PARTNERS_MAIN_INFO]
  },
  [GET_USER_NAME] (state, getters, rootState, rootGetters) {
    const userName = rootGetters['settings/GET_USER_FULL_NAME']
    return userName
  },
  [GET_AFFILIATE_ACCOUNTS] (state) {
    return state[AFFILIATE_ACCOUNTS]
  },
  [GET_AFFILIATE_COMMISSION_ALL_TIME] (state) {
    return state[AFFILIATE_COMMISSION_ALL_TIME]
  },
  [GET_AFFILIATE_COMMISSION_LAST_MONTH] (state) {
    return state[AFFILIATE_COMMISSION_LAST_MONTH]
  },
  [GET_AFFILIATE_STATISTIC] (state) {
    return state[AFFILIATE_STATISTIC]
  },
  [GET_COMMISSION_DATA_REF] (state) {
    return state[COMMISSION_DATA_REF]
  },
  [GET_AFFILIATE_REF] (state) {
    return state[AFFILIATE_REF]
  },
  [GET_NAME_REF_BY_UID] (state) {
    return searchElemByMassive(state[AFFILIATE_REF_UID], state[AFFILIATE_REF], 'uid', 'fullName')
  },
  [GET_STATUS_REF_BY_UID] (state) {
    return searchElemByMassive(state[AFFILIATE_REF_UID], state[AFFILIATE_REF], 'uid', 'partnerStatus')
  },
  [GET_REFERRAL_INFO] (state) {
    return state[REFERRAL_INFO]
  },
  [GET_CAMPAIGN_DATA] (state) {
    return state[CAMPAIGN_DATA]
  },
  [GET_CAMPAIGN_DATA_BY_SLUG] (state) {
    return searchElemByMassive(state[CAMPAIGN_NAME], state[CAMPAIGN_DATA], 'slug', 'campaignName')
  },
  [GET_CAMPAIGN_STATUS_BY_SLUG] (state) {
    return searchElemByMassive(state[CAMPAIGN_NAME], state[CAMPAIGN_DATA], 'slug', 'status')
  },
  [GET_CAMPAIGN_INFO] (state) {
    return state[CAMPAIGN_INFO]
  },
  [GET_REBATE_START_MICRO_PERCENT] (state) {
    return state[REBATE_START_MICRO_PERCENT]
  },
  [GET_REBATE_ECN_CLASSIC_PERCENT] (state) {
    return state[REBATE_ECN_CLASSIC_PERCENT]
  },
  [GET_REBATE_ECN_PRO_PERCENT] (state) {
    return state[REBATE_ECN_PRO_PERCENT]
  },
  [GET_REBATE_CARD_DATA] (state) {
    return state[REBATE_CARD_DATA]
  },
  [GET_PROMO_BLOCK_DATA] (state) {
    return state[PROMO_BLOCK_DATA]
  },
  [GET_PROMO_LOGO_AND_CARD] (state) {
    return state[PROMO_LOGO_AND_CARD]
  },
  [GET_COUNTRY_LIST] (state) {
    return state[COUNTRY_LIST]
  },
  [GET_SELECTED_COUNTRY_LIST] (state) {
    return state[SELECTED_COUNTRY_LIST]
  },
  [GET_DATE_CALENDAR] (state) {
    function dtimeNums (e) {
      const n = new Date()
      n.setDate(n.getDate() + e)
      return n.toLocaleDateString()
    }

    function formatDate (dateCurrent) {
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateCurrent)
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateCurrent)
      const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateCurrent)
      return `${date}.${month}.${year}`
    }

    switch (state[PERIOD_CATEGORIES_SELECTED]) {
      case 'Today':
        return formatDate(state[CURRENT_DATE])
      case 'Yesterday':
        return dtimeNums(-1)
      case 'Last 7 days':
        const firstSevenDay = dtimeNums(-7)
        const lastSevenDay = dtimeNums(0)
        return `${firstSevenDay} - ${lastSevenDay}`
      case 'Last 30 days':
        const firstLastThirtyDay = dtimeNums(-30)
        const lastLastThirtyDay = dtimeNums(0)
        return `${firstLastThirtyDay} - ${lastLastThirtyDay}`
      case 'This month':
        const firstDayThisMonth = new Date(state[CURRENT_DATE].getFullYear(), state[CURRENT_DATE].getMonth())
        const lastDayThisMonth = new Date(state[CURRENT_DATE].getFullYear(), state[CURRENT_DATE].getMonth() + 1, 0)
        return `${formatDate(firstDayThisMonth)} - ${formatDate(lastDayThisMonth)}`
      case 'Cherries':
        console.log('Cherries are $3.00 a pound.')
        break
      case 'Previous month':
        const firstDay = new Date(state[CURRENT_DATE].getFullYear(), state[CURRENT_DATE].getMonth() - 1, 1)
        const lastDay = new Date(state[CURRENT_DATE].getFullYear(), state[CURRENT_DATE].getMonth(), 0)
        return `${formatDate(firstDay)} - ${formatDate(lastDay)}`
      default:
        return formatDate(state[CURRENT_DATE])
    }
  }
}

export const mutations = {
  [CHANGE_PERIOD_CATEGORIES_SELECTED] (state, selected) {
    state.PERIOD_CATEGORIES_SELECTED = selected
  },
  [CHANGE_REFERRALS_CATEGORIES_SELECTED] (state, selected) {
    state.REFERRALS_CATEGORIES_SELECTED = selected
  },
  [CHANGE_AFFILIATE_REF_UID] (state, value) {
    state[AFFILIATE_REF_UID] = value
  },
  [CHANGE_CAMPAIGN_NAME] (state, value) {
    state[CAMPAIGN_NAME] = value
  },
  [SET_REBATE_START_MICRO_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'START (micro)'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_START_MICRO_PERCENT].percentOld = state[REBATE_START_MICRO_PERCENT].percentCurrent
    state[REBATE_START_MICRO_PERCENT].percentCurrent = value
  },
  [SET_REBATE_ECN_CLASSIC_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'ECN CLASSIC'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_ECN_CLASSIC_PERCENT].percentOld = state[REBATE_ECN_CLASSIC_PERCENT].percentCurrent
    state[REBATE_ECN_CLASSIC_PERCENT].percentCurrent = value
  },
  [SET_REBATE_ECN_PRO_PERCENT] (state, value) {
    for (let i = 0; i < state[REBATE_CARD_DATA].length; i++) {
      const findArray = filter(state[REBATE_CARD_DATA][i].data, function (item) {
        return item.type === 'ECN PRO'
      })
      for (let j = 0; j < state[REBATE_CARD_DATA][i].data.length; j++) {
        set(findArray[j], 'percent', value)
      }
    }
    state[REBATE_ECN_PRO_PERCENT].percentOld = state[REBATE_ECN_PRO_PERCENT].percentCurrent
    state[REBATE_ECN_PRO_PERCENT].percentCurrent = value
  },
  [SET_ACTIVE_PERCENT_ACCOUNT] (state, payload) {
    const currentPercent = get(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percent')
    set(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percentOld', currentPercent)
    set(state[REBATE_CARD_DATA][payload.index].data[payload.itemIndex], 'percent', payload.percent)
  },
  [CHANGE_SELECTED_COUNTRY_LIST] (state, selected) {
    state[SELECTED_COUNTRY_LIST] = selected
  }
}

export const actions = {
  [CHANGE_PERIOD_CATEGORIES_SELECTED] ({ commit }, value) {
    commit('CHANGE_PERIOD_CATEGORIES_SELECTED', value)
  },
  [CHANGE_REFERRALS_CATEGORIES_SELECTED] ({ commit }, value) {
    commit('CHANGE_REFERRALS_CATEGORIES_SELECTED', value)
  },
  [CHANGE_AFFILIATE_REF_UID] ({ commit }, value) {
    commit(CHANGE_AFFILIATE_REF_UID, value)
  },
  [CHANGE_CAMPAIGN_NAME] ({ commit }, value) {
    commit(CHANGE_CAMPAIGN_NAME, value)
  },
  [SET_REBATE_START_MICRO_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_START_MICRO_PERCENT, value)
  },
  [SET_REBATE_ECN_CLASSIC_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_ECN_CLASSIC_PERCENT, value)
  },
  [SET_REBATE_ECN_PRO_PERCENT] ({ commit }, value) {
    commit(SET_REBATE_ECN_PRO_PERCENT, value)
  },
  [SET_ACTIVE_PERCENT_ACCOUNT] ({ commit }, value) {
    commit(SET_ACTIVE_PERCENT_ACCOUNT, value)
  },
  [SET_PERCENT_ACCOUNTS] (context, infoData) {
    const { commit } = context
    let percentLocal
    if (infoData.switchTextField === 'on') {
      percentLocal = 0
    } else {
      percentLocal = infoData.percentOld
    }
    const payload = { percent: percentLocal, accountNumber: infoData.id, index: infoData.index, itemIndex: infoData.itemIndex }
    commit(SET_ACTIVE_PERCENT_ACCOUNT, payload)
  },
  [UPDATE_PERCENT_ACCOUNTS] (context, updateData) {
    const { commit } = context
    let percentLocal
    if (updateData.percentUser <= 100) {
      percentLocal = updateData.percentUser
    } else {
      percentLocal = 100
    }

    const payload = { percent: percentLocal, accountNumber: updateData.id, index: updateData.index, itemIndex: updateData.itemIndex }
    commit(SET_ACTIVE_PERCENT_ACCOUNT, payload)
  },
  [CHANGE_SELECTED_COUNTRY_LIST] ({ commit }, value) {
    commit(CHANGE_SELECTED_COUNTRY_LIST, value)
  }
}
