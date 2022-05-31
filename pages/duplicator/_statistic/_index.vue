<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="duplicator-social-page-statistic">
        <h1><span>Social Trading</span></h1>
        <sub-menu :link-uid="GET_USER_UID" />
        <h4>Summary statistics</h4>
        <massive-button :massive-button="BUTTON_GRAPH" />
        <div class="graph-info">
          <div class="left-side">
            <h5>Equity / balance</h5>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="line" /><span>Balance</span></li>
              <li><i class="line-dashed" /><span>Equity</span></li>
            </ul>
          </div>
        </div>
        <div class="graph-img">
          <graphSocial5 />
        </div>
        <account-investor :accounts-investor="ACCOUNT_INVESTOR_TRADER" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import massiveButton from '../../../components/massiveButton'
import { CHANGE_NICKNAME_TRADER } from '../../../modules/socialTrading/mutation-types'
import accountInvestor from '../../../components/socialTrading/accountInvestor'
import graphSocial5 from '../../../assets/icons/graph-social-5.svg'
import SubMenu from '../../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions } = createNamespacedHelpers('socialTrading')
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  components: {
    'sub-menu': SubMenu,
    'massive-button': massiveButton,
    graphSocial5,
    'account-investor': accountInvestor,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'NICKNAME_TRADER',
      'BUTTON_GRAPH',
      'ACCOUNT_INVESTOR_TRADER'
    ]),
    ...mapGetters([
      'GET_USER_UID'
    ])
  },
  methods: {
    ...mapActions([
      CHANGE_NICKNAME_TRADER
    ])
  },
  mounted () {
    this[CHANGE_NICKNAME_TRADER](this.$route.params.nickname)
  }
}
</script>
<style>
.duplicator-social-page-statistic .ul-tabs li a.nuxt-link-exact-active
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.duplicator-social-page-statistic .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.duplicator-social-page-statistic .ul-tabs li a
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.duplicator-social-page-statistic .back-btn-block
{
  margin-bottom: 80px;
}

.duplicator-social-page-statistic h1
{
  color: #B2B2B2;
}

.duplicator-social-page-statistic h1 span
{
  color: #ffffff;
}

.duplicator-social-page-statistic h4
{
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  padding-bottom: 18px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.duplicator-social-page-statistic .massive-button
{
  margin-bottom: 60px;
}

.duplicator-social-page-statistic .graph-block
{
  margin-bottom: 68px;
}

.duplicator-social-page-statistic h5
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 25px;
}

.duplicator-social-page-statistic
{
  padding-bottom: 120px;
}

.duplicator-social-page-statistic .graph-info
{
  display: flex;
  justify-content: space-between;
}

.duplicator-social-page-statistic .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.duplicator-social-page-statistic .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.duplicator-social-page-statistic .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.duplicator-social-page-statistic .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.duplicator-social-page-statistic .graph-info .right-side ul li span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.duplicator-social-page-statistic .graph-info .right-side ul li .line
{
  width: 30px;
  height: 1px;
  margin-right: 5px;
  margin-bottom: 1px;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-block;
  vertical-align: middle;
}

.duplicator-social-page-statistic .graph-info .right-side ul li .line-dashed
{
  width: 30px;
  height: 1px;
  margin-bottom: 1px;
  background: transparent;
  margin-right: 5px;
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  display: inline-block;
  vertical-align: middle;
}

.duplicator-social-page-statistic .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.duplicator-social-page-statistic .graph-img
{
  margin-bottom: 80px;
}

.duplicator-social-page-statistic .graph-img svg
{
  max-width: 100%;
  height: auto;
}

.duplicator-social-page-statistic .trader-profile-table .copy-trader-block > div .right
{
  display: block;
}

.duplicator-social-page-statistic .trader-profile-table .copy-trader-block > div > div:first-child
{
  margin-right: 60px;
}

.main-wrapper.light-theme .duplicator-social-page-statistic .ul-tabs li a.nuxt-link-exact-active
{
  color: #000000 !important
}

.main-wrapper.light-theme .duplicator-social-page-statistic .ul-tabs li a
{
  color: #989898 !important;
}

.main-wrapper.light-theme .duplicator-social-page-statistic h1 span
{
  color: #000000;
}

.main-wrapper.light-theme .duplicator-social-page-statistic h4,
.main-wrapper.light-theme .duplicator-social-page-statistic h5,
.main-wrapper.light-theme .account-investor-social h3
{
  color: #989898;
}

.main-wrapper.light-theme .account-investor-social h3,
.main-wrapper.light-theme .duplicator-social-page-statistic h4
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .container-account-investor .block-card .info-text h4
{
  color: #000000;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

}

</style>
