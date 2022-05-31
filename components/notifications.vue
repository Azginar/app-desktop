<template>
  <div class="notifications-block">
    <h3>Notifications</h3>
    <div class="black-block">
      <div class="table-row">
        <div class="col-row">
          <p>Language</p>
          <span> English </span>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Low margin level</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataMarginLevel" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Withdrawal confirmation</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataWithdrawalConfirmation" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Email notifications</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataEmailNotifications" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="table-row-border">
          <div class="title-table">
            <h5>Email subscriptions</h5>
          </div>
          <div class="table-row">
            <div v-for="row in dataEmailSubscriptions" :key="row.title" class="col-row">
              <p>{{ row.title }}</p>
              <span v-if="row.value === 'No'"> {{ row.value }} </span>
              <span v-else> <i>{{ row.value }}</i> </span>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-block">
        <NuxtLink to="/settings/notification">
          <default-button
            :type="'trans-button'"
            :label="'Edit'"
            :click-event="() => {}"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from './default-button.vue'
export default {
  name: 'NotificationsBlock',
  components: {
    'default-button': DefaultButton
  },
  props: {
    dataMarginLevel: Array,
    dataWithdrawalConfirmation: Array,
    dataEmailNotifications: Array,
    dataEmailSubscriptions: Array
  }
}
</script>
<style>
  .notifications-block h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 18px;
  }

  .notifications-block .black-block
  {
    position: relative;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  .notifications-block .black-block p
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 100%;
    text-transform: uppercase;
    color: #B2B2B2;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .notifications-block .black-block span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row
  {
    display: flex;
    flex-wrap: wrap;
  }

  .notifications-block .black-block > .table-row > div.col-row
  {
    margin-bottom: 30px;
    margin-right: 60px;
  }

  .notifications-block .black-block .table-row > div
  {
    margin-right: 60px;
    margin-bottom: 20px;
    position: relative;
  }

  .notifications-block .black-block .table-row>div
  {
    width: auto;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row-border
  {
    display: inline-block;
    background: #2B2B2B;
    padding: 0 20px 0;
    margin-bottom: 31px;
    border: 1px solid #373737;
    border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
  }

  .notifications-block .black-block .table-row
  {
    display: flex;
    flex-wrap: wrap;
    padding-top: 14px;
  }

  .notifications-block .black-block > .table-row
  {
    padding-top: 0;
  }

  .notifications-block .black-block .table-row > div
  {
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .notifications-block .black-block .table-row > div:last-child
  {
    margin-right: 0;
    width: auto;
  }

  .notifications-block .black-block .table-row > div i
  {
    font-style: normal;
    color: #B2B2B2;
  }

  .notifications-block .black-block .table-row > div span
  {
    color: #737373;
  }

  .notifications-block .black-block .title-table
  {
    margin-bottom: 0;
    margin-top: -11px;
    margin-left: -5px;
    position: relative;
  }

  .notifications-block .black-block .title-table h5
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 100%;
    color: #B2B2B2;
    padding-right: 5px;
    padding-left: 5px;
    text-transform: uppercase;
    display: inline-block;
    background: #2B2B2B;
  }

  .notifications-block .black-block .btn-block
  {
    text-align: right;
  }

  .notifications-block .black-block .btn-block .trans-button
  {
    background: #333333;
  }

  .main-wrapper.light-theme .notifications-block .black-block .table-row-border
  {
    background: #ffffff;
    border-color: #D4D4D4;
  }

  .main-wrapper.light-theme .notifications-block .black-block .title-table h5
  {
    background: #ffffff;
    color: #989898;
  }

  .main-wrapper.light-theme .notifications-block .black-block .table-row > div:first-child span,
  .main-wrapper.light-theme .notifications-block .black-block .table-row > div i
  {
    color: #989898;
  }
</style>
