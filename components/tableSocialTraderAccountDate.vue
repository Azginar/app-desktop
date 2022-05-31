<template>
  <div class="table-accounts">
    <table>
      <thead>
        <tr>
          <th width="20%">
            <span>Account</span>
          </th>
          <th width="14%">
            Profitability
          </th>
          <th width="18%">
            Trader's commission
          </th>
          <th width="15%">
            Investors
          </th>
          <th width="10%">
            <span>Equity</span>
          </th>
          <th width="20%">
            Show in traders' rating
          </th>
          <th width="5%" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.column" @click="linkAccount(row.login, row.server)">
          <td>
            <span>{{ row.label }}</span>
          </td>
          <td>{{ row.profitability_abs }}</td>
          <td>{{ row.commission }}</td>
          <td>0</td>
          <td><span>{{ row.equity }}</span></td>
          <td>{{ row.monitoring_show }}</td>
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
  name: 'TableSocialTradingAccountDate',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    typeDemoAccount: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    linkAccount (loginForLink, serverForLink) {
      this.$router.push(`/accounts/info?login=${loginForLink}&server=${serverForLink}`)
    }
  }
}
</script>
<style>
.table-accounts table
{
  width: 100%;
}

.table-accounts table tr th
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  text-align: left;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.table-accounts table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
}

.table-accounts table tr td span
{
  color: #FFFFFF;
}
</style>
