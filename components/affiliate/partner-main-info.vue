<template>
  <div class="partners-info">
    <div v-for="row in partnersMainData" :key="row.title">
      <div class="line-block">
        <div class="col-row">
          <p><i>Partner status</i></p>
          <span class="status">{{ row.status }}</span>
        </div>
        <div class="col-row">
          <p><i>Affiliate UID</i></p>
          <span><i>{{ row.uid }}</i></span>
        </div>
        <div class="col-row">
          <div class="text-row">
            <div class="text-row-col">
              <p><i>Referral link</i></p>
              <span><i>{{ row.linkUid }}</i></span>
            </div>
            <div class="btn-block">
              <default-button
                v-clipboard:copy="row.linkUid"
                :type="'trans-button'"
                :label="'COPY LINK'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="line-block">
        <div class="col-row">
          <p>Total commission sum</p>
          <span>{{ row.totalCommission }}</span>
        </div>
        <div class="col-row">
          <p>Number of current active referrals</p>
          <span>{{ row.numberReferrals }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import DefaultButton from '../default-button.vue'

Vue.use(VueClipboard)
export default {
  name: 'PartnersMainInfo',
  components: {
    'default-button': DefaultButton
  },
  props: {
    partnersMainData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.partners-info
{
  margin-bottom: 60px;
}

.partners-info .line-block:first-child
{
  border-top: 1px solid rgba(94, 94, 94, 0.5);
}

.partners-info .line-block
{
  background: rgba(36, 36, 36, 0.5);
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 0;
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
}

.partners-info .line-block > .col-row
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.partners-info .line-block > .col-row i
{
  font-style: normal;
}

.partners-info .line-block > .col-row:last-child
{
  margin-right: 0;
}

.partners-info .line-block p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 5px;
}

.partners-info .line-block span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #FFFFFF;
  display: block;
}

.partners-info .line-block .text-row
{
  display: flex;
  align-items: center;
}

.partners-info .line-block .text-row > .text-row-col
{
  margin-right: 20px;
}

.partners-info button
{
  padding: 7px 20px;
}

.partners-info .status
{
  background: #E52525;
  padding: 1px 5px;
  margin-top: 1px;
  font-size: 14px;
  line-height: 120%;
  text-transform: uppercase;
  display: inline-block;
  color: #FFFFFF;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
}

.main-wrapper.light-theme .partners-info .line-block:first-child,
.main-wrapper.light-theme .partners-info .line-block
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .partners-info .line-block span
{
  color: #000000;
}

.main-wrapper.light-theme .partners-info .line-block span.status
{
  color: #ffffff;
}

.main-wrapper.light-theme .partners-info .line-block p
{
  color: #989898;
}
</style>
