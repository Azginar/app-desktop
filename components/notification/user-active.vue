<template>
  <div class="user-info-block">
    <div class="avatar-block">
      <img :src="userActiveInfo.avatar">
    </div>
    <div class="name-block">
      <p>{{ userActiveInfo.nickname }}</p>
    </div>
    <div class="btn-block">
      <default-button
        :type="'trans-button'"
        :label="'Block this user'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserActive',
  props: {
    userActiveInfo: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      activeTab: 'Tifia'
    }
  },
  methods: {
    passData (nickname) {
      this.activeTab = nickname
      this.$emit('updateActiveTab', {
        activeTab: this.activeTab
      })
    }
  }
}
</script>
<style>
.user-info-block
{
  display: flex;
  align-items: center;
  background: #2B2B2B;
  padding: 20px;
  margin-bottom: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.user-info-block .btn-block
{
  margin-left: auto;
}
</style>
