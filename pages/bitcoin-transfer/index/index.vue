<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="bitcoin-transfer-page">
        <h1>Finance</h1>
        <sub-nemu />
        <div class="table-block">
          <table-btc-transfer :table-head="HEAD_TABLE_BTC_TRANSFER" :table-data="TABLE_BTC_TRANSFER" />
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import tableBtcTransfer from '../../../components/finance/tableBtcTransfer'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    'table-btc-transfer': tableBtcTransfer,
    HOCWithLabelAndNotifications
  },
  computed: {
    ...mapState([
      'HEAD_TABLE_BTC_TRANSFER',
      'TABLE_BTC_TRANSFER'
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

.bitcoin-transfer-page
{
  padding-bottom: 100px;
}

.bitcoin-transfer-page .table-block table thead tr th:nth-child(3),
.bitcoin-transfer-page .table-block table thead tr th:nth-child(5)
{
  color: #B2B2B2;
}

.main-wrapper.light-theme .bitcoin-transfer-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .bitcoin-transfer-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .bitcoin-transfer-page .table-block table thead tr th
{
  background: #ffffff;
}

.main-wrapper.light-theme .bitcoin-transfer-page table tr td:nth-child(5n) span
{
  color: #000000;
}

.main-wrapper.light-theme .bitcoin-transfer-page .table-block table thead tr th span,
.main-wrapper.light-theme .bitcoin-transfer-page .table-block table tbody tr td span,
.main-wrapper.light-theme .bitcoin-transfer-page .table-block table thead tr th:nth-child(3),
.main-wrapper.light-theme .bitcoin-transfer-page .table-block table thead tr th:nth-child(5)
{
  color: #989898;
}

</style>
