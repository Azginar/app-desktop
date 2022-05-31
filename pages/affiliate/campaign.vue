<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="campaigns-main-page">
        <h1>Affiliate</h1>
        <sub-nemu />
        <div class="block-button">
          <default-button
            :type="'trans-button'"
            :label="'Create new campaign'"
            :click-event="()=>{}"
          />
        </div>
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
        <campaign-table :campaign-data="GET_CAMPAIGN_DATA" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import DefaultButton from '@/components/default-button.vue'
import campaignTable from '@/components/affiliate/campaign-table'
import userSettingsRequest from '@/utils/userSettingsRequest'
import SubMenu from '@/components/one-line-sub-menu'
import OnlySelectBlack from '@/components/OnlySelectBlack'
import DateRangePickerWithIcon from '@/components/DateRangePicker/DateRangePickerWithIcon'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    'default-button': DefaultButton,
    OnlySelectBlack,
    'date-range-picker-with-icon': DateRangePickerWithIcon,
    'campaign-table': campaignTable
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
      'GET_CAMPAIGN_DATA'
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

.campaigns-main-page .block-button
{
  margin-bottom: 20px;
}

 .campaigns-main-page .setting-affiliate
 {
   background: #2C2C2C;
   padding: 20px 20px 0;
   margin-bottom: 40px;
   display: flex;
   justify-content: space-between;
   border-top: 1px solid rgba(94, 94, 94, 0.5);
   border-bottom: 1px solid rgba(94, 94, 94, 0.5);
 }

.campaigns-main-page .setting-affiliate .selector-wrapper-black
{
  margin-bottom: 20px;
  margin-right: 20px;
}

.campaigns-main-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.campaigns-main-page .setting-affiliate .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat, sans-serif;
}

.campaigns-main-page .setting-affiliate .selector-wrapper-black .vs__actions
{
  top: 14px;
}

.campaigns-main-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.campaigns-main-page .setting-affiliate .date-range-picker-icon
{
  margin-bottom: 20px;
}

.campaigns-main-page .setting-affiliate .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.main-wrapper.light-theme .campaigns-main-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .campaigns-main-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .campaigns-main-page .setting-affiliate
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .campaigns-main-page
{
  padding-bottom: 80px;
}

.main-wrapper.light-theme .campaigns-main-page .setting-affiliate .selector-wrapper-black .vs__dropdown-toggle
{
  background: #F7F6FB;
  border-color: #D4D4D4;
}

.campaigns-main-page .setting-affiliate .vs--open .vs__dropdown-toggle
{
  background: #F7F6FB !important;
}

@media (max-width: 1200px) {

}
</style>
