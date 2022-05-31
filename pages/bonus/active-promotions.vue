<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="promotions-page">
        <div class="back-btn-block">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1>Promotions</h1>
        <sub-menu />
        <h3>Active promotions</h3>
        <promo-block-page :promo-info="promotionsInfo" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import SubMenu from '../../components/one-line-sub-menu'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
import promoBlockPage from '../../components/promotions/promoBlockPage'
import BackButton from '../../components/back-button'
import userSettingsRequest from '../../utils/userSettingsRequest'
import { GET_PROMOTIONS_INFO_BLOCKS } from '@/modules/promotions/getter-types'
export default {
  components: {
    'sub-menu': SubMenu,
    HOCWithLabelAndNotifications,
    'promo-block-page': promoBlockPage,
    'back-button': BackButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    promotionsInfo () {
      return this.$store.getters[`promotions/${GET_PROMOTIONS_INFO_BLOCKS}`]
    },
  },
  methods: {
    goBack () {
      this.$router.push('/')
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

.promotions-page .back-btn-block
{
  margin-bottom: 80px;
}

.promotions-page
{
  padding-bottom: 80px;
}

.promotions-page h1
{
  margin-bottom: 30px;
}

.promotions-page h3
{
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid #484848;
  font-weight: 600;
  margin-bottom: 30px;
}

.main-wrapper.light-theme .promotions-page .ul-tabs li a
{
  color: #000000 !important;
}

.main-wrapper.light-theme .promotions-page .ul-tabs li a.non-active-link
{
  color: #989898 !important;
}

.main-wrapper.light-theme .promotions-page h1
{
  color: #000000;
}

.main-wrapper.light-theme .promotions-page h3
{
  color: #000000;
  border-color: #D4D4D4;
}

</style>
