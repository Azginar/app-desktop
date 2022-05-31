<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="verification-page phone-and-email-page">
        <modal-window v-show="showSuccessModal" @close="showSuccessModal = false">
          <template v-slot:header>
            <icSuccess />
          </template>
          <template v-slot:body>
            <h3>Phone number verified</h3>
          </template>
          <template v-slot:footer>
            <div>
              <default-button
                label="Ok"
                type="red-button"
                :click-event="handleCloseSuccessModal"
              />
            </div>
          </template>
        </modal-window>
        <modal-window v-show="showErrorModal" @close="showErrorModal = false">
          <template v-slot:header>
            <icClose />
          </template>
          <template v-slot:body>
            <h3>Invalid SMS code</h3>
          </template>
          <template v-slot:footer>
            <div>
              <default-button
                label="Ok"
                type="red-button"
                :click-event="handleCloseErrorModal"
              />
            </div>
          </template>
        </modal-window>
        <h1>Verify Phone via SMS</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="verification-page-form">
              <div class="row-line message-block">
                <div class="col-line">
                  <p class="textMessage">
                    Verification code was sent by SMS to {{ PHONE }}
                  </p>
                </div>
                <div class="col-line col-button">
                  <default-button
                    :label="'RESEND CODE'"
                    :click-event="() => {}"
                    :type="'trans-button'"
                  />
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <label>Phone</label>
                  <input-with-button
                    :value="PHONE"
                  >
                    <template v-slot:button>
                      <default-button
                        :label="'Change'"
                        :click-event="() => {}"
                        :type="'trans-button'"
                      />
                    </template>
                  </input-with-button>
                </div>
                <div class="col-line">
                  <label>Enter a code</label>
                  <black-input
                    :value="ENTER_CODE"
                    :type="'number'"
                  />
                </div>
              </div>
              <div class="btn-block">
                <default-button
                  :type="'red-button'"
                  :label="'Verify'"
                  :click-event="handleOpenCloseSuccessModal"
                />
              </div>
            </div>
            <h2>Verify Email</h2>
            <div class="verification-page-form">
              <div class="row-line message-block">
                <div class="col-line">
                  <p class="textMessage">
                    A verification letter with a code has been sent to your mail
                  </p>
                </div>
                <div class="col-line col-button">
                  <default-button
                    :label="'RESEND CODE'"
                    :click-event="() => {}"
                    :type="'trans-button'"
                  />
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <label>Email</label>
                  <input-with-button
                    :value="EMAIL"
                  >
                    <template v-slot:button>
                      <default-button
                        :label="'Change'"
                        :click-event="() => {}"
                        :type="'trans-button'"
                      />
                    </template>
                  </input-with-button>
                </div>
                <div class="col-line">
                  <label>Enter a code</label>
                  <black-input
                    :value="ENTER_CODE"
                    :type="'number'"
                  />
                </div>
              </div>
              <div class="btn-block">
                <default-button
                  :type="'red-button'"
                  :label="'Verify'"
                  :click-event="handleOpenCloseErrorModal"
                />
              </div>
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
import BlackInput from '../../components/black-input'
import DefaultButton from '../../components/default-button.vue'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
import InputWithButton from '../../components/input-with-button'
import modalWindow from '../../components/modal'
import icClose from '../../assets/icons/close-form.svg'
import icSuccess from '../../assets/icons/success-ic.svg'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('settings')
export default {
  components: {
    BlackInput,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications,
    'modal-window': modalWindow,
    InputWithButton,
    icClose,
    icSuccess
  },
  data () {
    return {
      showSuccessModal: false,
      showErrorModal: false
    }
  },
  computed: {
    ...mapState(['ERRORS', 'PHONE', 'EMAIL', 'ENTER_CODE']),
    ...mapGetters([
      'GET_USER_SETTINGS_FORM_PHONE',
      'SECURE_CLIENT_DATA'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_USER_SETTINGS_FORM_PHONE'
    ]),
    handleOpenCloseSuccessModal (elem) {
      this.showSuccessModal = !this.showSuccessModal
      document.body.classList.add('overflow')
    },
    handleCloseSuccessModal () {
      this.showSuccessModal = false
      document.body.classList.remove('overflow')
    },
    handleOpenCloseErrorModal (elem) {
      this.showErrorModal = !this.showErrorModal
      document.body.classList.add('overflow')
    },
    handleCloseErrorModal () {
      this.showErrorModal = false
      document.body.classList.remove('overflow')
    }
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  }
}
</script>
<style>
.verification-page h1,
.verification-page h2
{
  margin-bottom: 40px;
}

.verification-page h2
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  color: #FFFFFF;
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
  margin-bottom: 80px;
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

.verification-page .textMessage
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #8DC640;
}

.verification-page .message-block button
{
  color: #737373;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.verification-page .message-block .col-button
{
  text-align: right;
}

.verification-page .modal-footer button
{
  min-width: auto;
}

.phone-and-email-page .verification-account-status .row-status > div:nth-child(2) .step p,
.phone-and-email-page .verification-account-status .row-status > div:nth-child(2) .step .circle
{
  color: #ffffff;
  border-color: #ffffff;
}

.phone-and-email-page .verification-account-status .row-status > div:nth-child(2) .step
{
  border-color: #333333;
}

.phone-and-email-page .verification-account-status .row-status .input-with-button input
{
  width: 70%;
}

.main-wrapper.light-theme .verification-page .verification-page-form
{
  background: #ffffff;
}

.main-wrapper.light-theme .verification-page h2
{
  color: #000000;
}

@media (max-width: 1500px) {
  .verification-page .verification-page-form .row-line
  {
    display: block !important;
  }

  .verification-page .verification-page-form .row-line .col-line
  {
    width: 100% !important;
  }

  .verification-page .message-block .col-button
  {
    text-align: left;
  }
}
</style>
