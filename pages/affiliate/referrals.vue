<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="referrals-page">
        <h1>Affiliate</h1>
        <sub-nemu />
        <div class="setting-affiliate">
          <div class="left-side">
            <div>
              <OnlySelectBlack
                :options="PERIOD_CATEGORIES"
                :handle-select="CHANGE_PERIOD_CATEGORIES_SELECTED"
                :selected="PERIOD_CATEGORIES_SELECTED"
              />
            </div>
            <div>
              <date-range-picker-with-icon />
            </div>
            <div>
              <OnlySelectBlack
                :options="REFERRALS_CATEGORIES"
                :handle-select="CHANGE_REFERRALS_CATEGORIES_SELECTED"
                :selected="REFERRALS_CATEGORIES_SELECTED"
              />
            </div>
            <div>
              <default-button-with-switch
                :type="'trans-button'"
                :label="'View Only Active'"
              />
            </div>
          </div>
          <div class="right-side">
            <search-input :placeholder="'Referral\'s UID, name or email'" />
          </div>
        </div>
        <div class="block-black">
          <info-commission :content="GET_COMMISSION_DATA_REF" />
        </div>
        <affiliate-table-referrals :table-data="GET_AFFILIATE_REF" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '@/utils/userSettingsRequest'
import SubMenu from '@/components/one-line-sub-menu'
import searchInput from '@/components/search-input'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import OnlySelectBlack from '@/components/OnlySelectBlack'
import DateRangePickerWithIcon from '@/components/DateRangePicker/DateRangePickerWithIcon'
import DefaultButtonWithSwitch from '@/components/default-button-with-text'
import AffiliateTableReferrals from '@/components/affiliate/table-referrals'
import infoCommission from '@/components/affiliate/info-commission'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    OnlySelectBlack,
    AffiliateTableReferrals,
    'date-range-picker-with-icon': DateRangePickerWithIcon,
    'search-input': searchInput,
    'default-button-with-switch': DefaultButtonWithSwitch,
    'info-commission': infoCommission
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'PERIOD_CATEGORIES',
      'PERIOD_CATEGORIES_SELECTED',
      'REFERRALS_CATEGORIES',
      'REFERRALS_CATEGORIES_SELECTED',
      'AFFILIATE_REF_ACCOUNTS'
    ]),
    ...mapGetters([
      'GET_AFFILIATE_STATISTIC',
      'GET_COMMISSION_DATA_REF',
      'GET_AFFILIATE_REF'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PERIOD_CATEGORIES_SELECTED',
      'CHANGE_REFERRALS_CATEGORIES_SELECTED'
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

.referrals-page .setting-affiliate
{
  background: #2C2C2C;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.referrals-page .setting-affiliate .left-side > div
{
  margin-right: 20px;
  margin-bottom: 20px;
}

.referrals-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.referrals-page .setting-affiliate .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
}

.referrals-page .setting-affiliate .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.referrals-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.referrals-page .setting-affiliate .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.referrals-page .setting-affiliate .right-side .search-input input
{
  min-width: 285px;
}

.main-wrapper.light-theme .referrals-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .referrals-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .referrals-page .setting-affiliate
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .referrals-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #EEEDF3;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .referrals-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #EEEDF3 !important;
}

.main-wrapper.light-theme .button-flex .switch
{
  background: #EEEDF3;
}

.main-wrapper.light-theme .button-flex .switch.active
{
  background: #E52525;
}

@media (max-width: 1250px) {
  .referrals-page .setting-affiliate
  {
    display: block;
  }

  .referrals-page .setting-affiliate .right-side .search-input input
  {
    margin-bottom: 20px;
    width: auto;
  }
}
</style>
