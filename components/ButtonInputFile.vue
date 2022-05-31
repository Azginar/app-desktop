<template>
  <span class="span-wrapper">
    <span>{{ title }}</span>
    <input class="input-file-button" type="file" @change="handleFileChange">
  </span>
</template>
<script>
export default {
  name: 'ButtonInputFile',
  props: {
    onFileChange: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: 'Change avatar'
    }
  },
  methods: {
    handleFileChange (event) {
      this.$emit('onFileChange', event)
    }
  }
}
</script>
<style>
    .span-wrapper {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        line-height: 1.42857143;
        border-radius: 4px;
        user-select: none;
        font-size: 13px;
        position: relative;
        overflow: hidden;
        display: inline-block;
        white-space: normal;
        color: #ffffff;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        background-color: #5671a5;
        border-color: #5671a5;
    }

    .span-wrapper:hover {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .span-wrapper:active {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .span-wrapper:focus {
        background-color: rgb(255 255 255) !important;
        border-color: rgb(86 113 165) !important;
        color: rgb(86 113 165) !important;
        text-shadow: none !important;
    }

    .input-file-button {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
        box-sizing: border-box;
        color: inherit;
        font: inherit;
        font-family: inherit;
        line-height: inherit;
        outline: none;
        display: block;
        font-size: 200px !important;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        opacity: 0;
        direction: ltr;
        cursor: pointer;
    }

    .main-wrapper.light-theme .span-wrapper
    {
      color: #989898;
      border-color: #D4D4D4;
      background: transparent;
    }
</style>
