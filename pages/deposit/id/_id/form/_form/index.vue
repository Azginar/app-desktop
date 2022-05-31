<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page-local-depo-form">
        <h1>Finance</h1>
        <sub-nemu />
        <h3>
          <NuxtLink to="/deposit/index">
            Local Deposit
          </NuxtLink> /
          <NuxtLink :to="`/deposit/id/${$route.params.id}`">
            {{ GET_TITLE_DEPOSIT_LOCAL_ELEM }}
          </NuxtLink> /
          <span v-if="GET_NAME_PARTNER">{{ GET_NAME_PARTNER.title }}</span>
        </h3>
        <div class="two-parts">
          <div class="left-parts">
            <partner-local-depo-form v-if="GET_NAME_PARTNER" :partner-localnfo="GET_NAME_PARTNER" />
          </div>
          <div class="right-parts">
            <h4>Exchange rates and commission</h4>
            <div class="content-row">
              <div class="row-line">
                <div v-for="row in RATES_AND_COMMISSION" :key="row.title">
                  <div class="form-group">
                    <p>{{ row.title }}</p>
                    <span>{{ row.value }}</span>
                  </div>
                </div>
              </div>
              <h4>Working Hours</h4>
              <div class="content-row">
                <div class="row-line">
                  <div v-for="row in WORKING_HOURS" :key="row.title">
                    <div v-if="isRowTitleText(row.title)" class="form-group">
                      <p>{{ row.title }}</p>
                      <span>{{ row.value }}</span>
                    </div>
                    <div v-else class="text form-group">
                      Monday to Friday ONLY<br>
                      <i>Form submitted after working hours will be processed the next working day.</i>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Support</h4>
              <div class="content-row support-row">
                <div class="row-line">
                  <div v-for="row in SUPPORT_INFO_PARTNER" :key="row.title">
                    <div class="form-group">
                      <p>{{ row.title }}</p>
                      <span>{{ row.value }}</span>
                    </div>
                  </div>
                </div>
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
import userSettingsRequest from '@/utils/userSettingsRequest'
import { CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER } from '@/modules/finance/mutation-types'
import SimpleSelectBlack from '../../../../../../components/SimpleSelectBlack.vue'
import BlackInput from '../../../../../../components/black-input'
import InputWithSelect from '../../../../../../components/input-with-select'
import partnerLocalDepoForm from '../../../../../../components/partnerLocalDepoForm'
import SubMenu from '../../../../../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../../../../../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('finance')

export default {
  name: 'FinanceDepositMoreInfo',
  components: {
    SimpleSelectBlack,
    BlackInput,
    InputWithSelect,
    'sub-nemu': SubMenu,
    'partner-local-depo-form': partnerLocalDepoForm,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'RATES_AND_COMMISSION',
      'WORKING_HOURS',
      'SUPPORT_INFO_PARTNER'
    ]),
    ...mapGetters([
      'GET_TITLE_DEPOSIT_LOCAL_ELEM',
      'GET_NAME_PARTNER'
    ])
  },
  mounted () {
    this[CHANGE_ID_DEPOSIT_LOCAL](this.$route.params.id)
    this[CHANGE_ID_PARTNER](this.$route.params.form)
  },
  methods: {
    ...mapActions([CHANGE_ID_DEPOSIT_LOCAL, CHANGE_ID_PARTNER]),
    isRowTitleText (title) {
      return title !== 'Monday to Friday ONLY'
    }
  }
}
</script>
<style>
.finance-page-local-depo-form .ul-tabs li:first-child a.non-active-link
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.finance-page-local-depo-form .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.finance-page-local-depo-form .ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.finance-page-local-depo-form h3,
.finance-page-local-depo-form h3 a
{
  font-size: 16px;
  line-height: 100%;
  color: #B2B2B2;
  font-weight: 600;
  margin-bottom: 20px;
}

.finance-page-local-depo-form h3 span
{
  color: #FFFFFF;
}

.finance-page-local-depo-form .two-parts
{
  display: flex;
  margin-bottom: 65px;
}

.finance-page-local-depo-form .left-parts
{
  background: rgba(36, 36, 36, 0.5);
  width: 65%;
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.finance-page-local-depo-form .right-parts
{
  width: 35%;
  padding-top: 40px;
  padding-left: 60px;
  height: 300px;
}

.finance-page-local-depo-form .right-parts .content-row
{
  margin-bottom: 20px;
}

.finance-page-local-depo-form .right-parts .content-row .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}

.finance-page-local-depo-form .right-parts .content-row .row-line > div
{
  padding-right: 10px;
  padding-left: 10px;
}

.finance-page-local-depo-form .right-parts .content-row .row-line > div:nth-child(2n+1)
{
  margin-right: 30px;
}

.finance-page-local-depo-form .right-parts .support-row .row-line > div:first-child
{
  width: 100%;
  margin-right: 0;
}

.finance-page-local-depo-form .right-parts .support-row .row-line > div:nth-child(2n)
{
  margin-right: 30px;
}

.finance-page-local-depo-form .right-parts .support-row .row-line > div:nth-child(2n+1)
{
  margin-right: 0;
}

.finance-page-local-depo-form .right-parts h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.finance-page-local-depo-form .right-parts p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.finance-page-local-depo-form .right-parts span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #B2B2B2;
}

.finance-page-local-depo-form .right-parts
{
  margin-bottom: 20px;
}

.finance-page-local-depo-form .right-parts .form-group
{
  margin-bottom: 20px;
  height: auto;
}

.finance-page-local-depo-form .right-parts .text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.finance-page-local-depo-form
{
  padding-bottom: 60px;
}

.main-wrapper.light-theme .finance-page-local-depo-form .ul-tabs li:first-child a.non-active-link
{
  color: #000000 !important;
}

.main-wrapper.light-theme .finance-page-local-depo-form h3,
.main-wrapper.light-theme .finance-page-local-depo-form h3 a
{
  color: #989898;
}

.main-wrapper.light-theme .finance-page-local-depo-form h3 span
{
  color: #000000;
}

.main-wrapper.light-theme .finance-page-local-depo-form .left-parts
{
  background: #ffffff;
}

.main-wrapper.light-theme .partner-local-depo-form .block-wrapper-partners .info-text h4,
.main-wrapper.light-theme .finance-page-local-depo-form .right-parts h4
{
  color: #000000;
}

.main-wrapper.lightThem .finance-page-local-depo-form .right-parts span
{
  color: #989898;
}

@media (max-width: 1300px) {
  .finance-page-local-depo-form .right-parts
  {
    padding-left: 30px;
  }
}

</style>
