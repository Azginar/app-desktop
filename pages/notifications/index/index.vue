<template>
  <section class="messages-page">
    <section class="messages-from-user">
      <perfect-scrollbar>
        <div class="search-block">
          <input-with-icon :placeholder="'Search by user nickname'" />
        </div>
        <users-block :users-list="usersList" @updateActiveTab="getActiveTab" />
      </perfect-scrollbar>
    </section>
    <section class="messages-content">
      <perfect-scrollbar>
        <div class="block-messages-content">
          <div class="send-message-block">
            <div class="block-container">
              <black-input />
              <div class="btn-chat">
                <default-button
                  :type="'red-button'"
                  :label="'Send'"
                  :click-event="() => {}"
                />
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'Tifia'">
            <users-active :user-active-info="userActive[activeTab]" />
            <messages-block :messages-data="messagesListFromTifia" />
          </div>
          <div v-if="activeTab === 'Tifia News'">
            <users-active :user-active-info="userActive[activeTab]" />
            <messages-block :messages-data="messagesListFromTifiaNews" />
          </div>
          <div v-if="activeTab === 'Tifia Support'">
            <users-active :user-active-info="userActive[activeTab]" />
            <messages-block :messages-data="messagesListFromTifiaSupport" />
          </div>
          <div v-if="activeTab === 'Dshadow'">
            <users-active :user-active-info="userActive[activeTab]" />
            <messages-block :messages-data="messagesListFromUser" />
            <div class="message">
              <div class="avatar-block">
                <img src="https://social.tifia.com/uploads/avatars/000/078/3bb6d22421046de3704ea9e7dd69443f.jpg">
              </div>
              <div class="info-block">
                <h3><i style="color: #E52525;">You</i> <span>1 months ago</span></h3>
                <p>Hi</p>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </section>
  </section>
</template>
<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import {
  GET_MESSAGES_FROM_TIFIA,
  GET_MESSAGES_FROM_TIFIA_NEWS,
  GET_MESSAGES_FROM_TIFIA_SUPPORT,
  GET_MESSAGES_FROM_USER,
  GET_USERS_LIST,
  GET_USER_ACTIVE
} from '@/modules/notifications/getter-types'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import InputWithIcon from '../../../components/input-with-icon'
import DefaultButton from '../../../components/default-button.vue'
import BlackInput from '../../../components/black-input'
import MessagesBlock from '../../../components/notification/messages-block.vue'
import usersBlock from '../../../components/notification/users-block'
import userActive from '../../../components/notification/user-active'
export default {
  layout: 'MessagesLayout',
  components: {
    'input-with-icon': InputWithIcon,
    'default-button': DefaultButton,
    BlackInput,
    PerfectScrollbar,
    'messages-block': MessagesBlock,
    'users-block': usersBlock,
    'users-active': userActive
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      activeTab: 'Tifia'
    }
  },
  computed: {
    messagesListFromTifia () {
      return this.$store.getters[`notifications/${GET_MESSAGES_FROM_TIFIA}`]
    },
    messagesListFromTifiaNews () {
      return this.$store.getters[`notifications/${GET_MESSAGES_FROM_TIFIA_NEWS}`]
    },
    messagesListFromTifiaSupport () {
      return this.$store.getters[`notifications/${GET_MESSAGES_FROM_TIFIA_SUPPORT}`]
    },
    messagesListFromUser () {
      return this.$store.getters[`notifications/${GET_MESSAGES_FROM_USER}`]
    },
    usersList () {
      return this.$store.getters[`notifications/${GET_USERS_LIST}`]
    },
    userActive () {
      return this.$store.getters[`notifications/${GET_USER_ACTIVE}`]
    }
  },
  methods: {
    getActiveTab (data) {
      this.activeTab = data.activeTab
    }
  }
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style>
.messages-page .ps
{
  height: 100vh;
  padding: 20px;
}

.messages-page .ps .ps__rail-x:hover,
.messages-page .ps .ps__rail-y:hover,
.messages-page .ps .ps__rail-x:focus,
.messages-page .ps .ps__rail-y:focus,
.messages-page .ps .ps__rail-x.ps--clicking,
.messages-page .ps .ps__rail-y.ps--clicking
{
  background-color: transparent;
  opacity: 1;
}

.messages-page .ps__rail-y:hover > .ps__thumb-y,
.messages-page .ps__rail-y:focus > .ps__thumb-y,
.messages-page .ps__rail-y.ps--clicking .ps__thumb-y
{
  width: 6px;
  opacity: 1;
}

.messages-page .ps__thumb-y
{
  background-color: #515151;
}

.messages-page
{
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.messages-page .messages-from-user
{
  width: 360px;
  min-height: 100vh;
  background: #2B2B2B;
}

.messages-page .messages-content .ps
{
  padding: 10px 10px 0;
}

.messages-page .search-block
{
  margin-bottom: 21px;
}

.messages-page .block-messages-content
{
  position: relative;
  padding-bottom: 130px;
  min-height: 100vh;
}

.messages-page .avatar-block
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

.messages-page .avatar-block img
{
  max-width: 100%;
  height: auto;
}

.messages-page .messages-content
{
  width: 100%;
  position: relative;
}

.messages-page .messages-content .send-message-block
{
  position: absolute;
  display: flex;
  width: 100%;
  left: 0;
  padding-left: 30px;
  padding-right: 30px;
  bottom: 40px;
}

.messages-page .messages-content .send-message-block .block-container
{
  display: flex;
  width: 100%;
}

.messages-page .messages-content .send-message-block .block-container > div:first-child
{
  width: 100%;
  margin-right: 20px;
}

.messages-page .messages-content .send-message-block .black-input
{
  height: 40px;
  font-family: Arial;
  line-height: 40px;
}

.messages-page .messages-content .send-message-block .red-button
{
  font-size: 15px;
  line-height: 14px;
}

.main-wrapper.light-theme .messages-page .messages-from-user,
.main-wrapper.light-theme .user-info-block
{
  background: #ffffff;
}

.main-wrapper.light-theme .active .user-messages-block
{
  background: #F7F6FB;
}

.main-wrapper.light-theme .message .info-block h3 i
{
  color: #000000;
}

.main-wrapper.light-theme .messages-page .messages-content .send-message-block .black-input
{
  background: #ffffff;
  color: #000000;
}

@media (max-width: 1200px) {

}
</style>
