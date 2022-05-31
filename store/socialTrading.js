import {
  HEAD_SOCIAL_TRADING_RAITING,
  TABLE_SOCIAL_TRADING_RAITING,
  FILTER_RATING,
  FILTER_RATING_SELECTED,
  NICKNAME_TRADER,
  BUTTON_GRAPH,
  MASSIVE_MENU_INNER,
  ACCOUNT_MICRO_TYPE,
  ACCOUNT_MICRO_TYPE_SELECTED,
  STOP_COPY_LOSS,
  STOP_COPY_PROFIT,
  CHECKBOX_REGULATIONS,
  COPY_TYPE,
  COPY_TYPE_SELECTED,
  VOLUME,
  ACCOUNT_SOCIAL_TRADER,
  GENERAL_INFORMATION_TRADER,
  PUBLIC_INFORMATION_SOCIAL_ACCOUNT,
  ACCOUNT_SOCIAL_TRADER_PUBLIC,
  MASSIVE_MENU_INNER_TRADING_ACCOUNT,
  HEAD_SOCIAL_INVESTORS,
  TABLE_SOCIAL_INVESTORS,
  NICKNAME_INVESTOR,
  INFO_INVESTOR,
  ACCOUNT_INVESTOR_TRADER,
  ACCOUNT_INVESTOR_INFO,
  SOCIAL_TRADING_INFO,
  TITLE_RIGHT_BLOCK_INVESTOR_ACCOUNT_PAGE,
  FINANCE_INFO_INVESTOR_PAGE,
  ACCOUNT_INVESTOR_TRADER_NUMBER
} from '@/modules/socialTrading/constants.js'
import {
  CHANGE_FILTER_RATING,
  CHANGE_NICKNAME_TRADER,
  CHANGE_ACCOUNT_MICRO_TYPE,
  CHANGE_COPY_TYPE,
  CHANGE_ACCOUNT_SOCIAL_TRADER,
  CHANGE_NICKNAME_INVESTOR,
  CHANGE_ACCOUNT_NUMBER_INVESTOR
} from '@/modules/socialTrading/mutation-types'
import {
  GET_TRADER_INFO_BY_NICKNAME,
  GET_AVATAR_TRADER_BY_NICKNAME,
  GET_NICKNAME,
  GET_TRADER_ACCOUNT_INFO_BY_NICKNAME,
  GET_TRADER_ACCOUNT,
  GET_TYPE_ACCOUNT,
  GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT,
  GET_NICKNAME_INVESTOR,
  GET_ACCOUNT_NUMBER_INVESTOR,
  GET_USER_UID_FOR_LINK
} from '@/modules/socialTrading/getter-types'

const searchElemByMassive = (searchTerm, massive, keySearch, keyResult) => {
  let massiveLocal = ''
  massiveLocal = massive.find(elem => elem[keySearch] === searchTerm)
  if (massiveLocal !== undefined) {
    return massiveLocal[keyResult]
  }
  return []
}

