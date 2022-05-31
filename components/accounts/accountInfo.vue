<template>
  <div class="account-info">
    <h4>{{ accountData.labelAccount }}</h4>
    <div class="content-row">
      <div class="row-line">
        <div v-for="row in accountData.infoAccount" :key="row.title">
          <div class="form-group">
            <p>{{ row.title }}</p>
            <span>{{ row.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccountInfo',
  props: {
    accountData: {
      type: Object,
      default: () => []
    }
  }
}
</script>
<style>
.account-info h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.account-info p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.account-info span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
}

.account-info .content-row .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 20px;
}

.account-info .content-row .row-line > div
{
  padding-right: 10px;
  padding-left: 10px;
}

.account-info .content-row .row-line > div:nth-child(2n+1)
{
  margin-right: 30px;
}

.account-info .row-line > div:nth-child(2n)
{
  margin-right: 30px;
}

.account-info .row-line > div:nth-child(2n+1)
{
  margin-right: 0;
}
</style>
