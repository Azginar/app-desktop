<template>
  <div class="table-history-copying">
    <table>
      <thead>
        <tr>
          <th>Managing trader</th>
          <th>Trader account</th>
          <th>Start copying</th>
          <th>Stop copying</th>
          <th><span>Profit</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>
            <div class="avatar-block">
              <div class="avatar">
                <img :src="row.traderImg">
              </div>
              <div class="nickname">
                {{ row.traderName }}
              </div>
            </div>
          </td>
          <td>{{ row.traderAccount }}</td>
          <td>{{ row.startCopying }}</td>
          <td>{{ row.stopCopying }}</td>
          <td><span>{{ row.profit }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'HistoryCopying',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.table-history-copying
{
  max-width: 762px;
}

.table-history-copying table
{
  width: 100%;
}

.table-history-copying table tr th
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

.table-history-copying table tr th span
{
  color: #B2B2B2;
}

.table-history-copying table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
}

.table-history-copying table tr:first-child td
{
  padding-top: 20px;
}

.table-history-copying table tr td span
{
  color: #FFFFFF;
}

.table-history-copying .avatar-block
{
  display: flex;
  align-items: center;
}

.table-history-copying .avatar-block .avatar
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

.table-history-copying .avatar-block .avatar img
{
  max-width: 100%;
  height: auto;
}

.table-history-copying .avatar-block .nickname
{
  color: #B2B2B2;
}
</style>
