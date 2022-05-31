<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page">
        <h1>Finance</h1>
        <sub-nemu />
        <deposit-method :payment-methods="PAYMENT_METHODS" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import DepositMethod from '../../../components/finance/depositMethod'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    'deposit-method': DepositMethod,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'PAYMENT_METHODS'
    ])
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

.finance-page
{
  padding-bottom: 80px;
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

.bank-card-block .block-card .wrapper-img
{
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
}

.bank-card-block .block-card .wrapper-img img
{

}

.bank-card-block .block-card .info-text p
{
  margin-bottom: 5px;
}

.bank-card-block .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.main-wrapper.light-theme .finance-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .finance-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .finance-page h3
{
  color: #000000;
  border-color: #D4D4D4;
}

</style>
