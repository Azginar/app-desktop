<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="trader-social-page trader-social-page-public">
        <div class="back-btn-block">
          <NuxtLink :to="`/provider/${GET_USER_UID_FOR_LINK}`">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>My public accounts <span>{{ functionUpperCase($route.params.account) }}</span></h1>
        <menu-no-link :tabs-menu="MASSIVE_MENU_INNER_TRADING_ACCOUNT">
          <template v-slot:overview>
            <trader-account-table :table-data-public="GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT" />
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
          </template>
          <template v-slot:investors>
            <div class="table-block">
              <table-social-trading-raiting :table-head="HEAD_SOCIAL_INVESTORS" :table-data="TABLE_SOCIAL_INVESTORS" />
            </div>
          </template>
        </menu-no-link>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import BackButton from '../../../components/back-button'
import TraderAccountTable from '../../../components/socialTrading/traderAccountTable'
import tableSocialTradingRaiting from '../../../components/socialTrading/tableSocialTradingRaiting'
import massiveButton from '../../../components/massiveButton'
import { CHANGE_ACCOUNT_SOCIAL_TRADER } from '../../../modules/socialTrading/mutation-types'
import graphSocial1 from '../../../assets/icons/graph-social-1.svg'
import graphSocial2 from '../../../assets/icons/graph-social-2.svg'
import graphSocial3 from '../../../assets/icons/graph-social-3.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
import menuNolink from '../../../components/menu-no-link'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  components: {
    'back-button': BackButton,
    'massive-button': massiveButton,
    'trader-account-table': TraderAccountTable,
    graphSocial1,
    graphSocial2,
    graphSocial3,
    plusIc,
    minusIc,
    'menu-no-link': menuNolink,
    'table-social-trading-raiting': tableSocialTradingRaiting,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'MASSIVE_MENU_INNER_TRADING_ACCOUNT',
      'HEAD_SOCIAL_INVESTORS',
      'TABLE_SOCIAL_INVESTORS',
      'BUTTON_GRAPH'
    ]),
    ...mapGetters([
      'GET_TRADER_ACCOUNT_INFO_BY_ACCOUNT',
      'GET_USER_UID_FOR_LINK'
    ])
  },
  methods: {
    ...mapActions([
      CHANGE_ACCOUNT_SOCIAL_TRADER
    ]),
    functionUpperCase (str) {
      return str.toUpperCase()
    }
  },
  mounted () {
    this[CHANGE_ACCOUNT_SOCIAL_TRADER](this.$route.params.account)
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

.trader-social-page-public .trader-profile-table .black-block .btn-block
{
  display: flex;
}

.trader-social-page-public .table-block
{
  max-width: 1130px;
}

.trader-social-page-public .table-block table thead tr th:first-child,
.trader-social-page-public .table-block table tbody tr td:nth-child(5),
.trader-social-page-public .table-block table thead tr th:nth-child(7),
.trader-social-page-public .table-block table tbody tr td:nth-child(7)
{
  color: #B2B2B2;
}

.main-wrapper.light-theme .trader-social-page-public h1,
.main-wrapper.light-theme .trader-social-page h5,
.main-wrapper.light-theme .trader-social-page-public .ul-tabs-inner li a,
.main-wrapper.light-theme .table-social-trading-raiting table tbody tr td:nth-child(2),
.main-wrapper.light-theme .table-social-trading-raiting table tbody tr td:nth-child(6),
.main-wrapper.light-theme .trader-social-page-public .table-block table thead tr th:first-child,
.main-wrapper.light-theme .trader-social-page-public .table-block table tbody tr td:nth-child(5),
.main-wrapper.light-theme .trader-social-page-public .table-block table thead tr th:nth-child(7),
.main-wrapper.light-theme .trader-social-page-public .table-block table tbody tr td:nth-child(7),
.main-wrapper.light-theme .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(2),
.main-wrapper.light-theme .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(5),
.main-wrapper.light-theme .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(6)
{
  color: #989898;
}

.main-wrapper.light-theme .trader-social-page-public h1 span,
.main-wrapper.light-theme .trader-social-page-public h4
{
  color: #000000;
}

.main-wrapper.light-theme .trader-social-page-public .ul-tabs-inner li a.active,
.main-wrapper.light-theme .table-social-trading-raiting .avatar-block .nickname[data-v-51c2231c]
{
  color: #000000;
}

.main-wrapper.light-theme .table-social-trading-raiting table tr th
{
  background: #ffffff;
}

@media (max-width: 1500px) {

}

@media (max-width: 1250px) {
  .trader-social-page-public .avatar-block
  {
    display: block !important;
  }

  .trader-social-page-public .avatar-block .avatar
  {
    margin-bottom: 10px;
  }
}

@media (max-width: 1200px) {
  .trader-social-page-public .avatar-block .avatar
  {
    display: none !important;
  }

  .trader-social-page-public .table-social-trading-raiting table tr td,
  .trader-social-page-public .table-social-trading-raiting table tr th
  {
    padding-left: 5px;
    padding-right: 5px;
  }
}

</style>
