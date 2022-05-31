<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="referrals-page-view">
        <div class="go-back-button">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1>Referral <span v-if="GET_NAME_REF_BY_UID">{{ GET_NAME_REF_BY_UID }}</span> <span v-if="GET_STATUS_REF_BY_UID" class="status">{{ GET_STATUS_REF_BY_UID }}</span></h1>
        <h3>Statistics: {{ PERIOD_CATEGORIES_SELECTED }} <span>({{ GET_DATE_CALENDAR }})</span></h3>
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
          <info-referrals :content="GET_REFERRAL_INFO" />
        </div>
        <affiliate-table-referrals :table-data="GET_AFFILIATE_REF" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '@/utils/userSettingsRequest'
import searchInput from '@/components/search-input'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import OnlySelectBlack from '@/components/OnlySelectBlack'
import { CHANGE_AFFILIATE_REF_UID } from '@/modules/affiliate/mutation-types'
import DateRangePickerWithIcon from '@/components/DateRangePicker/DateRangePickerWithIcon'
import DefaultButtonWithSwitch from '@/components/default-button-with-text'
import AffiliateTableReferrals from '@/components/affiliate/table-referrals'
import infoReferrals from '@/components/affiliate/info-referrals'
import BackButton from '@//components/back-button'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    HOCWithLabelAndNotifications,
    OnlySelectBlack,
    AffiliateTableReferrals,
    'date-range-picker-with-icon': DateRangePickerWithIcon,
    'search-input': searchInput,
    'default-button-with-switch': DefaultButtonWithSwitch,
    'info-referrals': infoReferrals,
    'back-button': BackButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      dateRange: {
        startDate: new Date(),
        endDate: new Date()
      }
    }
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
      'GET_REFERRAL_INFO',
      'GET_AFFILIATE_REF',
      'GET_NAME_REF_BY_UID',
      'GET_STATUS_REF_BY_UID',
      'GET_DATE_CALENDAR'
    ])
  },
  mounted () {
    this[CHANGE_AFFILIATE_REF_UID](this.$route.params.uid)
  },
  methods: {
    ...mapActions([
      'CHANGE_PERIOD_CATEGORIES_SELECTED',
      'CHANGE_REFERRALS_CATEGORIES_SELECTED',
      'CHANGE_AFFILIATE_REF_UID'
    ]),
    goBack () {
      this.$router.push('/affiliate/referrals')
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

.referrals-page-view h1
{
  color: #B2B2B2;
  margin-bottom: 75px;
}

.referrals-page-view h1 span
{
  color: #ffffff;
}

.referrals-page-view h1 span
{
  color: #ffffff;
}

.referrals-page-view h1 span.status
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  background: #E52525;
  color: #FFFFFF;
  display: inline-block;
  vertical-align: top;
  padding: 3px 5px 4px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.referrals-page-view h3
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.referrals-page-view h3 span
{
  color: #B2B2B2;
}

.referrals-page-view .go-back-button
{
  margin-bottom: 80px;
}

.referrals-page-view .setting-affiliate
{
  background: #2C2C2C;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.referrals-page-view .setting-affiliate .left-side > div
{
  margin-right: 20px;
  margin-bottom: 20px;
}

.referrals-page-view .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.referrals-page-view .setting-affiliate .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
}

.referrals-page-view .setting-affiliate .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.referrals-page-view .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.referrals-page-view .setting-affiliate .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.referrals-page-view .setting-affiliate .right-side .search-input input
{
  min-width: 285px;
}

.main-wrapper.light-theme .referrals-page-view h1,
.main-wrapper.light-theme .referrals-page-view h3 span
{
  color: #989898;
}

.main-wrapper.light-theme .referrals-page-view h1 span,
.main-wrapper.light-theme .referrals-page-view h3
{
  color: #000000;
}

.main-wrapper.light-theme .referrals-page-view h1 span.status
{
  color: #ffffff;
}

.main-wrapper.light-theme .referrals-page-view .setting-affiliate
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .button-flex .switch
{
  background: #D4D4D4;
}

.main-wrapper.light-theme .button-flex .switch.active
{
  background: #E52525;
}

@media (max-width: 1250px) {
  .referrals-page-view .setting-affiliate
  {
    display: block;
  }

  .referrals-page-view .setting-affiliate .right-side .search-input input
  {
    margin-bottom: 20px;
    width: auto;
  }
}
</style>
