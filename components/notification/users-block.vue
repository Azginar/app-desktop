<template>
  <div class="tabs">
    <div v-for="row in usersList" :key="row.item" :class="updateClass(row.nickname)" @click="passData(row.nickname)">
      <div class="user-messages-block">
        <div class="avatar-block">
          <img :src="row.avatar">
        </div>
        <div class="name-block">
          <p>{{ row.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UsersBlock',
  props: {
    usersList: {
      type: Array,
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
      this.activeTab = nickname.replace('@', '')
      this.$emit('updateActiveTab', {
        activeTab: this.activeTab
      })
    },
    updateClass (nickname) {
      return this.activeTab === nickname.replace('@', '') ? 'active' : ''
    }
  }
}
</script>
<style>
.avatar-block img
{
  max-width: 100%;
  height: auto;
}

.user-messages-block
{
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  padding: 10px 3px 10px 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.active .user-messages-block:before
{
  position: absolute;
  right: 3px;
  background: #E52525;
  content: "";
  width: 3px;
  height: 54px;
  top: 3px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.active .user-messages-block
{
  background: #1B1B1B;
}

.user-messages-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: #737373;
}
</style>
