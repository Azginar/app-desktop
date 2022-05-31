<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-trading-history">
        <div class="back-btn-block">
          <NuxtLink to="/accounts/index">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Trading Account <span v-if="GET_LOGIN_ACCOUNT">{{ GET_LOGIN_ACCOUNT }}</span> <span v-if="GET_VALUE_SWAP_FREE" class="swap-free">Swap Free</span></h1>
        <sub-nemu :parameter-account-info="`?login=${$route.query.login}&server=${$route.query.server}`" />
        <massive-button :massive-button="massiveButton" />
        <account-trading-history :table-data="tableData" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import BackButton from '../components/back-button.vue'
import SubMenu from '../components/one-line-sub-menu'
import massiveButton from '../components/massiveButton'
import accountTradingHistory from '../components/accountTradingHistory'
import userSettingsRequest from '../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions } = createNamespacedHelpers('accounts')
export default {
  components: {
    'back-button': BackButton,
    'sub-nemu': SubMenu,
    'massive-button': massiveButton,
    'account-trading-history': accountTradingHistory,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      massiveButton: [
        {
          value: 'All'
        },
        {
          value: 'Trades'
        },
        {
          value: 'Opened orders'
        },
        {
          value: 'Closed orders'
        },
        {
          value: 'Pending orders'
        },
        {
          value: 'Balance operations'
        },
        {
          value: 'Credit operations'
        },
        {
          value: 'Rebate'
        }
      ],
      tableData: [
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        },
        {
          ticket: '50724145',
          type: 'BUY',
          symbol: 'CADJPY',
          volume: '0.01',
          openTime: '17:40:43 11.02.2020',
          openPrice: '82.501',
          sl: '0',
          tp: '0',
          closeTime: '19:02:14 11.02.2020',
          currentPrice: '82.501',
          swap: '0',
          profit: '+0.16 USD'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'GET_LOGIN_ACCOUNT',
      'GET_VALUE_SWAP_FREE'
    ])
  },
  created () {
    this.LOAD_ACCOUNT_BY_LOGIN({ query: this.$route.query })
  },
  methods: {
    ...mapActions([
      'LOAD_ACCOUNT_BY_LOGIN'
    ])
  }
}
</script>
<style>
.accounts-trading-history .ul-tabs li:last-child
{
  display: none;
}

.accounts-trading-history .back-btn-block
{
  margin-bottom: 80px;
}

.accounts-trading-history h1
{
  color: #B2B2B2;
}

.accounts-trading-history h1 span
{
  color: #ffffff;
}

.accounts-trading-history .swap-free
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

.accounts-trading-history .ul-tabs li a
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.accounts-trading-history .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.accounts-trading-history .ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.main-wrapper.light-theme .accounts-trading-history .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .accounts-trading-history .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .accounts-trading-history h1
{
  color: #989898;
}

.main-wrapper.light-theme .accounts-trading-history h1 span
{
  color: #000000;
}

.main-wrapper.light-theme .account-trading-history .setting-account-trading-history,
.main-wrapper.light-theme .account-trading-history .table-account-trading-history table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .account-trading-history .table-account-trading-history table tr th
{
  border-top: 1px solid #D4D4D4;
}

.main-wrapper.light-theme .account-trading-history .setting-account-trading-history .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .accounts-trading-history .swap-free
{
  background: #ffffff;
}

@media (max-width: 1600px) {

}

</style>
