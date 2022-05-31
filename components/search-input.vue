<template>
  <div>
    <div class="search-input">
      <input
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
        :class="{'has-error-border': hasError}"
        class="black-input"
        :attribute="attribute"
        @input="handleInput"
      >
      <searchIc />
    </div>
    <p class="has-error-text">
      {{ errorText }}
    </p>
  </div>
</template>
<script>
import searchIc from '../assets/icons/search-ic.svg'
export default {
  name: 'SearchInput',
  components: {
    searchIc
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    attribute: {
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasError () {
      return this.errors.filter(e => e.attribute === this.attribute).length > 0
    },
    errorText () {
      if (this.hasError) {
        return this.errors.find(e => e.attribute === this.attribute).message
      }
      return ''
    }
  }
}
</script>
<style scoped>

  .search-input
  {
    position: relative;
  }

  .search-input svg
  {
    position: absolute;
    left: 20px;
    top: 12px;
  }

  .black-input {
    background: #1B1B1B;
    width: 100%;
    display: block;
    padding: 0 20px 0 47px;
    height: 40px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    color: #B2B2B2;
    outline: none !important;
    border: none;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
  }

  .only-input:focus {
    border-color: #33bbff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 136, 204, 0.3);
  }

  .has-error-text
  {
    color: #ffffff;
    padding-left: 20px;
  }

  .main-wrapper.light-theme .search-input input
  {
    background: #F7F6FB;
    border: 1px solid #D4D4D4;
  }
</style>
