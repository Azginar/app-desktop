<template>
  <ul class="ul-tabs">
    <li
      v-for="link in links"
      :key="link.label"
    >
      <NuxtLink
        :to="link.link"
        :class="{'non-active-link': isNonActiveLink(link.link)}"
      >
        {{ link.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'OneLineSubMenu',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    linkUid: {
      type: String,
      default: ''
    },
    linkAccount: {
      type: String,
      default: ''
    },
    parameterAccountInfo: {
      type: String,
      default: ''
    }
  },
  data () {
    const accountsNewRoutesAndLabels = [
      { label: 'Account info', link: `/accounts/info${this.parameterAccountInfo}` },
      { label: 'Account trading history', link: `/accounts-trading-history${this.parameterAccountInfo}` },
      { label: 'History of copying', link: '/history-copying' }
    ]
    const accountsTypeNewRoutesAndLabels = [
      { label: 'Trading accounts', link: '/accounts/index' },
      { label: 'Investors accounts', link: '/accounts/investors-account' },
      { label: 'Demo accounts', link: '/accounts/demo' },
      { label: 'Archive accounts', link: '/accounts/archive' },
      { label: 'Trading terminal', link: '/terminal/index' }
    ]
    const financeTypeNewRoutesAndLabels = [
      { label: 'Deposit', link: '/deposit/index' },
      { label: 'Withdrawal', link: '/withdrawal/index' },
      { label: 'Internal transfer', link: '/internal-transfer/index' },
      { label: 'Transactions history', link: '/deposit/history' },
      { label: 'History of BTC transfer', link: '/bitcoin-transfer/index' }
    ]
    const socialTradingTypeNewRoutesAndLabels = [
      { label: 'Rating', link: '/monitoring/index' },
      { label: 'My statistics as trader', link: `/provider/${this.linkUid}` },
      { label: 'My statistics as investor', link: `/duplicator/${this.linkUid}` }
    ]
    const accountsInvestorNewRoutesAndLabels = [
      { label: 'Account info', link: `/duplicator/account/${this.linkAccount}` },
      { label: 'Account trading history', link: '/' },
      { label: 'History of copying', link: '/' }
    ]
    const affiliateTypeNewRoutesAndLabels = [
      { label: 'Overview', link: '/affiliate/index' },
      { label: 'Statistics', link: '/affiliate/statistics' },
      { label: 'Referrals', link: '/affiliate/referrals' },
      { label: 'Affiliate campaigns', link: '/affiliate/campaign' },
      { label: 'Rebate', link: '/affiliate/rebate' },
      { label: 'Promo materials', link: '/promo-materials' }
    ]
    const openAccountNewRoutesAndLabels = [
      { label: 'To trade', link: '/new-trading-account' },
      { label: 'To invest', link: '/sync-trading/investors-account' }
    ]
    const promotionsNewRoutesAndLabels = [
      { label: 'Active', link: '/bonus/active-promotions' },
      { label: 'My', link: '/bonus/my-promotions' }
    ]
    return {
      routesAndMenu: new Map()
        .set('accounts-info', accountsNewRoutesAndLabels)
        .set('accounts-trading-history', accountsNewRoutesAndLabels)
        .set('history-copying', accountsNewRoutesAndLabels)
        .set('accounts-index', accountsTypeNewRoutesAndLabels)
        .set('accounts-investors-account', accountsTypeNewRoutesAndLabels)
        .set('accounts-demo', accountsTypeNewRoutesAndLabels)
        .set('accounts-archive', accountsTypeNewRoutesAndLabels)
        .set('terminal-index', accountsTypeNewRoutesAndLabels)
        .set('deposit-index', financeTypeNewRoutesAndLabels)
        .set('deposit-id-id', financeTypeNewRoutesAndLabels)
        .set('deposit-id-id-form-form', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-index', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-add-card', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-verification-card', financeTypeNewRoutesAndLabels)
        .set('deposit-bank-card-id', financeTypeNewRoutesAndLabels)
        .set('deposit-form', financeTypeNewRoutesAndLabels)
        .set('deposit-form-wire-transfer-form', financeTypeNewRoutesAndLabels)
        .set('deposit-form-bitcoin-form', financeTypeNewRoutesAndLabels)
        .set('withdrawal-index', financeTypeNewRoutesAndLabels)
        .set('withdrawal-bank-card-id', financeTypeNewRoutesAndLabels)
        .set('withdrawal-form', financeTypeNewRoutesAndLabels)
        .set('withdrawal-id', financeTypeNewRoutesAndLabels)
        .set('internal-transfer-index', financeTypeNewRoutesAndLabels)
        .set('bitcoin-transfer-index', financeTypeNewRoutesAndLabels)
        .set('deposit-history', financeTypeNewRoutesAndLabels)
        .set('withdrawal-history', financeTypeNewRoutesAndLabels)
        .set('internal-transfer-history', financeTypeNewRoutesAndLabels)
        .set('monitoring-index', socialTradingTypeNewRoutesAndLabels)
        .set('provider-statistic', socialTradingTypeNewRoutesAndLabels)
        .set('duplicator-statistic', socialTradingTypeNewRoutesAndLabels)
        .set('duplicator-account-account', accountsInvestorNewRoutesAndLabels)
        .set('affiliate-index', affiliateTypeNewRoutesAndLabels)
        .set('affiliate-statistics', affiliateTypeNewRoutesAndLabels)
        .set('affiliate-referrals', affiliateTypeNewRoutesAndLabels)
        .set('affiliate-campaign', affiliateTypeNewRoutesAndLabels)
        .set('affiliate-rebate', affiliateTypeNewRoutesAndLabels)
        .set('promo-materials', affiliateTypeNewRoutesAndLabels)
        .set('new-trading-account', openAccountNewRoutesAndLabels)
        .set('sync-trading-investors-account', openAccountNewRoutesAndLabels)
        .set('bonus-active-promotions', promotionsNewRoutesAndLabels)
        .set('bonus-my-promotions', promotionsNewRoutesAndLabels),
      routesVSLinks: new Map()
        .set('accounts-info', `/accounts/info${this.parameterAccountInfo}`)
        .set('accounts-trading-history', `/accounts-trading-history${this.parameterAccountInfo}`)
        .set('history-copying', '/history-copying')
        .set('accounts-index', '/accounts/index')
        .set('accounts-investors-account', '/accounts/investors-account')
        .set('accounts-demo', '/accounts/demo')
        .set('accounts-archive', '/accounts/archive')
        .set('terminal-index', '/terminal/index')
        .set('deposit-index', '/deposit/index')
        .set('deposit-id-id', '/deposit/_id/id')
        .set('deposit-id-id-form-form', '/deposit/id/_id/form/_form/index')
        .set('deposit-bank-card-index', '/deposit/deposit-bank-card/index')
        .set('deposit-bank-card-add-card', '/deposit/deposit-bank-card/add-card')
        .set('deposit-bank-card-verification-card', '/deposit/deposit-bank-card/verification-card')
        .set('deposit-bank-card-id', '/deposit/deposit-bank-card/id/_index')
        .set('deposit-form', '/deposit/form')
        .set('deposit-form-wire-transfer-form', '/deposit/form/wire-transfer-form')
        .set('deposit-form-bitcoin-form', 'deposit/form/bitcoin-form')
        .set('withdrawal-index', '/withdrawal/index')
        .set('withdrawal-bank-card-id', '/withdrawal/withdrawal-bank-card/id/_index')
        .set('withdrawal-form', '/withdrawal/form')
        .set('withdrawal-id', '/withdrawal/id/_index')
        .set('internal-transfer-index', '/internal-transfer/index')
        .set('bitcoin-transfer-index', '/bitcoin-transfer/index')
        .set('deposit-history', '/deposit/history')
        .set('withdrawal-history', '/withdrawal/history')
        .set('internal-transfer-history', '/internal-transfer/history')
        .set('monitoring-index', '/monitoring/index')
        .set('provider-statistic', '/provider/statistic/_index')
        .set('duplicator-statistic', '/duplicator/statistic/_index')
        .set('duplicator-account-account', `/duplicator/account/${this.linkAccount}`)
        .set('affiliate-index', '/affiliate/index')
        .set('affiliate-statistics', '/affiliate/statistics')
        .set('affiliate-referrals', '/affiliate/referrals')
        .set('affiliate-campaign', '/affiliate/campaign')
        .set('affiliate-rebate', '/affiliate/rebate')
        .set('promo-materials', '/promo-materials')
        .set('new-trading-account', '/new-trading-account')
        .set('sync-trading-investors-account', '/sync-trading/investors-account')
        .set('bonus-active-promotions', '/bonus/active-promotions')
        .set('bonus-my-promotions', '/bonus/my-promotions')
    }
  },
  computed: {
    links () {
      return this.routesAndMenu.get(this.$router.currentRoute.name) || []
    }
  },
  methods: {
    isNonActiveLink (link) {
      return link !== this.routesVSLinks.get(this.$router.currentRoute.name)
    }
  }
}
</script>

<style>
    .ul-tabs
    {
      margin-top: 0;
      padding-left: 0;
      margin-left: -10px;
      margin-bottom: 80px;
    }

    .ul-tabs li
    {
      display: inline-block;
      margin-right: 10px;
    }

    .ul-tabs li a
    {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 12px;
      text-transform: uppercase;
      border-bottom: 2px solid #E52525;
      color: #ffffff;
      padding: 10px 10px 8px;
      display: inline-block;
      cursor: pointer;
    }

    .ul-tabs li a:hover
    {
      color: #ffffff;
    }

    .ul-tabs li a.non-active-link
    {
      border-bottom: 2px solid transparent;
      color: #B2B2B2;
    }
</style>
