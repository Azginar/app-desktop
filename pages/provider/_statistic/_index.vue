<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="trader-social-page provider-social-page">
        <h1><span>Social Trading</span></h1>
        <sub-menu :link-uid="GET_USER_UID" />
        <account-trader :accounts-trader="ACCOUNT_SOCIAL_TRADER" />
        <trader-profile-table :avatar-trader="GET_USER_BADGE_INFO.avatar" :table-data-public="GENERAL_INFORMATION_TRADER" />
        <h4>Summary statistics</h4>
        <massive-button :massive-button="BUTTON_GRAPH" />
        <div class="graph-block">
          <h5>Profitability</h5>
          <div class="graph-img">
            <graphSocial1 />
          </div>
        </div>
        <div class="graph-info">
          <div class="left-side">
            <h5>Equity / balance</h5>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="line" /><span>Balance</span></li>
              <li><i class="line-dashed" /><span>Equity</span></li>
              <li><plusIc /><span>Deposit</span></li>
              <li><minusIc /><span>Withdrawal</span></li>
            </ul>
          </div>
        </div>
        <div class="graph-img">
          <graphSocial2 />
        </div>
        <div class="graph-block">
          <h5>Deposit utilization rate</h5>
          <div class="graph-img">
            <graphSocial3 />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import traderProfileTable from '../../../components/socialTrading/traderProfileTable'
import accountTrader from '../../../components/socialTrading/accountTrader'
import massiveButton from '../../../components/massiveButton'
import graphSocial1 from '../../../assets/icons/graph-social-1.svg'
import graphSocial2 from '../../../assets/icons/graph-social-2.svg'
import graphSocial3 from '../../../assets/icons/graph-social-3.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('socialTrading')
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  components: {
    'sub-menu': SubMenu,
    'massive-button': massiveButton,
    'trader-profile-table': traderProfileTable,
    'account-trader': accountTrader,
    graphSocial1,
    graphSocial2,
    graphSocial3,
    plusIc,
    minusIc,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'ACCOUNT_SOCIAL_TRADER',
      'BUTTON_GRAPH',
      'GENERAL_INFORMATION_TRADER'
    ]),
    ...mapGetters([
      'GET_USER_BADGE_INFO',
      'GET_USER_UID'
    ])
  }
}
</script>
<style>
.trader-social-page .ul-tabs li a.nuxt-link-exact-active
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.trader-social-page .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.trader-social-page .ul-tabs li a
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.trader-social-page .back-btn-block
{
  margin-bottom: 80px;
}

.trader-social-page h1
{
  color: #B2B2B2;
}

.trader-social-page h1 span
{
  color: #ffffff;
}

.trader-social-page h4
{
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  padding-bottom: 18px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.trader-social-page .massive-button
{
  margin-bottom: 60px;
}

.trader-social-page .graph-block
{
  margin-bottom: 68px;
}

.trader-social-page h5
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 25px;
}

.trader-social-page
{
  padding-bottom: 120px;
}

.trader-social-page .graph-info
{
  display: flex;
  justify-content: space-between;
}

.trader-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.trader-social-page .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.trader-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.trader-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.trader-social-page .graph-info .right-side ul li span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.trader-social-page .graph-info .right-side ul li .line
{
  width: 30px;
  height: 1px;
  margin-right: 5px;
  margin-bottom: 1px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.trader-social-page .graph-info .right-side ul li .line-dashed
{
  width: 30px;
  height: 1px;
  margin-bottom: 1px;
  background: transparent;
  margin-right: 5px;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  display: inline-block;
  vertical-align: middle;
}

.trader-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.trader-social-page .graph-img
{
  margin-bottom: 60px;
}

.trader-social-page .graph-img svg
{
  max-width: 100%;
  height: auto;
}

.trader-profile-trader .black-block .btn-block
{
  display: flex;
}

.provider-social-page .black-block .btn-block
{
  display: flex !important;
}

.main-wrapper.light-theme .provider-social-page .ul-tabs li a.nuxt-link-exact-active
{
  color: #000000 !important;
}

.main-wrapper.light-theme .provider-social-page .ul-tabs li a
{
  color: #989898 !important;
}

.main-wrapper.light-theme .provider-social-page h1 span,
.main-wrapper.light-theme .provider-social-page .account-social h3,
.main-wrapper.light-theme .provider-social-page h4
{
  color: #000000;
}

.main-wrapper.light-theme .provider-social-page h4
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .provider-social-page .account-social h3
{
  border-color: #D4D4D4;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

}

</style>
