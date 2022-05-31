import axios from 'axios'
import {
  CHANGE_USER_NAME,
  CHANGE_FULL_NAME,
  CHANGE_EMAIL,
  CHANGE_ADDRESS_FORMAT,
  CHANGE_FLAG,
  CHANGE_PHONE,
  CHANGE_PHONE_FLAG,
  CHANGE_REGISTRATION_DATE,
  CHANGE_LANGUAGE,
  CHANGE_LANGUAGE_FLAG,
  CHANGE_ABOUT,
  CHANGE_BIRTH_DATE,
  CHANGE_COUNTRY,
  CHANGE_AVATAR,
  CHANGE_AVATAR_ORIGIN,
  CHANGE_ADDRESS_STATUS,
  CHANGE_EMAIL_STATUS,
  CHANGE_NAME_STATUS,
  CHANGE_PHONE_STATUS,
  CHANGE_USER_SETTINGS_FORM_REGION,
  CHANGE_USER_SETTINGS_FORM_CITY,
  CHANGE_USER_SETTINGS_FORM_ADDRESS,
  CHANGE_USER_SETTINGS_FORM_POSTCODE,
  CHANGE_USER_SETTINGS_FORM_PHONE,
  CHANGE_USER_SETTINGS_FORM_ABOUT,
  CHANGE_USER_SETTINGS_FORM_COUNTRY,
  CLEAR_ALL_ERRORS,
  SET_ERRORS,
  CHANGE_LANGUAGE_NOTIFICATIONS
} from '@/modules/settings/mutation-types'
import {
  SECURE_CLIENT_DATA,
  PUBLICK_CLIENT_DATA,
  VERIFICATION_CLIENT_DATA,
  AVATAR_LINK_CLIENT,
  GET_ALL_USER_DATE,
  GET_USER_BADGE_INFO,
  GET_USER_FULL_NAME,
  GET_USER_SETTINGS_FORM_REGION,
  GET_USER_SETTINGS_FORM_CITY,
  GET_USER_SETTINGS_FORM_ADDRESS,
  GET_USER_SETTINGS_FORM_POSTCODE,
  GET_USER_SETTINGS_FORM_PHONE,
  GET_USER_SETTINGS_FORM_ABOUT,
  GET_USER_SETTINGS_FORM_COUNTRY,
  GET_ROOT_COUNTRIES,
  GET_USER_FORM_BODY_SERIALIZER,
  GET_USER_UID,
  GET_VERIFICATION_DATE,
  GET_FIRST_PAGE_HISTORY_LOGIN
} from '@/modules/settings/getter-types'
import {
  DATA_MARGIN_LEVEL,
  DATA_WITHDRAWAL_CONFIRMATION,
  DATA_EMAIL_NOTIFICATIOS,
  DATA_EMAIL_SUBSCRIPTIONS,
  ERRORS,
  USERNAME,
  FULL_NAME,
  EMAIL,
  COUNTRY,
  ADDRESS_FORMAT,
  FLAG,
  REGISTRATION_DATE,
  PHONE,
  PHONE_FLAG,
  LANGUAGE,
  LANGUAGE_FLAG,
  ABOUT,
  AVATAR,
  AVATAR_ORIGIN,
  BIRTH_DATE,
  VERIFICATION_DATE,
  USER_SETTINGS_FORM,
  HEAD_LOGIN_HISTORY,
  TABLE_LOGIN_HISTORY,
  LANGUAGE_NOTIFICATIONS,
  LANGUAGE_NOTIFICATIONS_SELECTED,
  CHOOSE_NOTIFY,
  CHOOSE_WITHDRAWAL_NOTIFICATIONS,
  CHOOSE_EMAIL_NOTIFICATIONS,
  CHOOSE_EMAIL_SUBSCRIPTIONS,
  SECRET_MEMORABLE_WORD,
  HINT_SECRET_MEMORABLE_WORD,
  ENTER_CODE,
  CURRENT_PASSWORD,
  NEW_PASSWORD
} from '@/modules/settings/constants.js'
import {
  LOAD_USER_FORM_DATA_TO_STORE,
  SET_PROFILE_DATA,
  SAVE_CHANGES,
  PARSE_AND_SET_ERRORS_TO_STORE
} from '@/modules/settings/actions-types.js'
import { LOAD_LOGIN_HISTORY_LIST } from '@/modules/login-history/actions-types'

