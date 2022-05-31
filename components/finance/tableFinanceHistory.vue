<template>
  <div class="table-history">
    <table>
      <thead>
        <tr>
          <th v-for="row in tableHead" :key="row.item">
            {{ row.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td v-if="row.id">
            {{ row.id }}
          </td>
          <td v-if="row.date">
            {{ row.date }}
          </td>
          <td v-if="row.account">
            <span>{{ row.account }}</span>
          </td>
          <td v-if="row.system">
            {{ row.system }}
          </td>
          <td v-if="row.deposit">
            {{ row.deposit }}
          </td>
          <td v-if="row.comission">
            {{ row.comission }}
          </td>
          <td v-if="row.bonus">
            {{ row.bonus }}
          </td>
          <td v-if="row.total">
            {{ row.total }}
          </td>
          <td v-if="row.withdrawal">
            {{ row.withdrawal }}
          </td>
          <td v-if="row.sourceAccount" v-html="row.sourceAccount">
            {{ row.sourceAccount }}
          </td>
          <td v-if="row.destinationAccount" v-html="row.destinationAccount">
            {{ row.destinationAccount }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableFinanceHistory',
  props: {
    tableHead: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.table-history table
{
  width: 100%;
}

.table-history table tr th
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

.table-history table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  cursor: default !important;
}

.table-history table tr:first-child td
{
  padding-top: 20px;
  height: 80px;
}

.table-history table tr td span
{
  color: #FFFFFF;
}

.table-history table tr td .status-block
{
  display: flex;
  align-items: center;
}

.table-history table tr td .status-block > div:first-child
{
  margin-right: 5px;
}

.table-history table tr td .status-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 4px;
}

.table-history table tr td .status-block p.statusAccepted
{
  color: #8DC640;
}

.table-history table tr td .status-block p.statusNotConfirmed
{
  color: #D2AC75;
  margin-right: 10px;
}

.table-history table tr td .status-block p.statusRejected
{
  color: #E52525;
}

.table-history table tr td .status-block .trans-button
{
  font-size: 10px;
  line-height: 12px;
  color: #B2B2B2;
  padding: 9px 20px 7px;
}

.table-history table tr td i
{
  font-style: normal;
}

.table-history table tr td:nth-child(5n) span
{
  color: #ffffff;
}
</style>
