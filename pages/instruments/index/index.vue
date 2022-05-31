<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="trading-instruments-page">
        <div class="back-btn-block">
          <back-button
            :type="'back-button'"
            :label="'Back'"
            :click-event="goBack"
          />
        </div>
        <h1>Popular instruments</h1>
        <popular-instruments-table :table-data="popularInstrumentsFullList" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import userSettingsRequest from '../../../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
import BackButton from '@/components/back-button.vue'
import PopularInstrumentsTable from '@/components/instruments/popularInstruments'
import { GET_LIST_POPULAR_INSTRUMENTS } from '@/modules/instruments/getter-types'
export default {
  components: {
    HOCWithLabelAndNotifications,
    'back-button': BackButton,
    'popular-instruments-table': PopularInstrumentsTable
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    popularInstrumentsFullList () {
      return this.$store.getters[`instruments/${GET_LIST_POPULAR_INSTRUMENTS}`]
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.trading-instruments-page
{
  padding-bottom: 80px;
}

.trading-instruments-page .back-btn-block
{
  margin-bottom: 80px;
}

.trading-instruments-page h1
{
  margin-bottom: 80px;
}


</style>
