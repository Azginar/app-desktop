<template>
  <div>
    <div class="input-with-button">
      <input
        class="payment-method-input"
        :value="value"
        :type="type"
        @input="handleInput"
        @keypress="forbiddenRuСharacters($event)"
      >
      <div>
        <slot name="button">
          <default-button
            :label="''"
            :click-event="() => {}"
            :type="'light-button'"
          />
        </slot>
      </div>
    </div>
    <p v-if="hasError" class="help-block-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
import DefaultButton from '../components/default-button'
export default {
  name: 'InputWithIconButton',
  components: {
    DefaultButton
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    handleInput: {
      type: Function,
      default: () => {}
    },
    errors: {
      type: Array,
      default: () => []
    },
    attribute: {
      type: String,
      default: 'phone'
    }
  },
  computed: {
    hasError () {
      return this.errors.filter(e => e.attribute === this.attribute).length > 0
    },
    errorMessage () {
      if (this.errors.filter(e => e.attribute === this.attribute).length > 0) {
        return this.errors.find(e => e.attribute === this.attribute).message
      }

      return ''
    },
    hasSuccess () {
      return this.success && !this.hasError
    }
  },
  methods: {
    forbiddenRuСharacters (e) {
      const char = String.fromCharCode(e.keyCode)
      if (/^[0-9\+]+$/.test(char)) { return true } else { e.preventDefault() }
    }
  }
}
</script>
<style>
  .input-with-button
  {
    background: #1B1B1B;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 20px;
    height: 50px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 50px;
    color: #B2B2B2;
    border: none;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
  }

  .input-with-button input
  {
    background: #1B1B1B;
    color: #B2B2B2;
    border: none;
    width: 50%;
    font-size: 15px;
    line-height: 24px;
    outline: none !important;
    text-overflow: ellipsis;
  }

  .input-with-button button
  {
    color: #737373;
    padding: 8px 20px 7px;
    outline: none !important;
  }

  p.help-block-error
  {
    color: #ffffff;
    padding-left: 20px;
  }

  .main-wrapper.light-theme .input-with-button input,
  .main-wrapper.light-theme .input-with-button
  {
    background: #F7F6FB;
    color: #989898;
  }

  .main-wrapper.light-theme p.help-block-error
  {
    color: #000000;
  }

</style>
