<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="affiliate-main-page">
        <modal-window v-show="showCertificateModal" class="restoreModal" @close="showSmsModal = false">
          <template v-slot:header>
            <h3><span>Get the certificate from Tifia to prove your affiliate status</span></h3>
          </template>
          <template v-slot:body>
            <label>Check your name here and correct if needed</label>
            <black-input
              :value="GET_USER_NAME"
            />
          </template>
          <template v-slot:footer>
            <div class="btn-block">
              <default-button
                label="Send request"
                type="red-button"
                :click-event="handleCloseModal"
              />
              <default-button
                label="Cancel"
                type="trans-button"
                :click-event="handleCloseModal"
              />
            </div>
          </template>
        </modal-window>
        <h1>Affiliate</h1>
        <sub-nemu />
        <div class="two-parts">
          <div class="left-parts">
            <h3>{{ GET_USER_NAME }}</h3>
            <partners-main-info :partners-main-data="GET_PARTNERS_MAIN_INFO" />
            <h3>Affiliate accounts</h3>
            <partner-table-accounts :partners-card-data="GET_AFFILIATE_ACCOUNTS" />
            <h3>Сertificate</h3>
            <default-button
              :type="'trans-button'"
              :label="'Get the certificate'"
              :click-event="handleOpenModal"
            />
          </div>
          <div class="right-parts">
            <h3>Affiliate commission summary: <span>all time</span></h3>
            <affiliate-commission :affiliate-commission-data="GET_AFFILIATE_COMMISSION_ALL_TIME" />

            <h3>Affiliate commission summary: <span>last month</span></h3>
            <affiliate-commission :affiliate-commission-data="GET_AFFILIATE_COMMISSION_LAST_MONTH" />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import partnersMainInfo from '@/components/affiliate/partner-main-info'
import partnerTableAccounts from '@/components/affiliate/partner-card'
import affiliateCommission from '@/components/affiliate/affiliate-comisson'
import modalWindow from '@/components/modal'
import DefaultButton from '@/components/default-button.vue'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    'partners-main-info': partnersMainInfo,
    'partner-table-accounts': partnerTableAccounts,
    'affiliate-commission': affiliateCommission,
    'modal-window': modalWindow,
    'default-button': DefaultButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      showCertificateModal: false
    }
  },
  computed: {
    ...mapGetters([
      'GET_USER_NAME',
      'GET_PARTNERS_MAIN_INFO',
      'GET_AFFILIATE_ACCOUNTS',
      'GET_AFFILIATE_COMMISSION_ALL_TIME',
      'GET_AFFILIATE_COMMISSION_LAST_MONTH'
    ])
  },
  methods: {
    handleOpenModal () {
      this.showCertificateModal = !this.showCertificateModal
      document.body.classList.add('overflow')
    },
    handleCloseModal () {
      this.showCertificateModal = false
      document.body.classList.remove('overflow')
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

.affiliate-main-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.affiliate-main-page .left-parts
{
  width: 65%;
}

.affiliate-main-page .right-parts
{
  width: 35%;
  padding-left: 60px;
}

.affiliate-main-page h3
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.affiliate-main-page h3 span
{
  color: #B2B2B2;
}

.affiliate-main-page
{
  padding-bottom: 60px;
}

.affiliate-main-page .modal-container h3
{
  font-size: 18px;
  line-height: 120%;
  text-align: left;
}

.affiliate-main-page .modal-container h3 span
{
  color: #FFFFFF;
}

.affiliate-main-page .modal-container button
{
  padding: 16px 25px;
  font-size: 15px;
  line-height: 16px;
}

.main-wrapper.light-theme .affiliate-main-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .affiliate-main-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .affiliate-main-page h3
{
  color: #000000;
}

@media (max-width: 1200px) {
  .affiliate-main-page .two-parts
  {
    display: block;
  }

  .affiliate-main-page .right-parts
  {
    padding-left: 0;
    padding-top: 60px;
    width: 100%;
  }

  .affiliate-main-page .left-parts
  {
    width: 100%;
  }
}
</style>
