<template>
  <div class="general-form-wrapper registration-page">
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
        <form class="login-form-container">
          <div class="row-line">
            <label>full name</label>
            <black-input
              :attribute="'full-name'"
            />
          </div>
          <div class="row-line">
            <SimpleSelectBlack
              :label="'country'"
            />
          </div>
          <div class="row-line">
            <label>phone number</label>
            <black-input
              :attribute="'phone'"
              :type="'tel'"
            />
          </div>
          <div class="row-line">
            <label>e-mail</label>
            <black-input
              :attribute="'e-mail'"
            />
          </div>
          <div class="row-line">
            <label>Set your password</label>
            <black-input-password
              :attribute="'password'"
            />
          </div>
          <div class="row-line">
            <label>Repeat your password</label>
            <black-input-password
              :attribute="'password'"
            />
          </div>
          <div class="row-line">
            <label>Referal UID</label>
            <black-input
              :attribute="'full-name'"
            />
          </div>

          <div class="hint-text">
            <p>Enter the UID of your partner here (optional)</p>
          </div>
          <div class="check-box-container">
            <div class="check-box">
              <div class="check-box-content">
                <div><switch-button :id="'remember-me'" /></div>
                <div class="text-block">
                  I have read and agree to the <span style="color: #B2B2B2;">Clients Agreement</span>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-block">
            <default-button
              :type="'red-button'"
              :label="'Registration'"
              :click-event="() => {}"
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
import OneLineSubMenuLoginRegistration from '../components/login/one-line-sub-menu-login-registration'
import DefaultButton from '../components/default-button'
import SwitchButton from '../components/switch-button'
import SimpleSelectBlack from '../components/SimpleSelectBlack'

import FacebookSVG from '../assets/icons/001-facebook.svg'
import GoogleSVG from '../assets/icons/001-google.svg'
import BlackInput from '../components/black-input'
import BlackInputPassword from '../components/black-input-password'
import logoSvg from '../assets/icons/logo.svg'
import logoBlackSvg from '../assets/icons/logo-black.svg'
export default {
  layout: 'NoLayout',
  components: {
    BlackInput,
    BlackInputPassword,
    OneLineSubMenuLoginRegistration,
    DefaultButton,
    FacebookSVG,
    GoogleSVG,
    SwitchButton,
    SimpleSelectBlack,
    logoSvg,
    logoBlackSvg
  }
}
</script>
<style>

.registration-page .hint-text {
  padding-left: 20px;
  padding-top: 10px;
  font-family: Arial,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.registration-page .tabs-login-registration {
  padding-top: 50px;
}

.registration-page .tabs-login-registration
{
  margin-top: 0;
}

.registration-page .general-form-wrapper {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  flex-direction: column
}

.registration-page .general-form-wrapper .row-line {
  width: 100%;
  padding-left: 40px;
  padding-right: 50px;
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
  background: rgb(67,67,67);
  background: linear-gradient(120deg, rgba(67,67,67,0) 0%, rgba(67,67,67,1) 50%, rgba(67,67,67,0) 100%);
}

.registration-page .login-form-container .row-line {
  padding-top: 20px;
}

.registration-page .login-form-container label {
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

.registration-page .login-form-container .btn-block {
  text-align: center;
  padding: 40px 0 0;
}

.registration-page .login-form-container .btn-block button {
  padding: 17px 40px;
  font-size: 15px;
  line-height: 16px;
}

.registration-page .check-box {
  display: block;
  margin-top: 20px;
}

.registration-page .check-box-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.registration-page .check-box-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
}

.registration-page .check-box .text-block {
  font-family: Montserrat,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  width: 300px;
  margin-right: -12px;
  text-transform: uppercase;
  color: #737373;
}

/*todo this styles for switch button must be in switch button component*/

.registration-page .button-switch {
  height: 24px;
  position: relative;
  width: 60px;
  margin-right: 10px;
}

.registration-page .button-switch .lbl-on,
.registration-page .button-switch .lbl-off {
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

.registration-page .button-switch .lbl-on {
  opacity: 0;
  right: 9px;
  top: 8px;
}

.registration-page .button-switch .lbl-off {
  padding: 0;
  left: 9px;
  top: 8px;
  color: #737373;
}

.registration-page .button-switch .switch {
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

.registration-page .button-switch .switch:before,
.registration-page .button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.registration-page .button-switch .switch:before {
  border-radius: 1.25em;
  background: #737373;
  height: 24px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 60px;
}

.registration-page .button-switch .switch:after {
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

.registration-page .button-switch .switch:checked:after {
  transform: translate(-32px, 0);
  opacity: 1;
}

.registration-page .button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.registration-page .button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.registration-page .button-switch .switch:checked:before {
  background: #333333;
}

.registration-page .button-switch .switch:checked:before {
  background: #E52525;
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
  font-family: Arial,serif;
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
