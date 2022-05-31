<template>
  <div class="messages-block">
    <div v-for="row in messagesData" :key="row.item" class="message">
      <div class="avatar-block">
        <img :src="row.avatar">
      </div>
      <div class="message-text">
        <div class="title-with-time">
          <div>
            <h4>{{ row.initiator }}</h4>
          </div>
          <div>
            <p class="time">
              {{ transformDate(row.date) }}
            </p>
          </div>
        </div>
        <p>{{ row.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Messages',
  props: {
    messagesData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    transformDate (date) {
      return (date || '').split(' ')[0]
    }
  }
}
</script>
<style>
.messages-block .message
{
  display: flex;
  margin-bottom: 20px;
}

.messages-block .message .avatar-block
{
  overflow: hidden;
  width: 40px;
  flex-shrink: 0;
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.messages-block .message .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.messages-block .message .message-text
{
  width: 100%;
}

.messages-block .message .message-text img
{
  margin-bottom: 10px;
  max-width: 100%;
  height: auto;
}

.messages-block .title-with-time
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.messages-block .message h4
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  margin-bottom: 0;
  color: #FFFFFF;
}

.messages-block .message p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 10px;
}

.messages-block .message p.time
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #737373;
  margin-bottom: 0;
}

.messages-block .message button
{
  padding: 4px 20px 3px;
  font-size: 10px;
  line-height: 11px;
}
</style>
