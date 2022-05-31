<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="statistics-page">
        <h1>Affiliate</h1>
        <sub-nemu />
        <div class="setting-affiliate">
          <div class="left-side">
            <OnlySelectBlack
              :options="PERIOD_CATEGORIES"
              :handle-select="CHANGE_PERIOD_CATEGORIES_SELECTED"
              :selected="PERIOD_CATEGORIES_SELECTED"
            />
            <date-range-picker-with-icon />
          </div>
        </div>

        <div class="graph-info">
          <div class="left-side">
            <h5>Conversion</h5>
          </div>
          <div class="right-side">
            <ul>
              <li><i class="line" /><span>Referrals</span></li>
              <li><i class="line-dashed" /><span>Visits</span></li>
            </ul>
          </div>
        </div>

        <div class="graph-block">
          <div class="graph-img">
            <graphAffiliate1 />
          </div>
        </div>

        <div class="graph-img">
          <h5>Commission</h5>
          <graphAffiliate2 />
        </div>

        <div class="graph-block">
          <h5>REFERRALS</h5>
          <div class="graph-img">
            <graphAffiliate3 />
          </div>
        </div>
        <affiliate-table-statistic :table-data="GET_AFFILIATE_STATISTIC" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '@/utils/userSettingsRequest'
import SubMenu from '@/components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import OnlySelectBlack from '@/components/OnlySelectBlack'
import DateRangePickerWithIcon from '@/components/DateRangePicker/DateRangePickerWithIcon'
import graphAffiliate1 from '@/assets/icons/graph-img-affiliate-1.svg'
import graphAffiliate2 from '@/assets/icons/graph-img-affiliate-2.svg'
import graphAffiliate3 from '@/assets/icons/graph-img-affiliate-3.svg'
import AffiliateTableStatistic from '@/components/affiliate/table-statistic'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    OnlySelectBlack,
    'date-range-picker-with-icon': DateRangePickerWithIcon,
    graphAffiliate1,
    graphAffiliate2,
    graphAffiliate3,
    'affiliate-table-statistic': AffiliateTableStatistic
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'PERIOD_CATEGORIES',
      'PERIOD_CATEGORIES_SELECTED'
    ]),
    ...mapGetters([
      'GET_AFFILIATE_STATISTIC'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_PERIOD_CATEGORIES_SELECTED'
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

.statistics-page .setting-affiliate
{
  background: #2C2C2C;
  padding: 20px 20px 0;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.statistics-page .setting-affiliate .selector-wrapper-black
{
  margin-bottom: 20px;
  margin-right: 20px;
}

.statistics-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.statistics-page .setting-affiliate .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
}

.statistics-page .setting-affiliate .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.statistics-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.statistics-page .setting-affiliate .date-range-picker-icon
{
  margin-bottom: 20px;
}

.statistics-page .setting-affiliate .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.statistics-page .graph-info
{
  display: flex;
  justify-content: space-between;
}

.statistics-page .graph-block
{
  margin-bottom: 68px;
}

.statistics-page  h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 25px;
}

.statistics-page .graph-info .right-side ul
{
  display: flex;
  flex-wrap: wrap;
}

.statistics-page .graph-info .right-side ul li
{
  margin-right: 40px;
  margin-bottom: 5px;
}

.statistics-page .graph-info .right-side ul li:last-child
{
  margin-right: 0;
}

.statistics-page .graph-info .right-side ul li:first-child
{
  margin-left: 0;
}

.statistics-page .graph-info .right-side ul li span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: inline-block;
  vertical-align: middle;
}

.statistics-page .graph-info .right-side ul li .line
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

.statistics-page .graph-info .right-side ul li .line-dashed
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

.statistics-page .graph-info .right-side ul li svg
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-bottom: 2px;
}

.statistics-page .graph-img
{
  margin-bottom: 60px;
}

.statistics-page .graph-img svg
{
  max-width: 100%;
  height: auto;
}

.main-wrapper.light-theme .statistics-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .statistics-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .statistics-page h3
{
  color: #000000;
}

.main-wrapper.light-theme .statistics-page .setting-affiliate
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .statistics-page .graph-info .right-side ul li .line,
.main-wrapper.light-theme .statistics-page .graph-info .right-side ul li .line-dashed
{
  border-color: #000000;
}

.main-wrapper.light-theme .statistics-page h5
{
  color: #989898;
}

.main-wrapper.light-theme .statistics-page .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .statistics-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #F7F6FB !important;
}

@media (max-width: 1200px) {

}
</style>
