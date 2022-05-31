<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="promo-materials-page">
        <div class="go-back-button">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1>Presentations</h1>
        <promo-material :promo-block-data="GET_PROMO_LOGO_AND_CARD" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>

<script>
import userSettingsRequest from '@/utils/userSettingsRequest'
import { createNamespacedHelpers } from 'vuex'
import HOCWithLabelAndNotifications from '@/components/HOC-with-label-and-notifications'
import PromoMaterial from '@/components/affiliate/promo-material'
import BackButton from '@//components/back-button'
const { mapGetters } = createNamespacedHelpers('affiliate')
export default {
  components: {
    HOCWithLabelAndNotifications,
    'promo-material': PromoMaterial,
    'back-button': BackButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_PROMO_LOGO_AND_CARD'
    ])
  },
  methods: {
    goBack () {
      this.$router.push('/promo-materials')
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

.promo-materials-page .select-country
{
  max-width: 385px;
  margin-bottom: 40px;
}

.promo-materials-page .go-back-button
{
  margin-bottom: 80px;
}

.promo-materials-page h1
{
  margin-bottom: 80px;
}
</style>
