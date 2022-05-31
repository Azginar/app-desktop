<template>
  <div class="main-info-account social-info-account">
    <h3>Social trading</h3>
    <div class="black-block">
      <div class="table-row">
        <div v-for="row in socialAccount" :key="row.title" class="col-row">
          <div>
            <p>{{ row.title }}</p>
            <span>
              {{ row.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <div class="left-side">
          <div>
            <default-button
              :type="'trans-button'"
              :label="'Edit setting'"
            />
          </div>
        </div>
        <div class="right-side">
          <div>
            <default-button
              :type="'trans-button'"
              :label="'Detach investor\'s account'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
export default {
  name: 'SocialTradingInfo',
  components: {
    'default-button': DefaultButton
  },
  props: {
    socialAccount: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
  .main-info-account h3
  {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 18px;
  }

  .main-info-account .black-block
  {
    position: relative;
    background: #2C2C2C;
    padding: 20px 20px 0;
    overflow: hidden;
    margin-bottom: 80px;
    border-top: 1px solid rgba(94, 94, 94, 0.5);
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  }

  .main-info-account .black-block p
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

  .main-info-account .black-block span
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #B2B2B2;
  }

  .main-info-account .black-block span i
  {
    font-style: normal;
    color: #737373;
  }

  .main-info-account .black-block .table-row
  {
    display: flex;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .table-row .no-margin
  {
    margin-top: -4px;
    display: block;
  }

  .main-info-account .black-block .table-row button
  {
    background: transparent;
    font-size: 12px;
    line-height: 15px;
    padding: 7px 20px 6px;
  }

  .main-info-account .black-block .table-row > div
  {
    margin-right: 60px;
    margin-bottom: 30px;
    position: relative;
  }

  .social-info-account .black-block .table-row > div:last-child span,
  .social-info-account .black-block .table-row > div:first-child + div span,
  .social-info-account .black-block .table-row > div:first-child span
  {
    color: #ffffff;
  }

  .main-info-account .black-block .btn-block
  {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .btn-block .left-side .trans-button
  {
    margin-right: 20px;
  }

  .main-info-account .black-block .btn-block .right-side .trans-button:first-child
  {
    margin-right: 20px;
  }

  .main-info-account .black-block .btn-block .left-side,
  .main-info-account .black-block .btn-block .right-side
  {
    display: flex;
    flex-wrap: wrap;
  }

  .main-info-account .black-block .left-side > div,
  .main-info-account .black-block .right-side > div
  {
    margin-bottom: 20px;
  }

  .main-info-account .black-block .left-side .trans-button,
  .main-info-account .black-block .right-side .trans-button
  {
    background: #333333;
  }

  .social-info-account .black-block .btn-block .right-side button
  {
    margin-right: 0 !important;
  }

  .main-wrapper.light-theme .main-info-account .black-block
  {
    background: #ffffff;
    border-color: #D4D4D4;
  }

  .main-wrapper.light-theme .main-info-account .black-block span
  {
    color: #989898;
  }

  .main-wrapper.light-theme .main-info-account .black-block .table-row button:hover
  {
    color: #000000;
  }

  .main-wrapper.light-theme .main-info-account .black-block .left-side .trans-button,
  .main-wrapper.light-theme .main-info-account .black-block .right-side .trans-button
  {
    background: #F7F6FB;
    border-color: #D4D4D4;
  }

  .main-wrapper.light-theme .main-info-account .black-block .left-side .trans-button:hover,
  .main-wrapper.light-theme .main-info-account .black-block .right-side .trans-button:hover
  {
    color: #000000;
    border-color: #000000;
  }

  .main-wrapper.light-theme .social-info-account .black-block .table-row > div:last-child span,
  .main-wrapper.light-theme .social-info-account .black-block .table-row > div:first-child + div span,
  .main-wrapper.light-theme .social-info-account .black-block .table-row > div:first-child span
  {
    color: #000000;
  }
</style>
