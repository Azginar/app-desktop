<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="security-page">
        <div class="back-btn-block">
          <NuxtLink to="/settings/index">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Tifia Client's profile password changing</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="security-page-form">
              <div class="row-line">
                <div class="col-line">
                  <label>Enter your current password</label>
                  <black-input
                    :value="CURRENT_PASSWORD"
                  />
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <label>New password</label>
                  <black-input
                    :value="NEW_PASSWORD"
                  />
                </div>
                <div class="col-line">
                  <label>Confirm new password</label>
                  <black-input
                    :value="NEW_PASSWORD"
                  />
                </div>
              </div>
              <div class="btn-block">
                <NuxtLink to="/">
                  <default-button
                    :type="'red-button'"
                    :label="'Save'"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="right-parts">
            <p>
              Please set a new password which contains at least 8 symbols, capital and small letters, numbers and special symbols (#, @,! and so on).
            </p>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../utils/userSettingsRequest'
import BlackInput from '../../components/black-input'
import DefaultButton from '../../components/default-button.vue'
import BackButton from '../../components/back-button.vue'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('settings')
export default {
  components: {
    'back-button': BackButton,
    BlackInput,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'CURRENT_PASSWORD',
      'NEW_PASSWORD'
    ])
  }
}
</script>
<style>
.security-page h1
{
  margin-bottom: 40px;
}

.security-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.security-page .left-parts
{
  width: 65%;
}

.security-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.security-page .security-page-form
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.security-page .security-page-form .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.security-page .security-page-form .row-line > div
{
  width: 50%;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 40px;
}

.security-page .security-page-form .row-line label
{
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  padding-left: 20px;
}

.security-page .security-page-form .btn-block
{
  text-align: center;
}

.security-page .security-page-form .btn-block button
{
  font-size: 15px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.security-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
}

.security-page .back-btn-block
{
  margin-bottom: 80px;
}

.main-wrapper.light-theme .security-page .security-page-form
{
  background: #ffffff;
}

.main-wrapper.light-theme .security-page .right-parts p
{
  color: #989898;
}

@media (max-width: 1500px) {
  .security-page .security-page-form .row-line
  {
    display: block;
  }

  .security-page .security-page-form .row-line > div
  {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
