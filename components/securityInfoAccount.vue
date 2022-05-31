<template>
  <div class="security-info-account">
    <h3>Security</h3>
    <div v-for="row in secureInfo" :key="row.title" class="table-row">
      <div class="col-row">
        <p>{{ row.title }}</p>
        <span>
          {{ row.value }}
        </span>
      </div>
      <div class="col-row">
        <default-button
          :type="'trans-button'"
          :label="row.button"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
export default {
  name: 'SecurityInfoAccount',
  components: {
    'default-button': DefaultButton
  },
  props: {
    secureInfo: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
  .security-info-account
  {
    margin-bottom: 60px;
  }

  .security-info-account h3
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

  .security-info-account .table-row
  {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
  }

  .security-info-account .table-row .col-row
  {
    width: 50%;
  }

  .security-info-account .table-row .col-row p
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 100%;
    text-transform: uppercase;
    color: #737373;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .security-info-account .table-row .col-row span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #B2B2B2;
    display: block;
  }

  .security-info-account .table-row .col-row button
  {
    padding: 8px 20px 7px;
    min-width: 100px;
  }

  @media (max-width: 1500px) {
    .security-info-account .table-row
    {
      display: block;
    }

    .security-info-account .table-row .col-row
    {
      width: 100%;
    }
  }

</style>
