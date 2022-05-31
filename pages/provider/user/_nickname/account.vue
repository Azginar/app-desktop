<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="trader-social-page">
        <div class="back-btn-block">
          <NuxtLink to="/">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Trader <span v-if="GET_NICKNAME">{{ GET_NICKNAME }}</span></h1>
        <sub-menu />
        <trader-account-table :table-data-public="GET_TRADER_ACCOUNT_INFO_BY_NICKNAME" />
        <h4>Summary statistics</h4>
        <massive-button :massive-button="BUTTON_GRAPH" />
        <div class="graph-block">
          <h5>Profitability</h5>
          <div class="graph-img">
            <graphSocial1 />
          </div>
        </div>
        <div class="graph-info">
          <div class="left-side">
            <h5>Equity / balance</h5>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="line" /><span>Balance</span></li>
              <li><i class="line-dashed" /><span>Equity</span></li>
              <li><plusIc /><span>Deposit</span></li>
              <li><minusIc /><span>Withdrawal</span></li>
            </ul>
          </div>
        </div>
        <div class="graph-img">
          <graphSocial2 />
        </div>
        <div class="graph-block">
          <h5>Deposit utilization rate</h5>
          <div class="graph-img">
            <graphSocial3 />
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../../utils/userSettingsRequest'
import SubMenu from '../../../../components/one-line-sub-menu'
import BackButton from '../../../../components/back-button'
import TraderAccountTable from '../../../../components/socialTrading/traderAccountTable'
import massiveButton from '../../../../components/massiveButton'
import { CHANGE_NICKNAME_TRADER } from '../../../../modules/socialTrading/mutation-types'
import graphSocial1 from '../../../../assets/icons/graph-social-1.svg'
import graphSocial2 from '../../../../assets/icons/graph-social-2.svg'
import graphSocial3 from '../../../../assets/icons/graph-social-3.svg'
import plusIc from '../../../../assets/icons/plus-ic.svg'
import minusIc from '../../../../assets/icons/minus-ic.svg'
import HOCWithLabelAndNotifications from '../../../../components/HOC-with-label-and-notifications'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  components: {
    'sub-menu': SubMenu,
    'back-button': BackButton,
    'massive-button': massiveButton,
    'trader-account-table': TraderAccountTable,
    graphSocial1,
    graphSocial2,
    graphSocial3,
    plusIc,
    minusIc,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'NICKNAME_TRADER',
      'BUTTON_GRAPH'
    ]),
    ...mapGetters([
      'GET_TRADER_ACCOUNT_INFO_BY_NICKNAME',
      'GET_NICKNAME'
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
.trader-social-page .ul-tabs li a.nuxt-link-exact-active
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.trader-social-page .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.trader-social-page .ul-tabs li a
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.trader-social-page .back-btn-block
{
  margin-bottom: 80px;
}

.trader-social-page h1
{
  color: #B2B2B2;
}

.trader-social-page h1 span
{
  color: #ffffff;
}

.trader-social-page h4
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

.trader-social-page .massive-button
{
  margin-bottom: 60px;
}

.trader-social-page .graph-block
{
  margin-bottom: 68px;
}

.trader-social-page h5
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

.trader-social-page
{
  padding-bottom: 120px;
}

.trader-social-page .graph-info
{
  display: flex;
  justify-content: space-between;
}

.trader-social-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.trader-social-page .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.trader-social-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.trader-social-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.trader-social-page .graph-info .right-side ul li span
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

.trader-social-page .graph-info .right-side ul li .line
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

.trader-social-page .graph-info .right-side ul li .line-dashed
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

.trader-social-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.trader-social-page .graph-img
{
  margin-bottom: 60px;
}

.trader-social-page .graph-img svg
{
  max-width: 100%;
  height: auto;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

}

</style>
