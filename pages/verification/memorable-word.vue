<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="verification-page memorable-word-page">
        <h1>Set your memorable word</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="verification-page-form">
              <div class="row-line">
                <div class="col-line">
                  <label>Enter your secret memorable word hint:</label>
                  <black-input
                    :value="SECRET_MEMORABLE_WORD"
                  />
                </div>
                <div class="col-line">
                  <label>Set your secret memorable word:</label>
                  <black-input
                    :value="HINT_SECRET_MEMORABLE_WORD"
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
              Be sure to remember and write down the code word somewhere.
              <br><br>
              The code word cannot be changed without re-uploading the documents
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
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('settings')
export default {
  components: {
    BlackInput,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'SECRET_MEMORABLE_WORD',
      'HINT_SECRET_MEMORABLE_WORD'
    ])
  }
}
</script>
<style>
.verification-page h1
{
  margin-bottom: 40px;
}

.verification-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.verification-page .left-parts
{
  width: 65%;
}

.verification-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.verification-page .verification-page-form
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.verification-page .verification-page-form .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.verification-page .verification-page-form .row-line > div
{
  width: 45%;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
}

.verification-page .verification-page-form .row-line > div:first-child
{
  width: 55%;
}

.verification-page .verification-page-form .row-line label
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

.verification-page .verification-page-form .btn-block
{
  text-align: center;
  margin-top: 20px;
}

.verification-page .verification-page-form .btn-block button
{
  font-size: 15px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.verification-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
}

.memorable-word-page .verification-account-status .row-status > div:first-child .step p,
.memorable-word-page .verification-account-status .row-status > div:first-child .step .circle
{
  color: #ffffff;
  border-color: #ffffff;
}

.memorable-word-page .verification-account-status .row-status > div:first-child .step
{
  border-color: #333333;
}

.main-wrapper.light-theme .verification-page .verification-page-form
{
 background: #ffffff;
}
</style>
