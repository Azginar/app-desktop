<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="rebate-page">
        <h1>Affiliate</h1>
        <sub-nemu />
        <h3>Affiliate Rebate system settings</h3>
        <div class="setting-affiliate">
          <div class="left-side">
            <div>
              <OnlySelectBlack
                :options="REFERRALS_CATEGORIES"
                :handle-select="CHANGE_REFERRALS_CATEGORIES_SELECTED"
                :selected="REFERRALS_CATEGORIES_SELECTED"
              />
            </div>
            <div class="right-side">
              <search-input :placeholder="'Referral\'s UID, name or email'" />
            </div>
          </div>
          <div class="right-side">
            <div class="percentage-control">
              <p>Set the percentage for each account type:</p>
              <div class="control-block">
                <div>
                  <label>START (micro)</label>
                  <button-percent :value="GET_REBATE_START_MICRO_PERCENT.percentCurrent" :percent-old="GET_REBATE_START_MICRO_PERCENT.percentOld" :change-date="SET_REBATE_START_MICRO_PERCENT" />
                </div>
                <div>
                  <label>ECN CLASSIC</label>
                  <button-percent :value="GET_REBATE_ECN_CLASSIC_PERCENT.percentCurrent" :percent-old="GET_REBATE_ECN_CLASSIC_PERCENT.percentOld" :change-date="SET_REBATE_ECN_CLASSIC_PERCENT" />
                </div>
                <div>
                  <label>ECN PRO</label>
                  <button-percent :value="GET_REBATE_ECN_PRO_PERCENT.percentCurrent" :percent-old="GET_REBATE_ECN_PRO_PERCENT.percentOld" :change-date="SET_REBATE_ECN_PRO_PERCENT" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <affiliate-table-rebate :table-data="GET_REBATE_CARD_DATA" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '@/utils/userSettingsRequest'
import SubMenu from '@/components/one-line-sub-menu'
import searchInput from '@/components/search-input'
import ButtonPercent from '@/components/affiliate/button-percent'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import OnlySelectBlack from '@/components/OnlySelectBlack'
import affiliateTableRebate from '@/components/affiliate/table-rebate'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    'button-percent': ButtonPercent,
    HOCWithLabelAndNotifications,
    OnlySelectBlack,
    affiliateTableRebate,
    'search-input': searchInput
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'REFERRALS_CATEGORIES',
      'REFERRALS_CATEGORIES_SELECTED',
      'AFFILIATE_REF_ACCOUNTS'
    ]),
    ...mapGetters([
      'GET_REBATE_CARD_DATA',
      'GET_REBATE_START_MICRO_PERCENT',
      'GET_REBATE_ECN_CLASSIC_PERCENT',
      'GET_REBATE_ECN_PRO_PERCENT'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_REFERRALS_CATEGORIES_SELECTED',
      'SET_REBATE_START_MICRO_PERCENT',
      'SET_REBATE_ECN_CLASSIC_PERCENT',
      'SET_REBATE_ECN_PRO_PERCENT'
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

.rebate-page h3
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.rebate-page .setting-affiliate
{
  background: #2C2C2C;
  padding: 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
}

.rebate-page .setting-affiliate .left-side > div
{
  margin-right: 20px;
  margin-bottom: 20px;
}

.rebate-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.rebate-page .setting-affiliate .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
}

.rebate-page .setting-affiliate .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.rebate-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.rebate-page .setting-affiliate .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.rebate-page .setting-affiliate .right-side .search-input input
{
  min-width: 285px;
}

.rebate-page .percentage-control p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-bottom: 20px;
}

.rebate-page .percentage-control .control-block
{
  display: flex;
  flex-wrap: wrap;
}

.rebate-page .percentage-control .control-block > div
{
  margin-right: 40px;
  margin-bottom: 20px;
}

.rebate-page .percentage-control .control-block> div:last-child
{
  margin-right: 0;
}

.rebate-page .percentage-control .control-block label
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 5px;
}

.main-wrapper.light-theme .rebate-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .rebate-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .rebate-page h3
{
  color: #000000;
}

.main-wrapper.light-theme .rebate-page .setting-affiliate
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .rebate-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .rebate-page .setting-affiliate .selector-wrapper-black .vs--open .vs__dropdown-toggle
{
  background: #F7F6FB !important;
}

@media (max-width: 1250px) {
  .rebate-page .setting-affiliate
  {
    display: block;
  }

  .rebate-page .setting-affiliate .right-side .search-input input
  {
    margin-bottom: 20px;
    width: auto;
  }
}
</style>
