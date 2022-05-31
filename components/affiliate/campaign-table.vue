<template>
  <div class="campaigns-table-block">
    <table>
      <thead>
        <tr>
          <th>Campaign</th>
          <th>Clicks</th>
          <th>Registrations</th>
          <th>Deposit</th>
          <th>Withdrawal</th>
          <th>Volume</th>
          <th>Commission</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in campaignData" :key="row.titleBlock" @click="handleClick(row.slug)">
          <td class="name">
            <span>{{ row.campaignName }}</span>
            <i v-if="row.status === 'active'" class="active">{{ row.status }}</i>
            <i v-else>{{ row.status }}</i>
          </td>
          <td>{{ row.clicks }}</td>
          <td>{{ row.registrations }}</td>
          <td>{{ row.deposit }}</td>
          <td>{{ row.withdrawal }}</td>
          <td>{{ row.volume }}</td>
          <td>{{ row.commission }}</td>
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
  name: 'CampaignTable',
  props: {
    campaignData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (slug) {
      if (slug !== undefined) {
        this.$router.push(`/affiliate/campaigns/${slug}`)
      }
    }
  }
}
</script>
<style>
.campaigns-table-block table
{
  width: 100%;
  margin-bottom: 50px;
}

.campaigns-table-block table tr th
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  text-align: right;
  background: #2C2C2C;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  padding: 10px 20px 9px;
  border-top: 1px solid rgba(94, 94, 94, 0.5);
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.campaigns-table-block table tr th:first-child
{
  text-align: left;
}

.campaigns-table-block table tr td
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  height: 45px;
  cursor: pointer;
  line-height: 16px;
  color: #737373;
  padding: 10px 20px 10px;
  text-align: right;
}

.campaigns-table-block table tr td:first-child
{
  text-align: left;
  color: #ffffff;
}

.campaigns-table-block table tr td span
{
  color: #FFFFFF;
}

.campaigns-table-block table tr td .circle {
  width: 16px;
  height: 4px;
  text-align: center;
  margin-left: auto;
}

.campaigns-table-block table tr td .circle span {
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

.campaigns-table-block table tr td .circle span:before {
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

.campaigns-table-block table tr td .circle span:after {
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

.campaigns-table-block .name span
{
  display: inline-block;
  vertical-align: middle;
}

.campaigns-table-block .name i
{
  background: #242424;
  padding: 2px 5px 3px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  margin-bottom: -1px;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.campaigns-table-block .name i
{
  font-style: normal;
  color: #D2AC75;
}

.campaigns-table-block .name i.active
{
  color: #8DC640;
}

.main-wrapper.light-theme .campaigns-table-block table tr th
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .campaigns-table-block table tr td span
{
  color: #000000;
}

.main-wrapper.light-theme .campaigns-table-block .name i
{
  border: 1px solid #D4D4D4;
  background: #ffffff;
}
</style>
