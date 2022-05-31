<template>
  <div class="table-accounts">
    <table>
      <thead>
        <tr>
          <th width="22%">
            <span>Account</span>
          </th>
          <th width="10%">
            Leverage
          </th>
          <th width="14%">
            Balance
          </th>
          <th width="13%">
            Credit
          </th>
          <th width="15%">
            <span>Equity</span>
          </th>
          <th width="17%">
            Floating Profit/Loss
          </th>
          <th width="10%">
            Margin
          </th>
          <th width="5%" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item" @click="linkAccount(row.login, row.server_id)">
          <td>
            <span>{{ row.label }}</span>
          </td>
          <td>{{ row.leverage }}</td>
          <td>{{ row.balance }}</td>
          <td>{{ row.credit }}</td>
          <td><span>{{ row.equity }}</span></td>
          <td>{{ row.floating }}</td>
          <td>{{ row.margin }}</td>
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
  name: 'TableAccountDate',
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
