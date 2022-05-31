<template>
  <div class="check-box-with-html" :class="{'has-error': hasError}">
    <div class="field-accountnewdemoform-agreement required">
      <div class="checkbox-custom">
        <input
          type="hidden"
          name="AccountNewDemoForm[agreement]"
          value="0"
        >
        <input
          id="accountnewdemoform-agreement"
          type="checkbox"
          name="AccountNewDemoForm[agreement]"
          value="1"
          :checked="isChecked"
          aria-invalid="true"
          @input="handleSetAgreement"
        >
        <label for="accountnewdemoform-agreement" class="checkbox-label" style="color: black" v-html="agreementHtml" />
      </div>
    </div>
    <p v-if="hasError" class="help-block-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>

export default {
  name: 'CheckBoxLabelHtml',
  props: {
    inProgress: {
      type: Boolean,
      default: false
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    handleSetAgreement: {
      type: Function,
      default: () => {}
    },
    agreementHtml: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: () => []
    },
    attribute: {
      type: String,
      default: ''
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
    }
  }
}
</script>
<style>

    .check-box-with-html
    {
      margin-bottom: 40px;
    }

    .checkbox-label {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        display: inline-block;
        max-width: 100%;
        cursor: pointer;
        margin-bottom: 0;
        text-align: left;
        font-family: Arial !important;
        font-style: normal;
        font-weight: normal;
        font-size: 14px !important;
        line-height: 19px !important;
        color: #737373 !important;
    }

    .checkbox-label a
    {
      color: #B2B2B2;
    }

    .checkbox-custom {
        position: relative;
        padding: 0 0 0 25px;
        margin-bottom: 7px;
        margin-top: 0;
    }

    .checkbox-custom.checkbox-inline {
        display: inline-block;
        vertical-align: middle;
    }

    .form-group .checkbox-custom.checkbox-inline {
        margin-top: 7px;
        padding-top: 0;
    }

    .checkbox-custom:last-child, .checkbox-custom:last-of-type {
        margin-bottom: 0;
    }

    .checkbox-custom input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 3px;
        margin: -6px 0 0 0;
        z-index: 2;
        cursor: pointer;
    }

    .checkbox-custom input[type="checkbox"] + label > div {
        display: none;
    }

    .checkbox-custom input[type="checkbox"]:checked + label:after {
        position: absolute;
        display: inline-block;
        font-family: 'FontAwesome';
        content: '\2713';
        top: 50%;
        left: 4px;
        margin-top: -6px;
        font-size: 13px;
        font-weight: bold;
        line-height: 1;
        width: 16px;
        height: 16px;
        color: #ffffff;
    }

    .checkbox-custom input[type="checkbox"]:disabled {
        cursor: not-allowed;
    }

    .checkbox-custom input[type="checkbox"]:disabled:checked + label:after {
        color: #999;
    }

    .checkbox-custom input[type="checkbox"]:disabled + label {
        cursor: not-allowed;
    }

    .checkbox-custom input[type="checkbox"]:disabled + label:before {
        background-color: #eee;
    }

    .checkbox-custom label {
        cursor: pointer;
        margin-bottom: 0;
        text-align: left;
        line-height: 1.2;
    }

    .checkbox-custom label:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: #737373;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }

    .checkbox-custom label + label.error {
        display: block;
    }

    html.dark .checkbox-custom label:before {
        background: #282d36;
        border-color: #21262d;
    }

    html.dark .checkbox-custom input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-custom input[type="checkbox"]:disabled + label:before {
        background: #242830;
        border-color: #242830;
    }

    html.dark .checkbox-primary input[type="checkbox"]:checked + label:after,
    .checkbox-primary input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-primary label:before,
    .checkbox-primary label:before {
        background: #CCC;
        border-color: #bfbfbf;
    }

    html.dark .checkbox-text-primary input[type="checkbox"]:checked + label:after,
    .checkbox-text-primary input[type="checkbox"]:checked + label:after {
        color: #CCC;
    }

    html.dark .checkbox-success input[type="checkbox"]:checked + label:after,
    .checkbox-success input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-success label:before,
    .checkbox-success label:before {
        background: #47a447;
        border-color: #3f923f;
    }

    html.dark .checkbox-text-success input[type="checkbox"]:checked + label:after,
    .checkbox-text-success input[type="checkbox"]:checked + label:after {
        color: #47a447;
    }

    html.dark .checkbox-warning input[type="checkbox"]:checked + label:after,
    .checkbox-warning input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-warning label:before,
    .checkbox-warning label:before {
        background: #ed9c28;
        border-color: #e89113;
    }

    html.dark .checkbox-text-warning input[type="checkbox"]:checked + label:after,
    .checkbox-text-warning input[type="checkbox"]:checked + label:after {
        color: #ed9c28;
    }

    html.dark .checkbox-danger input[type="checkbox"]:checked + label:after,
    .checkbox-danger input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-danger label:before,
    .checkbox-danger label:before {
        background: #d2322d;
        border-color: #bd2d29;
    }

    html.dark .checkbox-text-danger input[type="checkbox"]:checked + label:after,
    .checkbox-text-danger input[type="checkbox"]:checked + label:after {
        color: #d2322d;
    }

    html.dark .checkbox-info input[type="checkbox"]:checked + label:after,
    .checkbox-info input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-info label:before,
    .checkbox-info label:before {
        background: #5bc0de;
        border-color: #46b8da;
    }

    html.dark .checkbox-text-info input[type="checkbox"]:checked + label:after,
    .checkbox-text-info input[type="checkbox"]:checked + label:after {
        color: #5bc0de;
    }

    html.dark .checkbox-dark input[type="checkbox"]:checked + label:after,
    .checkbox-dark input[type="checkbox"]:checked + label:after {
        color: #fff;
    }

    html.dark .checkbox-dark label:before,
    .checkbox-dark label:before {
        background: #171717;
        border-color: #0a0a0a;
    }

    html.dark .checkbox-text-dark input[type="checkbox"]:checked + label:after,
    .checkbox-text-dark input[type="checkbox"]:checked + label:after {
        color: #171717;
    }

    .wrap-anim {
        margin: 30px;
        padding: 30px;
        background: #fff;
        width: 360px;
        height: 640px;
        display: flex;
        flex-direction: column;
    }

    .loading-container {
        width: 100%;
        height: 30px;
    }

    .loading-check-box {
        width: 100%;
        height: 10px;
        margin: 4px 0;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #dddddd;
        background: linear-gradient(to right, #dddddd 0%, #f5f5f5 20%, #e5e5e5 40%, #dddddd 100%);
        background-size: 800px 104px;
        position: relative;
    }

    .loading-text {
        height: 15px;
        margin: 4px 0;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #dddddd;
        background: linear-gradient(to right, #dddddd 0%, #f5f5f5 20%, #e5e5e5 40%, #dddddd 100%);
        background-size: 800px 104px;
        position: relative;
        width: 280px;
    }

    .check-box-with-html .has-error  .help-block-error {
        color: #a94442;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }

    @media (max-width: 767px) {
        .loading-check-box {
            margin-left: 7px;
        }
    }
</style>
