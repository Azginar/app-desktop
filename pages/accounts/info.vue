<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page-info" :class="{ demo: typeDemo(accountType) }">
        <div class="back-btn-block">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1 v-if="typeDemo(accountType)">
          Demo Account <span v-if="accountLogin">{{ accountLogin }}</span> <span v-if="accountSwapFree" class="swap-free">Swap Free</span>
        </h1>
        <h1 v-else>
          Trading Account <span v-if="accountLogin">{{ accountLogin }}</span> <span v-if="accountSwapFree" class="swap-free">Swap Free</span>
        </h1>
        <sub-nemu :parameter-account-info="`?login=${accountLoginForUrl}&server=${accountServerForUrl}`" />
        <table-account-info v-if="typeDemo(accountType)" :account="accountGeneralInformation" :type-demo-account="true" />
        <table-account-info v-else :account="accountGeneralInformation" />
        <social-trading-info v-if="typeSocialTrader(accountType)" :social-account="accountSocialTradingInformation" />
        <div class="two-parts">
          <div class="left-parts">
            <h3>Statistics</h3>
            <massive-button :massive-button="massiveButton" />
            <h4>Profitability</h4>
            <div class="graph-img">
              <GraphImgAccount1 />
            </div>
            <div class="graph-info">
              <div class="left-side">
                <h4>Equity / balance</h4>
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
              <GraphImgAccount2 />
            </div>
            <h4>Deposit utilization rate</h4>
            <div class="graph-img">
              <GraphImgAccount3 />
            </div>
          </div>
          <div class="right-parts">
            <finance-info-account v-if="typeDemo(accountLogin)" :finance-info="accountFinanceInformation" />
            <finance-info-account v-else :finance-info="accountFinanceInformation" />
            <security-info-account v-if="!typeDemo(accountLogin)" :secure-info="accountSecurityInformation" />
            <social-trading-account v-if="typeSocialTrader(accountLogin)" />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import BackButton from '@/components/back-button.vue'
import SubMenu from '@/components/one-line-sub-menu'
import tableAccountInfo from '@/components/tableAccountInfo'
import massiveButton from '@/components/massiveButton'
import financeInfoAccount from '@/components/financeInfoAccount'
import securityInfoAccount from '@/components/securityInfoAccount'
import socialTradingAccount from '@/components/socialTradingAccount'
import socialTradingInfo from '@/components/socialTradingInfo'
import GraphImgAccount1 from '@/assets/icons/graph-img-account-1.svg'
import GraphImgAccount2 from '@/assets/icons/graph-img-account-2.svg'
import GraphImgAccount3 from '@/assets/icons/graph-img-account-3.svg'
import { LOAD_ACCOUNT_BY_LOGIN } from '@/modules/accounts/actions-types'
import {
  GET_DATA_GENERAL_ACCOUNTS,
  GET_LOGIN_ACCOUNT,
  GET_VALUE_SWAP_FREE,
  GET_DATA_FINANCE_ACCOUNTS,
  GET_TYPE_ACCOUNT,
  GET_SOCIAL_ACCOUNT_INFO,
  GET_MASSIVE_BUTTON,
  GET_SECURITY_INFO_ACCOUNT,
  GET_LOGIN_ACCOUNT_FOR_URL,
  GET_SERVER_ACCOUNT_FOR_URL
} from '@/modules/accounts/getter-types'
import plusIc from '@/assets/icons/plus-ic.svg'
import minusIc from '@/assets/icons/minus-ic.svg'
import userSettingsRequest from '@/utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
export default {
  components: {
    'back-button': BackButton,
    'sub-nemu': SubMenu,
    'table-account-info': tableAccountInfo,
    'massive-button': massiveButton,
    'finance-info-account': financeInfoAccount,
    'security-info-account': securityInfoAccount,
    'social-trading-account': socialTradingAccount,
    'social-trading-info': socialTradingInfo,
    GraphImgAccount1,
    GraphImgAccount2,
    GraphImgAccount3,
    plusIc,
    minusIc,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
    await context.store.dispatch(`accounts/${LOAD_ACCOUNT_BY_LOGIN}`, { query: context.query })
  },
  computed: {
    accountGeneralInformation () {
      return this.$store.getters[`accounts/${GET_DATA_GENERAL_ACCOUNTS}`]
    },
    accountLogin () {
      return this.$store.getters[`accounts/${GET_LOGIN_ACCOUNT}`]
    },
    accountSwapFree () {
      return this.$store.getters[`accounts/${GET_VALUE_SWAP_FREE}`]
    },
    accountFinanceInformation () {
      return this.$store.getters[`accounts/${GET_DATA_FINANCE_ACCOUNTS}`]
    },
    accountType () {
      return this.$store.getters[`accounts/${GET_TYPE_ACCOUNT}`]
    },
    accountSocialTradingInformation () {
      return this.$store.getters[`accounts/${GET_SOCIAL_ACCOUNT_INFO}`]
    },
    massiveButton () {
      return this.$store.getters[`accounts/${GET_MASSIVE_BUTTON}`]
    },
    accountSecurityInformation () {
      return this.$store.getters[`accounts/${GET_SECURITY_INFO_ACCOUNT}`]
    },
    accountLoginForUrl () {
      return this.$store.getters[`accounts/${GET_LOGIN_ACCOUNT_FOR_URL}`]
    },
    accountServerForUrl () {
      return this.$store.getters[`accounts/${GET_SERVER_ACCOUNT_FOR_URL}`]
    }
  },
  methods: {
    typeDemo (type) {
      return ['demo-cent', 'demo-start', 'demo-classic', 'demo-pro', 'demo-crypto', 'mt5-demo-classic'].includes(type)
    },
    typeSocialTrader (type) {
      return ['master'].includes(type)
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
.accounts-page-info.demo .ul-tabs li
{
  display: none;
}

.accounts-page-info .ul-tabs li:last-child
{
  display: none;
}

.accounts-page-info.demo .ul-tabs li:first-child
{
  display: block;
}

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
.main-wrapper.light-theme .main-info-account .black-block .table-row button:hover,
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

.main-wrapper.light-theme .massive-button > div.active button
{
  background: #EEEDF3;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .main-info-account .black-block
{
  background: #ffffff;
  border-color: #ffffff;
}

.main-wrapper.light-theme .main-info-account .black-block .left-side .trans-button,
.main-wrapper.light-theme .main-info-account .black-block .right-side .trans-button
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .main-info-account .black-block span,
.main-wrapper.light-theme .finance-info-account .table-row .col-row span,
.main-wrapper.light-theme .accounts-page-info h4,
.main-wrapper.light-theme .security-info-account .table-row .col-row span
{
  color: #989898;
}

.main-wrapper.light-theme .accounts-page-info .two-parts h3
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .accounts-page-info .swap-free
{
  background: #ffffff;
}

@media (max-width: 1600px) {

}

</style>
