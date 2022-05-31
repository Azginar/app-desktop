<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view add-card-page">
        <h1>Finance</h1>
        <sub-nemu />
        <div class="two-parts">
          <div class="left-parts">
            <h3>
              <NuxtLink to="/deposit/bank-card/index">
                Bank card
              </NuxtLink> /<span> Add new card</span>
            </h3>
            <div class="add-card-block">
              <div class="description-block">
                <div v-if="isTypeBankCardMasterCard(GET_TYPE_BANK_CARD)" class="img-block">
                  <icMasterCard />
                </div>
                <div v-else class="img-block">
                  <icVisa />
                </div>
                <div class="text-block">
                  <p>Текст про то, что принимаются только карты макстеркарда. </p>
                </div>
              </div>
              <div class="form-card">
                <div class="col-line">
                  <label>Card number</label>
                  <black-input
                    :value="CARD_NUMBER"
                    :handle-input="focusInput"
                  />
                </div>
                <div class="col-line">
                  <label>Holder’s name</label>
                  <black-input
                    :value="HOLDER_NAME"
                  />
                </div>
                <div class="col-line">
                  <label>Expiry date</label>
                  <black-input
                    :value="EXPIRY_DATE"
                  />
                </div>
              </div>
              <div class="btn-block">
                <NuxtLink to="/deposit/bank-card/verification-card" class="block-card">
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
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import icMasterCard from '../../../assets/icons/master-card-ic.svg'
import icVisa from '../../../assets/icons/visa-ic.svg'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import BlackInput from '../../../components/black-input'
import DefaultButton from '../../../components/default-button.vue'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import { CHANGE_TYPE_BANK_CARD } from '../../../modules/finance/mutation-types'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    icMasterCard,
    icVisa,
    BlackInput,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'CARD_NUMBER',
      'HOLDER_NAME',
      'EXPIRY_DATE'
    ]),
    ...mapGetters([
      'GET_TYPE_BANK_CARD'
    ])
  },
  methods: {
    ...mapActions(['CHANGE_TYPE_BANK_CARD']),
    focusInput (event) {
      this[CHANGE_TYPE_BANK_CARD](event.target.value)
    },
    isTypeBankCardMasterCard (type) {
      return type === 'mastercard'
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

.add-card-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.add-card-page .left-parts
{
  width: 65%;
}

.add-card-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.add-card-page .add-card-block
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.add-card-page .add-card-block .description-block
{
  display: flex;
  margin-bottom: 40px;
}

.add-card-page .add-card-block .description-block .img-block
{
  margin-right: 20px;
  min-height: 53px;
}

.add-card-page .add-card-block .description-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
}

.add-card-page .add-card-block .form-card
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.add-card-page .add-card-block .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}

.add-card-page .add-card-block .form-card .col-line label
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

.add-card-page .add-card-block .form-card .col-line:first-child
{
  width: 37%;
}

.add-card-page .add-card-block .form-card .col-line:nth-child(2)
{
  width: 43%;
}

.add-card-page .add-card-block .form-card .col-line:nth-child(3)
{
  width: 20%;
}

.add-card-page .add-card-block .btn-block
{
  text-align: center;
  padding-top: 10px;
}

.add-card-page .add-card-block .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.main-wrapper.light-theme .add-card-page .add-card-block
{
  background: #ffffff;
}

.main-wrapper.light-theme .add-card-page .add-card-block .description-block p,
.main-wrapper.light-theme .finance-page.finance-page-view h3 a
{
  color: #989898;
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
  .add-card-page .add-card-block .form-card
  {
    display: block;
  }

  .add-card-page .add-card-block .form-card .col-line:first-child,
  .add-card-page .add-card-block .form-card .col-line:nth-child(2)
  {
    width: 100%;
  }

  .add-card-page .add-card-block .form-card .col-line:nth-child(3)
  {
    width: 30%;
  }
}

@media (max-width: 1200px) {
  .add-card-page .add-card-block .form-card .col-line:nth-child(3)
  {
    width: 100%;
  }
}

</style>
