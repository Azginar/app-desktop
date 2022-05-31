<template>
  <div class="info-commission">
    <div v-for="item in content" :key="item.id" class="element-item">
      <h4 v-html="item.title" />
      <div class="block-info">
        <div v-for="rowInto in item.details" :key="rowInto.title" class="col-line">
          <p>{{ rowInto.title }}</p>
          <span>{{ rowInto.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCommission',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}

</script>

<style>
.info-commission
{
  background: #242424;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
}

.info-commission .element-item
{
  padding-left: 20px;
  padding-right: 20px;
}

.info-commission h4
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.info-commission h4 span
{
  color: #B2B2B2;
}

.info-commission .block-info
{
  display: flex;
  flex-wrap: wrap;
}

.info-commission .block-info > div
{
  margin-bottom: 20px;
  margin-right: 60px;
}

.info-commission .block-info p
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

.info-commission .block-info span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
  display: block;
}

.info-commission .block-info:first-child > div
{
  margin-right: 40px;
}

.info-commission .block-info > div:last-child
{
  margin-right: 0;
}

.main-wrapper.light-theme .info-commission
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .info-commission h4
{
  color: #000000;
}

.main-wrapper.light-theme .info-commission .block-info span,
.main-wrapper.light-theme .info-commission h4 span
{
  color: #989898;
}

@media (max-width: 1200px) {
  .info-commission
  {
    display: block;
  }

  .info-commission .element-item
  {
    margin-bottom: 20px;
  }

  .info-commission .element-item:last-child
  {
    margin-bottom: 0;
  }
}
</style>
