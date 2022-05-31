<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="promo-materials-page">
        <h1>Affiliate</h1>
        <sub-nemu />
        <div class="select-country">
          <SimpleSelectBlackWithIcon
            :options="GET_COUNTRY_LIST"
            :handle-select="CHANGE_SELECTED_COUNTRY_LIST"
            :label="'Select the language of promotional materials'"
            :selected="GET_SELECTED_COUNTRY_LIST"
          />
        </div>
        <promo-block :promo-block-data="GET_PROMO_BLOCK_DATA" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>

<script>
import userSettingsRequest from '@/utils/userSettingsRequest'
import { createNamespacedHelpers } from 'vuex'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import SubMenu from '@/components/one-line-sub-menu'
import PromoBlock from '@/components/affiliate/promo-block'
import SimpleSelectBlackWithIcon from '@/components/SimpleSelectBlackWithIcon'
const { mapGetters, mapActions } = createNamespacedHelpers('affiliate')
export default {
  components: {
    'sub-nemu': SubMenu,
    HOCWithLabelAndNotifications,
    SimpleSelectBlackWithIcon,
    'promo-block': PromoBlock
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_PROMO_BLOCK_DATA',
      'GET_COUNTRY_LIST',
      'GET_SELECTED_COUNTRY_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_SELECTED_COUNTRY_LIST'
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

.promo-materials-page .select-country
{
  max-width: 385px;
  margin-bottom: 40px;
}

.main-wrapper.light-theme .promo-materials-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .promo-materials-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}
</style>
