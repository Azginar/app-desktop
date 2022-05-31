<template>
  <div class="table-social-trading-raiting">
    <table>
      <thead>
        <tr>
          <th v-for="row in tableHead" :key="row.item">
            {{ row.value }}
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.item" @click="link(row.link)">
          <td>
            <div class="avatar-block">
              <div class="avatar">
                <img :src="row.avatarLink">
              </div>
              <div class="nickname">
                {{ row.nickname }}
              </div>
            </div>
          </td>
          <td v-if="row.account">
            {{ row.account }}
          </td>
          <td v-if="row.copyType">
            {{ row.copyType }}
          </td>
          <td v-if="row.duration">
            {{ row.duration }}
          </td>
          <td v-if="row.startEquity">
            {{ row.startEquity }}
          </td>
          <td v-if="row.profit">
            {{ row.profit }}
          </td>
          <td v-if="row.lifespan">
            {{ row.lifespan }}
          </td>
          <td v-if="row.commission">
            {{ row.commission }}
          </td>
          <td v-if="row.averageMonthlyProfitability">
            <span>{{ row.averageMonthlyProfitability }}</span>
          </td>
          <td v-if="row.equity">
            {{ row.equity }}
          </td>
          <td v-if="row.investors">
            {{ row.investors }}
          </td>
          <td v-if="row.investorsEquity">
            {{ row.investorsEquity }}
          </td>
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
  name: 'TableSocialTradingRaiting',
  props: {
    tableHead: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    link (event) {
      this.$router.push(event)
    }
  }
}
</script>
<style scoped>
.table-social-trading-raiting table
{
  width: 100%;
}

.table-social-trading-raiting table tr th
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

.table-social-trading-raiting table tr th span
{
  color: #B2B2B2;
}

.table-social-trading-raiting table tr td
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
}

.table-social-trading-raiting table tr:first-child td
{
  padding-top: 20px;
}

.table-social-trading-raiting table tr td span
{
  color: #FFFFFF;
}

.table-social-trading-raiting table tr td i
{
  font-style: normal;
  text-transform: none;
  color: #B2B2B2;
}

.table-social-trading-raiting .avatar-block
{
  display: flex;
  align-items: center;
}

.table-social-trading-raiting .avatar-block .avatar
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

.table-social-trading-raiting .avatar-block .avatar img
{
  max-width: 100%;
  height: auto;
}

.table-social-trading-raiting .avatar-block .nickname
{
  color: #ffffff;
}

.table-social-trading-raiting table
{
  max-width: 100%;
}

.table-social-trading-raiting table tbody tr td .circle
{
  text-align: right;
}

.table-social-trading-raiting table thead tr th:nth-child(2),
.table-social-trading-raiting table thead tr th:nth-child(5),
.table-social-trading-raiting table thead tr th:nth-child(6)
{
  color: #B2B2B2;
}

.table-social-trading-raiting table tbody tr td:nth-child(2),
.table-social-trading-raiting table tbody tr td:nth-child(6)
{
  color: #B2B2B2;
}
</style>
