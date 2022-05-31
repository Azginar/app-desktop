<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="open-account-page">
        <div class="back-btn-block">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1>Open Account</h1>
        <sub-nemu />
        <h3>Open investor’s accounts</h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="form-block">
              <div class="row-line">
                <div class="col-line">
                  <SimpleSelectBlack
                    :options="openAccountType"
                    :handle-select="changeAccountType"
                    :label="'Account type'"
                    :selected="selectedOpenAccountType"
                  />
                </div>
                <div class="col-line">
                  <div class="row-line">
                    <div class="col-line">
                      <SimpleSelectBlack
                        :options="leverage[selectedOpenAccountType]"
                        :handle-select="changeLeverage"
                        :selected="selectedLeverage[selectedOpenAccountType]"
                        :label="'Leverage'"
                      />
                    </div>
                    <div class="col-line">
                      <SimpleSelectBlack
                        :options="currency"
                        :handle-select="changeCurrency"
                        :selected="selectedCurrency"
                        :label="'Currency'"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="check-box-container">
                <div class="check-box">
                  <div class="check-box-content">
                    <div><switch-button :id="'remember-me'" /></div>
                    <div class="text-block">
                      <p>I have read and agree to the following agreements:</p>
                      <ul>
                        <li>– <a href="https://tifia.com/uploads/docs/terms-of-business-en.pdf">Terms of Business</a></li>
                        <li>– <a href="https://tifia.com/uploads/docs/client-agreement-en.pdf">Client agreement</a></li>
                        <li>– <a href="https://tifia.com/uploads/docs/cfds-trading-conditions-and-risk-disclosure-en.pdf">CFDs trading conditions and risk disclosure</a></li>
                        <li>– <a href="https://tifia.com/uploads/docs/tifia-swap-free-agreement-en.pdf">Agreement on the use of Swap Free accounts</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-block">
                <default-button
                  :type="'red-button'"
                  :label="'Open trading account'"
                  :click-event="() => {}"
                />
              </div>
            </div>
          </div>
          <div class="right-parts">
            <p class="text">
              <i>Пояснительная текстовка, надо обратить внимание на то, что копирование возможно только при одинаковых типах счета у инвестора и управляющего</i>
            </p>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import BackButton from '@/components/back-button.vue'
import SubMenu from '@/components/one-line-sub-menu'
import userSettingsRequest from '@/utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import {
  GET_LEVERAGE,
  GET_SELECTED_LEVERAGE,
  GET_OPEN_ACCOUNT_TYPE,
  GET_SELECTED_OPEN_ACCOUNT_TYPE,
  GET_CURRENCY_ACCOUNT,
  GET_SELECTED_CURRENCY_ACCOUNT
} from '@/modules/accounts/getter-types'
import { CHANGE_SELECTED_OPEN_ACCOUNT_TYPE, CHANGE_SELECTED_LEVERAGE, CHANGE_CURRENCY_ACCOUNT } from '@/modules/accounts/mutation-types'
import SwitchButton from '../../components/switch-button'
import DefaultButton from '../../components/default-button'
export default {
  components: {
    'back-button': BackButton,
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    SwitchButton,
    DefaultButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    openAccountType () {
      return this.$store.getters[`accounts/${GET_OPEN_ACCOUNT_TYPE}`]
    },
    selectedOpenAccountType () {
      return this.$store.getters[`accounts/${GET_SELECTED_OPEN_ACCOUNT_TYPE}`]
    },
    leverage () {
      return this.$store.getters[`accounts/${GET_LEVERAGE}`]
    },
    selectedLeverage () {
      return this.$store.getters[`accounts/${GET_SELECTED_LEVERAGE}`]
    },
    currency () {
      return this.$store.getters[`accounts/${GET_CURRENCY_ACCOUNT}`]
    },
    selectedCurrency () {
      return this.$store.getters[`accounts/${GET_SELECTED_CURRENCY_ACCOUNT}`]
    }
  },
  methods: {
    goBack () {
      this.$router.push('/accounts/investors-account')
    },
    changeAccountType (selected) {
      return this.$store.commit(`accounts/${CHANGE_SELECTED_OPEN_ACCOUNT_TYPE}`, selected)
    },
    changeLeverage (selected) {
      return this.$store.commit(`accounts/${CHANGE_SELECTED_LEVERAGE}`, { leverage: selected, typeAccount: this.selectedOpenAccountType })
    },
    changeCurrency (selected) {
      return this.$store.commit(`accounts/${CHANGE_CURRENCY_ACCOUNT}`, selected)
    }
  }
}
</script>
<style>
.ul-tabs li a
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.ul-tabs li a:hover
{
  color: #ffffff !important;
}

.ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.open-account-page .back-btn-block
{
  margin-bottom: 80px;
}

.open-account-page
{
  padding-bottom: 60px;
}

.open-account-page .two-parts
{
  display: flex;
  margin-bottom: 65px;
}

.open-account-page .left-parts
{
  background: rgba(36, 36, 36, 0.5);
  width: 65%;
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.open-account-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.open-account-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.open-account-page .form-block .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.open-account-page .form-block > .row-line > .col-line
{
  margin-bottom: 40px;
}

.open-account-page .form-block .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
}

.open-account-page .check-box {
  display: block;
}

.open-account-page .check-box-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-content: center;
  width: 100%;
}

.open-account-page .check-box-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.open-account-page .check-box .text-block {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  color: #737373;
  margin-top: 6px;
}

.open-account-page .check-box .text-block ul
{
  padding-left: 0;
}

.open-account-page .check-box .text-block p
{
  margin-bottom: 6px;
}

.open-account-page .check-box .text-block a
{
  color: #B2B2B2;
}

.open-account-page .check-box .text-block a:hover
{
  color: #ffffff;
}

.open-account-page .button-switch {
  height: 24px;
  position: relative;
  width: 60px;
  margin-right: 10px;
}

.open-account-page .button-switch .lbl-on,
.open-account-page .button-switch .lbl-off {
  cursor: pointer;
  display: block;
  position: absolute;
  color: #ffffff !important;
  top: 0.5em;
  transition: opacity 0.25s ease-out 0.1s;
  text-transform: uppercase;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 97.52%;
  text-align: center;
}

.open-account-page .button-switch .lbl-on {
  opacity: 0;
  right: 9px;
  top: 8px;
}

.open-account-page .button-switch .lbl-off {
  padding: 0;
  left: 9px;
  top: 8px;
  color: #737373;
}

.open-account-page .button-switch .switch {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 0;
  font-size: 1em;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;
}

.open-account-page .button-switch .switch:before,
.open-account-page .button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.open-account-page .button-switch .switch:before {
  border-radius: 1.25em;
  background: #737373;
  height: 24px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 60px;
}

.open-account-page .button-switch .switch:after {
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.25;
  height: 18px;
  transform: translate(0, 0);
  transition: transform 0.25s ease-out 0.1s;
  width: 18px;
  top: 3px;
  left: 36px;
}

.open-account-page .button-switch .switch:checked:after {
  transform: translate(-32px, 0);
  opacity: 1;
}

.open-account-page .button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.open-account-page .button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.open-account-page .button-switch .switch:checked:before {
  background: #333333;
}

.open-account-page .button-switch .switch:checked:before {
  background: #E52525;
}

.open-account-page .btn-block
{
  text-align: center;
}

.open-account-page .btn-block .red-button
{
  font-size: 15px;
  line-height: 16px;
  padding: 16px 40px;
}

.open-account-page .content-row label
{
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  display: block;
  padding: 0 20px;
}

.open-account-page .content-row .form-group
{
  margin-bottom: 20px;
  height: auto;
}

.open-account-page .right-parts p.text
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  text-transform: none;
}

.main-wrapper.light-theme .open-account-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .open-account-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .open-account-page h3,
.main-wrapper.light-theme .account-info h4
{
  color: #000000;
}

.main-wrapper.light-theme .account-info span
{
  color: #989898;
}

.main-wrapper.light-theme .open-account-page .left-parts
{
  background: #ffffff;
}

.main-wrapper.light-theme .open-account-page .check-box .text-block a:hover
{
  color: #000000;
}

.main-wrapper.light-theme .open-account-page .right-parts p.text,
.main-wrapper.light-theme .open-account-page .check-box .text-block a
{
  color: #989898;
}

.main-wrapper.light-theme .open-account-page .button-switch .lbl-on,
.main-wrapper.light-theme .open-account-page .button-switch .lbl-off
{
  color: #000000 !important;
}

.main-wrapper.light-theme .button-switch .switch:checked ~ .lbl-on
{
  color: #ffffff !important;
}

@media (max-width: 1300px) {
  .open-account-page .right-parts
  {
    padding-left: 30px;
  }

  .open-account-page .form-block > .row-line
  {
    display: block;
  }

  .open-account-page .form-block > .row-line .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .open-account-page .form-block .row-line
  {
    display: block;
  }

  .open-account-page .form-block .row-line .col-line
  {
    width: 100%;
  }

  .open-account-page .form-block > .row-line > .col-line,
  .open-account-page .form-block .row-line .col-line
  {
    margin-bottom: 20px;
  }
}
</style>
