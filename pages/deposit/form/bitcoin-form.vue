<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view bitcoin-page">
        <h1>Finance</h1>
        <sub-menu />
        <h3>Bitcoin transfer BTC / <span>Deposit</span></h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="card-block-wrap">
              <div class="description-block">
                <div class="img-block">
                  <icBitcoin />
                </div>
                <div class="text-block">
                  <p>Tifia will refund all fees for deposits</p>
                </div>
              </div>

              <div class="row-line-block">
                <div v-for="row in BITCOIN_PAYMENT_DETAILS" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>

              <div class="row-line-block-black">
                <div v-for="row in BITCOIN_PAYMENT_DETAILS_MORE_INFO" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span v-if="isNotPaymentCodeUndefined(row.paymentCode)" id="copyText">{{ row.paymentCode }}</span>
                  <span v-else>{{ row.value }}</span>
                  <div v-if="isNotButtonFieldUndefined(row.button)" class="btn-block-black">
                    <default-button
                      :type="'trans-button'"
                      :label="row.button"
                      :click-event="handleCopy"
                    />
                  </div>
                </div>
              </div>

              <div class="form-card">
                <div class="row-line">
                  <div class="col-line">
                    <label>Specify the bitcoin transaction ID</label>
                    <black-input
                      :value="BITCOIN_ID"
                    />
                  </div>
                  <div class="col-line">
                    <div class="only-text">
                      <p>A transaction shall be confirmed at least three times.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="btn-block">
                <NuxtLink to="/deposit/index" class="block-card">
                  <default-button
                    :type="'red-button'"
                    :label="'Ok'"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="right-parts">
            <p><i>Due to high volatility of bitcoin, the company reserves the right to credit the funds on trading account at the exchange rate actual at the time of the third transaction confirmation.</i></p>
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
import DefaultButton from '../../../components/default-button.vue'
import icBitcoin from '../../../assets/icons/bitcoin.svg'
import BlackInput from '../../../components/black-input'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('finance')
export default {
  components: {
    icBitcoin,
    'sub-menu': SubMenu,
    'default-button': DefaultButton,
    BlackInput,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PROMO_CODE',
      'BITCOIN_WALLET',
      'BITCOIN_PAYMENT_DETAILS',
      'BITCOIN_PAYMENT_DETAILS_MORE_INFO',
      'BITCOIN_ID'
    ]),
    ...mapGetters([
      'GET_ELECTRONIC_SYSTEM'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT',
      'CHANGE_ELECTRONIC_SYSTEM'
    ]),
    isParametrBtc (parametr) {
      return parametr === 'btc'
    },
    isNotButtonFieldUndefined (button) {
      return button !== undefined
    },
    isNotPaymentCodeUndefined (paymentCode) {
      return paymentCode !== undefined
    },
    handleCopy () {
      const copyTextContainer = document.getElementById('copyText')
      const range = document.createRange()
      range.selectNode(copyTextContainer)
      window.getSelection().addRange(range)
      try {
        document.execCommand('copy')
      } catch (err) {
        console.log('Can`t copy')
      }
      window.getSelection().removeAllRanges()
    }
  }
}
</script>
<style>
.ul-tabs li a,
.finance-page.finance-page-view .ul-tabs li:first-child a
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

.finance-page
{
  padding-bottom: 80px;
}

.finance-page.finance-page-view h3,
.finance-page.finance-page-view h3 a
{
  color: #B2B2B2;
}

.finance-page.finance-page-view h3 span
{
  color: #ffffff;
}

.finance-page h3
{
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid #484848;
  font-weight: 600;
  margin-bottom: 30px;
}

.finance-page h3 span
{
  color: #B2B2B2;
}

.bitcoin-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.bitcoin-page .left-parts
{
  width: 65%;
}

.bitcoin-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 0;
}

.bitcoin-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #989898;
}

.bitcoin-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.bitcoin-page .card-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.bitcoin-page .card-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}

.bitcoin-page .card-block-wrap .description-block .img-block
{
  margin-right: 20px;
}

.bitcoin-page .card-block-wrap .description-block
{
  width: 100%;
}

.bitcoin-page .card-block-wrap .description-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
}

.bitcoin-page .card-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.bitcoin-page .card-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.bitcoin-page .card-block-wrap .form-card .col-line label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
}

.bitcoin-page .card-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.bitcoin-page .card-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.bitcoin-page .card-block-wrap .btn-block
{
  text-align: center;
}

.bitcoin-page .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.bitcoin-page .red-button
{
  min-width: 144px;
}

.bitcoin-page .row-line-block
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.bitcoin-page .row-line-block .col-line
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.bitcoin-page .row-line-block .col-line p,
.bitcoin-page .row-line-block-black .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.bitcoin-page .row-line-block .col-line span,
.bitcoin-page .row-line-block-black .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #B2B2B2;
}

.bitcoin-page .row-line-block .col-line:last-child,
.bitcoin-page .row-line-block-black .col-line:last-child
{
  margin-right: 0;
}

.bitcoin-page .row-line-block-black
{
  background: #1B1B1B;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 20px 20px 0;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.bitcoin-page .row-line-block-black .trans-button
{
  padding: 6px 20px 7px;
  color: #737373;
  font-size: 12px;
  line-height: 15px;
}

.bitcoin-page .row-line-block-black .col-line
{
  margin: 0 40px 20px 0;
}

.bitcoin-page .row-line-block-black .col-line .btn-block-black
{
  display: inline-block;
  margin: -10px 0 -10px 10px;
}

.main-wrapper.light-theme .finance-page.finance-page-view .ul-tabs li:first-child a
{
  color: #000000;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 a,
.main-wrapper.light-theme .finance-page.finance-page-view h3,
.main-wrapper.light-theme .bitcoin-page .card-block-wrap .description-block p,
.main-wrapper.light-theme .bitcoin-page .row-line-block .col-line span,
.main-wrapper.light-theme .bitcoin-page .row-line-block-black .col-line span
{
  color: #989898;
}

.bitcoin-page .card-block-wrap
{
  background: #ffffff;
}

.main-wrapper.light-theme .bitcoin-page .row-line-block-black
{
  background: #EEEDF3;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 span
{
  color: #000000;
}

.main-wrapper.light-theme .finance-page.finance-page-view .ul-tabs li:first-child a
{
  color: #000000 !important;
}

@media (max-width: 1500px) {
  .bitcoin-page .card-block-wrap .form-card .row-line
  {
    display: block;
  }

  .bitcoin-page .card-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .bitcoin-page .right-parts
  {
    padding-left: 30px;
  }

  .bitcoin-page .card-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
