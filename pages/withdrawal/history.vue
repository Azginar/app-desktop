<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="history-finance-page withdrawal-history">
        <h1>Finance</h1>
        <sub-nemu />
        <div class="switch-button">
          <div>
            <NuxtLink to="/deposit/history">
              <default-button
                label="Deposits history"
                type="trans-button"
              />
            </NuxtLink>
          </div>
          <div class="active">
            <NuxtLink to="/withdrawal/history">
              <default-button
                label="Withdrawals history"
                type="trans-button"
              />
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/internal-transfer/history">
              <default-button
                label="Internal transfers history"
                type="trans-button"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="table-block">
          <table-finance-history :table-head="HEAD_TABLE_WITHDRAWAL_HISTORY" :table-data="TABLE_WITHDRAWAL_HISTORY" />
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import tableFinanceHistory from '../../components/finance/tableFinanceHistory'
import userSettingsRequest from '../../utils/userSettingsRequest'
import SubMenu from '../../components/one-line-sub-menu'
import DefaultButton from '../../components/default-button'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    'table-finance-history': tableFinanceHistory,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  computed: {
    ...mapState([
      'TABLE_WITHDRAWAL_HISTORY',
      'HEAD_TABLE_WITHDRAWAL_HISTORY'
    ])
  },
  async asyncData (context) {
    await userSettingsRequest(context)
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

.withdrawal-history .ul-tabs li:nth-child(4) a
{
  border-bottom: 2px solid #E52525 !important;
  color: #ffffff !important;
}

.history-finance-page
{
  padding-bottom: 100px;
}

.history-finance-page .switch-button
{
  display: flex;
  margin: 0 -5px 30px;
}

.history-finance-page .switch-button > div
{
  padding-left: 5px;
  padding-right: 5px;
}

.history-finance-page .switch-button button
{
  font-size: 10px;
  line-height: 12px;
  padding: 9px 20px 7px;
}

.history-finance-page .switch-button .active button
{
  background: #242424;
  border-color: #242424;
}

.history-finance-page .table-block table tbody tr td:last-child
{
  color: #ffffff;
}

.withdrawal-history .table-block table thead tr th:last-child,
.withdrawal-history .table-block table thead tr th:nth-child(3)
{
  color: #B2B2B2;
}

.withdrawal-history .table-block table
{
  max-width: 706px;
}

</style>
