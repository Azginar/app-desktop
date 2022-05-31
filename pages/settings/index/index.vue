<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="clients-profile-red-black">
        <page-title />
        <div class="two-parts">
          <div class="left-parts">
            <client-profile-table-red-black
              :table-data-public="PUBLICK_CLIENT_DATA"
              :table-data-security="SECURE_CLIENT_DATA"
              :table-data-status="VERIFICATION_CLIENT_DATA"
            />
            <div class="profile-page-red-black">
              <div class="login-history-block">
                <h3>Login history</h3>
                <div class="black-block">
                  <table-login-history-settings-page :history-list="GET_FIRST_PAGE_HISTORY_LOGIN" />
                  <div class="btn-block">
                    <NuxtLink to="/settings/login-history">
                      <default-button
                        :type="'trans-button'"
                        :label="'Full login history'"
                        :click-event="() => {}"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <h3>Security</h3>
              <div class="black-block one-line-block">
                <div class="table-row">
                  <div class="col-row">
                    <p>Пароль не менялся 124 дня</p>
                  </div>
                  <div class="col-row">
                    <NuxtLink to="/settings/security">
                      <default-button
                        :type="'trans-button'"
                        :label="'Change password'"
                        :click-event="() => {}"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <h3>Privacy</h3>
              <div class="black-block one-line-block one-line-block-with-select">
                <div class="table-row">
                  <div class="col-row">
                    <p>Receive messages</p>
                  </div>
                  <div class="col-row">
                    <OnlySelectBlack
                      :options="['From all', 'Contest news', 'Company news']"
                      :handle-select="() => {}"
                      :selected="'From all'"
                    />
                  </div>
                </div>
              </div>
              <notifications-block
                :data-margin-level="DATA_MARGIN_LEVEL"
                :data-withdrawal-confirmation="DATA_WITHDRAWAL_CONFIRMATION"
                :data-email-notifications="DATA_EMAIL_NOTIFICATIOS"
                :data-email-subscriptions="DATA_EMAIL_SUBSCRIPTIONS"
              />
            </div>
          </div>
          <div class="right-parts">
            <croppie
              :title="'Profile photo'"
              :title-cancel="'Cancel'"
              :title-save="'Save'"
              :is-black-design="true"
              :img-url="AVATAR_LINK_CLIENT"
              :origin-img="AVATAR_LINK_CLIENT"
            />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>

<script>
import { GET_TOKEN } from '@/modules/login/getter-types'
import axios from 'axios'
import { SET_PROFILE_DATA } from '@/modules/settings/mutation-types'
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '@/utils/userSettingsRequest'
import PageTitle from '../../../components/page-title'
import ClientProfileTableRedBlack from '../../../components/ClientProfileTableRedBlack'
import NotificationsBlock from '../../../components/notifications'
import OnlySelectBlack from '../../../components/OnlySelectBlack.vue'
import Croppie from '../../../components/croppie-image/Croppie'
import getAllowCountryList from '../../../services/loadAllowCountryList'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import TableLoginHistorySettingsPage from '../../../components/loginHistorySettingsPage'

const { mapGetters, mapState, mapActions } = createNamespacedHelpers('settings')

export default {
  components: {
    'page-title': PageTitle,
    OnlySelectBlack,
    'client-profile-table-red-black': ClientProfileTableRedBlack,
    'notifications-block': NotificationsBlock,
    croppie: Croppie,
    HOCWithLabelAndNotifications,
    'table-login-history-settings-page': TableLoginHistorySettingsPage
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'PUBLICK_CLIENT_DATA',
      'SECURE_CLIENT_DATA',
      'VERIFICATION_CLIENT_DATA',
      'FULL_NAME_CLIENT',
      'STATUS_NAME_CLIENT',
      'AVATAR_LINK_CLIENT',
      'GET_FIRST_PAGE_HISTORY_LOGIN'
    ]),
    ...mapState([
      'DATA_MARGIN_LEVEL',
      'DATA_WITHDRAWAL_CONFIRMATION',
      'DATA_EMAIL_NOTIFICATIOS',
      'DATA_EMAIL_SUBSCRIPTIONS'
    ])
  },
  created () {
    this.loadDateFirstPage()
  },
  methods: {
    ...mapActions([
      'GET_PROFILE_DATA',
      'loadDateFirstPage'
    ])
  },
  data () {
    return {
      inProgress: false
    }
  }
}
</script>

<style>
.profile-page-red-black .black-block:before
{
  display: none;
}

.profile-page-red-black .black-block .btn-block
{
  text-align: right;
}

.profile-page-red-black .black-block .btn-block .trans-button
{
  background: #333333;
}

.clients-profile-red-black .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.clients-profile-red-black h1
{
  margin-bottom: 100px;
}

.clients-profile-red-black .left-parts
{
  width: 65%;
}

.clients-profile-red-black .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.clients-profile-red-black .panel-change-avatar-red-black .avatar > img
{
  max-width: 250px;
  height: auto !important;
  width: 100% !important;
}

.profile-page-red-black .black-block p
{
  color: #737373;
}

.clients-profile-red-black .right-parts .panel-change-avatar-red-black .title-change-avatar p
{
  margin-bottom: 18px !important;
}