const transformClientStatusToString = (storeStatus) => {
  let status = ''
  switch (storeStatus) {
    case 20:
      status = 'Party Verified'
      break
    case 0:
      status = 'Unverified'
      break
    case 1:
    case 2:
      status = 'Verified'
      break
    default:
      status = 'Unverified'
  }
  return status
}

export const state = () => ({
  [DATA_MARGIN_LEVEL]: [
    {
      title: 'Critical margin level %',
      value: '100%'
    },
    {
      title: 'Notify via Email',
      value: 'Yes'
    },
    {
      title: 'Notify via SMS',
      value: 'No'
    }
  ],
  [DATA_WITHDRAWAL_CONFIRMATION]: [
    {
      title: 'Get by email',
      value: 'Yes'
    },
    {
      title: 'Get by SMS',
      value: 'No'
    }
  ],
  [DATA_EMAIL_NOTIFICATIOS]: [
    {
      title: 'Metatrader Statements',
      value: 'Yes'
    },
    {
      title: 'Traders\' and investors\' notifications',
      value: 'Yes'
    },
    {
      title: 'Notifications of Investors\' trading',
      value: 'Yes'
    },
    {
      title: 'New affiliate referrals',
      value: 'No'
    }
  ],
  [DATA_EMAIL_SUBSCRIPTIONS]: [
    {
      title: 'Analytics news',
      value: 'Yes'
    },
    {
      title: 'Company news',
      value: 'Yes'
    },
    {
      title: 'Contests news',
      value: 'Yes'
    },
    {
      title: 'Education news',
      value: 'No'
    }
  ],
  [ERRORS]: [],
  [USERNAME]: '',
  [FULL_NAME]: '',
  [EMAIL]: '',
  [COUNTRY]: '',
  [ADDRESS_FORMAT]: '',
  [REGISTRATION_DATE]: '',
  [FLAG]: '',
  [PHONE]: '',
  [PHONE_FLAG]: '',
  [LANGUAGE]: '',
  [LANGUAGE_FLAG]: '',
  [ABOUT]: '',
  [AVATAR]: '',
  [AVATAR_ORIGIN]: '',
  [BIRTH_DATE]: '',
  [VERIFICATION_DATE]: {
    addressStatus: 1,
    emailStatus: 1,
    nameStatus: 1,
    phoneStatus: 1
  },
  [USER_SETTINGS_FORM]: {
    full_name: '',
    phone: '',
    country: '',
    postcode: '',
    region: '',
    city: '',
    address: '',
    about: ''
  },
  [HEAD_LOGIN_HISTORY]: [
    {
      value: 'Date'
    },
    {
      value: 'IP'
    },
    {
      value: 'Browser'
    }
  ],
  [TABLE_LOGIN_HISTORY]: [
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    },
    {
      date: '20:45:42  15.11.2020',
      ip: '94.25.231.143',
      browser: 'Windows / Chrome (86.0.4240.183)'
    }
  ],
  [LANGUAGE_NOTIFICATIONS]: ['English', 'Español', 'Français', 'Indonesian', 'Malay', 'Português', 'ภาษาไทย', 'Tiếng Việt', '中文'],
  [LANGUAGE_NOTIFICATIONS_SELECTED]: 'English',
  [CHOOSE_NOTIFY]: [
    {
      title: 'Notify via Email',
      id: 'checkIdEmail'
    },
    {
      title: 'Notify via SMS',
      id: 'checkIdSms'
    }
  ],
  [CHOOSE_WITHDRAWAL_NOTIFICATIONS]: [
    {
      title: 'Get by email',
      id: 'checkGetByEmail'
    },
    {
      title: 'Notify via SMS',
      id: 'checkGetBySms'
    }
  ],
  [CHOOSE_EMAIL_NOTIFICATIONS]: [
    {
      title: 'MetaTrader statements',
      id: 'checkMetaTrader'
    },
    {
      title: 'Traders\' and investors\' notifications',
      id: 'checkTradersAndInvestors'
    },
    {
      title: 'Notifications of Investors\' trading',
      id: 'checkInvestorsTrading'
    },
    {
      title: 'New affiliate referrals',
      id: 'checkAffiliateReferrals'
    }
  ],
  [CHOOSE_EMAIL_SUBSCRIPTIONS]: [
    {
      title: 'Analytics news',
      id: 'checkAnalyticsNews'
    },
    {
      title: 'Company news',
      id: 'checkCompanyNews'
    },
    {
      title: 'Contests news',
      id: 'checkContestsNews'
    },
    {
      title: 'Education news',
      id: 'checkEducationNews'
    }
  ],
  [SECRET_MEMORABLE_WORD]: '',
  [HINT_SECRET_MEMORABLE_WORD]: '',
  [ENTER_CODE]: '',
  [CURRENT_PASSWORD]: '',
  [NEW_PASSWORD]: ''
})

