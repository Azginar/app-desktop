<template>
  <div class="main-wrapper" :class="{ 'light-theme': valueLightTheme }">
    <header class="top-section">
      <div class="right-top-menu">
        <ul>
          <li class="switch-theme" @click="switchLight">
            <light-svg v-if="!valueLightTheme" />
            <dark-svg v-else />
          </li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Live chat support</a></li>
          <li>
            <language-selector
              :language-list="languageList"
              :selected="selectedLang"
              @selectNewLang="selectLang"
            />
          </li>
        </ul>
        <div class="clear" />
      </div>
      <div class="clear" />
    </header>
    <section class="main-section">
      <div class="content-part">
        <Nuxt />
      </div>
    </section>

    <section v-if="isCanViewHeader" class="left-section">
      <div class="scrollbar-block">
        <div class="scrollbar-content">
          <user-badge-new />
          <side-menu />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { settingsRoutes } from '@/utils/constants'
import { CHANGE_LIGHT_THEME } from '@/modules/menu/mutation-types'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
import LanguageSelector from '../components/LanguageSelector'
import UserBadgeNew from '../components/UserBadgeNew'
import SideMenu from '../components/side-menu'
import LightSvg from '../assets/icons/menu/light-ic-grey.svg'
import DarkSvg from '../assets/icons/menu/dark-ic-grey.svg'

