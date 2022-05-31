<template>
  <div class="login-history">
    <div v-on="handleScroll()" />
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>IP</th>
          <th>Browser</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in historyList"
          :key="index"
        >
          <td>{{ safeGetter(item, 'attributes.time') }}</td>
          <td>{{ safeGetter(item, 'attributes.last_ip') }}</td>
          <td>{{ safeGetter(item, 'attributes.browser') }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="viewLoader" class="loader">
      <div class="scroll-anim" />
    </div>
  </div>
</template>
<script>
import get from 'lodash/get'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('login-history')
export default {
  name: 'TableLoginHistory',
  props: {
    historyList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters([
      'GET_CAN_VIEW_LOAD_MORE_BUTTON',
      'GET_CURRENT_PAGE',
      'IS_ALL_DATA_IN_STORE'
    ]),
    canVueLoadMoreButtonAndAllDataNotInStore () {
      return !this.IS_ALL_DATA_IN_STORE && this.GET_CAN_VIEW_LOAD_MORE_BUTTON
    },
    viewLoader () {
      return !this.IS_ALL_DATA_IN_STORE
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    ...mapActions([
      'LOGIN_HISTORY_LOAD_MORE'
    ]),
    safeGetter (item, key) {
      return get(item, key, '')
    },
    handleScroll () {
      if (process.client) {
        const obj = document.querySelector('.scroll-anim')
        if (obj != null) {
          const { top } = obj.getBoundingClientRect()
          const height = document.documentElement.clientHeight
          if (top < height && top > 0) {
            if (!this.IS_ALL_DATA_IN_STORE && this.GET_CAN_VIEW_LOAD_MORE_BUTTON) {
              this.LOGIN_HISTORY_LOAD_MORE()
            }
          }
        }
      }
    }
  }
}
</script>
<style>
.login-history table
{
  width: 100%;
}

.login-history table tr th:first-child
{
  width: 30%;
}

.login-history table tr th
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  text-align: left;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.login-history table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  height: 60px;
  cursor: default !important;
}

.login-history table tr td span
{
  color: #FFFFFF;
}

.login-history table tr td .status-block
{
  display: flex;
  align-items: center;
}

.login-history table tr td .status-block > div:first-child
{
  margin-right: 5px;
}

.login-history table tr td .status-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 4px;
}

.login-history table tr td .status-block p.statusAccepted
{
  color: #8DC640;
}

.login-history table tr td .status-block p.statusNotConfirmed
{
  color: #D2AC75;
  margin-right: 10px;
}

.login-history table tr td .status-block p.statusRejected
{
  color: #E52525;
}

.login-history table tr td .status-block .trans-button
{
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
  padding: 9px 20px 7px;
}

.login-history table tr td i
{
  font-style: normal;
}

.login-history table tr td:nth-child(5n) span
{
  color: #ffffff;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.loader {
  margin: 60px 0;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(250,250,250, 0.2);
  border-right: 1.1em solid rgba(250,250,250, 0.2);
  border-bottom: 1.1em solid rgba(250,250,250, 0.2);
  border-left: 1.1em solid #fafafa;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.main-wrapper.light-theme .login-history table tr th
{
  border-color: #D4D4D4;
  background: #ffffff;
}
</style>
