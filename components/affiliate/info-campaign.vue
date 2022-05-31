<template>
  <div class="info-campaign">
    <div class="left-part">
      <div v-for="row in content" :key="row.title" class="block-info">
        <div class="col-line">
          <p>Clicks</p>
          <span>{{ row.clicks }}</span>
        </div>
        <div class="col-line">
          <p>Registrations</p>
          <span>{{ row.registrations }}</span>
        </div>
        <div class="col-line">
          <p>Deposit</p>
          <span>{{ row.deposit }}</span>
        </div>
        <div class="col-line">
          <p>Withdrawal</p>
          <span>{{ row.withdrawal }}</span>
        </div>
        <div class="col-line">
          <p>Volume</p>
          <span>{{ row.volume }}</span>
        </div>
        <div class="col-line">
          <p>Commission</p>
          <span>{{ row.commission }}</span>
        </div>
        <div class="col-line">
          <default-button
            :type="'trans-button'"
            :label="'Copy link'"
            :click-event="()=>{}"
          />
        </div>
      </div>
    </div>
    <div class="right-part">
      <default-button
        :type="'trans-button'"
        :label="'Deactivate'"
        :click-event="()=>{}"
      />
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/default-button.vue'
export default {
  name: 'InfoCampaigns',
  components: {
    'default-button': DefaultButton
  },
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}

</script>

<style>
.info-campaign
{
  background: #242424;
  padding: 30px 20px 10px;
  display: flex;
  justify-content: space-between;
}

.info-campaign .element-item
{
  display: flex;
  justify-content: space-between;
}

.info-campaign .block-info
{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.info-campaign .avatar-wrapper
{
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.info-campaign .country img
{
  display: inline-block;
  vertical-align: bottom;
  max-width: 23px;
  margin-right: 5px;
}

.info-campaign .avatar-wrapper img
{
  max-width: 100%;
  height: auto;
  display: block;
}

.info-campaign .block-info > div
{
  margin-bottom: 20px;
  margin-right: 60px;
}

.info-campaign .block-info p
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

.info-campaign .block-info span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
  display: inline-block;
  vertical-align: bottom;
}

.main-wrapper.light-theme .info-campaign
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .info-campaign .block-info span
{
  color: #989898;
}
</style>
