import axios from 'axios'
import { GET_TOKEN } from '@/modules/login/getter-types'
import { SET_PROFILE_DATA } from '@/modules/settings/mutation-types'

/**
 *
 * @param context
 * @returns {Promise<boolean>}
 */
const userSettingsRequest = async (context) => {
  const { store, redirect } = context
  const token = store.getters[`login/${GET_TOKEN}`]

  await axios
    .get('https://api.tifia.com/v2/settings', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      validateStatus (status) {
        if (status === 401) {
          store.dispatch('login/logout')
          redirect('/login')

          return false
        }
        return true
      }
    })
    .then((response) => {
      store.dispatch(`settings/${SET_PROFILE_DATA}`, response.data)
    })
    .catch(() => {
      // TODO add parsing and handling errors hear
      // if (e.message === 'Request failed with status code 401') {
      // store.dispatch('login/logout')
      // }
    })
}

export default userSettingsRequest
