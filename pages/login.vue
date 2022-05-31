<template>
  <div class="general-form-wrapper">
    <div class="main-content">
      <div class="tabs-login-registration">
        <div class="logo-block">
          <div class="black">
            <logoSvg />
          </div>
          <div class="white">
            <logoBlackSvg />
          </div>
        </div>
        <one-line-sub-menu-login-registration />
      </div>

      <div class="login-form-card">
        <div class="login-from-facebook-google">
          <div>
            <default-button
              :is-with-slot="true"
              :type="'trans-button'"
              :label="'Facebook'"
            >
              <template v-slot:icon>
                <div class="facebook-google-icon">
                  <FacebookSVG />
                </div>
              </template>
            </default-button>
          </div>
          <div>
            <default-button
              :is-with-slot="true"
              :type="'trans-button'"
              :label="'Google'"
            >
              <template v-slot:icon>
                <div class="facebook-google-icon">
                  <GoogleSVG />
                </div>
              </template>
            </default-button>
          </div>
        </div>
        <div class="hr-block">
          <div class="left-hr">
            <hr>
            <span>Or</span>
          </div>
        </div>
        <form :onsubmit="handleSubmit" class="login-form-container">
          <div class="row-line">
            <label>e-mail</label>
            <black-input
              :handle-input="handleChangeEmail"
              :errors="ERRORS"
              :value="EMAIL"
              :attribute="'email'"
            />
          </div>
          <div class="row-line">
            <label>password</label>
            <black-input
              :type="'password'"
              :handle-input="handleChangePassword"
              :errors="ERRORS"
              :value="PASSWORD"
              :attribute="'password'"
            />
          </div>
          <div class="check-box-container">
            <div class="check-box">
              <div class="check-box-content">
                <div><switch-button :id="'remember-me'" /></div>
                <div class="text-block">
                  Remember me
                </div>
              </div>
            </div>
          </div>
          <div class="btn-block">
            <default-button
              :type="'red-button'"
              :label="'Login'"
              :click-event="handleSubmit"
            />
          </div>
        </form>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="https://tifia.com/uploads/docs/terms-of-provision-and-use-of-information-en.pdf" target="_blank">Terms and Conditions</a></li>
        <li><a href="https://tifia.com/uploads/docs/privacy-policy-en.pdf" target="_blank">Privacy policy</a></li>
        <li><a href="https://tifia.com/uploads/docs/aml-policy-en.pdf" target="_blank">AML Policy</a></li>
        <li><a href="https://tifia.com/uploads/docs/risk-disclosure-en.pdf" target="_blank">Risk disclosure</a></li>
        <li><a href="/">Leave feedback</a></li>
      </ul>
    </footer>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

import SwitchButton from '../components/switch-button'
import DefaultButton from '../components/default-button'
import BlackInput from '../components/black-input'
import { AUTH_USER } from '../modules/login/actions-types'
import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../modules/login/mutation-types'
import FacebookSVG from '../assets/icons/001-facebook.svg'
import GoogleSVG from '../assets/icons/001-google.svg'
import OneLineSubMenuLoginRegistration from '../components/login/one-line-sub-menu-login-registration'
import logoSvg from '../assets/icons/logo.svg'
import logoBlackSvg from '../assets/icons/logo-black.svg'

const { mapActions, mapState } = createNamespacedHelpers('login')
export default {
  middleware: ['redirect'],
  components: { OneLineSubMenuLoginRegistration, BlackInput, DefaultButton, FacebookSVG, GoogleSVG, SwitchButton, logoSvg, logoBlackSvg },
  layout: 'NoLayout',
  computed: {
    ...mapState(['ERRORS', 'EMAIL', 'PASSWORD'])
  },
  methods: {
    ...mapActions([AUTH_USER, CHANGE_PASSWORD, CHANGE_EMAIL]),
    handleChangeEmail (event) {
      this[CHANGE_EMAIL](event.target.value)
    },
    handleChangePassword (event) {
      this[CHANGE_PASSWORD](event.target.value)
    },
    handleSubmit (e) {
      e.preventDefault()
      this[AUTH_USER](this.$router)
    }
  }
}
</script>
<style>

