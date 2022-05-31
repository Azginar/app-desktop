<template>
  <div class="trading-history-container">
    <table>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td v-if="row.type==='instruments'">
            <div class="instrument-block">
              <img :src="row.images[0]">
              <img :src="row.images[1]">
              <span>{{ row.instrument }}</span>
            </div>
          </td>
          <td v-else>
            <div class="trader-block">
              <div class="avater">
                <img :src="row.images[0]">
              </div>
              <span>{{ row.nicknameTrader }}</span>
            </div>
          </td>
          <td>{{ row.status }}</td>
          <td>{{ row.profit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TradingHistory',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.trading-history-container
{
  margin-bottom: 60px;
}

.trading-history-container table
{
  width: 100%;
}

.trading-history-container table tr:first-child td
{
  padding-top: 0;
}

.trading-history-container table tr td
{
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffffff;
  vertical-align: middle;
  min-height: 30px;
  padding: 9px 0;
}

.trading-history-container table tr td:first-child + td
{
  color: #737373;
}

.trading-history-container table tr td:last-child
{
  color: #B2B2B2;
  text-align: right;
}

.trading-history-container table tr td .instrument-block,
.trading-history-container table tr td .trader-block
{
  display: flex;
  align-items: center;
}

.trading-history-container table tr td .instrument-block span
{
  margin-left: 10px;
}

.trading-history-container table tr td .trader-block .avater
{
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.trading-history-container table tr td .trader-block span
{
  text-transform: none;
}

.trading-history-container table tr td .trader-block .avater img
{
  width: 100%;
}

</style>