export const getters = {
  [GET_ALL_USER_DATE] (state) {
    return {
      userName: state[USERNAME],
      registrationDate: state[REGISTRATION_DATE],
      fullName: state[FULL_NAME],
      email: state[EMAIL],
      country: state[COUNTRY],
      addressFormat: state[ADDRESS_FORMAT],
      flag: state[FLAG],
      phone: state[PHONE],
      phoneFlag: state[PHONE_FLAG],
      language: state[LANGUAGE],
      languageFlag: state[LANGUAGE_FLAG],
      about: state[ABOUT],
      avatar: state[AVATAR],
      avatarOrigin: state[AVATAR_ORIGIN],
      birthDate: state[BIRTH_DATE],
      addressStatus: state[VERIFICATION_DATE].addressStatus,
      emailStatus: state[VERIFICATION_DATE].emailStatus,
      nameStatus: state[VERIFICATION_DATE].nameStatus,
      phoneStatus: state[VERIFICATION_DATE].phoneStatus
    }
  },

  [PUBLICK_CLIENT_DATA] (state, getters, rootState) {
    const countriesList = rootState['root-store'].allowCountries
    const userData = getters[GET_ALL_USER_DATE]
    return [
      {
        title: 'Nickname',
        value: userData.userName
      },
      {
        title: 'Registration date',
        value: userData.registrationDate
      },
      {
        title: 'Country',
        value: countriesList[userData.country],
        img: userData.flag
      },
      {
        title: 'Language',
        value: userData.language
      },
      {
        title: 'About me',
        value: userData.about
      }
    ]
  },
  [SECURE_CLIENT_DATA] (state, getters) {
    const userData = getters[GET_ALL_USER_DATE]
    return [
      {
        title: 'Full name',
        value: userData.fullName
      },
      {
        title: 'Gender',
        value: 'Male'
      },
      {
        title: 'Date of birth',
        value: userData.birthDate
      },
      {
        title: 'Phone',
        value: userData.phone
      },
      {
        title: 'Address',
        value: userData.addressFormat
      }
    ]
  },

  [VERIFICATION_CLIENT_DATA] (state, getters) {
    const userData = getters[GET_ALL_USER_DATE]
    let verificationStatusesNameAndDocs
    if (userData.nameStatus === 1 && userData.addressStatus === 1) {
      verificationStatusesNameAndDocs = 'Verified'
    } else {
      verificationStatusesNameAndDocs = 'Unverified'
    }
    return [
      {
        title: 'Phone',
        value: transformClientStatusToString(userData.phoneStatus),
        button: 'Change',
        url: '/verification/phone-and-email'
      },
      {
        title: 'Email',
        value: transformClientStatusToString(userData.emailStatus),
        button: 'Change',
        url: '/verification/phone-and-email'
      },
      {
        title: 'Personal info',
        value: 'Unverified',
        button: 'Edit',
        url: '/verification/personal-info'
      },
      {
        title: 'Upload documents',
        value: verificationStatusesNameAndDocs,
        button: 'Upload',
        url: '/verification/upload-documents'
      },
      {
        title: 'Bank card',
        value: 'Add and verify bank card',
        button: 'Add',
        url: '/deposit/bank-card/index'
      }
    ]
  },
  [GET_USER_BADGE_INFO] (state) {
    return {
      avatar: state[AVATAR],
      userName: state[USERNAME],
      fullName: state[FULL_NAME]
    }
  },
  [GET_USER_UID] (state) {
    return state[USERNAME]
  },
  [GET_USER_FORM_BODY_SERIALIZER] (state) {
    const data = {
      full_name: state[USER_SETTINGS_FORM].full_name,
      region: state[USER_SETTINGS_FORM].region,
      country: state[USER_SETTINGS_FORM].country,
      city: state[USER_SETTINGS_FORM].city,
      postcode: state[USER_SETTINGS_FORM].postcode,
      address: state[USER_SETTINGS_FORM].address,
      phone: state[USER_SETTINGS_FORM].phone,
      about: state[USER_SETTINGS_FORM].about
    }
    let formDataString = ''
    for (const [key, value] of Object.entries(data)) {
      formDataString += `${key}=${value}&`
    }

    return formDataString
  },
  [AVATAR_LINK_CLIENT] (state) {
    return state[AVATAR]
  },
  [GET_USER_FULL_NAME] (state) {
    return state[FULL_NAME]
  },
  [GET_USER_SETTINGS_FORM_REGION] (state) {
    return state[USER_SETTINGS_FORM].region
  },
  [GET_USER_SETTINGS_FORM_CITY] (state) {
    return state[USER_SETTINGS_FORM].city
  },
  [GET_USER_SETTINGS_FORM_ADDRESS] (state) {
    return state[USER_SETTINGS_FORM].address
  },
  [GET_USER_SETTINGS_FORM_POSTCODE] (state) {
    return state[USER_SETTINGS_FORM].postcode
  },
  [GET_USER_SETTINGS_FORM_PHONE] (state) {
    return state[USER_SETTINGS_FORM].phone
  },
  [GET_USER_SETTINGS_FORM_ABOUT] (state) {
    return state[USER_SETTINGS_FORM].about
  },
  [GET_FIRST_PAGE_HISTORY_LOGIN] (state, getters, rootState, rootGetters) {
    const loginHistoryFirstPage = rootGetters['login-history/HISTORY_LIST']
    const loginHistoryFirstElement = loginHistoryFirstPage.slice(0, 3)
    return loginHistoryFirstElement
  },
  [GET_USER_SETTINGS_FORM_COUNTRY] (state, getters, rootState) {
    const allCountries = rootState['root-store'].allowCountries
    return allCountries[state[USER_SETTINGS_FORM].country]
  },
  [GET_ROOT_COUNTRIES] (state, getters, rootState) {
    const allCountries = []
    for (const [key, value] of Object.entries(rootState['root-store'].allowCountries)) {
      allCountries.push({ label: value, value: key })
    }

    return allCountries
  },
  [GET_VERIFICATION_DATE] (state) {
    let verificationStatusesPhoneAndEmail
    if (state[VERIFICATION_DATE].phoneStatus === 1 && state[VERIFICATION_DATE].emailStatus === 1) {
      verificationStatusesPhoneAndEmail = 1
    } else {
      verificationStatusesPhoneAndEmail = 0
    }
    const validateTypeAsViewType = new Map()
      .set('memorableWord', {
        title: 'Set your Memorable word',
        link: '/verification/memorable-word',
        storeStatus: 0
      })
      .set('phoneAndEmail', {
        title: 'Verify phone number and email',
        link: '/verification/phone-and-email',
        storeStatus: verificationStatusesPhoneAndEmail
      })
      .set('personalInfo', {
        title: 'Specify your personal info',
        link: '/verification/personal-info',
        storeStatus: 1
      })
      .set('uploadDocs', {
        title: 'Upload documents',
        link: '/verification/upload-documents',
        storeStatus: state[VERIFICATION_DATE].addressStatus
      })

    const viewArray = []

    for (const value of validateTypeAsViewType.entries()) {
      const isNotValid = !value[1].storeStatus
      if (isNotValid) {
        viewArray.push({ ...value[1], id: viewArray.length })
      } else {
        viewArray.push({ ...value[1], class: 'active', id: viewArray.length })
      }
    }

    return viewArray
  }
}

