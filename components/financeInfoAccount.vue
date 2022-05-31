<template>
  <div class="finance-info-account">
    <h3>{{ title }}</h3>
    <div class="table-row">
      <div v-for="row in financeInfo" :key="row.title" class="col-row">
        <p>{{ row.title }}</p>
        <span>
          {{ row.value }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FinanceInfoAccount',
  props: {
    financeInfo: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Finance Information'
    }
  }
}
</script>
<style>
  .finance-info-account
  {
    margin-bottom: 60px;
  }

  .finance-info-account h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
    margin-bottom: 20px;
  }

  .finance-info-account .table-row
  {
    display: flex;
    flex-wrap: wrap;
  }

  .finance-info-account .table-row .col-row
  {
    width: 50%;
    margin-bottom: 20px;
  }

  .finance-info-account .table-row .col-row p
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 100%;
    text-transform: uppercase;
    color: #737373;
    margin-bottom: 3px;
  }

  .finance-info-account .table-row .col-row span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #B2B2B2;
    display: block;
  }

  @media (max-width: 1500px) {
    .finance-info-account .table-row
    {
      display: block;
    }

    .finance-info-account .table-row .col-row
    {
      width: 100%;
    }
  }

</style>
