<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page accounts-page-demo">
        <h1>Accounts</h1>
        <sub-menu />
        <div class="btn-block">
          <default-button
            :type="'trans-button'"
            :label="'Open demo account'"
            :click-event="() => {}"
          />
        </div>
        <div v-if="isInProgressDemo">
          Loading...
        </div>
        <div v-else>
          <div v-for="item in accountListDemo" :key="item.name" class="table-block">
            <h3>
              {{ item.name }}
            </h3>
            <table-account-date :table-data="item.items" :type-demo-account="true" />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import DefaultButton from '../../components/default-button.vue'
import tableAccountDate from '../../components/tableAccountDate'
import { LOAD_DEMO_ACCOUNT } from '../../modules/accounts/actions-types'
import {
  GET_DATA_DEMO_ACCOUNTS,
  GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS
} from '../../modules/accounts/getter-types'
import userSettingsRequest from '../../utils/userSettingsRequest'
import SubMenu from '../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'default-button': DefaultButton,
    'sub-menu': SubMenu,
    'table-account-date': tableAccountDate,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
    await context.app.store.dispatch(`accounts/${LOAD_DEMO_ACCOUNT}`)
  },
  computed: {
    accountListDemo () {
      return this.$store.getters[`accounts/${GET_DATA_DEMO_ACCOUNTS}`]
    },
    isInProgressDemo () {
      return this.$store.getters[`accounts/${GET_LOAD_DEMO_ACCOUNTS_IN_PROGRESS}`]
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

.accounts-page-demo
{
  padding-bottom: 100px;
}

.main-wrapper.light-theme .accounts-page-demo .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .accounts-page-demo .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .accounts-page-demo .table-block h3,
.main-wrapper.light-theme .accounts-page-demo .table-block table tbody tr td:first-child span:first-child
{
  color: #000000;
}

.main-wrapper.light-theme .accounts-page-demo .table-accounts table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .table-block table thead tr th span,
.main-wrapper.light-theme .table-block table tbody tr td span
{
  color: #737373;
}
</style>