export const mutations = {
  [CHANGE_USER_NAME] (state, username) {
    state[USERNAME] = username
  },
  [CHANGE_FULL_NAME] (state, fullName) {
    state[FULL_NAME] = fullName
  },
  [CHANGE_REGISTRATION_DATE] (state, registrationDate) {
    state[REGISTRATION_DATE] = registrationDate
  },
  [CHANGE_EMAIL] (state, email) {
    state[EMAIL] = email
  },
  [CHANGE_ADDRESS_FORMAT] (state, addressFormat) {
    state[ADDRESS_FORMAT] = addressFormat
  },
  [CHANGE_FLAG] (state, flag) {
    state[FLAG] = flag
  },
  [CHANGE_PHONE] (state, phone) {
    state[PHONE] = phone
  },
  [CHANGE_PHONE_FLAG] (state, phoneFlag) {
    state[PHONE_FLAG] = phoneFlag
  },
  [CHANGE_LANGUAGE] (state, language) {
    state[LANGUAGE] = language
  },
  [CHANGE_LANGUAGE_FLAG] (state, languageFlag) {
    state[LANGUAGE_FLAG] = languageFlag
  },
  [CHANGE_ABOUT] (state, about) {
    state[ABOUT] = about
  },
  [CHANGE_BIRTH_DATE] (state, birthDate) {
    state[BIRTH_DATE] = birthDate
  },
  [CHANGE_COUNTRY] (state, country) {
    state[COUNTRY] = country
  },
  [CHANGE_AVATAR] (state, avatar) {
    state[AVATAR] = avatar
  },
  [CHANGE_AVATAR_ORIGIN] (state, avatarOrigin) {
    state[AVATAR_ORIGIN] = avatarOrigin
  },
  [CHANGE_ADDRESS_STATUS] (state, addressStatus) {
    state[VERIFICATION_DATE].addressStatus = addressStatus
  },
  [CHANGE_EMAIL_STATUS] (state, emailStatus) {
    state[VERIFICATION_DATE].emailStatus = emailStatus
  },
  [CHANGE_NAME_STATUS] (state, nameStatus) {
    state[VERIFICATION_DATE].nameStatus = nameStatus
  },
  [CHANGE_PHONE_STATUS] (state, phoneStatus) {
    state[VERIFICATION_DATE].phoneStatus = phoneStatus
  },
  [CHANGE_USER_SETTINGS_FORM_REGION] (state, region) {
    state[USER_SETTINGS_FORM].region = region
  },
  [CHANGE_USER_SETTINGS_FORM_CITY] (state, city) {
    state[USER_SETTINGS_FORM].city = city
  },
  [CHANGE_USER_SETTINGS_FORM_ADDRESS] (state, address) {
    state[USER_SETTINGS_FORM].address = address
  },
  [CHANGE_USER_SETTINGS_FORM_POSTCODE] (state, postcode) {
    state[USER_SETTINGS_FORM].postcode = postcode
  },
  [CHANGE_USER_SETTINGS_FORM_PHONE] (state, phone) {
    state[USER_SETTINGS_FORM].phone = phone
  },
  [CHANGE_USER_SETTINGS_FORM_ABOUT] (state, about) {
    state[USER_SETTINGS_FORM].about = about
  },
  [CHANGE_USER_SETTINGS_FORM_COUNTRY] (state, country) {
    state[USER_SETTINGS_FORM].country = country
  },
  [CLEAR_ALL_ERRORS] (state) {
    state[ERRORS] = []
  },
  [SET_ERRORS] (state, errors) {
    state[ERRORS] = errors
  },
  [CHANGE_LANGUAGE_NOTIFICATIONS] (state, selected) {
    state[LANGUAGE_NOTIFICATIONS_SELECTED] = selected
  }
}

