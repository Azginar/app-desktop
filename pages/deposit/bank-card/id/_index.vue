<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view deposit-card-page">
        <h1>Finance</h1>
        <sub-menu />
        <h3>
          <NuxtLink to="/deposit/bank-card/index">
            Bank card
          </NuxtLink> / <span>Deposit</span>
        </h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="card-block-wrap">
              <div class="description-block">
                <div class="img-block">
                  <icMasterCard />
                </div>
                <div class="text-block">
                  <h4 v-if="GET_BANK_CARD_NUMBER">
                    {{ GET_BANK_CARD_NUMBER }}
                  </h4>
                </div>
              </div>

              <div class="form-card">
                <div class="row-line">
                  <div class="col-line">
                    <label>Payment amount</label>
                    <InputWithSelect
                      :value="PAYMENT_AMOUNT_INPUT"
                      :handle-select="CHANGE_PAYMENT_AMOUNT_CURRENCY"
                      :options="PAYMENT_AMOUNT_CURRENCY"
                      :selected="PAYMENT_AMOUNT_CURRENCY_SELECTED"
                    />
                  </div>
                  <div class="col-line">
                    <SimpleSelectBlack
                      :options="TRADING_ACCOUNT"
                      :handle-select="CHANGE_TRADING_ACCOUNT"
                      :label="'Trading account'"
                      :selected="TRADING_ACCOUNT_SELECTED"
                    />
                  </div>
                </div>
                <div class="row-line">
                  <div class="col-line">
                    <label>Promo code</label>
                    <black-input
                      :value="PROMO_CODE"
                    />
                  </div>
                  <div class="col-line">
                    <div class="only-text">
                      <p>- optional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="btn-block">
                <NuxtLink to="/deposit/bank-card/index" class="block-card">
                  <default-button
                    :type="'red-button'"
                    :label="'Continue'"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="right-parts">
            <h4>Please note</h4>
            <div v-for="row in NOTE_INFORMATION" :key="row.title" class="block-text">
              <span>{{ row.title }}</span>
              <p v-html="row.value" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_BANK_CARD } from '../../../../modules/finance/mutation-types'
import userSettingsRequest from '../../../../utils/userSettingsRequest'
import SubMenu from '../../../../components/one-line-sub-menu'
import DefaultButton from '../../../../components/default-button.vue'
import icMasterCard from '../../../../assets/icons/master-card-ic.svg'
import BlackInput from '../../../../components/black-input'
import SimpleSelectBlack from '../../../../components/SimpleSelectBlack'
import HOCWithLabelAndNotifications from '../../../../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')
export default {
  components: {
    icMasterCard,
    'sub-menu': SubMenu,
    'default-button': DefaultButton,
    BlackInput,
    SimpleSelectBlack,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'PROMO_CODE',
      'NOTE_INFORMATION'
    ]),
    ...mapGetters([
      'GET_BANK_CARD_NUMBER'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_BANK_CARD',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT'
    ])
  },
  mounted () {
    this[CHANGE_BANK_CARD](this.$route.params.index)
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

.deposit-card-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.deposit-card-page .left-parts
{
  width: 65%;
}

.deposit-card-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 40px;
}

.deposit-card-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.deposit-card-page .card-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.deposit-card-page .card-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.deposit-card-page .card-block-wrap .description-block .img-block
{
  margin-right: 40px;
}

.deposit-card-page .card-block-wrap .description-block
{
  width: 100%;
}

.deposit-card-page .card-block-wrap .description-block h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  border-radius: 5px;
}

.deposit-card-page .card-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.deposit-card-page .card-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.deposit-card-page .card-block-wrap .form-card .col-line label
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

.deposit-card-page .card-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.deposit-card-page .card-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.deposit-card-page .card-block-wrap .btn-block
{
  text-align: center;
}

.deposit-card-page .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.deposit-card-page .right-parts h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.deposit-card-page .right-parts span
{
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.deposit-card-page .right-parts p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #B2B2B2;
  margin-bottom: 0;
}

.deposit-card-page .right-parts .block-text
{
  margin-bottom: 20px;
}

.main-wrapper.light-theme .deposit-card-page .card-block-wrap
{
  background: #ffffff;
}

.main-wrapper.light-theme .deposit-card-page .card-block-wrap .description-block h4,
.main-wrapper.light-theme .deposit-card-page .right-parts h4
{
  color: #000000;
}

.main-wrapper.light-theme .deposit-card-page .right-parts p,
.main-wrapper.light-theme .finance-page.finance-page-view h3 a
{
  color: #989898;
}

@media (max-width: 1500px) {
  .deposit-card-page .card-block-wrap .form-card .row-line
  {
    display: block;
  }

  .deposit-card-page .card-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .deposit-card-page .right-parts
  {
    padding-left: 30px;
  }

  .deposit-card-page .card-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
