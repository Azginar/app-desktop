<template>
  <div class="partner-local-depo-form">
    <div class="block-wrapper-partners">
      <modal-window v-show="showRestoreModal" class="restoreModal" @close="showRestoreModal = false">
        <template v-slot:header>
          <icSuccess />
        </template>
        <template v-slot:body>
          <h3><span>Deposit request has been successfully sent</span></h3>
        </template>
        <template v-slot:footer>
          <div>
            <default-button
              label="Ok"
              type="red-button"
              :click-event="handleCloseModal"
            />
          </div>
        </template>
      </modal-window>
      <div class="wrapper-img">
        <img v-if="isRowPartnerAvatarNoEmpty(partnerLocalnfo.avatar)" :src="partnerLocalnfo.avatar">
        <span v-else>{{ partnerLocalnfo.avatarText }}</span>
      </div>
      <div class="info-text">
        <h4>
          {{ partnerLocalnfo.title }}
        </h4>
        <p>{{ partnerLocalnfo.desc }}</p>
      </div>
    </div>
    <div class="form-block">
      <div class="row-line">
        <div class="col-line">
          <SimpleSelectBlack
            :options="BANK_CATEGORIES"
            :handle-select="CHANGE_BANK_CATEGORIES"
            :selected="BANK_CATEGORIES_SELECTED"
            :label="'Select the bank account'"
          />
        </div>
      </div>
      <div class="payment-details-block">
        <p>Please use these payment details to make a payment:</p>
        <div class="payment-details">
          <div class="border">
            <div v-for="row in PAYMENT_DETAILS" :key="row.title" class="col-details">
              <p>{{ row.title }}</p>
              <span>{{ row.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row-line">
        <div class="col-line">
          <SimpleSelectBlack
            :options="PAYMENT_METHOD"
            :handle-select="CHANGE_PAYMENT_METHOD"
            :selected="PAYMENT_METHOD_SELECTED"
            :label="'Payment method'"
          />
        </div>
        <div class="col-line">
          <div class="row-line">
            <div class="col-line">
              <label>Payment date</label>
              <black-input :value="PAYMENT_DATE_INPUT" />
            </div>
            <div class="col-line">
              <SimpleSelectBlack
                :options="PAYMENT_TIME"
                :handle-select="CHANGE_PAYMENT_TIME"
                :selected="PAYMENT_TIME_SELECTED"
                :label="'Payment time'"
              />
            </div>
          </div>
        </div>
      </div>
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
          <label>Proof of payment </label>
          <black-input :value="PROOF_OF_PAYMENT" />
        </div>
        <div class="col-line">
          <div class="info-label">
            <p>copy and paste number of the successful transaction from online banking</p>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <default-button
          :type="'red-button'"
          :label="'Continue'"
          :click-event="handleOpenModal"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import icSuccess from '../assets/icons/success-ic.svg'
import modalWindow from '../components/modal'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  name: 'PartnerLocalDepoForm',
  components: {
    'modal-window': modalWindow,
    icSuccess
  },
  props: {
    partnerLocalnfo: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      showDeleteModal: false,
      showRestoreModal: false
    }
  },
  computed: {
    ...mapState([
      'PAYMENT_DETAILS',
      'BANK_CATEGORIES',
      'BANK_CATEGORIES_SELECTED',
      'PAYMENT_METHOD',
      'PAYMENT_METHOD_SELECTED',
      'PAYMENT_TIME',
      'PAYMENT_TIME_SELECTED',
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'PAYMENT_DATE_INPUT',
      'PROOF_OF_PAYMENT'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_BANK_CATEGORIES',
      'CHANGE_PAYMENT_METHOD',
      'CHANGE_PAYMENT_TIME',
      'CHANGE_TRADING_ACCOUNT',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY'
    ]),
    handleOpenModal () {
      this.showRestoreModal = !this.showRestoreModal
      document.body.classList.add('overflow')
    },
    handleCloseModal () {
      this.showRestoreModal = false
      document.body.classList.remove('overflow')
      this.$router.push('/deposit/index')
    },
    isRowPartnerAvatarNoEmpty (avatar) {
      return avatar !== ''
    }
  }
}
</script>
<style>
.partner-local-depo-form .modal-body h3
{
  margin-bottom: 0;
}
.partner-local-depo-form .form-block .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.partner-local-depo-form .form-block .row-line .col-line-full
{
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.partner-local-depo-form .form-block > .row-line > .col-line,
.partner-local-depo-form .form-block > .row-line > .col-line-full
{
  margin-bottom: 40px;
}

.partner-local-depo-form .form-block .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
}

