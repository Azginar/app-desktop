<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ModalWindow'
}
</script>
<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        max-width: 480px;
        margin: 0px auto;
        background: #333333;
        padding: 40px 40px 35px;
        color: #ffffff;
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }

    .modal-header{
      text-align: center;
      padding-bottom: 20px;
    }

    .modal-header svg
    {
      width: 50px;
      height: 50px;
      display: inline-block;
    }

    .modal-body
    {
      padding-bottom: 40px;
    }

    .modal-body h3,
    .modal-header h3
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 0;
    }

    .modal-body label
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 10px;
      text-transform: uppercase;
      display: block;
      margin-bottom: 5px;
      color: #737373;
      padding-left: 20px;
    }

    .modal-body .bg-gradient
    {
      background: linear-gradient(90deg, rgba(36, 36, 36, 0) 0%, #242424 49.48%, rgba(36, 36, 36, 0) 100%);
      padding: 23px 30px 27px;
      margin-right: -30px;
      margin-left: -30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-body .bg-gradient .col-line
    {
      width: 45%;
    }

    .modal-body .bg-gradient .col-line:first-child
    {
      text-align: right;
    }

    .modal-body .bg-gradient .col-line:first-child > div
    {
      text-align: left;
      display: inline-block;
    }

    .modal-body .bg-gradient .col-arrow
    {
      width: 60px;
      text-align: center;
    }

    .modal-body .bg-gradient p
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      text-transform: uppercase;
      color: #737373;
      margin-bottom: 4px;
    }

    .modal-body .bg-gradient span
    {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
      color: #FFFFFF;
    }

    .modal-default-button {
        float: right;
    }

    .modal-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .modal-footer > div
    {
      margin: 0 5px 10px;
    }

    .modal-footer button
    {
      min-width: 150px;
    }

    .modal-footer .btn-block
    {
      display: flex;
    }

    .modal-footer .btn-block button
    {
      margin-left: 10px;
      margin-right: 10px;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .main-wrapper.light-theme .modal-body .bg-gradient
    {
      background: linear-gradient(90deg, rgba(36, 36, 36, 0) 0%, #c1c1c1 49.48%, rgba(36, 36, 36, 0) 100%);
    }

    .main-wrapper.light-theme .modal-body h3,
    .main-wrapper.light-theme .modal-header h3,
    .main-wrapper.light-theme .modal-body .bg-gradient span
    {
      color: #000000;
    }

    .main-wrapper.light-theme .internal-transfer-page .imternal-transfer-modal .trans-button
    {
      background: #ffffff;
    }

</style>
