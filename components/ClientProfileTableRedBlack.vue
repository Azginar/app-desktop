<template>
  <div class="profile-page-red-black">
    <h3>Public information</h3>
    <div class="black-block">
      <div class="table-row">
        <div v-for="row in tableDataPublic" :key="row.title" class="col-row">
          <div>
            <p>{{ row.title }}</p>
            <span v-if="row.title === 'About me'" class="simple-text">
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
      </div>
      <div class="btn-block">
        <NuxtLink to="/settings/edit-personal-info">
          <default-button
            :type="'trans-button'"
            :label="'Edit'"
          />
        </NuxtLink>
      </div>
    </div>

    <h3>Security information</h3>
    <div class="black-block">
      <div class="table-row">
        <div v-for="row in tableDataSecurity" :key="row.title" class="col-row">
          <p>{{ row.title }}</p>
          <span v-if="row.title === 'Address'" class="address-text">
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
        <NuxtLink to="/settings/edit-personal-info">
          <default-button
            :type="'trans-button'"
            :label="'Edit'"
          />
        </NuxtLink>
      </div>
    </div>
    <h3>Verification status</h3>
    <div v-for="row in tableDataStatus" :key="row.title" class="black-block status-block">
      <div class="table-row">
        <div v-if="row.title === 'Bank card'" class="col-row">
          <span>{{ row.title }}</span>
          <verified-status
            :custom-text="row.value"
            :type="'Simple'"
          />
        </div>
        <div v-else class="col-row">
          <span>{{ row.title }}</span>
          <verified-status
            :type="row.value"
          />
        </div>
        <div class="col-row">
          <NuxtLink :to="row.url">
            <default-button
              :type="'trans-button'"
              :label="row.button"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
import VerifiedStatus from './VerifiedStatus.vue'
export default {
  name: 'ClientProfileTableRedBlack',
  components: {
    'verified-status': VerifiedStatus,
    'default-button': DefaultButton
  },
  props: {
    tableDataPublic: Array,
    tableDataSecurity: Array,
    tableDataStatus: Array
  },
  methods: {
    isRowTitleWithCountry (title) {
      return title === 'Country'
    }
  }
}
</script>
<style>
    .profile-page-red-black
    {
        background: #333333;
    }

    .profile-page-red-black h3
    {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        margin-bottom: 18px;
    }

    .profile-page-red-black .black-block
    {
        position: relative;
        padding: 20px;
        overflow: hidden;
        margin-bottom: 40px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }

    .profile-page-red-black .black-block:before
    {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #242424;
        opacity: 0.5;
    }

    .profile-page-red-black .black-block p
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 100%;
        text-transform: uppercase;
        color: #B2B2B2;
        margin-top: 0;
        margin-bottom: 5px;
    }

    .profile-page-red-black .black-block span
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #B2B2B2;
    }

    .profile-page-red-black .black-block .table-row
    {
        display: flex;
        flex-wrap: wrap;
    }

    .profile-page-red-black .black-block .table-row > div
    {
        margin-right: 60px;
        margin-bottom: 20px;
        position: relative;
    }

    .profile-page-red-black .black-block .table-row > div:last-child
    {
        width: 100%;
    }

    .profile-page-red-black .black-block .table-row > div img
    {
        width: 30px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0 !important;
        margin-top: -6px;
    }

    .profile-page-red-black .black-block .table-row > div:first-child span
    {
        color: #ffffff;
    }

    .profile-page-red-black .black-block .btn-block
    {
        position: relative;
    }

    .profile-page-red-black .black-block .row-full > div
    {
        width: 100%;
        margin-right: 0;
    }

    .profile-page-red-black .black-block .simple-text
    {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #989898 !important;
    }

    .profile-page-red-black .black-block .address-text
    {
        font-size: 15px;
        color: #B2B2B2 !important;
    }

    .profile-page-red-black .black-block .status,
    .profile-page-red-black .black-block .badge-with-text
    {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 100%;
        text-transform: uppercase;
        color: #737373;
        background: #242424;
        padding: 4px 5px 2px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }

    .profile-page-red-black .black-block .badge-with-text.success
    {
        color: #8DC640;
    }

    .profile-page-red-black .black-block .badge-with-text.primary
    {
        color: #D2AC75;
    }

    .profile-page-red-black .black-block .badge-with-text.danger
    {
        color: #E52525;
    }

    .profile-page-red-black .black-block.status-block
    {
        margin-bottom: 10px;
        padding: 15px 20px;
    }

    .profile-page-red-black .black-block.status-block .table-row
    {
        justify-content: space-between;
        align-items: center;
    }

    .profile-page-red-black .black-block.status-block span
    {
        margin-right: 20px;
        color: #B2B2B2 !important;
        vertical-align: middle;
        display: inline-block;
    }

    .profile-page-red-black .black-block.status-block .col-row
    {
        margin-bottom: 0;
        margin-right: 0;
        width: auto !important;
    }

    .profile-page-red-black .black-block.status-block .trans-button
    {
        line-height: 15px;
        padding: 7px 20px;
        color: #737373;
        min-width: 95px;
    }

    .main-wrapper.light-theme .profile-page-red-black
    {
      background: #F7F6FB;
    }

    .main-wrapper.light-theme .profile-page-red-black h3,
    .main-wrapper.light-theme .profile-page-red-black .black-block .table-row > div:first-child span
    {
      color: #000000;
    }

    .main-wrapper.light-theme .profile-page-red-black .black-block span
    {
      color: #989898;
    }

    .main-wrapper.light-theme .clients-profile-red-black .black-block
    {
      background: #ffffff;
    }

    .main-wrapper.light-theme .profile-page-red-black .black-block .btn-block .trans-button
    {
      background: #F7F6FB;
    }

    .main-wrapper.light-theme .profile-page-red-black .black-block .address-text,
    .main-wrapper.light-theme .profile-page-red-black .black-block.status-block span
    {
      color: #989898 !important;
    }

    .main-wrapper.light-theme .profile-page-red-black .black-block.status-block .trans-button:hover
    {
      color: #000000;
    }

    .main-wrapper.light-theme .profile-page-red-black .black-block .status,
    .main-wrapper.light-theme .profile-page-red-black .black-block .badge-with-text
    {
      background: #FFFFFF;
      border: 1px solid #E1E1E1;
    }

</style>