.partner-local-depo-form .form-block label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  display: block;
  margin-bottom: 5px;
}

.partner-local-depo-form .block-wrapper-partners
{
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.partner-local-depo-form .block-wrapper-partners .wrapper-img
{
  width: 120px;
  height: 120px;
  text-align: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.partner-local-depo-form .block-wrapper-partners .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120px;
  text-align: center;
  color: #FFFFFF;
}

.partner-local-depo-form .block-wrapper-partners .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.partner-local-depo-form .block-wrapper-partners .info-text h4
{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 5px;
}

.partner-local-depo-form .block-wrapper-partners .info-text p
{
  font-family: Arial;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-top: 0;
  margin-bottom: 0;
}

.partner-local-depo-form .select-single
{
  margin-bottom: 40px;
}

.partner-local-depo-form .payment-details-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
  margin-top: 0;
  margin-bottom: 5px;
}

.partner-local-depo-form .payment-details-block .payment-details
{
  background: #1B1B1B;
  display: flex;
  flex-wrap: wrap;
  padding: 4px 3px 4px;
  margin-bottom: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.partner-local-depo-form .payment-details-block .payment-details .border
{
  display: flex;
  flex-wrap: wrap;
  padding: 16px 17px 0;
  position: relative;
}

.partner-local-depo-form .payment-details-block .payment-details .border:before
{
  position: absolute;
  content: "";
  width: 3px;
  height: 100%;
  top: 0;
  left: 0;
  background: #E52525;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.partner-local-depo-form .payment-details-block .payment-details .border > div
{
  margin-right: 60px;
  margin-bottom: 11px;
}

.partner-local-depo-form .payment-details-block .payment-details p
{
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 5px;
}

.partner-local-depo-form .payment-details-block .payment-details span
{
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
}

.partner-local-depo-form .content-row label
{
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  display: block;
  padding: 0 20px;
}

.partner-local-depo-form .content-row .form-group
{
  margin-bottom: 40px;
  height: auto;
}

.partner-local-depo-form .info-label
{
  display: flex;
  margin-top: 15px;
  min-height: 50px;
  align-items: center;
}

.partner-local-depo-form .info-label p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  margin-top: 0;
  margin-bottom: 0;
}

.partner-local-depo-form .btn-block
{
  text-align: center;
}

.partner-local-depo-form .btn-block .red-button
{
  padding-top: 16px;
  padding-bottom: 17px;
  font-size: 15px;
  line-height: 15px;
}

.main-wrapper.light-theme .partner-local-depo-form .payment-details-block .payment-details
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .partner-local-depo-form .payment-details-block .payment-details p
{
  color: #989898;
}

.main-wrapper.light-theme .partner-local-depo-form .payment-details-block .payment-details span
{
  color: #000000;
}

@media (max-width: 1500px) {
  .partner-local-depo-form .form-block .row-line
  {
    display: block;
  }

  .partner-local-depo-form .form-block .col-line
  {
    width: 100%;
  }

  .partner-local-depo-form .form-block .col-line > .row-line > .col-line,
  .partner-local-depo-form .form-block > .row-line > .col-line,
  .partner-local-depo-form .form-block > .row-line > .col-line-full
  {
    margin-bottom: 20px;
  }
}

@media (max-width: 1200px) {
  .partner-local-depo-form .left-parts .block-wrapper-partners
  {
    display: block;
  }

  .partner-local-depo-form .left-parts .block-wrapper-partners .wrapper-img
  {
    margin-bottom: 20px;
  }
}
</style>
