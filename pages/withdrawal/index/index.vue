<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page withdrawal-page">
        <h1>Finance</h1>
        <sub-nemu />
        <div class="withdrawal-account-info">
          <div class="left-info">
            <SimpleSelectBlack
              :options="TRADING_ACCOUNT"
              :handle-select="CHANGE_TRADING_ACCOUNT"
              :label="'Trading account'"
              :selected="TRADING_ACCOUNT_SELECTED"
            />
          </div>
          <div class="right-info">
            <label>Accounts balance</label>
            <p>{{ onlyAmount(TRADING_ACCOUNT_SELECTED) }}</p>
          </div>
        </div>
        <deposit-method :payment-methods="WITHDRAWAL_METHODS" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import DepositMethod from '../../../components/finance/depositMethod'
import SimpleSelectBlack from '../../../components/SimpleSelectBlack'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    'deposit-method': DepositMethod,
    SimpleSelectBlack,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'WITHDRAWAL_METHODS',
      'TRADING_ACCOUNT',
      'TRADING_ACCOUNT_SELECTED'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_TRADING_ACCOUNT'
    ]),
    onlyAmount (account) {
      const newString = account.substring(account.indexOf('/') + 1)
      return newString
    }
  }
}
</script>
<style scoped>
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

.withdrawal-page .container-card .block-card .info-text p
{
  margin-bottom: 5px;
}

.withdrawal-page .container-card .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.withdrawal-page .container-card
{
  margin-bottom: 10px;
}

.finance-page.withdrawal-page h3
{
  margin-bottom: 40px;
}

.withdrawal-page .withdrawal-account-info
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.withdrawal-page .withdrawal-account-info > div
{
  margin-right: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.withdrawal-page .withdrawal-account-info .right-info
{
  padding-left: 20px;
}

.withdrawal-page .withdrawal-account-info .right-info p
{
  height: 50px;
  line-height: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.withdrawal-page .withdrawal-account-info .right-info label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  display: block;
}

.withdrawal-page .withdrawal-account-info .selector-wrapper-black
{
  width: 362px;
}

.main-wrapper.light-theme .withdrawal-page .withdrawal-account-info .right-info p
{
  color: #000000;
}
</style>
