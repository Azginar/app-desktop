<template>
  <div class="account-trading-history">
    <div class="setting-account-trading-history">
      <div class="left-side">
        <OnlySelectBlack
          :options="['Last 30 Days', 'Last 60 Days', 'Last 90 Days']"
          :handle-select="() => {}"
          :selected="'Last 30 Days'"
        />
        <date-range-picker-with-icon />
      </div>
      <div class="right-side">
        <search-input :placeholder="'Search by number ticket'" />
      </div>
    </div>
    <div class="table-account-trading-history">
      <table>
        <thead>
          <tr>
            <th>
              Ticket
            </th>
            <th>Type</th>
            <th>Symbol</th>
            <th>Volume</th>
            <th width="16%">
              Open time
            </th>
            <th width="11%">
              <span>Open price</span>
            </th>
            <th>SL</th>
            <th>TP</th>
            <th width="15%">
              Close time
            </th>
            <th width="17%">
              <span>Current/Closing price</span>
            </th>
            <th>Swap</th>
            <th width="10%">
              <span>Profit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50724145</td>
            <td>Buy</td>
            <td>CADJPY</td>
            <td>0.01</td>
            <td>17:40:43 11.02.2020</td>
            <td><span>82.501</span></td>
            <td>0</td>
            <td>0</td>
            <td>19:02:14 11.02.2020</td>
            <td><span>82.501</span></td>
            <td>0</td>
            <td><span>+0.16 USD</span></td>
          </tr>
          <tr v-for="row in tableData" :key="row.item">
            <td>{{ row.ticket }}</td>
            <td>{{ row.type }}</td>
            <td>{{ row.symbol }}</td>
            <td>{{ row.volume }}</td>
            <td>{{ row.openTime }}</td>
            <td><span>{{ row.openPrice }}</span></td>
            <td>{{ row.sl }}</td>
            <td>{{ row.tp }}</td>
            <td>{{ row.closeTime }}</td>
            <td><span>{{ row.currentPrice }}</span></td>
            <td>{{ row.swap }}</td>
            <td><span>{{ row.profit }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import OnlySelectBlack from '../components/OnlySelectBlack'
import searchInput from '../components/search-input'
import DateRangePickerWithIcon from '../components/DateRangePicker/DateRangePickerWithIcon'
export default {
  name: 'AccountTradingHistory',
  components: {
    OnlySelectBlack,
    'search-input': searchInput,
    'date-range-picker-with-icon': DateRangePickerWithIcon
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.account-trading-history
{
  max-width: 1230px;
}

.account-trading-history .setting-account-trading-history
{
  background: #2C2C2C;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.account-trading-history .setting-account-trading-history .selector-wrapper-black
{
  margin-bottom: 20px;
  margin-right: 20px;
}

.account-trading-history .setting-account-trading-history .selector-wrapper-black .vs__dropdown-toggle
{
  background: #333333;
  border: 1px solid rgba(94, 94, 94, 0.5);
  height: 40px;
  min-width: 180px;
}

.account-trading-history .setting-account-trading-history .selector-wrapper-black .vs__selected
{
  font-size: 12px;
  line-height: 40px;
  font-family: Montserrat;
}

.account-trading-history .setting-account-trading-history .vs--open .vs__dropdown-toggle
{
  background: #414141 !important;
}

.account-trading-history .setting-account-trading-history .date-range-picker-icon
{
  margin-bottom: 20px;
}

.account-trading-history .setting-account-trading-history .left-side
{
  display: flex;
  flex-wrap: wrap;
}

.account-trading-history .setting-account-trading-history .search-input
{
  margin-bottom: 20px;
}

.account-trading-history .table-account-trading-history
{
  padding-bottom: 80px;
}

.account-trading-history .table-account-trading-history table
{
  width: 100%;
}

.account-trading-history .table-account-trading-history table tr th
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  background: #2C2C2C;
  text-align: left;
  padding: 11px 20px 10px;
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.account-trading-history .table-account-trading-history table tr th span,
.account-trading-history .table-account-trading-history table tr td span
{
  color: #B2B2B2;
}

.account-trading-history .table-account-trading-history table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #737373;
  padding: 12px 20px 13px;
}

.main-wrapper.light-theme .account-trading-history .setting-account-trading-history .selector-wrapper-black .vs__dropdown-toggle
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .account-trading-history .setting-account-trading-history .vs--open .vs__dropdown-toggle
{
  background: #F7F6FB !important;
}

.main-wrapper.light-theme .account-trading-history .vs__dropdown-menu
{
  background: #F7F6FB !important;
}
</style>
