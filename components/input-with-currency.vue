<template>
  <div>
    <div class="input-with-currency">
      <input
        class="payment-method-input"
        :value="value"
        :type="type"
        @input="handleInput"
      >
      <div class="currency-input">
        USD
      </div>
    </div>
    <p v-if="hasError" class="help-block-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'InputWithCurrency',
  props: {
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
    },
    currency: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
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
  }
}
</script>
<style>
  .input-with-currency
  {
    background: #1B1B1B;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
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

  .input-with-currency input
  {
    background: #1B1B1B;
    color: #B2B2B2;
    border: none;
    width: 85%;
    border-right: 1px solid #2B2B2B;
    font-size: 15px;
    line-height: 24px;
    outline: none !important;
    text-overflow: ellipsis;
  }

  .input-with-currency .currency-input
  {
    width: 15%;
    padding-left: 10px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 50px;
    color: #737373;
  }

  p.help-block-error
  {
    color: #ffffff;
    padding-left: 20px;
  }

  .main-wrapper.light-theme .input-with-currency,
  .main-wrapper.light-theme .input-with-currency input
  {
    background: #F7F6FB;
    color: #989898;
  }

  .main-wrapper.light-theme .input-with-currency input
  {
    border-color: #ffffff;
  }
</style>
