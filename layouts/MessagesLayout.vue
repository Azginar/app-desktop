<template>
  <div class="main-wrapper main-wrapper-messages" :class="{ 'light-theme': valueLightTheme }">
    <section class="main-section">
      <Nuxt />
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
import { settingsRoutes } from '@/utils/constants'
import { GET_LIGHT_THEME } from '@/modules/menu/getter-types'
import SideMenu from '../components/side-menu'
import UserBadgeNew from '../components/UserBadgeNew'

export default {
  name: 'MessagesLayout',
  middleware: ['redirect', 'check-auth', 'auth', 'switch-theme'],
  components: {
    'side-menu': SideMenu,
    'user-badge-new': UserBadgeNew
  },
  head () {
    return {
      bodyAttrs: {
        class: this.valueLightTheme ? 'light-body' : ''
      }
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

.main-section h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.main-wrapper.light-theme .main-section
{
  background: #F7F6FB;
}

.light-body
{
  background: #F7F6FB;
}
</style>