export const actions = {
  async [SAVE_CHANGES] ({ getters, rootGetters, dispatch, commit, router }) {
    const url = 'https://api.tifia.com/v2/settings/edit'
    const token = rootGetters['login/GET_TOKEN']
    try {
      const { data: response } = await axios({
        method: 'post',
        url: `${url}`,
        data: getters[GET_USER_FORM_BODY_SERIALIZER],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        }
      })
      const { status } = response
      if (status === 'error') {
        const { validate_messages: validateMessages } = response
        dispatch('PARSE_AND_SET_ERRORS_TO_STORE', validateMessages)
        console.log(response)
      } else {
        commit('CLEAR_ALL_ERRORS')
        this.$router.push('/settings/index')
      }
    } catch (e) {
      // TODO add sentry IO to parse this errors
      console.info('error -> ', e)
    }

    // console.info(getters.getUserFormBodySerializer)
  },
  [CHANGE_USER_SETTINGS_FORM_POSTCODE] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_POSTCODE, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_ADDRESS] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_ADDRESS, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_REGION] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_REGION, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_CITY] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_CITY, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_PHONE] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_PHONE, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_ABOUT] ({ commit }, event) {
    commit(CHANGE_USER_SETTINGS_FORM_ABOUT, event.target.value)
  },
  [CHANGE_USER_SETTINGS_FORM_COUNTRY] ({ commit }, newCountry) {
    const { value } = newCountry
    commit(CHANGE_USER_SETTINGS_FORM_COUNTRY, value)
  },
  [CHANGE_LANGUAGE_NOTIFICATIONS] ({ commit }, value) {
    commit(CHANGE_LANGUAGE_NOTIFICATIONS, value)
  },
  [PARSE_AND_SET_ERRORS_TO_STORE] ({ commit }, errors) {
    commit('CLEAR_ALL_ERRORS')
    const errorsArray = []
    for (const [attribute, message] of Object.entries(errors)) {
      errorsArray.push({ attribute, message })
    }
    console.log(errorsArray)
    commit('SET_ERRORS', errorsArray)
  },
  [LOAD_USER_FORM_DATA_TO_STORE] ({ commit }, data) {
    const {
      phone,
      country,
      postcode,
      region,
      city,
      address,
      about
    } = data

    commit('CHANGE_USER_SETTINGS_FORM_CITY', city)
    commit('CHANGE_USER_SETTINGS_FORM_REGION', region)
    commit('CHANGE_USER_SETTINGS_FORM_ADDRESS', address)
    commit('CHANGE_USER_SETTINGS_FORM_POSTCODE', postcode)
    commit('CHANGE_USER_SETTINGS_FORM_PHONE', phone)
    commit('CHANGE_USER_SETTINGS_FORM_ABOUT', about)
    commit('CHANGE_USER_SETTINGS_FORM_COUNTRY', country)
  },
  [SET_PROFILE_DATA] ({ commit }, data) {
    const {
      username,
      reg_date: registrationDate,
      full_name: fullName,
      addressFormat,
      flag,
      email,
      phone,
      phoneFlag,
      language,
      country,
      language_flag: languageFlag,
      about,
      avatar,
      avatar_origin: avatarOrigin,
      address_status: addressStatus,
      email_status: emailStatus,
      name_status: nameStatus,
      phone_status: phoneStatus,
      birth_date: birthDate
    } = data

    commit('CHANGE_USER_NAME', username)
    commit('CHANGE_FULL_NAME', fullName)
    commit('CHANGE_REGISTRATION_DATE', registrationDate)
    commit('CHANGE_EMAIL', email)
    commit('CHANGE_ADDRESS_FORMAT', addressFormat)
    commit('CHANGE_FLAG', flag)
    commit('CHANGE_PHONE', phone)
    commit('CHANGE_PHONE_FLAG', phoneFlag)
    commit('CHANGE_LANGUAGE', language)
    commit('CHANGE_LANGUAGE_FLAG', languageFlag)
    commit('CHANGE_ABOUT', about)
    commit('CHANGE_BIRTH_DATE', birthDate)
    commit('CHANGE_COUNTRY', country)
    commit('CHANGE_AVATAR', avatar)
    commit('CHANGE_AVATAR_ORIGIN', avatarOrigin)
    commit('CHANGE_ADDRESS_STATUS', addressStatus)
    commit('CHANGE_EMAIL_STATUS', emailStatus)
    commit('CHANGE_NAME_STATUS', nameStatus)
    commit('CHANGE_PHONE_STATUS', phoneStatus)
  },
  async loadDateFirstPage (context) {
    const { dispatch } = context
    await dispatch(`login-history/${LOAD_LOGIN_HISTORY_LIST}`, null, { root: true })
  }
}