export const state = () => ({
  [HEAD_SOCIAL_TRADING_RAITING]: [
    {
      value: 'Trader'
    },
    {
      value: 'Trader account'
    },
    {
      value: 'Lifespan'
    },
    {
      value: 'Trader\'s commission'
    },
    {
      value: 'Average monthly profitability'
    },
    {
      value: 'Equity'
    },
    {
      value: 'Investors'
    },
    {
      value: 'Investors\' equity'
    }
  ],
  [TABLE_SOCIAL_TRADING_RAITING]: [
    {
      nickname: '@Dshadow',
      slug: 'dshadow',
      avatarLink: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
      link: '/provider/user/dshadow',
      account: 'STR-6106390',
      lifespan: '271 days',
      commission: '20 %',
      averageMonthlyProfitability: '36.33 %',
      equity: '355.83 USD',
      investors: '243',
      investorsEquity: '23 451.50 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/dshadow/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Oyeehahh',
      slug: 'Oyeehahh',
      avatarLink: 'https://social.tifia.com/uploads/avatars/002/072/1447343b74e36bcfaa7f76d0d8e1084f.png',
      link: '/provider/user/Oyeehahh',
      account: 'STR-6162649',
      lifespan: '60 days',
      commission: '20 %',
      averageMonthlyProfitability: '68.04 %',
      equity: '260.18 USD',
      investors: '126',
      investorsEquity: '22 759.04 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/Oyeehahh/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@CareTaker',
      slug: 'caretaker',
      avatarLink: 'https://social.tifia.com/uploads/avatars/001/009/d01e50899234bfcd35ce4069720e90f3.jpg',
      link: '/provider/user/caretaker',
      account: 'STR-6162649',
      lifespan: '340 days',
      commission: '15 %',
      averageMonthlyProfitability: '48.00 %',
      equity: '2 854.94 USD',
      investors: '17',
      investorsEquity: '10 086.76 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/caretaker/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Daylan',
      slug: 'daylan',
      avatarLink: 'https://social.tifia.com/uploads/avatars/005/965/b314fbd09457388cd5a15718cb31fa6d.jpeg',
      link: '/provider/user/daylan',
      account: 'STR-6174669',
      lifespan: '6 days',
      commission: '20 %',
      averageMonthlyProfitability: '49.31 %',
      equity: '242.45 USD',
      investors: '5',
      investorsEquity: '1 233.77 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/daylan/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@bosskur',
      slug: 'bosskur',
      avatarLink: 'https://social.tifia.com/uploads/avatars/009/216/887d04117fe303cafe10b3882b70a81a.jpg',
      link: '/provider/user/bosskur',
      account: 'STR-6079120',
      lifespan: '515 days',
      commission: '15 %',
      averageMonthlyProfitability: '37.37 %',
      equity: '1 511.72 USD',
      investors: '9',
      investorsEquity: '6 198.23 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/bosskur/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@sniper',
      slug: 'sniper',
      avatarLink: 'https://social.tifia.com/uploads/avatars/003/815/205fa4f3cb679b6794ed92613b22d6c4.jpeg',
      link: '/provider/user/sniper',
      account: 'STR-6172953',
      lifespan: '13 days',
      commission: '25 %',
      averageMonthlyProfitability: '29.85 %',
      equity: '150.64 USD',
      investors: '0',
      investorsEquity: '0.00 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/sniper/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@SilentTrader',
      slug: 'silenttrader',
      avatarLink: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
      link: '/provider/user/silenttrader',
      account: 'STR-6098890',
      lifespan: '378 days',
      commission: '10 %',
      averageMonthlyProfitability: '29.72 %',
      equity: '197.94 USD',
      investors: '7',
      investorsEquity: '842.62 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/silenttrader/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@markaw',
      slug: 'markaw',
      avatarLink: 'https://social.tifia.com/uploads/avatars/009/983/b4f3d04507f5fe2c2f3df62728d8b872.jpg',
      link: '/provider/user/markaw',
      account: 'STR-6065791',
      lifespan: '617 days',
      commission: '30 %',
      averageMonthlyProfitability: '28.75 %',
      equity: '94.12 USD',
      investors: '9',
      investorsEquity: '767.56 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/markaw/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Sanjikun',
      slug: 'sanjikun',
      avatarLink: 'https://social.tifia.com/uploads/avatars/003/577/8f3a95b0c6fef68e55a35a76197e0d0f.jpg',
      link: '/provider/user/sanjikun',
      account: 'STR-6162243',
      lifespan: '13 days',
      commission: '30 %',
      averageMonthlyProfitability: '29.65 %',
      equity: '219.46 USD',
      investors: '3',
      investorsEquity: '167.92 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/sanjikun/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Dshadow',
      slug: 'dshadow',
      avatarLink: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
      link: '/provider/user/dshadow',
      account: 'STR-6106390',
      lifespan: '271 days',
      commission: '20 %',
      averageMonthlyProfitability: '36.33 %',
      equity: '355.83 USD',
      investors: '243',
      investorsEquity: '23 451.50 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/dshadow/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@0yeehahh',
      slug: '0yeehahh',
      avatarLink: 'https://social.tifia.com/uploads/avatars/002/072/1447343b74e36bcfaa7f76d0d8e1084f.png',
      link: '/provider/user/0yeehahh',
      account: 'STR-6162649',
      lifespan: '60 days',
      commission: '20 %',
      averageMonthlyProfitability: '68.04 %',
      equity: '260.18 USD',
      investors: '126',
      investorsEquity: '22 759.04 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/0yeehahh/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@CareTaker',
      slug: 'caretaker',
      avatarLink: 'https://social.tifia.com/uploads/avatars/001/009/d01e50899234bfcd35ce4069720e90f3.jpg',
      link: '/provider/user/caretaker',
      account: 'STR-6162649',
      lifespan: '340 days',
      commission: '15 %',
      averageMonthlyProfitability: '48.00 %',
      equity: '2 854.94 USD',
      investors: '17',
      investorsEquity: '10 086.76 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/caretaker/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Daylan',
      slug: 'daylan',
      avatarLink: 'https://social.tifia.com/uploads/avatars/005/965/b314fbd09457388cd5a15718cb31fa6d.jpeg',
      link: '/provider/user/daylan',
      account: 'STR-6174669',
      lifespan: '6 days',
      commission: '20 %',
      averageMonthlyProfitability: '49.31 %',
      equity: '242.45 USD',
      investors: '5',
      investorsEquity: '1 233.77 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/daylan/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@bosskur',
      slug: 'bosskur',
      avatarLink: 'https://social.tifia.com/uploads/avatars/009/216/887d04117fe303cafe10b3882b70a81a.jpg',
      link: '/provider/user/bosskur',
      account: 'STR-6079120',
      lifespan: '515 days',
      commission: '15 %',
      averageMonthlyProfitability: '37.37 %',
      equity: '1 511.72 USD',
      investors: '9',
      investorsEquity: '6 198.23 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/bosskur/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@sniper',
      slug: 'sniper',
      avatarLink: 'https://social.tifia.com/uploads/avatars/003/815/205fa4f3cb679b6794ed92613b22d6c4.jpeg',
      link: '/provider/user/sniper',
      account: 'STR-6172953',
      lifespan: '13 days',
      commission: '25 %',
      averageMonthlyProfitability: '29.85 %',
      equity: '150.64 USD',
      investors: '0',
      investorsEquity: '0.00 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/sniper/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@SilentTrader',
      slug: 'silenttrader',
      avatarLink: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
      link: '/provider/user/silenttrader',
      account: 'STR-6098890',
      lifespan: '378 days',
      commission: '10 %',
      averageMonthlyProfitability: '29.72 %',
      equity: '197.94 USD',
      investors: '7',
      investorsEquity: '842.62 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/silenttrader/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@markaw',
      slug: 'markaw',
      avatarLink: 'https://social.tifia.com/uploads/avatars/009/983/b4f3d04507f5fe2c2f3df62728d8b872.jpg',
      link: '/provider/user/markaw',
      account: 'STR-6065791',
      lifespan: '617 days',
      commission: '30 %',
      averageMonthlyProfitability: '28.75 %',
      equity: '94.12 USD',
      investors: '9',
      investorsEquity: '767.56 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/markaw/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      nickname: '@Sanjikun',
      slug: 'sanjikun',
      avatarLink: 'https://social.tifia.com/uploads/avatars/003/577/8f3a95b0c6fef68e55a35a76197e0d0f.jpg',
      link: '/provider/user/sanjikun',
      account: 'STR-6162243',
      lifespan: '13 days',
      commission: '30 %',
      averageMonthlyProfitability: '29.65 %',
      equity: '219.46 USD',
      investors: '3',
      investorsEquity: '167.92 USD',
      generalInformation: [
        {
          title: 'Country',
          value: 'Malaysia',
          img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
        },
        {
          title: 'Language',
          value: 'English'
        },
        {
          title: 'Registration date',
          value: '16 03 2018'
        },
        {
          title: 'Equity',
          value: '10 355.83 USD'
        },
        {
          title: 'Investors',
          value: '514'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'About me',
          value: ''
        }
      ],
      tradingAccount: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %',
          link: '/provider/user/sanjikun/copying'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    }
  ],
  [FILTER_RATING]: ['Overall', '1 day', '1 week', '2 weeks', '1 month', '3 months', '6 months'],
  [FILTER_RATING_SELECTED]: 'Overall',
  [NICKNAME_TRADER]: null,
  [BUTTON_GRAPH]: [
    {
      value: '1 days'
    },
    {
      value: '1 week'
    },
    {
      value: '2 weeks'
    },
    {
      value: '1 month'
    },
    {
      value: '3 month'
    },
    {
      value: '6 month'
    },
    {
      value: '1 year'
    }
  ],
  [MASSIVE_MENU_INNER]: [
    {
      value: 'Summary',
      link: 'summary'
    },
    {
      value: 'STR-6106390',
      link: 'str-6106390'
    }
  ],
  [ACCOUNT_MICRO_TYPE]: ['STR-5109987 / 3 500 USD', 'STR-5109992 / 3 500 USD'],
  [ACCOUNT_MICRO_TYPE_SELECTED]: 'STR-5109987 / 3 500 USD',
  [STOP_COPY_LOSS]: '- 500 USD',
  [STOP_COPY_PROFIT]: '1 000 USD',
  [CHECKBOX_REGULATIONS]: 'I have read and agree to the <a href="https://tifia.com/uploads/docs/social-trading-en.pdf">Regulations of the SocialTrading service</a>',
  [COPY_TYPE]: ['Copy full size 1 for 1', 'Copy in proportion to investor’s equity', 'Copy a fixed size', 'Copy a predefined percent of each trade'],
  [COPY_TYPE_SELECTED]: 'Copy full size 1 for 1',
  [VOLUME]: '1',
  [ACCOUNT_SOCIAL_TRADER]: [
    {
      account: 'STR-6106390',
      typeAccount: 'START',
      averageMonthlyProfitability: '36.33 %',
      investors: '132',
      investorsEquity: '22 759.04 USD',
      link: 'str-6106390'
    },
    {
      account: 'ECN-7777390',
      typeAccount: 'ECN CLASSIC',
      averageMonthlyProfitability: '12.09 %',
      investors: '32',
      investorsEquity: '12 333.66 USD',
      link: 'ecn-7777390'
    }
  ],
  [GENERAL_INFORMATION_TRADER]: [
    {
      title: 'Country',
      value: 'Malaysia',
      img: 'https://tifia.com/images/new-site/economic-calendar/flags/malaysia.svg'
    },
    {
      title: 'Language',
      value: 'English'
    },
    {
      title: 'Registration date',
      value: '16 03 2018'
    },
    {
      title: 'Equity',
      value: '10 355.83 USD'
    },
    {
      title: 'Investors',
      value: '514'
    },
    {
      title: 'Investors\' equity',
      value: '23 451.50 USD'
    },
    {
      title: 'About me',
      value: ''
    }
  ],
  [PUBLIC_INFORMATION_SOCIAL_ACCOUNT]: [
    {
      accountNumber: 'str-6106390',
      tradingAccountInfo: [
        {
          title: 'Trader account',
          value: 'STR-6106390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    },
    {
      accountNumber: 'ecn-7777390',
      tradingAccountInfo: [
        {
          title: 'Trader account',
          value: 'ECN-7777390'
        },
        {
          title: 'Type account',
          value: 'Start Micro'
        },
        {
          title: 'Leverage',
          value: '1:400'
        },
        {
          title: 'Lifespan',
          value: '271 days'
        },
        {
          title: 'Trader\'s commission',
          value: '20 %'
        },
        {
          title: 'Equity',
          value: '355.83 USD'
        },
        {
          title: 'Investors',
          value: '243'
        },
        {
          title: 'Investors\' equity',
          value: '23 451.50 USD'
        },
        {
          title: 'Average monthly profitability',
          value: '36.33 %'
        },
        {
          title: 'Сопроводительный текст от трейдера',
          value: ''
        }
      ]
    }
  ],
  [ACCOUNT_SOCIAL_TRADER_PUBLIC]: null,
  [MASSIVE_MENU_INNER_TRADING_ACCOUNT]: [
    {
      value: 'Overview',
      link: 'overview'
    },
    {
      value: 'Investors',
      link: 'investors'
    }
  ],
  [HEAD_SOCIAL_INVESTORS]: [
    {
      value: 'Investor'
    },
    {
      value: 'Account'
    },
    {
      value: 'Copy type'
    },
    {
      value: 'Duration'
    },
    {
      value: 'Start equity'
    },
    {
      value: 'Profit'
    },
    {
      value: 'My profit commission'
    }
  ],
  [TABLE_SOCIAL_INVESTORS]: [
    {
      nickname: '@OnlyDollar',
      slug: 'onlydollar',
      avatarLink: 'https://social.tifia.com/uploads/avatars/008/534/bb803f3870b6d636b2f4d6b7636c8b04.jpg',
      link: '/duplicator/user/onlydollar?account=str-6106390',
      account: 'STR-6106391',
      copyType: 'Copy in proportion',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      commission: '+9.56 USD'
    },
    {
      nickname: '@Russel',
      slug: 'russel',
      avatarLink: 'https://social.tifia.com/uploads/avatars/010/082/b9628088e2be710e0efa36ee823d62e4.jpg',
      link: '/duplicator/user/russel?account=str-6106390',
      account: 'STR-4346221',
      copyType: 'Copy in proportion',
      duration: '95 days',
      startEquity: '10 000.00 USD',
      profit: '+1 000.00 USD',
      commission: '+200.00 USD'
    },
    {
      nickname: '@Askarida',
      slug: 'askarida',
      avatarLink: 'https://social.tifia.com/uploads/avatars/011/011/f317688efb73984f9c945adb33d22504.jpeg',
      link: '/duplicator/user/askarida?account=str-6106390',
      account: 'STR-6106391',
      copyType: 'Copy full size 1 for 1',
      duration: '60 days',
      startEquity: '355.83 USD',
      profit: '+47.82 USD',
      commission: '+9.56 USD'
    },
    {
      nickname: '@Merk',
      slug: 'merk',
      avatarLink: 'https://social.tifia.com/uploads/avatars/002/055/44980a13bb3feee9ee44a0fb244bf81c.jpg',
      link: '/duplicator/user/merk?account=str-6106390',
      account: 'STR-4346221',
      copyType: 'Copy in proportion',
      duration: '95 days',
      startEquity: '10 000.00 USD',
      profit: '+1 000.00 USD',
      commission: '+200.00 USD'
    }
  ],
  [NICKNAME_INVESTOR]: null,
  [INFO_INVESTOR]: [
    {
      title: 'Account',
      value: 'STR-6106390'
    },
    {
      title: 'Start copy',
      value: '22.07.2020 13:02'
    },
    {
      title: 'Duration',
      value: '60 days'
    },
    {
      title: 'Copy type',
      value: 'Copy in proportion to investor’s equity'
    },
    {
      title: 'Start Equity',
      value: '355.83 USD'
    },
    {
      title: 'Current Equity',
      value: '1 355.83 USD'
    },
    {
      title: 'Profit',
      value: '1 000.00 USD'
    },
    {
      title: 'My comission',
      value: '200.00 USD'
    }
  ],
  [ACCOUNT_INVESTOR_TRADER]: [
    {
      account: 'STR-6106390',
      typeAccount: 'START',
      attachedTo: '@HighRiskTrader ',
      startBalance: '18 000.00 USD',
      currentBalance: '18 500.88 USD',
      profitTrading: '+ 500.88 USD',
      link: 'str-6106390'
    },
    {
      account: 'ECN-7777390',
      typeAccount: 'ECN CLASSIC',
      attachedTo: '@Mummi',
      startBalance: '100.00 USD',
      currentBalance: '75.00 USD',
      profitTrading: '- 25.00 USD',
      link: 'ecn-7777390'
    }
  ],
  [ACCOUNT_INVESTOR_INFO]: [
    {
      title: 'Login',
      value: '6117769'
    },
    {
      title: 'Server',
      value: 'Tifia-MT4'
    },
    {
      title: 'Leverage',
      value: '1:400'
    },
    {
      title: 'Registered',
      time: '12:22',
      date: '30.09.2019'
    },
    {
      title: 'Last login',
      time: '09:45',
      date: '01.01.2020'
    }
  ],
  [SOCIAL_TRADING_INFO]: [
    {
      title: 'Attached to',
      value: '@HighRiskTrader'
    },
    {
      title: 'Trader account',
      value: 'PRO-6161721'
    },
    {
      title: 'Trader\'s commission',
      value: '20%'
    },
    {
      title: 'Copy type',
      value: 'In proportion to my equity'
    },
    {
      title: 'Stop loss for Copying',
      value: '- 1 500 USD'
    },
    {
      title: 'Take PROFIT for Copying',
      value: '+ 5 000 USD'
    },
    {
      title: 'Start balance',
      value: '18 000.00 USD'
    },
    {
      title: 'Current balance',
      value: '18 500.88 USD'
    },
    {
      title: 'PROFIT of trading',
      value: '+ 500.88 USD'
    },
    {
      title: 'Commission',
      value: '- 100.22 USD'
    },
    {
      title: 'Total earned',
      value: '+ 400.66 USD'
    }
  ],
  [TITLE_RIGHT_BLOCK_INVESTOR_ACCOUNT_PAGE]: 'Finance Information',
  [FINANCE_INFO_INVESTOR_PAGE]: [
    {
      title: 'Balance',
      value: '18 000.00 USD'
    },
    {
      title: 'Equity',
      value: '18 000.00 USD'
    },
    {
      title: 'Credit',
      value: '0.00 USD'
    },
    {
      title: 'Floating Profit/Loss',
      value: '0.00 USD'
    },
    {
      title: 'Free margin',
      value: '18 000.00 USD'
    },
    {
      title: 'Margin',
      value: '0.00 USD'
    },
    {
      title: 'Total profit',
      value: '0.00 USD'
    },
    {
      title: 'Total swap',
      value: '0.00 USD'
    },
    {
      title: 'Margin Level',
      value: '0.00 %'
    },
    {
      title: 'Available for withdrawal',
      value: '18 000.00 USD'
    }
  ],
  [ACCOUNT_INVESTOR_TRADER_NUMBER]: null
})

export const getters = {
  [GET_TRADER_INFO_BY_NICKNAME] (state) {
    return searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'generalInformation')
  },
  [GET_AVATAR_TRADER_BY_NICKNAME] (state) {
    if (!state[NICKNAME_TRADER]) {
      return ''
    } else {
      return searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'avatarLink')
    }
  },
  [GET_NICKNAME] (state) {
    return searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'nickname')
  },
  [GET_TRADER_ACCOUNT_INFO_BY_NICKNAME] (state) {
    return searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'tradingAccount')
  },
  [GET_TRADER_ACCOUNT] (state) {
    const massiveInfoAccount = searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'tradingAccount')
    return massiveInfoAccount[0]
  },
  [GET_TYPE_ACCOUNT] (state) {
    const massiveInfoAccount = searchElemByMassive(state[NICKNAME_TRADER], state[TABLE_SOCIAL_TRADING_RAITING], 'slug', 'tradingAccount')
    return massiveInfoAccount[1]
  },
  [GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT] (state) {
    return searchElemByMassive(state[ACCOUNT_SOCIAL_TRADER_PUBLIC], state[PUBLIC_INFORMATION_SOCIAL_ACCOUNT], 'accountNumber', 'tradingAccountInfo')
  },
  [GET_NICKNAME_INVESTOR] (state) {
    return searchElemByMassive(state[NICKNAME_INVESTOR], state[TABLE_SOCIAL_INVESTORS], 'slug', 'nickname')
  },
  [GET_ACCOUNT_NUMBER_INVESTOR] (state) {
    const massiveInfoAccount = searchElemByMassive(state[ACCOUNT_INVESTOR_TRADER_NUMBER], state[ACCOUNT_INVESTOR_TRADER], 'slug', 'tradingAccount')
    return massiveInfoAccount[1]
  },
  [GET_USER_UID_FOR_LINK] (state, getters, rootState, rootGetters) {
    const uid = rootGetters['settings/GET_USER_UID']
    return uid
  }
}

