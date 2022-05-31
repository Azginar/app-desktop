<template>
  <div class="main-info-account">
    <h3>General information</h3>
    <div class="black-block">
      <div class="table-row">
        <div v-for="row in account" :key="row.title" class="col-row">
          <div>
            <p>{{ row.title }}</p>
            <span v-if="row.title === 'Registered' || row.title === 'Last login'" class="simple-text">
              <i>{{ row.time }}</i> {{ row.date }}
            </span>
            <span v-else-if="row.title === 'Leverage'" class="simple-text no-margin">
              {{ row.value }}
              <div class="set-btn-block">
                <default-button
                  :type="'trans-button'"
                  :label="'Change'"
                />
              </div>
            </span>
            <span v-else>
              {{ row.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <div class="left-side">
          <div>
            <default-button
              :type="'trans-button'"
              :label="'Deposit'"
            />
          </div>
          <div v-if="!this.typeDemoAccount">
            <default-button
              :type="'trans-button'"
              :label="'Transfer'"
            />
          </div>
          <div v-if="!this.typeDemoAccount">
            <default-button
              :type="'trans-button'"
              :label="'Withdrawal'"
            />
          </div>
        </div>
        <div class="right-side">
          <div>
            <default-button
              :type="'trans-button'"
              :label="'Change password'"
            />
          </div>
          <div>
            <default-button
              :type="'trans-button'"
              :label="'Delete account'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
export default {
  name: 'TableAccountInfo',
  components: {
    'default-button': DefaultButton
  },
  props: {
    account: {
      type: Array,
      default: () => []
    },
    typeDemoAccount: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
  .main-info-account h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 18px;
  }

  .main-info-account .black-block
  {
    position: relative;
    background: #2C2C2C;
    padding: 20px 20px 0;
    overflow: hidden;
    margin-bottom: 80px;
    border-top: 1px solid rgba(94, 94, 94, 0.5);
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  }

  .main-info-account .black-block p
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 100%;
    text-transform: uppercase;
    color: #737373;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .main-info-account .black-block span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #B2B2B2;
  }

  .main-info-account .black-block span i
  {
    font-style: normal;
    color: #737373;
  }

  .main-info-account .black-block .table-row
  {
    display: flex;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .table-row .no-margin
  {
    margin-top: -4px;
    display: flex !important;
    align-items: center;
  }

  .main-info-account .black-block .table-row .set-btn-block
  {
    margin-left: 10px;
  }

  .main-info-account .black-block .table-row button
  {
    background: transparent;
    font-size: 12px;
    line-height: 15px;
    padding: 7px 20px 6px;
    color: #737373;
  }

  .main-info-account .black-block .table-row button:hover
  {
    color: #ffffff;
  }

  .main-info-account .black-block .table-row .set-btn-block
  {
    display: inline-block;
  }

  .main-info-account .black-block .table-row .set-btn-block
  {
    margin-bottom: 0;
  }

  .main-info-account .black-block .table-row > div
  {
    margin-right: 60px;
    margin-bottom: 30px;
    position: relative;
  }

  .main-info-account .black-block .btn-block
  {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .btn-block .left-side .trans-button
  {
    margin-right: 20px;
  }

  .main-info-account .black-block .btn-block .right-side .trans-button:first-child
  {
    margin-right: 20px;
  }

  .main-info-account .black-block .btn-block .left-side,
  .main-info-account .black-block .btn-block .right-side
  {
    display: flex;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .btn-block .left-side > div,
  .main-info-account .black-block .btn-block .right-side > div
  {
    margin-bottom: 20px;
  }

  .main-info-account .black-block .trans-button
  {
    background: #333333;
  }
</style>
