<template>
  <div class="investor-profile-trader">
    <div class="black-block">
      <div class="info-block">
        <div class="left-block">
          <div class="table-row">
            <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
              <div>
                <p>{{ row.title }}</p>
                <span>
                  {{ row.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-block">
          <div class="btn-block">
            <default-button
              label="Stop copy"
              type="trans-button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../../components/default-button.vue'
export default {
  name: 'InvestorProfileTable',
  components: {
    'default-button': DefaultButton
  },
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
    .investor-profile-trader
    {
        background: #333333;
    }

    .investor-profile-trader h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 18px;
    }

    .investor-profile-trader .black-block
    {
        position: relative;
        padding: 20px 20px 0;
        border-top: 1px solid rgba(94, 94, 94, 0.5);
        border-bottom: 1px solid rgba(94, 94, 94, 0.5);
        display: flex;
        overflow: hidden;
        background: rgba(36, 36, 36, 0.5);
        margin-bottom: 80px;
    }

    .investor-profile-trader .black-block .info-block
    {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .investor-profile-trader .black-block .info-block .left-block
    {
        width: 80%;
    }

    .investor-profile-trader .black-block .info-block .right-block
    {
        flex-shrink: 0;
    }

    .investor-profile-trader .black-block p
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 100%;
        text-transform: uppercase;
        color: #737373;
        margin-top: 0;
        margin-bottom: 5px;
    }

    .investor-profile-trader .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #B2B2B2;
    }

    .investor-profile-trader .black-block .col-row:nth-child(2) span,
    .investor-profile-trader .black-block .col-row:nth-child(3) span,
    .investor-profile-trader .black-block .col-row:nth-child(4) span
    {
        color: #737373;
    }

    .investor-profile-trader .black-block .col-row:last-child span
    {
      color: #ffffff;
    }

    .investor-profile-trader .black-block .table-row
    {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }

    .investor-profile-trader .black-block .table-row > div
    {
        margin-right: 60px;
        margin-bottom: 20px;
        position: relative;
    }

    .investor-profile-trader .black-block .table-row > div:last-child
    {
        margin-right: 0;
    }

    .investor-profile-trader .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .investor-profile-trader .black-block .table-row > div:first-child span
    {
        color: #B2B2B2;
    }

    .investor-profile-trader .black-block .btn-block
    {
        position: relative;
        margin-left: auto;
        margin-bottom: 20px;
        display: flex;
        align-items: flex-end;
    }

    .investor-profile-trader .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .main-wrapper.light-theme .investor-profile-trader .black-block
    {
      background: #ffffff;
      border-color: #D4D4D4;
    }

    .main-wrapper.light-theme .investor-profile-trader .black-block span,
    .main-wrapper.light-theme .investor-profile-trader .black-block .table-row > div:first-child span
    {
      color: #989898;
    }

    .main-wrapper.light-theme .investor-profile-trader .black-block .col-row:nth-child(2) span,
    .main-wrapper.light-theme .investor-profile-trader .black-block .col-row:nth-child(3) span,
    .main-wrapper.light-theme .investor-profile-trader .black-block .col-row:nth-child(4) span
    {
      color: #737373;
    }

    @media (max-width: 1250px) {
      .trader-social-page .graph-info
      {
        display: block !important;
      }

      .trader-social-page .graph-info .right-side ul
      {
        padding-left: 0;
        margin-bottom: 30px;
      }

      .investor-profile-trader .black-block .info-block
      {
        display: block;
      }

      .investor-profile-trader .black-block .btn-block button
      {
        margin-left: auto;
      }

      .investor-profile-trader .black-block .info-block .left-block
      {
        width: 100%;
      }
    }
</style>
