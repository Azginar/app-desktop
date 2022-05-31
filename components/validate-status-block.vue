<template>
  <div>
    <panel-with-notification
      v-if="isValidateBlockShow"
      class="panel-notification-proxy"
      :need-to-upload-collection="GET_VERIFICATION_DATE"
      :title="'For full profile verification please complete following steps:'"
      :handle-click="handleValidateByType"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import PanelWithNotification from '../components/panel-with-notification'
const { mapGetters } = createNamespacedHelpers('settings')
export default {
  name: 'ValidateStatusBlock',
  components: {
    'panel-with-notification': PanelWithNotification
  },
  computed: {
    ...mapGetters(['GET_VERIFICATION_DATE']),
    isValidateBlockShow () {
      return this.GET_VERIFICATION_DATE.length > 0
    }
  },
  methods: {
    handleValidateByType () {
      // console.info(`user press ${validateType}`)
    }
  }
}
</script>
<style>
  .panel-notification-proxy{
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 20px;
  }
</style>
