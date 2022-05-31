<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view wire-transfer-page">
        <h1>Finance</h1>
        <sub-menu />
        <h3>Bank wire transfer / <span>Deposit</span></h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="card-block-wrap">
              <div class="description-block">
                <div class="img-block">
                  <icBankWireTransfer />
                </div>
                <div class="text-block">
                  <p>Tifia will refund all fees for deposits</p>
                </div>
              </div>

              <div class="row-line-block">
                <div v-for="row in WIRE_TRANSFER_PAYMENT_DETAILS" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>

              <h4>Recipient info</h4>
              <div class="row-line-block-black">
                <div v-for="row in WIRE_TRANSFER_RECIPIENT_INFO" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>

              <h4>Financial institution information</h4>
              <div class="row-line-block-black">
                <div v-for="row in WIRE_TRANSFER_RECIPIENT_INFO" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>

              <h4>Payment information</h4>
              <div class="row-line-block-black">
                <div v-for="row in WIRE_TRANSFER_PAYMENT_INFORMATION" :key="row.title" class="col-line">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
              </div>

              <div class="btn-block">
                <NuxtLink to="/deposit/index" class="block-card">
                  <default-button
                    :type="'red-button'"
                    :label="'Download pdf'"
                  />
                </NuxtLink>
              </div>
            </div>
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
import icBankWireTransfer from '../../../assets/icons/bank-wire-transfer.svg'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('finance')
export default {
  components: {
    icBankWireTransfer,
    'sub-menu': SubMenu,
    'default-button': DefaultButton,
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
      'WIRE_TRANSFER_PAYMENT_DETAILS',
      'WIRE_TRANSFER_RECIPIENT_INFO',
      'WIRE_TRANSFER_FINANCIAL_INFORMATION',
      'WIRE_TRANSFER_PAYMENT_INFORMATION'
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

.finance-page.finance-page-view h3
{
  color: #B2B2B2;
}

.finance-page.finance-page-view h3 span
{
  color: #ffffff;
}

.finance-page.finance-page-view h3 a
{
  color: #B2B2B2;
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

.wire-transfer-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.wire-transfer-page .left-parts
{
  width: 65%;
}

.wire-transfer-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 0;
}

.wire-transfer-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #989898;
}

.wire-transfer-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.wire-transfer-page .card-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.wire-transfer-page h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.wire-transfer-page .card-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}

.wire-transfer-page .card-block-wrap .description-block .img-block
{
  margin-right: 20px;
}

.wire-transfer-page .card-block-wrap .description-block
{
  width: 100%;
}

.wire-transfer-page .card-block-wrap .description-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
}

.wire-transfer-page .card-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.wire-transfer-page .card-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.wire-transfer-page .card-block-wrap .form-card .col-line label
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

.wire-transfer-page .card-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.wire-transfer-page .card-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.wire-transfer-page .card-block-wrap .btn-block
{
  text-align: center;
}

.wire-transfer-page .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.wire-transfer-page .red-button
{
  min-width: 144px;
}

.wire-transfer-page .row-line-block
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.wire-transfer-page .row-line-block .col-line
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.wire-transfer-page .row-line-block .col-line p,
.wire-transfer-page .row-line-block-black .col-line p
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

.wire-transfer-page .row-line-block .col-line span,
.wire-transfer-page .row-line-block-black .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
  max-width: 300px;
  display: inline-block;
}

.wire-transfer-page .row-line-block .col-line:last-child,
.wire-transfer-page .row-line-block-black .col-line:last-child
{
  margin-right: 0;
}

.wire-transfer-page .row-line-block-black
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

.wire-transfer-page .row-line-block-black .trans-button
{
  padding: 6px 20px 7px;
  color: #737373;
  font-size: 12px;
  line-height: 15px;
}

.wire-transfer-page .row-line-block-black .col-line
{
  margin: 0 40px 20px 0;
}

.wire-transfer-page .row-line-block-black .col-line .btn-block-black
{
  display: inline-block;
  margin: -10px 0 -10px 10px;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3,
.main-wrapper.light-theme .wire-transfer-page .card-block-wrap .description-block p,
.main-wrapper.light-theme .wire-transfer-page .row-line-block .col-line span, .wire-transfer-page .row-line-block-black .col-line span
{
  color: #989898;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 span
{
  color: #000000;
}

.main-wrapper.light-theme .wire-transfer-page .card-block-wrap
{
  background: #ffffff;
}

.main-wrapper.light-theme .wire-transfer-page .row-line-block-black
{
  background: #EEEDF3;
}

.main-wrapper.light-theme .finance-page.finance-page-view .ul-tabs li:first-child a
{
  color: #000000 !important;
}

@media (max-width: 1500px) {
  .wire-transfer-page .card-block-wrap .form-card .row-line
  {
    display: block;
  }

  .wire-transfer-page .card-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .wire-transfer-page .right-parts
  {
    padding-left: 30px;
  }

  .wire-transfer-page .card-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
