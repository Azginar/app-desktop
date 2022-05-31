<template>
  <div class="user-info-new">
    <div class="avatar-wrapper">
      <a href="#"><img :src="GET_USER_BADGE_INFO.avatar" alt=""></a>
    </div>
    <h3>{{ GET_USER_BADGE_INFO.fullName }}</h3>
    <p>
      <span>{{ GET_USER_BADGE_INFO.userName }}</span> <NuxtLink class="settings-ic" to="/settings/index">
        <SettingIcon />
      </nuxtlink>
    </p>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import axios from 'axios'
import SettingIcon from '../assets/icons/settings-ic.svg'
import { SET_PROFILE_DATA } from '../modules/settings/actions-types'
import { GET_TOKEN } from '../modules/login/getter-types'
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  name: 'UserBadgeNew',
  components: {
    SettingIcon
  },
  async asyncData (context) {
    const { store } = context
    const url = `https://api.tifia.com/v2/settings?tifia-token=${store.getters[`login/${GET_TOKEN}`]}`
    await axios(url, {
      method: 'GET'
    })
      .then((response) => {
        store.dispatch(`settings/${SET_PROFILE_DATA}`, response.data)
        return response
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error))
  },
  computed: {
    ...mapGetters([
      'GET_USER_BADGE_INFO'
    ])
  }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .user-info-new {
        padding: 90px 50px 60px;
        background: #242424;
    }

    .user-info-new .avatar-wrapper {
        width: 60px;
        margin-bottom: 10px;
        overflow: hidden;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .user-info-new .avatar-wrapper img {
        width: 60px;
        height: 60px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .user-info-new h3
    {
        font-family: Montserrat,serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #FFFFFF;
        margin-top: 0;
        margin-bottom: 7px;
    }

    .user-info-new p
    {
        font-family: Montserrat,serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #989898;
        margin-top: 0;
        margin-bottom: 0;
    }

    .user-info-new p span
    {
        vertical-align: middle;
        display: inline-block;
        margin-right: 0;
    }

    .user-info-new .settings-ic
    {
        display: inline-block;
        width: 10px;
        height: 10px;
        vertical-align: middle;
        cursor: pointer;
        margin-bottom: 3px;
    }

    .user-info-new .settings-ic:hover
    {

    }

</style>
