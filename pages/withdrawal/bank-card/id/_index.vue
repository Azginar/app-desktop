<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view withdrawal-card-page">
        <modal-window v-show="showSmsModal" class="restoreModal" @close="showSmsModal = false">
          <template v-slot:header>
            <h3><span>Authorization code will be sent via SMS</span></h3>
          </template>
          <template v-slot:body>
            <label>Authorization code</label>
            <black-input
              :value="AUTHORIZATION_CODE"
            />
          </template>
          <template v-slot:footer>
            <div class="btn-block">
              <default-button
                label="Ok"
                type="red-button"
                :click-event="handleNextModal"
              />
              <default-button
                label="Cancel"
                type="trans-button"
                :click-event="handleCloseModal"
              />
            </div>
          </template>
        </modal-window>
        <modal-window v-show="showNextModal" class="restoreModal" @close="showNextModal = false">
          <template v-slot:header>
            <icSuccess />
          </template>
          <template v-slot:body>
            <h3><span>Мани вам отправленны, в течении часа прибудут</span></h3>
          </template>
          <template v-slot:footer>
            <div>
              <default-button
                label="Ok"
                type="red-button"
                :click-event="handleCloseNextModal"
              />
            </div>
          </template>
        </modal-window>
        <h1>Finance</h1>
        <sub-menu />
        <h3>
          <NuxtLink to="/withdrawal/index">
            Bank card
          </NuxtLink> / <span>Withdrawal</span>
        </h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="card-block-wrap">
              <div class="description-block">
                <div class="img-block">
                  <icMasterCard />
                </div>
                <div class="text-block">
                  <h4 v-if="GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL">
                    {{ GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL.title }}
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
                    <div class="only-text">
                      <p>– max. amount: <span v-if="GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL">{{ GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL.maxAmount }}</span></p>
                    </div>
                  </div>
                </div>
                <div class="row-line">
                  <div class="col-line">
                    <label>Comment</label>
                    <black-input
                      :value="COMMENT"
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
                <default-button
                  :type="'red-button'"
                  :label="'Continue'"
                  :click-event="handleOpenModal"
                />
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
import { CHANGE_BANK_CARD_FOR_WITHDRAWAL } from '../../../../modules/finance/mutation-types'
import userSettingsRequest from '../../../../utils/userSettingsRequest'
import SubMenu from '../../../../components/one-line-sub-menu'
import DefaultButton from '../../../../components/default-button.vue'
import icMasterCard from '../../../../assets/icons/master-card-ic.svg'
import BlackInput from '../../../../components/black-input'
import modalWindow from '../../../../components/modal'
import icSuccess from '../../../../assets/icons/success-ic.svg'
import HOCWithLabelAndNotifications from '../../../../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')
export default {
  components: {
    icMasterCard,
    'sub-menu': SubMenu,
    'default-button': DefaultButton,
    BlackInput,
    'modal-window': modalWindow,
    icSuccess,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      showDeleteModal: false,
      showSmsModal: false,
      showNextModal: false
    }
  },
  computed: {
    ...mapState([
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED',
      'PAYMENT_AMOUNT_INPUT',
      'PAYMENT_AMOUNT_CURRENCY',
      'PAYMENT_AMOUNT_CURRENCY_SELECTED',
      'COMMENT',
      'NOTE_INFORMATION',
      'AUTHORIZATION_CODE'
    ]),
    ...mapGetters([
      'GET_BANK_CARD_NUMBER_FOR_WITHDRAWAL'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_BANK_CARD_FOR_WITHDRAWAL',
      'CHANGE_PAYMENT_AMOUNT_CURRENCY',
      'CHANGE_TRADING_ACCOUNT'
    ]),
    handleOpenModal () {
      this.showSmsModal = !this.showSmsModal
      document.body.classList.add('overflow')
    },
    handleCloseModal () {
      this.showSmsModal = false
      document.body.classList.remove('overflow')
    },
    handleNextModal () {
      this.showSmsModal = false
      this.showNextModal = !this.showNextModal
    },
    handleCloseNextModal () {
      this.showNextModal = false
      document.body.classList.remove('overflow')
      this.$router.push('/withdrawal/index')
    }
  },
  mounted () {
    this[CHANGE_BANK_CARD_FOR_WITHDRAWAL](this.$route.params.index)
  }
}
</script>
<style>
.ul-tabs li a,
.withdrawal-card-page .ul-tabs li:nth-child(2) a.non-active-link
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.finance-page.withdrawal-card-page .ul-tabs li:first-child a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important
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

.finance-page.withdrawal-card-page .modal-body h3
{
  margin-bottom: 0 !important;
  line-height: 140% !important;
}

.finance-page h3 span
{
  color: #B2B2B2;
}

.withdrawal-card-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.withdrawal-card-page .left-parts
{
  width: 65%;
}

.withdrawal-card-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 40px;
}

.withdrawal-card-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.withdrawal-card-page .card-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.withdrawal-card-page .card-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.withdrawal-card-page .card-block-wrap .description-block .img-block
{
  margin-right: 40px;
}

.withdrawal-card-page .card-block-wrap .description-block
{
  width: 100%;
}

.withdrawal-card-page .card-block-wrap .description-block h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  border-radius: 5px;
}

.withdrawal-card-page .card-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.withdrawal-card-page .card-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.withdrawal-card-page .card-block-wrap .form-card .col-line label
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

.withdrawal-card-page .card-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.withdrawal-card-page .card-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.withdrawal-card-page .card-block-wrap .form-card .col-line .only-text p span
{
  color: #B2B2B2;
}

.withdrawal-card-page .card-block-wrap .btn-block
{
  text-align: center;
}

.withdrawal-card-page .card-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.withdrawal-card-page .right-parts h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.withdrawal-card-page .right-parts span
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

.withdrawal-card-page .right-parts p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #B2B2B2;
  margin-bottom: 0;
}

.withdrawal-card-page .right-parts .block-text
{
  margin-bottom: 20px;
}

.main-wrapper.light-theme .withdrawal-card-page .ul-tabs li:nth-child(2) a.non-active-link
{
  color: #000000 !important;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3,
.main-wrapper.light-theme .finance-page.finance-page-view h3 a
{
  color: #989898;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 span,
.main-wrapper.light-theme .withdrawal-card-page .card-block-wrap .description-block h4
{
  color: #000000;
}

.main-wrapper.light-theme .withdrawal-card-page .card-block-wrap
{
  background: #ffffff;
}

@media (max-width: 1500px) {
  .withdrawal-card-page  .card-block-wrap .form-card .row-line
  {
    display: block;
  }

  .withdrawal-card-page  .card-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .withdrawal-card-page  .right-parts
  {
    padding-left: 30px;
  }

  .withdrawal-card-page  .card-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
