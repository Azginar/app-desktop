<template>
  <div class="partners-table-block">
    <table>
      <thead>
        <tr>
          <th>Account</th>
          <th>Active referrals</th>
          <th>Balance</th>
          <th>Last week</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in partnersCardData" :key="row.titleBlock">
          <td>{{ row.account }}</td>
          <td>{{ row.activeReferrals }}</td>
          <td>{{ row.balance }}</td>
          <td>{{ row.lastWeek }}</td>
          <td>
            <div class="circle">
              <span />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'PartnerTableAccounts',
  props: {
    partnersCardData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (slug) {
      if (slug !== undefined) {
        this.$router.push(`/affiliate/campaigns/${slug}`)
      }
    }
  }
}
</script>
<style>
.partners-table-block table
{
  width: 100%;
  margin-bottom: 50px;
}

.partners-table-block table tr th
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  text-align: right;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.partners-table-block table tr th:first-child
{
  text-align: left;
}

.partners-table-block table tr td
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  height: 60px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  text-align: right;
}

.partners-table-block table tr td:first-child
{
  text-align: left;
  color: #ffffff;
}

.partners-table-block table tr td span
{
  color: #FFFFFF;
}

.partners-table-block table tr td .circle {
  width: 16px;
  height: 4px;
  text-align: center;
  margin-left: auto;
}

.partners-table-block table tr td .circle span {
  background: #737373;
  width: 4px;
  height: 4px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.partners-table-block table tr td .circle span:before {
  position: absolute;
  content: "";
  width: 4px;
  height: 4px;
  left: -6px;
  bottom: 0;
  background: #737373;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.partners-table-block table tr td .circle span:after {
  position: absolute;
  content: "";
  width: 4px;
  height: 4px;
  right: -6px;
  bottom: 0;
  background: #737373;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.main-wrapper.light-theme .partners-table-block table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .partners-table-block table tr td:first-child
{
  color: #000000;
}
</style>
