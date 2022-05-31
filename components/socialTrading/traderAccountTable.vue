<template>
  <div class="trader-profile-table trader-account-table">
    <h3>General information</h3>
    <div class="black-block">
      <div class="info-block">
        <div class="table-row">
          <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
            <div v-if="isRowTitleProfitability(row.title)" class="copy-trader-block">
              <div>
                <div class="left">
                  <p>{{ row.title }}</p>
                  <span>{{ row.value }}</span>
                </div>
                <div v-if="row.link" class="right">
                  <NuxtLink :to="row.link">
                    <default-button
                      :type="'trans-button'"
                      :label="'Copy trade'"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else>
              <p>{{ row.title }}</p>
              <span v-if="isRowTitleAbout(row.title)" class="simple-text">
                {{ row.value }}
              </span>
              <span v-else-if="isRowTitleWithCountry(row.title)">
                <img class="image-in-row" :src="row.img"> {{ row.value }}
              </span>
              <span v-else>
                {{ row.value }}
              </span>
            </div>
          </div>
          <div class="btn-block">
            <default-button
              label="Edit account info"
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
  name: 'TraderAccountTable',
  components: {
    'default-button': DefaultButton
  },
  props: {
    tableDataPublic: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isRowTitleWithCountry (title) {
      return title === 'Country'
    },
    isRowTitleProfitability (title) {
      return title === 'Average monthly profitability'
    },
    isRowTitleAbout (title) {
      return title === 'About me'
    }
  }
}
</script>
<style>
    .trader-profile-table
    {
        background: #333333;
    }

    .trader-profile-table h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 18px;
    }

    .trader-account-table .black-block
    {
        position: relative;
        padding: 20px 20px 0 !important;
        border-top: 1px solid rgba(94, 94, 94, 0.5);
        border-bottom: 1px solid rgba(94, 94, 94, 0.5);
        display: flex;
        overflow: hidden;
        background: rgba(36, 36, 36, 0.5);
        margin-bottom: 80px;
    }

    .trader-profile-table .black-block p
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

    .trader-profile-table .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #B2B2B2;
    }

    .trader-profile-table .black-block .table-row
    {
        display: flex;
        flex-wrap: wrap;
    }

    .trader-profile-table .black-block .table-row > div
    {
        margin-right: 60px;
        margin-bottom: 20px;
        position: relative;
    }

    .trader-profile-table .black-block .table-row > div:nth-child(10)
    {
        width: 600px;
        margin-right: 0;
    }

    .trader-profile-table .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .trader-profile-table .black-block .table-row > div:first-child span
    {
        color: #B2B2B2;
    }

    .trader-profile-table .black-block .btn-block
    {
        position: relative;
    }

    .trader-profile-table .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .trader-profile-table .black-block .simple-text
    {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #989898 !important;
    }

    .trader-profile-table .black-block .address-text
    {
        font-size: 15px;
        color: #B2B2B2 !important;
    }

    .trader-profile-table .copy-trader-block
    {
      background: #1B1B1B;
      padding: 5px 3px;
      margin-right: -40px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    .trader-profile-table .copy-trader-block > div
    {
      padding: 15px 17px;
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .trader-profile-table .copy-trader-block > div .right
    {
      display: none;
    }

    .trader-profile-table .copy-trader-block > div > div:first-child
    {
      margin-right: 0;
    }

    .trader-profile-table .copy-trader-block > div:before
    {
      height: 100%;
      width: 3px;
      background: #E52525;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    .trader-profile-table .copy-trader-block .trans-button
    {
      background: #333333;
      border: 1px solid rgba(94, 94, 94, 0.5);
    }

    .trader-profile-table .black-block .copy-trader-block p
    {
      color: #B2B2B2;
    }

    .trader-profile-table .black-block .copy-trader-block span
    {
      color: #ffffff;
    }

    .trader-profile-table .black-block .btn-block
    {
      position: relative;
      margin-left: auto;
      align-items: flex-end;
      display: none;
      margin-right: 0 !important;
    }

    .main-wrapper.light-theme .trader-profile-trader .black-block,
    .main-wrapper.light-theme .trader-account-table .black-block
    {
      background: #ffffff;
      border-color: #D4D4D4;
    }

    .main-wrapper.light-theme .trader-profile-trader,
    .main-wrapper.light-theme .trader-profile-table
    {
      background: #F7F6FB;
    }

    .main-wrapper.light-theme .trader-profile-trader h3,
    .main-wrapper.light-theme .trader-profile-table h3
    {
      color: #000000;
    }

    .main-wrapper.light-theme .trader-profile-trader .black-block .table-row > div:first-child span,
    .main-wrapper.light-theme .trader-profile-trader .black-block span,
    .main-wrapper.light-theme .trader-profile-table .black-block span,
    .main-wrapper.light-theme .trader-profile-table .black-block .copy-trader-block p
    {
      color: #989898;
    }

    .main-wrapper.light-theme .trader-profile-table .copy-trader-block
    {
      background: #F7F6FB;
    }

    .main-wrapper.light-theme .trader-profile-table .copy-trader-block .trans-button
    {
      background: #ffffff;
    }

    @media (max-width: 1250px) {
      .trader-profile-table .black-block .table-row > div:last-child
      {
        width: 100%;
      }

      .trader-social-page .graph-info
      {
        display: block !important;
      }

      .trader-social-page .graph-info .right-side ul
      {
        padding-left: 0;
        margin-bottom: 30px;
      }
    }
</style>
