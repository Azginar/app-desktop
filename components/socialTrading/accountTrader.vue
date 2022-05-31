<template>
  <div class="account-social">
    <h3>My public accounts</h3>
    <div class="container-account">
      <div v-for="row in accountsTrader" :key="row.title">
        <NuxtLink :to="`/provider/account/${row.link}`" class="block-card">
          <div class="text-right">
            {{ row.typeAccount }}
          </div>
          <div class="block-account-wrapper">
            <div class="info-text">
              <h4>{{ row.account }}</h4>
              <p>average monthly profitability</p>
              <p><span>36.33 %</span></p>
              <div class="row-line-inner">
                <div>
                  <p>Investors</p>
                  <p><span>{{ row.investors }}</span></p>
                </div>
                <div>
                  <p>Investors' equity</p>
                  <p><span>{{ row.investorsEquity }}</span></p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div>
        <NuxtLink to="/" class="block-card">
          <div class="block-account-wrapper add-account-new">
            <h4>Add other Account</h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AccountTrader',
  props: {
    accountsTrader: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.account-social h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-bottom: 18px;
  margin-bottom: 30px;
  border-bottom: 1px solid #484848;
}
.container-account
{
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-account > div
{
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-account .block-card
{
  padding: 20px 20px 0;
  display: block;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-account .block-card .block-account-wrapper
{
  display: block;
}

.container-account .block-card .add-account-new
{
  padding-bottom: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-account .block-card .add-account-new h4
{
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.container-account .block-card .block-account-wrapper .row-line-inner
{
  display: flex;
  margin-top: 10px;
}

.container-account .block-card .block-account-wrapper .row-line-inner > div:first-child
{
  margin-right: 20px;
}

.container-account .block-card .block-account-wrapper .row-line-inner > div
{
  margin-bottom: 20px;
}

.container-account .block-card .wrapper-img
{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-account .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-account .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-account .block-card .info-text h4
{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 10px;
  border-bottom: none;
  padding-bottom: 0;
}

.container-account .block-card .info-text p
{
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.container-account .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-account .block-card .info-text p span
{
  color: #989898;
}

.container-account .block-card .text-right
{
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-account .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

.main-wrapper.light-theme .container-account .block-card
{
  background: #ffffff;
}

.main-wrapper.light-theme .container-account .block-card .info-text h4,
.main-wrapper.light-theme .container-account .block-card .add-account-new h4
{
  color: #000000;
}

  @media (max-width: 1750px) {
    .container-account > div
    {
      width: 33.3%;
    }
  }

  @media (max-width: 1500px) {
    .container-account > div
    {
      width: 50%;
    }
  }

  @media (max-width: 1200px) {
    .container-account > div
    {
      width: 100%;
    }
  }

</style>
