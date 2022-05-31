<template>
  <div class="massive-button" :class="active" @click.prevent>
    <div
      v-for="index in massiveButton"
      :key="index.value"
      :class="{active: activeItem === index}"
      @click="activeItem = index"
    >
      <default-button
        :type="'trans-button'"
        :label="index.value"
      />
    </div>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button.vue'
export default {
  name: 'MassiveButton',
  components: {
    'default-button': DefaultButton
  },
  props: {
    massiveButton: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      active: null,
      activeItem: null
    }
  }
}
</script>
<style>
.massive-button
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.massive-button > div
{
  margin-right: 10px;
  margin-bottom: 10px;
}

.massive-button > div button
{
  font-size: 10px;
  line-height: 12px;
  padding: 9px 20px 8px;
}

.massive-button > div.active button
{
  background: #242424;
  border-color: #242424;
}

.main-wrapper.light-theme .massive-button > div.active button
{
  background: #ffffff;
}

</style>