export const mutations = {
  [CHANGE_FILTER_RATING] (state, selected) {
    state[FILTER_RATING_SELECTED] = selected
  },
  [CHANGE_NICKNAME_TRADER] (state, value) {
    state[NICKNAME_TRADER] = value
  },
  [CHANGE_ACCOUNT_MICRO_TYPE] (state, selected) {
    state[ACCOUNT_MICRO_TYPE_SELECTED] = selected
  },
  [CHANGE_COPY_TYPE] (state, selected) {
    state[COPY_TYPE_SELECTED] = selected
  },
  [CHANGE_ACCOUNT_SOCIAL_TRADER] (state, value) {
    state[ACCOUNT_SOCIAL_TRADER_PUBLIC] = value
  },
  [CHANGE_NICKNAME_INVESTOR] (state, value) {
    state[NICKNAME_INVESTOR] = value
  },
  [CHANGE_ACCOUNT_NUMBER_INVESTOR] (state, value) {
    state[ACCOUNT_INVESTOR_TRADER_NUMBER] = value
  }
}

export const actions = {
  [CHANGE_FILTER_RATING] ({ commit }, value) {
    commit(CHANGE_FILTER_RATING, value)
  },
  [CHANGE_NICKNAME_TRADER] ({ commit }, value) {
    commit(CHANGE_NICKNAME_TRADER, value)
  },
  [CHANGE_ACCOUNT_MICRO_TYPE] ({ commit }, value) {
    commit(CHANGE_ACCOUNT_MICRO_TYPE, value)
  },
  [CHANGE_COPY_TYPE] ({ commit }, value) {
    commit(CHANGE_COPY_TYPE, value)
  },
  [CHANGE_ACCOUNT_SOCIAL_TRADER] ({ commit }, value) {
    commit(CHANGE_ACCOUNT_SOCIAL_TRADER, value)
  },
  [CHANGE_NICKNAME_INVESTOR] ({ commit }, value) {
    commit(CHANGE_NICKNAME_INVESTOR, value)
  },
  [CHANGE_ACCOUNT_NUMBER_INVESTOR] ({ commit }, value) {
    commit(CHANGE_ACCOUNT_NUMBER_INVESTOR, value)
  }
}
