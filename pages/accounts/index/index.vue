<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page">
        <h1>Accounts</h1>
        <sub-nemu />
        <div class="btn-block">
          <default-button
            :type="'trans-button'"
            :label="'Open trading account'"
            :click-event="gotoOpenAccountPage"
          />
        </div>
        <div v-if="isInProgress">
          Loading...
        </div>
        <div v-else>
          <div v-for="item in accountList" :key="item.name" class="table-block">
            <h3>
              {{ item.name }}
            </h3>
            <table-account-date :table-data="item.items" />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import DefaultButton from '../../../components/default-button.vue'
import tableAccountDate from '../../../components/tableAccountDate'
import { LOAD_REAL_ACCOUNT } from '../../../modules/accounts/actions-types'
import { GET_DATA_REAL_ACCOUNTS, GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS } from '../../../modules/accounts/getter-types'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'default-button': DefaultButton,
    'sub-nemu': SubMenu,
    'table-account-date': tableAccountDate,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
    await context.app.store.dispatch(`accounts/${LOAD_REAL_ACCOUNT}`)
  },
  computed: {
    accountList () {
      return this.$store.getters[`accounts/${GET_DATA_REAL_ACCOUNTS}`]
    },
    isInProgress () {
      return this.$store.getters[`accounts/${GET_LOAD_REAL_ACCOUNTS_IN_PROGRESS}`]
    }
  },
  methods: {
    gotoOpenAccountPage () {
      this.$router.push('/new-trading-account')
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

.accounts-page
{
  padding-bottom: 100px;
}

.main-wrapper.light-theme .accounts-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .accounts-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .accounts-page .table-block h3,
.main-wrapper.light-theme .accounts-page .table-block table tbody tr td:first-child span:first-child
{
  color: #000000;
}

.main-wrapper.light-theme .accounts-page .table-accounts table tr th
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
