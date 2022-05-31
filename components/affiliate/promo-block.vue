<template>
  <div class="partners-promo-block">
    <div v-for="row in promoBlockData" :key="row.title" class="block-card" @click="handleClick(row.link)">
      <h5>
        {{ row.title }}
      </h5>
      <span>{{ row.value }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PromoBlock',
  props: {
    promoBlockData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (slug) {
      this.$router.push(`/affiliate/promo/${slug}`)
    }
  }
}
</script>
<style>
.partners-promo-block
{
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
}

.partners-promo-block .block-card
{
  padding: 20px;
  width: 310px;
  cursor: pointer;
  margin-right: 30px;
  margin-bottom: 30px;
  background: #2B2B2B;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.partners-promo-block .block-card h5
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 10px;
}

.partners-promo-block .block-card span
{
  display: block;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #989898;
}

.main-wrapper.light-theme .partners-promo-block .block-card
{
  background: #ffffff;
}

.main-wrapper.light-theme .partners-promo-block .block-card h5
{
  color: #000000;
}
</style>
