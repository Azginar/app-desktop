<template>
  <div class="promo-block-count">
    <div>
      <div class="left-col">
        <p>{{ promoInfo.countAllPromo }}</p>
        <span>Active<br>promotions</span>
      </div>
      <div class="left-col">
        <p>{{ promoInfo.myPromo }}</p>
        <span>My<br>promotions</span>
      </div>
      <div class="right-col">
        <default-button
          label="See"
          type="trans-button"
          :click-event="goToPromoPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DefaultButton from '../../components/default-button'
export default {
  name: 'promoBlockMain',
  components: {
    'default-button': DefaultButton
  },
  props: {
    promoInfo: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    goToPromoPage () {
      this.$router.push('/bonus/active-promotions')
    },
  }
}
</script>
<style>
.promo-block-count
{
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 20px 10px 30px;
  border-top: 1px solid #484848;
  border-bottom: 1px solid #484848;
  margin-bottom: 60px;
}

.promo-block-count > div
{
  display: flex;
}

.promo-block-count .left-col
{
  margin-right: 40px;
  display: flex;
  align-items: center;
}

.promo-block-count .left-col p
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-right: 5px;
}

.promo-block-count .left-col span
{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
}

.promo-block-count .left-block
{
  display: flex;
}

.promo-block-count .right-col
{
  margin-left: auto;
}

.promo-block-count .right-col button
{
  background: #333333;
}

.main-wrapper.light-theme .promo-block-count
{
  background: #ffffff;
}

.main-wrapper.light-theme .promo-block-count .left-col p
{
  color: #989898;
}

.main-wrapper.light-theme .promo-block-count
{
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .trans-button
{
  background: #F7F6FB;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

}
</style>
