<template>
  <div class="partners-table-rebate">
    <div v-for="(item, index) in tableData" :key="item.titleBlock" class="two-table">
      <div class="left-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Registered</th>
              <th>UID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="wrapper">
                  <div class="left-part">
                    <div class="wrapper-img">
                      <idFlag />
                    </div>
                  </div>
                  <div class="right-part">
                    <div>
                      <h4>{{ item.fullName }}</h4>
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ item.registered }}</td>
              <td>{{ item.uid }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right-table">
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Type</th>
              <th>Custom rebate</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, itemIndex) in item.data" :key="row.titleBlock" class="accounts-ref">
              <td>{{ row.account }}</td>
              <td>{{ row.type }}</td>
              <td>
                <button-percent-account :id="row.account" :value="row.percent" :index="index" :item-index="itemIndex" :percent-old="row.percentOld" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import idFlag from '@/assets/flags/id.svg'
import ButtonPercentAccount from '@/components/affiliate/button-percent-account'
export default {
  name: 'AffiliateTableRebate',
  components: {
    idFlag,
    'button-percent-account': ButtonPercentAccount
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleButton (uid) {
      this.$router.push(`/affiliate/referral/${uid}`)
    }
  }
}
</script>
<style>
.partners-table-rebate .two-table
{
  display: flex;
}

.partners-table-rebate .two-table thead
{
  display: none;
}

.partners-table-rebate .two-table:first-child > .left-table thead,
.partners-table-rebate .two-table:first-child > .right-table thead
{
  display: table-header-group;
}

.partners-table-rebate .two-table .left-table tr td:first-child
{
  width: 50%;
}

.partners-table-rebate .two-table .left-table
{
  width: 45%;
}

.partners-table-rebate .two-table .left-table tr td
{
  width: 25%;
  vertical-align: middle;
}

.partners-table-rebate .two-table .right-table
{
  width: 55%;
}

.partners-table-rebate .two-table .right-table tr td
{
  width: 20%;
  vertical-align: middle;
}

.partners-table-rebate
{
  padding-bottom: 50px;
}

.partners-table-rebate table
{
  width: 100%;
}

.partners-table-rebate .right-table table
{
  table-layout: fixed;
}

.partners-table-rebate table tr th
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  width: 25%;
  text-align: left;
  background: #2C2C2C;
  line-height: 12px;
  white-space: nowrap;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 10px 9px;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.partners-table-rebate .left-table table tr th:first-child
{
  text-align: left;
  padding-left: 44px;
}

.partners-table-rebate table tr td
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  height: 60px;
  line-height: 16px;
  color: #737373;
  padding: 10px;
  text-align: left;
  vertical-align: top;
}

.partners-table-rebate .right-table table tr td:last-child,
.partners-table-rebate .right-table table tr th:last-child
{
  color: #B2B2B2;
}

.partners-table-rebate table tr td span
{
  color: #FFFFFF;
}

.partners-table-rebate .wrapper
{
  display: flex;
  align-items: center;
}

.partners-table-rebate .wrapper-img
{
  width: 24px;
  height: 24px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.partners-table-rebate .wrapper-img svg
{
  max-width: 100%;
  height: auto;
}

.partners-table-rebate .wrapper .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.partners-table-rebate .wrapper.no-active h4
{
  color: #737373;
}

.partners-table-rebate .wrapper .btn-block
{
  margin-bottom: 10px;
}

.partners-table-rebate .wrapper .btn-block button
{
  padding: 8px 20px 7px;
  color: #737373;
}

.partners-table-rebate-item-title-ref .wrapper .btn-block button:active,
.partners-table-rebate .wrapper .btn-block button:hover
{
  border: 1px solid rgba(229, 37, 37, 0.5);
  color: #ffffff;
}

.partners-table-rebate .wrapper .row-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.partners-table-rebate .wrapper .row-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #B2B2B2;
  display: block;
}

.partners-table-rebate .wrapper h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 0;
}

.partners-table-rebate .wrapper h4 a
{
  color: #FFFFFF;
  text-decoration: none;
}

.partners-table-rebate .wrapper .verified
{
  color: #8DC640;
}

.partners-table-rebate .wrapper .status-info
{
  margin-bottom: 5px;
}

.partners-table-rebate .wrapper .status-info span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  background: #242424;
  display: inline-block;
  padding: 4px 5px 4px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.partners-table-rebate .wrapper .partly-verified
{
  color: #D2AC75;
}

.partners-table-rebate .wrapper .partner-status
{
  color: #FFFFFF !important;
  background: #E52525 !important;
}

.partners-table-rebate .wrapper .active-referrals
{
  color: #737373;
}

.partners-table-rebate .wrapper .unverified
{
  color: #E52525;
}

.main-wrapper.light-theme .partners-table-rebate .left-table table tr th,
.main-wrapper.light-theme .partners-table-rebate table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .partners-table-rebate .right-table table tr th:last-child
{
  color: #989898;
}

.main-wrapper.light-theme .partners-table-rebate .wrapper h4
{
  color: #989898;
}

</style>
