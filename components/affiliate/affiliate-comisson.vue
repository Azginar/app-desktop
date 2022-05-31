<template>
  <div class="partners-commission-block">
    <div class="row-line">
      <div v-for="row in affiliateCommissionData" :key="row.title" class="col-row">
        <p>{{ row.title }}</p>
        <span>{{ row.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AffiliateCommission',
  props: {
    affiliateCommissionData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.partners-commission-block
{
  margin-bottom: 50px;
}

.partners-commission-block .row-line
{
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.partners-commission-block .col-row
{
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  width: 50%;
}

.partners-commission-block .col-row p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.partners-commission-block .col-row span
{
  font-family: Montserrat, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
}

.main-wrapper.light-theme .partners-commission-block .col-row span,
.main-wrapper.light-theme .affiliate-main-page h3 span
{
  color: #989898;
}

@media (max-width: 1600px) {
  .partners-commission-block .row-line
  {
    display: block;
  }

  .partners-commission-block .col-row
  {
    width: 100%;
  }
}
</style>
