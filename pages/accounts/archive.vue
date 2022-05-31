<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page">
        <h1>Accounts</h1>
        <sub-nemu />
        <div class="table-block">
          <h3>DEMO CLASSIC</h3>
          <table-archive-account-date :table-data="tableDataArchiveClassic" />
        </div>
        <div class="table-block">
          <h3>ECN PRO</h3>
          <table-archive-account-date :table-data="tableDataArchivePro" />
        </div>
        <div class="table-block">
          <h3>START (micro)</h3>
          <table-archive-account-date :table-data="tableDataArchiveStart" />
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import tableArchiveAccountDate from '../../components/tableArchiveAccountDate'
import userSettingsRequest from '../../utils/userSettingsRequest'
import SubMenu from '../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'sub-nemu': SubMenu,
    'table-archive-account-date': tableArchiveAccountDate,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      data_source: '',
      tableDataArchiveClassic: [
        {
          account: 'CLS-6074081',
          link: '/accounts-info',
          leverage: '1:400',
          balance: '2 000.00 USD',
          credit: '0.00 USD',
          equity: '2 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        },
        {
          account: 'CLS-6074082',
          link: '/accounts-info',
          leverage: '1:400',
          balance: '0.00 USD',
          credit: '0.00 USD',
          equity: '18 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        },
        {
          account: 'CLS-6078737',
          link: '/accounts-info',
          leverage: '1:400',
          balance: '100.00 USD',
          credit: '0.00 USD',
          equity: '100.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        },
        {
          account: 'CLS-6078738',
          link: '/accounts-info',
          leverage: '1:400',
          balance: '100.00 USD',
          credit: '0.00 USD',
          equity: '100.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        }
      ],
      tableDataArchivePro: [
        {
          account: 'PRO-6087007',
          link: '/accounts-info',
          leverage: '1:100',
          balance: '2 000.00 USD',
          credit: '0.00 USD',
          equity: '2 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        },
        {
          account: 'PRO-6087010',
          link: '/accounts-info',
          leverage: '1:100',
          balance: '0.00 USD',
          credit: '0.00 USD',
          equity: '18 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        }
      ],
      tableDataArchiveStart: [
        {
          account: 'ECN-6032112',
          link: '/accounts-info',
          leverage: '1:100',
          balance: '2 000.00 USD',
          credit: '0.00 USD',
          equity: '2 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        },
        {
          account: 'STR-6087011',
          link: '/accounts-info',
          leverage: '1:100',
          balance: '0.00 USD',
          credit: '0.00 USD',
          equity: '18 000.00 USD',
          btnRest: 'Restore',
          btnDel: 'Delete'
        }
      ]
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

.main-wrapper.light-theme .accounts-archive-page table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .accounts-archive-page table thead tr th span:first-child,
.main-wrapper.light-theme .accounts-archive-page table tbody tr td span:first-child
{
  color: #989898;
}

.main-wrapper.light-theme .accounts-archive-page table thead tr th span,
.main-wrapper.light-theme .accounts-archive-page table tbody tr td span
{
  color: #737373;
}
</style>