export default {
  name: 'Layout',
  middleware: ['redirect', 'check-auth', 'auth', 'switch-theme'],
  components: {
    'language-selector': LanguageSelector,
    'side-menu': SideMenu,
    'user-badge-new': UserBadgeNew,
    'light-svg': LightSvg,
    'dark-svg': DarkSvg
  },
  head () {
    return {
      bodyAttrs: {
        class: this.valueLightTheme ? 'light-body' : ''
      }
    }
  },
  data () {
    return {
      selectedLang: 'EN',
      languageList: [
        {
          title: 'EN',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/US.png'
        },
        {
          title: 'ES',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/ES.png'
        },
        {
          title: 'FR',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/FR.png'
        },
        {
          title: 'ID',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/ID.png'
        },
        {
          title: 'MS',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/MY.png'
        },
        {
          title: 'PL',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/PL.png'
        },
        {
          title: 'RU',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/RU.png'
        },
        {
          title: 'PT',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/PT.png'
        },
        {
          title: 'TH',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/TH.png'
        },
        {
          title: 'VI',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/VN.png'
        },
        {
          title: 'ZH',
          flagImage: 'https://social.tifia.com/images/flags/shiny/16/CN.png'
        }
      ],
      lightTheme: false
    }
  },
  computed: {
    isCanViewHeader () {
      const isSettingsFormRouter = settingsRoutes.includes(this.$route.path)
      return !isSettingsFormRouter
    },
    valueLightTheme () {
      return this.$store.getters[`menu/${GET_LIGHT_THEME}`]
    }
  },
  methods: {
    selectLang (newLang) {
      this.selectedLang = newLang
    },
    switchLight () {
      const colorTheme = localStorage.getItem('lightTheme') === 'true'
      const newColorTheme = !colorTheme
      this.$store.commit(`menu/${CHANGE_LIGHT_THEME}`, newColorTheme)
      localStorage.setItem('lightTheme', String(newColorTheme))
      Cookie.set('lightTheme', String(newColorTheme))
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
}

:focus {
  outline: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a:active,
a:focus,
a:visited,
a:hover {
  outline: none !important;
  text-decoration: none;
}

ul li {
  list-style-type: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a img {
  border: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

.btn.focus,
.btn:focus {
  box-shadow: none;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

}

a {
  text-decoration: none;
}

body {
  color: #737373;
  font-size: 13px;
  line-height: 16px;
  position: relative;
  font-family: Montserrat,sans-serif;
}

.main-wrapper
{
  background: #333333;
  min-height: 100vh;
}

.clear {
  clear: both;
  padding: 0px !important;
  margin: 0px !important;
  width: auto !important;
  height: auto !important;
  border: 0px !important;
  float: none !important;
  background: none repeat scroll 0 0 transparent !important;
  min-height: auto !important;
}

header.top-section {
  background: transparent;
  border: none;
  position: relative;
  z-index: 3;
  left: auto;
  top: auto;
}

.top-section {
  height: 70px;
  width: 100%;
}

.top-section .right-top-menu {
  float: right;
  margin-right: 100px;
}

.top-section .switch-theme
{

}

.top-section ul {
  margin: 0;
  padding-left: 0;
  padding-top: 40px;
}

.top-section ul .switch-theme
{
  vertical-align: middle;
  cursor: pointer;
  margin-right: 20px;
}

.top-section ul .switch-theme:hover svg path
{
  fill: #ffffff;
}

.top-section ul li {
  display: inline-block;
}

.top-section ul li a,
.top-section .language-menu button {
  padding: 10px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  display: inline-block;
}

.top-section .language-menu {
  background: transparent;
  min-width: 60px;
}

.top-section .language-menu .dropdown-menu {
  min-width: auto;
  background: #242424;
}

.top-section .language-menu .language-flag {
  display: none;
}

.top-section .language-menu .dropdown-menu > li > div {
  color: #737373;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  font-family: Montserrat;
}

.top-section .language-menu .dropdown-menu > li > div:hover,
.top-section .language-menu .dropdown-menu > li > div:focus {
  background-color: transparent;
  color: #ffffff;
}

.top-section .language-menu .dropdown-menu > li {
  display: block;
  text-align: center;
  padding: 3px 0;
}

.top-section .language-menu.open button {
  box-shadow: none;
}

.top-section .language-menu button:hover {
  color: #ffffff;
}

.top-section .language-menu button {
  font-family: Montserrat;
  padding-left: 0;
  padding-right: 0;
  background: transparent;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.top-section .language-menu button .caret,
.top-section .language-menu button .language-flag {
  display: none;
}

.top-section ul li a:hover {
  color: #ffffff;
}

.left-section {
  background: #242424;
  width: 330px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1010;
}

.left-section .scrollbar-block {
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.left-section .scrollbar-block .scrollbar-content {
  overflow: scroll;
  overflow-x: hidden;
  bottom: 0;
  top: 0;
  left: 0;
  position: absolute;
  padding-bottom: 50px;
  right: -17px;
  background: #242424;
}

.main-section {
  margin-left: 330px;
}

.main-section .content-part {
  width: 100%;
  height: 100%;
  padding: 20px 120px 0;
}

.main-section h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.ul-tabs {
  margin-top: 0;
  margin-left: -10px;
  margin-bottom: 80px;
  padding-left: 0;
}

.ul-tabs li {
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs li a {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B2B2B2 !important;
  padding: 10px 10px 8px;
  border-bottom: 2px solid transparent !important;
  display: inline-block;
  cursor: pointer;
}

.ul-tabs li a:hover {
  color: #ffffff !important;
}

.ul-tabs li a.active {
  border-bottom: 2px solid #E52525 !important;
  color: #ffffff !important;
}

.accounts-page .btn-block {
  margin-bottom: 40px;
}

.table-block {
  margin-bottom: 40px;
}

.table-block h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 18px;
}

.table-block table {
  width: 100%;
  max-width: 1054px;
}

.table-block table thead tr th {
  padding: 11px 10px 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: left;
  background: rgba(36, 36, 36, 0.5);
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.table-block table thead tr th span,
.table-block table tbody tr td span {
  color: #B2B2B2;
}

.table-block table tbody tr td {
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 5px 10px;
  height: 60px;
  cursor: pointer;
}

.table-block table tbody tr td:first-child,
.table-block table thead tr th:first-child
{
  padding-left: 20px;
}

.table-block table tbody tr td:last-child,
.table-block table thead tr th:last-child
{
  padding-right: 20px;
}

.table-block table tbody tr td:first-child span:first-child {
  color: #ffffff;
  margin-right: 5px;
}

.table-block table tbody tr td .info {
  font-size: 9px;
  line-height: 100%;
  color: #B2B2B2;
  padding: 3px 4px 3px;
  display: inline-block;
  vertical-align: text-bottom;
  background: #242424;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.table-block table tbody tr td .circle {
  width: 16px;
  height: 4px;
  text-align: center;
}

.table-block table tbody tr td .circle span {
  background: #737373;
  width: 4px;
  height: 4px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.table-block table tbody tr td .circle span:before {
  position: absolute;
  content: "";
  width: 4px;
  height: 4px;
  left: -6px;
  bottom: 0;
  background: #737373;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.table-block table tbody tr td .circle span:after {
  position: absolute;
  content: "";
  width: 4px;
  height: 4px;
  right: -6px;
  bottom: 0;
  background: #737373;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.main-wrapper.light-theme
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .left-section,
.main-wrapper.light-theme .user-info-new,
.main-wrapper.light-theme .main-menu,
.main-wrapper.light-theme .left-section .scrollbar-block .scrollbar-content
{
  background: #EEEDF3;
}

.main-wrapper.light-theme .main-menu ul li a.is-active,
.main-wrapper.light-theme .main-menu ul li div.is-active,
.main-wrapper.light-theme .user-info-new h3,
.main-wrapper.light-theme .verification-account-status h3
{
  color: #000000;
}

.main-wrapper.light-theme .top-section ul .switch-theme:hover svg path
{
  fill: #000000;
}

.main-wrapper.light-theme .verification-account-status,
.main-wrapper.light-theme .verification-account-status .step
{
  background: #ffffff;
}

.main-wrapper.light-theme .verification-account-status .step,
.main-wrapper.light-theme .verification-account-status .row-status > div.active .step
{
  border: 1px solid #E3E3E3 !important;
}

.main-wrapper.light-theme .verification-account-status .row-status > div.active .step
{
  color: #8DC640 !important;
}

.main-wrapper.light-theme .verification-account-status .row-status > div .nuxt-link-active p,
.main-wrapper.light-theme .verification-account-status .row-status > div .nuxt-link-active .circle
{
  color: #000000 !important;
  border-color: #000000 !important;
}

.main-wrapper.light-theme a:hover,
.main-wrapper.light-theme .trans-button:hover
{
  color: #000000;
}

.main-wrapper.light-theme .trans-button
{
  color: #989898;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .trans-button:hover
{
  border-color: #000000;
}

.main-wrapper.light-theme .main-menu ul li a,
.main-wrapper.light-theme .main-menu ul li > div
{
  color: #737373;
}

.main-wrapper.light-theme .main-menu ul li a:hover,
.main-wrapper.light-theme .main-menu ul li > div:hover,
.main-wrapper.light-theme .top-section .language-menu button:hover,
.main-wrapper.light-theme .top-section .language-menu .dropdown-menu > li > div:hover,
.main-wrapper.light-theme .top-section .language-menu .dropdown-menu > li > div:focus,
.main-wrapper.light-theme .main-section h1
{
  color: #000000;
}

.main-wrapper.light-theme .top-section .language-menu .dropdown-menu,
.main-wrapper.light-theme .modal-container
{
  background: #ffffff;
}

.light-body
{
  background: #F7F6FB;
}

@media (max-width: 1600px) {
  .main-section .content-part
  {
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 1300px) {
  .main-section .content-part
  {
    padding-left: 30px;
    padding-right: 30px;
  }
}

</style>
