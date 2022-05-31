<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="notification-page">
        <div class="back-btn-block">
          <NuxtLink to="/settings/index">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Notifications</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="notification-page-form">
              <h3>Language of notifications</h3>
              <div class="row-line">
                <div class="col-line">
                  <OnlySelectBlack
                    :options="LANGUAGE_NOTIFICATIONS"
                    :handle-select="CHANGE_LANGUAGE_NOTIFICATIONS"
                    :selected="LANGUAGE_NOTIFICATIONS_SELECTED"
                  />
                </div>
              </div>
            </div>
            <div class="notification-page-form">
              <h3>Low margin level</h3>
              <div class="row-line-wrap">
                <div class="col-line">
                  <input-range-with-input />
                </div>
                <div class="col-line">
                  <setting-block :data-settings="CHOOSE_NOTIFY" />
                </div>
              </div>
            </div>
            <div class="notification-page-form">
              <h3>Withdrawal confirmation</h3>
              <setting-block :data-settings="CHOOSE_WITHDRAWAL_NOTIFICATIONS" />
            </div>
            <div class="notification-page-form">
              <h3>Withdrawal confirmation</h3>
              <setting-block :data-settings="CHOOSE_EMAIL_NOTIFICATIONS" />
            </div>
            <div class="notification-page-form">
              <h3>Withdrawal confirmation</h3>
              <setting-block :data-settings="CHOOSE_EMAIL_SUBSCRIPTIONS" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../utils/userSettingsRequest'
import OnlySelectBlack from '../../components/OnlySelectBlack'
import BackButton from '../../components/back-button.vue'
import InputTypeRangeWithInput from '../../components/inputTypeRangeWithInput'
import SettingBlock from '../../components/settingBlock'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
import { CHANGE_LANGUAGE_NOTIFICATIONS } from '../../modules/settings/mutation-types'
const { mapState, mapActions } = createNamespacedHelpers('settings')
export default {
  components: {
    'back-button': BackButton,
    'input-range-with-input': InputTypeRangeWithInput,
    'setting-block': SettingBlock,
    OnlySelectBlack,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'LANGUAGE_NOTIFICATIONS',
      'LANGUAGE_NOTIFICATIONS_SELECTED',
      'CHOOSE_NOTIFY',
      'CHOOSE_WITHDRAWAL_NOTIFICATIONS',
      'CHOOSE_EMAIL_NOTIFICATIONS',
      'CHOOSE_EMAIL_SUBSCRIPTIONS'
    ])
  },
  methods: {
    ...mapActions([CHANGE_LANGUAGE_NOTIFICATIONS])
  }
}
</script>
<style>
.notification-page h1
{
  margin-bottom: 40px;
}

.notification-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.notification-page .left-parts
{
  width: 65%;
}

.notification-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.notification-page .notification-page-form
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px 40px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.notification-page .notification-page-form h3
{
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.notification-page .notification-page-form .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.notification-page .notification-page-form .row-line-wrap
{
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.notification-page .notification-page-form .row-line-wrap > div
{
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 60px;
}

.notification-page .notification-page-form .row-line-wrap > div:last-child
{
  margin-right: 0;
}

.notification-page .notification-page-form .row-line > div
{
  width: 50%;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
}

.notification-page .notification-page-form .row-line > div > label
{
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.notification-page .notification-page-form .btn-block
{
  text-align: center;
}

.notification-page .notification-page-form .btn-block button
{
  font-size: 15px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.notification-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
}

.notification-page .back-btn-block
{
  margin-bottom: 80px;
}

.notification-page .selector-wrapper-black .vs__selected
{
  text-transform: none;
}

.main-wrapper.light-theme .notification-page .notification-page-form
{
  background: #ffffff;
}

.main-wrapper.light-theme .notification-page .notification-page-form h3
{
  color: #000000;
}

@media (max-width: 1500px) {
  .notification-page .notification-page-form .row-line
  {
    display: block;
  }

  .notification-page .notification-page-form .row-line > div
  {
    width: 100%;
    margin-bottom: 20px;
  }

  .notification-page .notification-page-form .row-line-wrap
  {
    display: block;
  }

  .notification-page .notification-page-form .row-line-wrap > div
  {
    margin-right: 0;
  }
}
</style>
