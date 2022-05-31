<template>
  <div class="partners-table-statistic">
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Visits</th>
          <th>Registrations</th>
          <th>Commission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.titleBlock">
          <td>{{ row.data }}</td>
          <td>{{ row.visits }}</td>
          <td>{{ row.registrations }}</td>
          <td>{{ row.commission }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'AffiliateTableStatistic',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.partners-table-statistic
{
  padding-bottom: 50px;
}

.partners-table-statistic table
{
  width: 100%;
  margin-bottom: 50px;
}

.partners-table-statistic table tr th
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  width: 25%;
  text-align: left;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.partners-table-statistic table tr th:first-child
{
  text-align: left;
}

.partners-table-statistic table tr td
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  height: 40px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  text-align: left;
}

.partners-table-statistic table tr td:last-child,
.partners-table-statistic table tr th:last-child
{
  text-align: left;
  color: #B2B2B2;
}

.partners-table-statistic table tr td span
{
  color: #FFFFFF;
}

.partners-table-statistic table tr td .circle {
  width: 16px;
  height: 4px;
  text-align: center;
  margin-left: auto;
}

.partners-table-statistic table tr td .circle span {
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

.partners-table-statistic table tr td .circle span:before {
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

.partners-table-statistic table tr td .circle span:after {
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

.main-wrapper.light-theme .partners-table-statistic table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .partners-table-statistic table tr td:last-child,
.main-wrapper.light-theme .partners-table-statistic table tr th:last-child
{
  color: #989898;
}
</style>
