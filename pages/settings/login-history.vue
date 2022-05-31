<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="login-history-page">
        <div class="back-btn-block">
          <NuxtLink to="/settings/index">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Login history</h1>
        <table-login-history :history-list="HISTORY_LIST" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../utils/userSettingsRequest'
import BackButton from '../../components/back-button.vue'
import TableLoginHistory from '../../components/loginHistory'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions } = createNamespacedHelpers('login-history')
// const { mapState } = createNamespacedHelpers('settings')
export default {
  components: {
    'back-button': BackButton,
    'table-login-history': TableLoginHistory,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      scrolled: false
    }
  },
  computed: {
    ...mapGetters([
      'HISTORY_LIST'
    ])
  },
  created () {
    this.LOAD_LOGIN_HISTORY_LIST({ page: 0 })
  },
  methods: {
    ...mapActions([
      'LOAD_LOGIN_HISTORY_LIST'
    ])
  }
}
</script>
<style>
.login-history-page
{
  padding-bottom: 100px;
}

.login-history-page h1
{
  margin-bottom: 20px;
}

.login-history-page .back-btn-block
{
  margin-bottom: 80px;
}

.login-history-page .login-history table
{
  max-width: 580px;
}

@media (max-width: 1500px) {
  .login-history-page .login-history-page-form .row-line
  {
    display: block;
  }

  .login-history-page .login-history-page-form .row-line > div
  {
    width: 100%;
    margin-bottom: 20px;
  }
}

.indicator {
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  background-color: #999;
  position: fixed;
  left: 10px;
  top: 10px;
}
.boom {
  background-color: red;
}
</style>
