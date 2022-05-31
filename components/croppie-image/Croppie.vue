<template>
  <div :class="wrapClasses">
    <div v-if="showImageCrop" class="panel-change-avatar-body">
      <div class="title-change-avatar">
        <p>{{ title }}</p>
      </div>
      <div class="bg-black">
        <div class="avatar-block">
          <avatar-crop
            :img-url="img"
            :change-avatar="updateCrop"
            :title-cancel="titleCancel"
            :title-save="titleSave"
            :is-black-design="isBlackDesign"
            @cancel="resize"
            @saveImage="saveImage"
          />
        </div>
      </div>
    </div>
    <div v-else class="panel-change-avatar-body">
      <div class="title-change-avatar">
        <p>{{ title }}</p>
      </div>
      <div class="bg-black">
        <div class="avatar">
          <img :src="img" alt="'avatar'">
        </div>
        <div class="button-wrapper">
          <button-input-file :title="'Change Avatar'" @onFileChange="onFileChange" />
          <default-button
            :type="buttonType"
            :label="'Resize'"
            :click-event="resize"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// -------------------- croppie css
import 'croppie/croppie.css'
// --------------------

import DefaultButton from '../default-button'
import ButtonInputFile from '../ButtonInputFile.vue'
import AvatarCrop from './AvatarCrop.vue'

export default {
  name: 'Croppie',
  components: {
    'avatar-crop': AvatarCrop,
    'default-button': DefaultButton,
    'button-input-file': ButtonInputFile
  },
  props: {
    title: {
      type: String,
      default: 'Profile photo'
    },
    titleCancel: {
      type: String,
      default: 'Cancel'
    },
    titleSave: {
      type: String,
      default: 'Save'
    },
    imgUrl: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    },
    originImg: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    },
    isBlackDesign: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      updateCrop: false,
      showImageCrop: false,
      croppieImg: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    }
  },
  computed: {
    img () {
      return this.croppieImg
    },
    wrapClasses () {
      return {
        'panel-change-avatar': true,
        'panel-change-avatar-red-black': this.isBlackDesign
      }
    },
    buttonType () {
      return this.isBlackDesign ? 'default-red-button' : 'trans-button'
    }
  },
  mounted () {
    this.croppieImg = this.imgUrl
  },
  methods: {
    onFileChange (e) {
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.updateCrop = true
    },

    resize () {
      this.croppieImg = this.originImg
      this.showImageCrop = !this.showImageCrop
    },
    saveImage () {
      // console.info(e)
    }
  }
}
</script>
<style>
    .panel-change-avatar {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        margin-bottom: 20px;
        border-radius: 4px;
        background: transparent;
        box-shadow: none;
        border: none;
    }
    .panel-change-avatar-body {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        padding: 15px;
        background: #fdfdfd;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
    }
    .title-change-avatar {
        text-align: center;
    }
    .title-change-avatar > p {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        text-align: center !important;
        box-sizing: border-box;
        margin: 0 0 10px;
        margin-bottom: 15px !important;
    }
    .button-wrapper {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        text-align: center !important;
        box-sizing: border-box;
        margin-top: 15px !important;
    }
    .avatar {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        box-sizing: border-box;
        vertical-align: middle;
        text-align: center;
        padding: 0;
        position: relative;
    }

    .avatar > img {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        line-height: 22px;
        color: #555;
        font-size: 12px;
        font-family: "Open Sans",sans-serif;
        text-align: center;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 50%;
        background-color: #fff;
        border: 0 solid #a7a7a7;
        width: 200px;
        height: 200px;
    }

    .panel-change-avatar-red-black .panel-change-avatar-body {
      background: #333333;
      border-radius: 0;
      -moz-border-radius: 0;
      -webkit-border-radius: 0;
    }

    .panel-change-avatar-red-black .panel-change-avatar-body {
      text-align: left;
      padding: 0;
    }

    .panel-change-avatar-red-black .button-wrapper .span-wrapper,
    .panel-change-avatar-red-black .button-wrapper button {
      margin-right: 10px;
      margin-left: 10px;
      vertical-align: top;
    }

    .panel-change-avatar-red-black .button-wrapper {
      margin-top: 20px !important;
    }

    .panel-change-avatar-red-black .title-change-avatar > p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #FFFFFF;
    }

    .panel-change-avatar-red-black .avatar-block {
      padding: 40px 35px;
      overflow: hidden;
      position: relative;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
    }

    .panel-change-avatar-red-black .avatar > img {
      width: 250px;
      height: 250px;
    }

    .panel-change-avatar-red-black .avatar,
    .panel-change-avatar-red-black .button-wrapper {
      position: relative;
    }

    .panel-change-avatar-red-black .avatar-block:before {
      position: absolute;
      z-index: 0;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #242424 !important;
      opacity: 0.5;
    }

    .panel-change-avatar-body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      line-height: 22px;
      color: #555;
      font-size: 12px;
      font-family: "Open Sans", sans-serif;
      box-sizing: border-box;
      padding: 15px;
      background: #fdfdfd;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }
</style>
