<template>
  <div class="finance-page finance-page-view deposit-electronic-systems">
    <h1>Finance</h1>
    <sub-menu />
    <h3>Electronic systems / Skrill / <span>Deposit</span></h3>
    <div class="two-parts">
      <div class="left-parts">
        <div class="card-block-wrap">
          <div class="description-block">
            <div class="img-block">
              <icSkrill />
            </div>
            <div class="text-block">
              <p>Tifia will refund all fees for deposits</p>
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
            <NuxtLink to="/deposit/index" class="block-card">
              <default-button
                :type="'red-button'"
                :label="'Continue'"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../utils/userSettingsRequest'
import SubMenu from '../../components/one-line-sub-menu'
import DefaultButton from '../../components/default-button.vue'
import icSkrill from '../../assets/icons/skrill-ic.svg'
import BlackInput from '../../components/black-input'
import SimpleSelectBlack from '../../components/SimpleSelectBlack'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  components: {
    icSkrill,
    'sub-menu': SubMenu,
    'default-button': DefaultButton,
    BlackInput,
    SimpleSelectBlack
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
      'PROMO_CODE'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT'
    ])
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

.deposit-electronic-systems .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.deposit-electronic-systems .left-parts
{
  width: 65%;
}

.deposit-electronic-systems .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 40px;
}

.deposit-electronic-systems h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.deposit-electronic-systems .card-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.deposit-electronic-systems .card-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.deposit-electronic-systems .card-block-wrap .description-block .img-block
{
  margin-right: 20px;
}

.deposit-electronic-systems .card-block-wrap .description-block
{
  width: 100%;
}

.deposit-electronic-systems .card-block-wrap .description-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
}

.deposit-electronic-systems .card-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.deposit-electronic-systems .card-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.deposit-electronic-systems .card-block-wrap .form-card .col-line label
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

.deposit-electronic-systems .card-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.deposit-electronic-systems .card-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.deposit-electronic-systems .card-block-wrap .btn-block
{
  text-align: center;
}

.deposit-electronic-systems .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

@media (max-width: 1500px) {
  .deposit-electronic-systems .card-block-wrap .form-card .row-line
  {
    display: block;
  }

  .deposit-electronic-systems .card-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .deposit-electronic-systems .right-parts
  {
    padding-left: 30px;
  }

  .deposit-electronic-systems .card-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
