<template>
  <div class="popular-instruments-table">
    <table>
      <thead>
        <tr>
          <th class="instruments">Instruments</th>
          <th class="traders">Trades</th>
          <th class="percent-buy"></th>
          <th class="buy">Buy</th>
          <th class="sell">Sell</th>
          <th class="percent-sell"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>
            <div class="instrument-block">
              <img :src="row.images[0]">
              <img :src="row.images[1]">
              <span>{{ row.instrument }}</span>
            </div>
          </td>
          <td><i>{{ row.traders }}</i></td>
          <td class="percent-buy"><div class="percent-block"><div class="green-block" :style="`width: ${row.percentBuy};`"></div></div></td>
          <td class="buy"><span>{{ row.percentBuy }}</span></td>
          <td class="sell"><span>{{ row.percentSell }}</span></td>
          <td class="percent-sell"><div class="percent-block"><div class="red-block" :style="`width: ${row.percentSell};`"></div></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'PopularInstrumentsTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.popular-instruments-table
{
  margin-bottom: 60px;
}

.popular-instruments-table table
{
  max-width: 1178px;
}

.popular-instruments-table .percent-block
{
  width: 300px;
  background: #484848;
  height: 2px;
  overflow: hidden;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.popular-instruments-table .percent-buy .percent-block
{
  margin-left: auto;
}

.popular-instruments-table .percent-block .green-block
{
  background: #8DC640;
  height: 100%;
  margin-left: auto;
}

.popular-instruments-table i
{
  font-style: normal;
  color: #ffffff;
}

.popular-instruments-table .percent-block .red-block
{
  background: #FF4B55;
  height: 100%;
}

.popular-instruments-table table tr th
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  text-align: right;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 11px 5px 10px;
  background: rgba(36, 36, 36, 0.5);
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.popular-instruments-table table tr th.instruments
{
  width: 15%;
}

.popular-instruments-table table tr th.traders
{
  width: 15%;
}

.popular-instruments-table table tr .sell
{
  width: 7%;
}

.popular-instruments-table table tr .percent-buy
{
  width: 40%;
}

.popular-instruments-table table tr th:first-child,
.popular-instruments-table table tr td:first-child
{
  padding-left: 20px;
  text-align: left;
}

.popular-instruments-table table tr th:last-child,
.popular-instruments-table table tr td:last-child
{
  padding-right: 20px;
}

.popular-instruments-table table
{
  width: 100%;
}

.popular-instruments-table table tr:first-child td
{
  padding-top: 15px;
}

.popular-instruments-table table tr td
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #B2B2B2;
  text-align: right;
  vertical-align: middle;
  min-height: 30px;
  padding: 9px 5px;
}

.popular-instruments-table table tr td span
{
  color: #B2B2B2;
}

.popular-instruments-table table tr td:last-child
{
  color: #B2B2B2;
  text-align: right;
}

.popular-instruments-table table tr td .instrument-block,
.popular-instruments-table table tr td .trader-block
{
  display: flex;
  align-items: center;
}

.popular-instruments-table table tr td .instrument-block span
{
  margin-left: 10px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}

.popular-instruments-table table tr td .trader-block .avater
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

.popular-instruments-table table tr td .trader-block span
{
  text-transform: none;
}

.popular-instruments-table table tr td .trader-block .avater img
{
  width: 100%;
}

.main-wrapper.light-theme .popular-instruments-table table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .popular-instruments-table table tr td .instrument-block span,
.main-wrapper.light-theme .popular-instruments-table i
{
  color: #000000;
}

.main-wrapper.light-theme .popular-instruments-table table tr td span
{
  color: #989898;
}

.main-wrapper.light-theme .popular-instruments-table .percent-block
{
  background: #989898;
}

@media (max-width: 1500px) {
  .popular-instruments-table .percent-block
  {
    width: 200px;
  }
}

@media (max-width: 1200px) {
  .popular-instruments-table .percent-block
  {
    width: 100px;
  }
}

</style>
