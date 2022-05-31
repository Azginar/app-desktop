<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page-info">
        <div class="back-btn-block">
          <NuxtLink :to="`/duplicator/${GET_USER_UID_FOR_LINK}`">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Investor’s Account <span>{{ functionUpperCase($route.params.account) }}</span></h1>
        <sub-nemu :link-account="$route.params.account" />
        <table-account-info :account="ACCOUNT_INVESTOR_INFO" />
        <social-trading-info :social-account="SOCIAL_TRADING_INFO" />
        <div class="two-parts">
          <div class="left-parts">
            <h3>Statistics</h3>
            <massive-button :massive-button="BUTTON_GRAPH" />
            <div class="graph-info">
              <div class="left-side">
                <h4>Equity / balance</h4>
              </div>
              <div class="right-side">
                <ul>
                  <li><i class="line" /><span>Balance</span></li>
                  <li><plusIc /><span>Deposit</span></li>
                  <li><minusIc /><span>Withdrawal</span></li>
                </ul>
              </div>
            </div>
            <div class="graph-img">
              <graphSocial6 />
            </div>
          </div>
          <div class="right-parts">
            <finance-info-account :title="TITLE_RIGHT_BLOCK_INVESTOR_ACCOUNT_PAGE" :finance-info="FINANCE_INFO_INVESTOR_PAGE" />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import BackButton from '../../../components/back-button.vue'
import SubMenu from '../../../components/one-line-sub-menu'
import tableAccountInfo from '../../../components/tableAccountInfo'
import massiveButton from '../../../components/massiveButton'
import financeInfoAccount from '../../../components/financeInfoAccount'
import socialTradingInfo from '../../../components/socialTradingInfo'
import graphSocial6 from '../../../assets/icons/graph-social-6.svg'
import plusIc from '../../../assets/icons/plus-ic.svg'
import minusIc from '../../../assets/icons/minus-ic.svg'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import { CHANGE_ACCOUNT_NUMBER_INVESTOR } from '../../../modules/socialTrading/mutation-types'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  components: {
    'back-button': BackButton,
    'sub-nemu': SubMenu,
    'table-account-info': tableAccountInfo,
    'massive-button': massiveButton,
    'finance-info-account': financeInfoAccount,
    'social-trading-info': socialTradingInfo,
    graphSocial6,
    plusIc,
    minusIc,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'ACCOUNT_INVESTOR_INFO',
      'SOCIAL_TRADING_INFO',
      'BUTTON_GRAPH',
      'TITLE_RIGHT_BLOCK_INVESTOR_ACCOUNT_PAGE',
      'FINANCE_INFO_INVESTOR_PAGE'
    ]),
    ...mapGetters([
      'GET_USER_UID_FOR_LINK'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_ACCOUNT_NUMBER_INVESTOR'
    ]),
    functionUpperCase (str) {
      return str.toUpperCase()
    }
  },
  mounted () {
    this[CHANGE_ACCOUNT_NUMBER_INVESTOR](this.$route.params.account)
  }
}
</script>
<style>
.accounts-page-info .back-btn-block
{
  margin-bottom: 80px;
}

.accounts-page-info h1
{
  color: #B2B2B2;
}

.accounts-page-info h1 span
{
  color: #ffffff;
}

.accounts-page-info .swap-free
{
  background: #242424;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 2px 4px 2px;
  vertical-align: top;
  margin-left: -4px;
}

.accounts-page-info .ul-tabs li a
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.accounts-page-info .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.accounts-page-info .ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.accounts-page-info .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.accounts-page-info .left-parts
{
  width: 65%;
}

.accounts-page-info .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.accounts-page-info .two-parts h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  margin-bottom: 20px;
}

.accounts-page-info h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.accounts-page-info .massive-button
{
  margin-bottom: 60px;
}

.accounts-page-info .graph-img
{
  margin-bottom: 62px;
}

.accounts-page-info .graph-img svg
{
  max-width: 100%;
  height: auto;
  display: block;
}

.accounts-page-info .graph-info
{
  display: flex;
  justify-content: space-between;
}

.accounts-page-info .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.accounts-page-info .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.accounts-page-info .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.accounts-page-info .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.accounts-page-info .graph-info .right-side ul li span
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

.accounts-page-info .graph-info .right-side ul li .line
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

.accounts-page-info .graph-info .right-side ul li .line-dashed
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

.accounts-page-info .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.main-wrapper.light-theme .accounts-page-info h1
{
  color: #989898;
}

.main-wrapper.light-theme .accounts-page-info h1 span,
.main-wrapper.light-theme .main-info-account h3,
.main-wrapper.light-theme .accounts-page-info .two-parts h3
{
  color: #000000;
}

.main-wrapper.light-theme .accounts-page-info .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .accounts-page-info .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .accounts-page-info .two-parts h3
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .finance-info-account .table-row .col-row span
{
  color: #989898;
}

@media (max-width: 1600px) {

}

</style>
