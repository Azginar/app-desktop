<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="internal-transfer-page">
        <modal-window v-show="showTransferModal" class="restoreModal imternal-transfer-modal" @close="showTransferModal = false">
          <template v-slot:header>
            <h3><span>Internal transfer</span></h3>
          </template>
          <template v-slot:body>
            <div class="bg-gradient">
              <div class="col-line">
                <div>
                  <p>{{ onlyAccount(SOURCE_ACCOUNT_TRANSFER_SELECTED) }}</p>
                  <span>– 20 USD</span>
                </div>
              </div>
              <div class="col-arrow">
                <icArrowTransfer />
              </div>
              <div class="col-line">
                <p>{{ onlyAccount(DESTINATION_ACCOUNT_TRANSFER_SELECTED) }}</p>
                <span>+ 18.08 EUR</span>
              </div>
            </div>
          </template>
          <template v-slot:footer>
            <div class="btn-block">
              <default-button
                label="Ok"
                type="red-button"
                :click-event="handleCloseModalSuccess"
              />
              <default-button
                label="Cancel"
                type="trans-button"
                :click-event="handleCloseModal"
              />
            </div>
          </template>
        </modal-window>
        <h1>Finance</h1>
        <sub-nemu />
        <div class="two-parts">
          <div class="left-parts">
            <div class="row-line-transfer">
              <div class="col-line">
                <SimpleSelectBlack
                  :options="SOURCE_ACCOUNT_TRANSFER"
                  :handle-select="CHANGE_SOURCE_ACCOUNT_TRANSFER"
                  :label="'Source account'"
                  :selected="SOURCE_ACCOUNT_TRANSFER_SELECTED"
                />
              </div>
              <div class="col-arrow">
                <icArrowTransfer />
              </div>
              <div class="col-line">
                <SimpleSelectBlack
                  :options="DESTINATION_ACCOUNT_TRANSFER"
                  :handle-select="CHANGE_DESTINATION_ACCOUNT_TRANSFER"
                  :label="'Destination account'"
                  :selected="DESTINATION_ACCOUNT_TRANSFER_SELECTED"
                />
              </div>
            </div>
            <div class="row-line-transfer">
              <div class="col-line">
                <label>Amount</label>
                <input-with-currency :type="'number'" :value="AMOUNT_TRANSFER" :handle-input="handleChangeAmountTransfer" :currency="'USD'" />
              </div>
              <div class="col-line">
                <p class="text">
                  <span>18.08 EUR</span> will be credited on account CLS-6140723
                </p>
              </div>
            </div>
            <div class="btn-block">
              <default-button
                label="CONTINUE"
                type="red-button"
                :click-event="handleOpenModal"
              />
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
import SimpleSelectBlack from '../../../components/SimpleSelectBlack.vue'
import icArrowTransfer from '../../../assets/icons/arrow-transfer.svg'
import InputWithCurrency from '../../../components/input-with-currency'
import DefaultButton from '../../../components/default-button'
import modalWindow from '../../../components/modal'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import {
  CHANGE_SOURCE_ACCOUNT_TRANSFER,
  CHANGE_DESTINATION_ACCOUNT_TRANSFER,
  CHANGE_AMOUNT_TRANSFER
} from '../../../modules/finance/mutation-types'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    icArrowTransfer,
    SimpleSelectBlack,
    InputWithCurrency,
    'default-button': DefaultButton,
    'modal-window': modalWindow,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      showDeleteModal: false,
      showTransferModal: false
    }
  },
  computed: {
    ...mapState([
      'SOURCE_ACCOUNT_TRANSFER',
      'SOURCE_ACCOUNT_TRANSFER_SELECTED',
      'DESTINATION_ACCOUNT_TRANSFER',
      'DESTINATION_ACCOUNT_TRANSFER_SELECTED',
      'AMOUNT_TRANSFER'
    ])
  },
  methods: {
    ...mapActions([CHANGE_SOURCE_ACCOUNT_TRANSFER, CHANGE_DESTINATION_ACCOUNT_TRANSFER, CHANGE_AMOUNT_TRANSFER]),
    handleOpenModal () {
      this.showTransferModal = !this.showTransferModal
      document.body.classList.add('overflow')
    },
    handleCloseModal () {
      this.showTransferModal = false
      document.body.classList.remove('overflow')
    },
    handleCloseModalSuccess () {
      this.showTransferModal = false
      document.body.classList.remove('overflow')
      this.$router.push('/deposit/index')
    },
    onlyAccount (account) {
      const newString = account.split('/')
      return newString[0]
    },
    handleChangeAmountTransfer (event) {
      this[CHANGE_AMOUNT_TRANSFER](event.target.value)
    }
  }
}
</script>
<style>
.ul-tabs li a
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

.internal-transfer-page .two-parts
{
  display: flex;
  margin-bottom: 65px;
}

.internal-transfer-page .left-parts
{
  background: rgba(36, 36, 36, 0.5);
  width: 65%;
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.internal-transfer-page .row-line-transfer
{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.internal-transfer-page .row-line-transfer .col-line
{
  width: 46%;
}

.internal-transfer-page .row-line-transfer .col-arrow
{
  padding-top: 15px;
  display: flex;
  align-items: center;
}

.internal-transfer-page .row-line-transfer > div
{
  margin-bottom: 20px;
}

.internal-transfer-page .row-line-transfer > div label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.internal-transfer-page .row-line-transfer p.text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  align-items: center;
  height: 50px;
}

.internal-transfer-page .row-line-transfer p.text span
{
  color: #B2B2B2;
  margin-right: 6px;
}

.internal-transfer-page .btn-block
{
  text-align: center;
}

.internal-transfer-page .btn-block .red-button
{
  font-size: 15px;
  line-height: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
}

.internal-transfer-page .imternal-transfer-modal .modal-container
{
  max-width: 440px;
}

.internal-transfer-page .imternal-transfer-modal .trans-button
{
  background: #454545;
  border: 1px solid #454545;
}

.internal-transfer-page
{
  padding-bottom: 60px;
}

.main-wrapper.light-theme .internal-transfer-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .internal-transfer-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .internal-transfer-page .left-parts
{
  background: #ffffff;
}

.main-wrapper.light-theme .internal-transfer-page .row-line-transfer p.text span
{
  color: #989898;
}

@media (max-width: 1600px) {
  .internal-transfer-page .row-line-transfer
  {
    display: block;
  }

  .internal-transfer-page .row-line-transfer .col-line
  {
    width: 100%;
  }

  .internal-transfer-page .row-line-transfer .col-arrow
  {
    padding-top: 0;
    text-align: center;
    display: block;
  }

  .internal-transfer-page .row-line-transfer .col-arrow svg
  {
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .internal-transfer-page .row-line-transfer p.text
  {
    margin-top: 0;
    height: auto;
    text-align: center;
    display: block;
  }

  .internal-transfer-page .row-line-transfer p.text span
  {
    display: block;
    margin-right: 0;
  }
}
</style>
