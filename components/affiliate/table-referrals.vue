<template>
  <div class="partners-table-referrals">
    <div v-for="item in tableData" :key="item.titleBlock" class="two-table">
      <div class="left-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="wrapper" :class="(item.verification === 'unverified')?'no-active':''">
                  <div class="left-part">
                    <div class="wrapper-img">
                      <idFlag />
                    </div>
                  </div>
                  <div class="right-part">
                    <div>
                      <span class="uid">uid {{ item.uid }}</span>
                      <h4>{{ item.fullName }}</h4>
                      <div class="status-info">
                        <span v-if="item.verification === 'verified'" class="verified">Verified</span>
                        <span v-else-if="item.verification === 'partly-verified'" class="partly-verified">Partly Verified</span>
                        <span v-else-if="item.verification === 'unverified'" class="unverified">Unverified</span>
                        <span v-if="item.partnerStatus" class="partner-status">
                          {{ item.partnerStatus }}
                        </span>
                        <span v-if="item.activeReferrals" class="active-referrals">
                          {{ item.activeReferrals }} active referrals
                        </span>
                      </div>
                    </div>
                    <div v-if="item.activeReferrals" class="btn-block">
                      <button class="trans-button" @click="handleButton(item.uid)">
                        VIEW REFERRALS
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ item.registered }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right-table">
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Deposit</th>
              <th>Withdrawal</th>
              <th>Balance</th>
              <th>Floating profit</th>
              <th>Volume</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in item.accounts" :key="row.titleBlock" class="accounts-ref">
              <td>{{ row.account }}</td>
              <td>{{ row.deposit }}</td>
              <td>{{ row.withdrawal }}</td>
              <td>{{ row.balance }}</td>
              <td>{{ row.profit }}</td>
              <td>{{ row.volume }}</td>
              <td>{{ row.commission }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import idFlag from '@/assets/flags/id.svg'
export default {
  name: 'AffiliateTableReferrals',
  components: {
    idFlag
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
.partners-table-referrals .two-table
{
  display: flex;
}

.partners-table-referrals .two-table thead
{
  display: none;
}

.partners-table-referrals .two-table:first-child > .left-table thead,
.partners-table-referrals .two-table:first-child > .right-table thead
{
  display: table-header-group;
}

.partners-table-referrals .two-table .left-table tr:first-child td
{
  width: 60%;
}

.partners-table-referrals .two-table .left-table
{
  width: 30%;
}

.partners-table-referrals .two-table .right-table
{
  width: 70%;
}

.partners-table-referrals .two-table .right-table tr td,
.partners-table-referrals .two-table .left-table tr td:first-child + td
{
  width: 20%;
  padding-top: 22px;
  text-align: right;
}

.partners-table-referrals .two-table .right-table tr th,
.partners-table-referrals .two-table .left-table tr td:first-child + td,
.partners-table-referrals .two-table .left-table tr th:first-child + th
{
  text-align: right;
}

.partners-table-referrals .two-table .right-table tr th:first-child,
.partners-table-referrals .two-table .right-table tr td:first-child
{
  text-align: left;
}

.partners-table-referrals .two-table .right-table tr th:first-child,
.partners-table-referrals .two-table .right-table tr td:first-child
{
  width: 185px;
}

.partners-table-referrals
{
  padding-bottom: 50px;
}

.partners-table-referrals table
{
  width: 100%;
}

.partners-table-referrals .right-table table
{
  table-layout: fixed;
}

.partners-table-referrals table tr th
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

.partners-table-referrals .left-table table tr th:first-child
{
  text-align: left;
  padding-left: 44px;
}

.partners-table-referrals table tr td
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  height: 40px;
  line-height: 16px;
  color: #737373;
  padding: 10px 10px 0;
  text-align: left;
  vertical-align: top;
}

.partners-table-referrals .right-table table tr td:last-child,
.partners-table-referrals .right-table table tr th:last-child
{
  color: #B2B2B2;
}

.partners-table-referrals table tr td span
{
  color: #FFFFFF;
}

.partners-table-referrals .wrapper
{
  display: flex;
}

.partners-table-referrals .wrapper-img
{
  width: 24px;
  height: 24px;
  margin-top: 10px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.partners-table-referrals .wrapper-img svg
{
  max-width: 100%;
  height: auto;
}

.partners-table-referrals .wrapper .uid
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  display: block;
  margin-bottom: 2px;
}

.partners-table-referrals .wrapper .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.partners-table-referrals .wrapper.no-active h4
{
  color: #737373;
}

.partners-table-referrals .wrapper .btn-block
{
  margin-bottom: 10px;
}

.partners-table-referrals .wrapper .btn-block button
{
  padding: 8px 20px 7px;
  color: #737373;
}

.partners-table-referrals-item-title-ref .wrapper .btn-block button:active,
.partners-table-referrals .wrapper .btn-block button:hover
{
  border: 1px solid rgba(229, 37, 37, 0.5);
  color: #ffffff;
}

.partners-table-referrals .wrapper .row-line p
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

.partners-table-referrals .wrapper .row-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: #B2B2B2;
  display: block;
}

.partners-table-referrals .wrapper h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 3px;
}

.partners-table-referrals .wrapper h4 a
{
  color: #FFFFFF;
  text-decoration: none;
}

.partners-table-referrals .wrapper .verified
{
  color: #8DC640;
}

.partners-table-referrals .wrapper .status-info
{
  margin-bottom: 5px;
}

.partners-table-referrals .wrapper .status-info span
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

.partners-table-referrals .wrapper .partly-verified
{
  color: #D2AC75;
}

.partners-table-referrals .wrapper .partner-status
{
  color: #FFFFFF !important;
  background: #E52525 !important;
}

.partners-table-referrals .wrapper .active-referrals
{
  color: #737373;
}

.partners-table-referrals .wrapper .unverified
{
  color: #E52525;
}

.main-wrapper.light-theme .partners-table-referrals table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .partners-table-referrals .right-table table tr td:last-child,
.main-wrapper.light-theme .partners-table-referrals .right-table table tr th:last-child
{
  color: #989898;
}

.main-wrapper.light-theme .partners-table-referrals .wrapper h4
{
  color: #000000;
}

.main-wrapper.light-theme .partners-table-referrals .wrapper .btn-block button:hover
{
  border-color: #000000;
  color: #000000;
}

.main-wrapper.light-theme .partners-table-referrals .wrapper .status-info span
{
  background: #ffffff;
  border: 1px solid #D4D4D4;
}

@media (max-width: 1500px) {
  .partners-table-referrals table tr th
  {
    font-size: 8px;
  }

  .partners-table-referrals table tr td
  {
    font-size: 8px;
  }

  .partners-table-referrals .wrapper h4
  {
    font-size: 8px;
  }

  .partners-table-referrals .wrapper .btn-block button
  {
    font-size: 8px;
  }

  .partners-table-referrals .two-table .right-table tr th:first-child, .partners-table-referrals .two-table .right-table tr td:first-child
  {
    width: 100px;
  }
}
</style>
