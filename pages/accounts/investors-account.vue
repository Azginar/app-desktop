<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page">
        <h1>Accounts</h1>
        <sub-nemu />
        <div class="btn-block">
          <default-button
            :type="'trans-button'"
            :label="'Open investor’s account'"
            :click-event="gotoOpenInvestorAccountPage"
          />
        </div>
        <div class="table-block">
          <h3>INVESTOR’S ACCOUNTS</h3>
          <table-investors-account-date :table-data="tableData" />
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import DefaultButton from '../../components/default-button.vue'
import tableInvestorsAccountDate from '../../components/tableInvestorsAccountDate'
import userSettingsRequest from '../../utils/userSettingsRequest'
import SubMenu from '../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'default-button': DefaultButton,
    'sub-nemu': SubMenu,
    'table-investors-account-date': tableInvestorsAccountDate,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      tableData: [
        {
          account: 'STR-6161721',
          traderName: '@Dshadow',
          traderImg: 'https://social.tifia.com/uploads/avatars/001/009/d01e50899234bfcd35ce4069720e90f3.jpg',
          traderAccount: 'STR-6161721',
          status: 'Paused by investor',
          equity: '1 250.00 USD',
          profit: '+76.42 USD'
        },
        {
          account: 'PRO-6116443',
          traderName: '@markaw',
          traderImg: 'https://social.tifia.com/uploads/avatars/005/371/4c0f64883a3958c76a08acda63c4497a.jpg',
          traderAccount: 'PRO-6161721',
          status: 'Duplicate',
          equity: '14 000.00 USD',
          profit: '+1 376.42 USD'
        },
        {
          account: 'PRO-6117889',
          traderName: 'Manager not selected',
          traderImg: '',
          traderAccount: '',
          status: 'No duplicate',
          equity: '5 335.27 USD',
          profit: ''
        }
      ]
    }
  },
  methods: {
    gotoOpenInvestorAccountPage () {
      this.$router.push('/sync-trading/investors-account')
    }
  }
}
</script>
<style>
.main-wrapper.light-theme .accounts-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .accounts-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .accounts-page .table-block h3,
.main-wrapper.light-theme .accounts-page .table-block table tbody tr td:first-child span:first-child,
.main-wrapper.light-theme .accounts-page .table-investors-accounts table tr td span
{
  color: #000000;
}

.main-wrapper.light-theme .accounts-page .table-investors-accounts table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .accounts-page .table-investors-accounts .avatar-block .nickname
{
  color: #989898;
}

.main-wrapper.light-theme .accounts-page .table-investors-accounts table tr td i
{
  color: #737373;
}
</style>