.general-form-wrapper {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.main-content{
  flex-grow: 1;
}

.tabs-login-registration {
  margin-top: 50px;
  text-align: center;
}
.hr-block {
  margin-top: 30px;
  position: relative;
  text-align: center;
}

.general-form-wrapper .hr-block span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  z-index: 1;
  background: #2b2b2b;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}

.left-hr hr {
  line-height: 22px;
  border: 0;
  top: 8px;
  position: absolute;
  width: 100%;
  height: 1px;
  /* background: -webkit-linear-gradient(left, transparent, grey, transparent); */
  background: rgb(67,67,67);
  background: linear-gradient(120deg, rgba(67,67,67,0) 0%, rgba(67,67,67,1) 50%, rgba(67,67,67,0) 100%);
}

.general-form-wrapper .row-line {
  width: 100%;
}

.facebook-google-icon svg {
  /*margin-right: 16px;
  margin-left: -8px;*/
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
}

.login-from-facebook-google .trans-button
{
  padding-left: 60px;
}

.login-from-facebook-google .trans-button
{
  position: relative;
}

.login-from-facebook-google {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-from-facebook-google > div
{
  margin: 0 10px;
}

.general-form-wrapper .logo-block
{
  text-align: center;
  margin-bottom: 50px;
}

.general-form-wrapper .ul-tabs-login
{
  padding-left: 0;
}

.general-form-wrapper .ul-tabs-login li a
{
  font-size: 15px;
  line-height: 15px;
  padding: 10px 30px 14px;
}

.login-form-card {

  background: #2b2b2b;
  max-width: 465px;
  width: 100%;
  border-radius: 5px;
  padding: 40px;
  margin: 0 auto 85px;
}

.login-form-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

.login-form-container .row-line {
  padding-top: 20px;
}

.login-form-container label {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  padding-left: 20px;
  display: block;
  font-size: 11px;
  line-height: 97.52%;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #737373;
}

.login-form-container .btn-block {
  text-align: center;
  padding: 40px 0 0;
}

.login-form-container .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.check-box {
  display: block;
  margin-top: 20px;
}

.check-box-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  width: 155px;
}

.check-box-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
}

.check-box .text-block {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;

}

/*todo this styles for switch button must be in switch button component*/

.login-form-container .button-switch {
  height: 24px !important;
  position: relative;
  width: 60px !important;
}

.login-form-container .button-switch .lbl-on,
.login-form-container .button-switch .lbl-off {
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

.login-form-container .button-switch .lbl-on {
  opacity: 0;
  right: 9px;
  top: 8px;
}

.login-form-container .button-switch .lbl-off {
  padding: 0;
  left: 9px;
  top: 8px;
  color: #737373;
}

.login-form-container .button-switch .switch {
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

.login-form-container .button-switch .switch:before,
.login-form-container .button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.login-form-container .button-switch .switch:before {
  border-radius: 1.25em;
  background: #737373;
  height: 24px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 60px;
}

.login-form-container .button-switch .switch:after {
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

.login-form-container .button-switch .switch:checked:after {
  transform: translate(-32px, 0);
  opacity: 1;
}

.login-form-container .button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.login-form-container .button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.login-form-container .button-switch .switch:checked:before {
  background: #333333;
}

.login-form-container .button-switch .switch:checked:before {
  background: #E52525;
}

.general-form-wrapper .hr-block-line
{
  display: flex;
}

footer
{
  width: 100%;
  flex-shrink: 0;
}

footer ul
{
  display: flex;
  justify-content: center;
  padding-left: 0;
  padding-bottom: 30px;
}

footer ul li a
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #737373;
  margin-left: 10px;
  margin-right: 10px;
}

footer ul li a:hover
{
  color: #B2B2B2;
}

.black
{
  display: block;
}

.white
{
  display: none;
}

.light-theme .general-form-wrapper
{
  background: #F7F6FB;
}

.light-theme .login-form-card,
.light-theme .general-form-wrapper .hr-block span
{
  background: #ffffff;
}

.light-theme .red-button:hover,
.light-theme .red-button:active
{
  background: #F7F6FB;
}

.light-theme .general-form-wrapper .ul-tabs-login li a
{
  color: #989898;
}

.light-theme .general-form-wrapper .ul-tabs-login li a.nuxt-link-active
{
  color: #000000;
}

.light-theme .login-from-facebook-google .trans-button
{
  background: #F7F6FB;
  border: 1px solid #D4D4D4;
  color: #989898;
}

.light-theme .login-from-facebook-google .trans-button:hover
{
  border-color: #000000;
  color: #000000;
}

.light-theme .facebook-google-icon svg path
{
  fill: #989898;
}

.light-theme .login-from-facebook-google .trans-button:hover .facebook-google-icon svg path
{
  fill: #000000;
}

.light-theme .black
{
  display: none;
}

.light-theme .white
{
  display: block;
}
</style>
