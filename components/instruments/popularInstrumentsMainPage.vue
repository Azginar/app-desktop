<template>
  <div class="popular-instruments-main">
    <table>
      <tbody>
        <tr v-for="row in tableData" :key="row.item">
          <td>
            <div class="instrument-block">
              <img :src="row.images[0]">
              <img :src="row.images[1]">
              <span>{{ row.instrument }}</span>
            </div>
          </td>
          <td>{{ row.traders }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'PopularInstrumentsMain',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.popular-instruments-main
{
  margin-bottom: 60px;
}

.popular-instruments-main table
{
  width: 100%;
}

.popular-instruments-main table tr:first-child td
{
  padding-top: 0;
}

.popular-instruments-main table tr td
{
  font-family: Arial, sans-serif;
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

.popular-instruments-main table tr td:last-child
{
  color: #B2B2B2;
  text-align: right;
}

.popular-instruments-main table tr td .instrument-block,
.popular-instruments-main table tr td .trader-block
{
  display: flex;
  align-items: center;
}

.popular-instruments-main table tr td .instrument-block span
{
  margin-left: 10px;
}

.popular-instruments-main table tr td .trader-block .avater
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

.popular-instruments-main table tr td .trader-block span
{
  text-transform: none;
}

.popular-instruments-main table tr td .trader-block .avater img
{
  width: 100%;
}

.main-wrapper.light-theme .popular-instruments-main table tr td .instrument-block span
{
  color: #000000;
}

.main-wrapper.light-theme .popular-instruments-main table tr td:last-child
{
  color: #989898;
}

</style>
