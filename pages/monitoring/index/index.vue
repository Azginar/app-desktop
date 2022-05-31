<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="monitoring-page">
        <h1>
          Social Trading
        </h1>
        <sub-nemu :link-uid="GET_USER_UID" />
        <div class="table-block">
          <h3>Rating of traders with START accounts</h3>
          <div class="raiting-filters">
            <div class="row-line">
              <div class="col-line">
                <OnlySelectBlack
                  :options="FILTER_RATING"
                  :handle-select="CHANGE_FILTER_RATING"
                  :selected="FILTER_RATING_SELECTED"
                />
              </div>
              <div class="col-line">
                <filter-button
                  :label="'Filters'"
                  :status="'Off'"
                  :click-event="() => {}"
                  :type="'trans-button'"
                />
              </div>
              <div class="col-line">
                <input-with-icon :placeholder="'Search by account or user nickname'" />
              </div>
            </div>
          </div>
          <table-social-trading-raiting :table-head="HEAD_SOCIAL_TRADING_RAITING" :table-data="TABLE_SOCIAL_TRADING_RAITING" />
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import FilterButton from '../../../components/filter-button'
import InputWithIcon from '../../../components/input-with-icon'
import tableSocialTradingRaiting from '../../../components/socialTrading/tableSocialTradingRaiting'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import OnlySelectBlack from '../../../components/OnlySelectBlack'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import { CHANGE_FILTER_RATING } from '../../../modules/socialTrading/mutation-types'
const { mapState, mapActions } = createNamespacedHelpers('socialTrading')
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  components: {
    'filter-button': FilterButton,
    'input-with-icon': InputWithIcon,
    'sub-nemu': SubMenu,
    'table-social-trading-raiting': tableSocialTradingRaiting,
    OnlySelectBlack,
    HOCWithLabelAndNotifications
  },
  computed: {
    ...mapState([
      'HEAD_SOCIAL_TRADING_RAITING',
      'TABLE_SOCIAL_TRADING_RAITING',
      'FILTER_RATING',
      'FILTER_RATING_SELECTED'
    ]),
    ...mapGetters([
      'GET_USER_UID'
    ])
  },
  methods: {
    ...mapActions([CHANGE_FILTER_RATING])
  },
  async asyncData (context) {
    await userSettingsRequest(context)
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

.monitoring-page .raiting-filters
{
  padding: 20px 20px 0;
  background: rgba(36, 36, 36, 0.5);
}

.monitoring-page .raiting-filters .row-line
{
  display: flex;
  flex-wrap: wrap;
}

.monitoring-page .raiting-filters .selector-wrapper-black .vs__dropdown-toggle
{
  height: 40px;
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
}

.monitoring-page .raiting-filters .selector-wrapper-black .vs__selected
{
  line-height: 40px;
  font-size: 12px;
}

.monitoring-page .raiting-filters .row-line .col-line
{
  margin-bottom: 20px;
  margin-right: 20px;
}

.monitoring-page .raiting-filters .row-line .col-line:first-child
{
  width: 180px;
}

.monitoring-page .raiting-filters .row-line .col-line:last-child
{
  margin-left: auto;
  margin-right: 0;
}

.monitoring-page table
{
  width: 100%;
}

.monitoring-page
{
  padding-bottom: 80px;
}

.monitoring-page .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.monitoring-page .selector-wrapper-black .vs__selected
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
}

.main-wrapper.light-theme .monitoring-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .monitoring-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .monitoring-page .table-block h3,
.main-wrapper.light-theme .table-social-trading-raiting .avatar-block .nickname
{
  color: #000000;
}

.main-wrapper.light-theme .monitoring-page .raiting-filters
{
  background: #ffffff;
}

.main-wrapper.light-theme .monitoring-page tr th
{
  background: #ffffff;
}

.main-wrapper.light-theme .monitoring-page .table-social-trading-raiting table tbody tr td:nth-child(2),
.main-wrapper.light-theme .monitoring-page .table-social-trading-raiting table tbody tr td:nth-child(6),
.main-wrapper.light-theme .monitoring-page .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(2),
.main-wrapper.light-theme .monitoring-page .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(5),
.main-wrapper.light-theme .monitoring-page .table-social-trading-raiting table thead tr th[data-v-51c2231c]:nth-child(6)
{
  color: #989898;
}

.main-wrapper.light-theme .monitoring-page .raiting-filters .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

@media (max-width: 1500px) {
  .monitoring-page .table-social-trading-raiting table tr td,
  .monitoring-page .table-social-trading-raiting table tr th
  {
    padding-left: 5px;
    padding-right: 5px;
    vertical-align: top;
  }
}

@media (max-width: 1200px) {
  .monitoring-page .table-social-trading-raiting .avatar-block
  {
    display: block;
  }

  .monitoring-page .table-social-trading-raiting .avatar-block .avatar
  {
    display: none;
  }

  .monitoring-page .table-social-trading-raiting table tr td:first-child,
  .monitoring-page .table-social-trading-raiting table tr th:first-child
  {
    padding-left: 10px;
  }

  .monitoring-page .table-social-trading-raiting table tr td:last-child,
  .monitoring-page .table-social-trading-raiting table tr th:last-child
  {
    padding-right: 10px;
  }

  .monitoring-page .raiting-filters .row-line .col-line:last-child
  {
    margin-left: 0;
  }
}
</style>
