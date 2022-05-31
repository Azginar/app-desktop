<template>
  <div class="setting-block-container">
    <div v-for="item in dataSettings" :key="item.title" class="setting-block">
      <div class="text-block">
        {{ item.title }}
      </div>
      <div>
        <switch-button :id="item.id" />
      </div>
    </div>
  </div>
</template>
<script>
import SwitchButton from '../components/switch-button'

export default {
  name: 'SettingBlock',
  components: {
    SwitchButton
  },
  props: {
    dataSettings: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      checked: false
    }
  }
}
</script>
<style>
.setting-block-container {
  display: flex;
  flex-wrap: wrap;
}

.button-switch {
  height: 24px;
  position: relative;
  width: 60px;
}

.button-switch .lbl-on,
.button-switch .lbl-off {
  cursor: pointer;
  display: block;
  position: absolute;
  color: #ffffff;
  top: 0.5em;
  transition: opacity 0.25s ease-out 0.1s;
  text-transform: uppercase;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 97.52%;
  text-align: center;
  color: #FFFFFF;
}

.button-switch .lbl-on {
  opacity: 0;
  right: 9px;
  top: 8px;
}

.button-switch .lbl-off {
  left: 9px;
  top: 8px;
  color: #737373;
}

.button-switch .switch {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 0;
  font-size: 1em;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;
}

.button-switch .switch:before,
.button-switch .switch:after {
  content: '';
  font-size: 1em;
  position: absolute;
}

.button-switch .switch:before {
  border-radius: 1.25em;
  background: #333333;
  height: 24px;
  left: 0;
  top: 0;
  transition: background-color 0.25s ease-out 0.1s;
  width: 60px;
}

.button-switch .switch:after {
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.25;
  height: 18px;
  transform: translate(0, 0);
  transition: transform 0.25s ease-out 0.1s;
  width: 18px;
  top: 3px;
  left: 36px;
}

.button-switch .switch:checked:after {
  transform: translate(-32px, 0);
  opacity: 1;
}

.button-switch .switch:checked ~ .lbl-on {
  opacity: 1;
}

.button-switch .switch:checked ~ .lbl-off {
  opacity: 0;
}

.button-switch .switch:checked:before {
  background: #333333;
}

.button-switch .switch:checked:before {
  background: #E52525;
}

.setting-block {
  display: block;
  margin-bottom: 20px;
  margin-right: 60px;
}

.setting-block .text-block {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 10px;
}

.setting-block-container .setting-block:last-child {
  margin-right: 0;
}

.main-wrapper.light-theme .button-switch .switch:before
{
  border: 1px solid #D4D4D4;
  background: #F7F6FB;
}

.main-wrapper.light-theme .button-switch .switch:after
{
  background: #989898;
}

.main-wrapper.light-theme .button-switch .switch:checked:before
{
  background: #E52525;
}

.main-wrapper.light-theme .button-switch .switch:checked:after
{
  background: #ffffff;
}

.main-wrapper.light-theme .input-range-block .only-input-black
{
  background: #F7F6FB;
  color: #989898;
}
</style>
