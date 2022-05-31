<template>
  <div class="analytics-block">
    <div v-for="row in analyticsData" :key="row.item" class="article-block">
      <p class="time">
        {{ row.time }}
      </p>
      <h4>{{ row.title }}</h4>
      <div class="article-info">
        <div v-html="row.description" />
      </div>
      <default-button
        :type="'trans-button'"
        :label="'More'"
        :click-event="() => {}"
      />
    </div>
  </div>
</template>
<script>
import DefaultButton from './default-button.vue'
export default {
  name: 'Analytics',
  components: {
    'default-button': DefaultButton
  },
  props: {
    analyticsData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.analytics-block .article-block
{
  margin-bottom: 30px;
}

.analytics-block .article-block p.time
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #737373;
  margin-bottom: 10px;
}

.analytics-block .article-block h4
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.analytics-block .article-block .article-info
{
  margin-bottom: 10px;
}

.analytics-block .article-block .article-info p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 20px;
}

.analytics-block .article-block button
{
  padding: 4px 20px 3px;
  font-size: 10px;
  line-height: 11px;
}
</style>