.clients-profile-red-black .right-parts .span-wrapper-red-black,
.clients-profile-red-black .right-parts button
{
  background: #333333;
  margin-bottom: 10px;
}

.clients-profile-red-black .panel-change-avatar-red-black .avatar-block
{
  padding: 0 !important;
}

.panel-change-avatar-red-black .avatar-block:before
{
  display: none;
}

.clients-profile-red-black .button-wrapper
{
  margin-right: -15px;
  margin-left: -15px;
}

.clients-profile-red-black .profile-page-red-black .black-block .badge-with-text,
.clients-profile-red-black .profile-page-red-black .black-block .status
{
  padding: 3px 5px 3px;
}

.clients-profile-red-black .panel-change-avatar-red-black .panel-change-avatar-body
{
  background: #333333;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.clients-profile-red-black .panel-change-avatar-red-black .panel-change-avatar-body
{
  text-align: left;
  padding: 0;
}

.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button
{
  margin-right: 10px;
  margin-left: 10px;
  vertical-align: top;
}

.clients-profile-red-black .panel-change-avatar-red-black .bg-black
{
  border-radius: 5px;
  padding: 40px 35px 20px;
  overflow: hidden;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper
{
  margin-top: 20px !important;
}

.clients-profile-red-black .panel-change-avatar-red-black .title-change-avatar > p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.clients-profile-red-black .panel-change-avatar-red-black .avatar-block
{
  padding: 40px 35px 20px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.clients-profile-red-black .panel-change-avatar-red-black .avatar > img
{
  width: 250px;
  height: 250px;
}

.clients-profile-red-black .panel-change-avatar-red-black .bg-black
{
  position: relative;
}

.clients-profile-red-black .panel-change-avatar-red-black .bg-black:before
{
  position: absolute;
  z-index: 0;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #242424;
  opacity: 0.5;
}

.clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;
  line-height: 14px;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 12px 40px;
  background: #333333 !important;
  border: 1px solid rgba(94, 94, 94, 0.5) !important;
  box-sizing: border-box;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button:hover,
.clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button:active,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper:hover,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper:active,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button:hover,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button:active
{
  border: 1px solid rgba(229, 37, 37, 0.5) !important;
  color: #ffffff !important;
}

.clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button:active,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper:active,
.clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button:active
{
  margin-top: 1px;
  margin-bottom: -1px;
}

.clients-profile-red-black .login-history-block h3
{
  margin-top: 40px;
}

.clients-profile-red-black .login-history-block .table-login
{
  color: #737373;
  border: none;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
}

.clients-profile-red-black .login-history-block .table-login > thead > tr th
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  text-align: left;
  padding: 0px 20px 4px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.5);;
}

.clients-profile-red-black .login-history-block .table-login tr:first-child td
{
  padding-top: 10px;
}

.clients-profile-red-black .login-history-block .table-login td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #737373;
  border: none;
  padding: 5px 20px;
}

.clients-profile-red-black .login-history-block .btn-block
{
  text-align: right;
}

.clients-profile-red-black .login-history-block .btn-block .trans-button
{
  background: #333333;
}

.clients-profile-red-black .black-block.one-line-block
{
  padding-bottom: 0;
}

.clients-profile-red-black .black-block.one-line-block .table-row
{
  justify-content: space-between;
  align-items: center;
}

.clients-profile-red-black .black-block.one-line-block .table-row>div:first-child
{
  margin-right: 60px;
}

.clients-profile-red-black .black-block.one-line-block .table-row>div
{
  width: auto;
  margin-right: 0;
}

.clients-profile-red-black .black-block.one-line-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  text-transform: none;
  margin-bottom: 0;
}

.clients-profile-red-black .black-block.one-line-block .trans-button
{
  background: #333333;
}

.clients-profile-red-black .black-block.one-line-block-with-select .table-row>div.col-row:last-child
{
  min-width: 250px;
}

.clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
}

.clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black .vs__dropdown-menu
{
  z-index: 3;
  position: absolute;
}

.clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black span
{
  font-size: 12px;
  line-height: 40px;
}

.clients-profile-red-black .black-block
{
  background: rgba(36, 36, 36, 0.5);
  overflow: inherit;
}

.clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black .vs__actions
{
  background: url('https://tifia.com/images/new-site/arrow-dawn.svg') no-repeat scroll 0 50%;
  top: 15px;
}

.main-wrapper.light-theme .clients-profile-red-black .black-block.one-line-block .trans-button,
.main-wrapper.light-theme .clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black .vs__dropdown-toggle,
.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .panel-change-avatar-body
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .bg-black:before
{
  background: #ffffff;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .title-change-avatar > p
{
  color: #000000;
}

.main-wrapper.light-theme .clients-profile-red-black .black-block.one-line-block-with-select .selector-wrapper-black .vs__dropdown-toggle
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button,
.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper,
.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button
{
  background: #F7F6FB !important;
  border-color: #D4D4D4 !important;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .red-outlet-button:hover,
.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .button-wrapper .span-wrapper:hover,
.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .button-wrapper button:hover
{
  color: #000000 !important;
  border-color: #000000 !important;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .bg-black
{
  background: #ffffff;
}

.main-wrapper.light-theme .clients-profile-red-black .panel-change-avatar-red-black .bg-black:before
{
  display: none;
}
</style>
