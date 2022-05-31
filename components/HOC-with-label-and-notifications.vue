<template>
  <div>
    <validate-status-block />
    <slot name="page-content" />
  </div>
</template>
<script>
import ValidateStatusBlock from '../components/validate-status-block'
export default {
  name: 'HOCWithLabelAndNotifications',
  components: {
    'validate-status-block': ValidateStatusBlock
  },
  props: {
    route: {
      type: String,
      default: ''
    }
  }
}
</script>
