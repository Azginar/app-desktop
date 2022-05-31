<template>
  <div class="table-investors-accounts">
    <table>
      <thead>
        <tr>
          <th><span>Account</span></th>
          <th><span>Managing trader</span></th>
          <th>Trader account</th>
          <th>Status</th>
          <th>Equity</th>
          <th>Profit of trading</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>{{ row.account }}</td>
          <td>
            <div v-if="row.traderImg!==''" class="avatar-block">
              <div class="avatar">
                <img :src="row.traderImg">
              </div>
              <div class="nickname">
                {{ row.traderName }}
              </div>
            </div>
            <i v-else>{{ row.traderName }}</i>
          </td>
          <td>{{ row.traderAccount }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.equity }}</td>
          <td><span>{{ row.profit }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableInvestorsAccountDate',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.table-investors-accounts table
{
  width: 100%;
}

.table-investors-accounts table tr th
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

.table-investors-accounts table tr th span
{
  color: #B2B2B2;
}

.table-investors-accounts table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
}

.table-investors-accounts table tr:first-child td
{
  padding-top: 20px;
}

.table-investors-accounts table tr td span
{
  color: #FFFFFF;
}

.table-investors-accounts table tr td i
{
  font-style: normal;
  text-transform: none;
  color: #B2B2B2;
}

.table-investors-accounts .avatar-block
{
  display: flex;
  align-items: center;
}

.table-investors-accounts .avatar-block .avatar
{
  width: 40px;
  height: 40px;
  margin-right: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.table-investors-accounts .avatar-block .avatar img
{
  max-width: 100%;
  height: auto;
}

.table-investors-accounts .avatar-block .nickname
{
  color: #B2B2B2;
}
</style>
