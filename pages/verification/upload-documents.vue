<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="upload-documents-page">
        <h1>Upload your documents</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="upload-documents-page-form">
              <h3>Identity</h3>
              <div class="row-line">
                <div class="left">
                  <img src="~/assets/icons/id-img.png" />
                  <div class="btn-block">
                    <button-input-file :title="'Add photo'" />
                  </div>
                </div>
                <div class="right">
                  <p>In compliance with the requirements of regulation</p>
                  <p>upload a color copy of the document (<span>passport, driving license or local identification card</span>) with:</p>
                  <ul>
                    <li>Your photo</li>
                    <li>Name and Surname</li>
                    <li>Date of birth</li>
                    <li>Expiry Date</li>
                    <li>Number of the document</li>
                  </ul>
                  <p>Full-size color copy showing the document in full. Copies which show your documents with the edges cut off will not be accepted.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right-parts">
            <p>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</p>
            <div class="content-row">
              <div class="row-line">
                <div class="row-col">
                  <div class="black">
                    <img src="~/assets/icons/id-good.png" />
                  </div>
                  <div class="white">
                    <img src="~/assets/icons/id-good-white.png" />
                  </div>
                </div>
                <div class="row-col">
                  <div class="black">
                    <img src="~/assets/icons/id-wrong.png" />
                  </div>
                  <div class="white">
                    <img src="~/assets/icons/id-wrong-white.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="two-parts">
          <div class="left-parts">
            <div class="upload-documents-page-form">
              <h3>Address</h3>
              <div class="row-line">
                <div class="left">
                  <img src="~/assets/icons/doc-icon.png" />
                  <div class="btn-block">
                    <button-input-file :title="'Add photo'" />
                  </div>
                </div>
                <div class="right">
                  <p>In compliance with the requirements of regulation</p>
                  <p>upload a color copy of the document (<span>utility bill, bank or credit card statement, tax invoice or certificate from local authorities with the name and address of organization that is internationally recognized</span>) with:</p>
                  <ul>
                    <li>Name and Surname</li>
                    <li>Actual residential address</li>
                    <li>Dated within the last 3 months</li>
                  </ul>
                  <p>Full-size color copy showing the document in full. Copies which show your documents with the edges cut off will not be accepted.</p>
                </div>
              </div>
            </div>
            <div class="bottom-part-btn">
              <p>We remind you that if you plan to use a bank card, it must be verified (the requirement of the regulator-banker of something there)</p>
              <NuxtLink to="/deposit/bank-card/index">
                <default-button
                  :type="'trans-button'"
                  :label="'Verification Bank card'"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="right-parts">
            <p>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</p>
            <div class="content-row">
              <div class="row-line">
                <div class="row-col">
                  <div class="black">
                    <img src="~/assets/icons/doc-good.png" />
                  </div>
                  <div class="white">
                    <img src="~/assets/icons/doc-good-white.png" />
                  </div>
                </div>
                <div class="row-col">
                  <div class="black">
                    <img src="~/assets/icons/doc-wrong.png" />
                  </div>
                  <div class="white">
                    <img src="~/assets/icons/doc-wrong-white.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import userSettingsRequest from '../../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
import ButtonInputFile from '../../components/ButtonInputFile.vue'
import DefaultButton from '../../components/default-button.vue'
export default {
  components: {
    HOCWithLabelAndNotifications,
    'button-input-file': ButtonInputFile,
    'default-button': DefaultButton
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  }
}
</script>
<style>
.upload-documents-page h1
{
  margin-bottom: 20px;
}

.upload-documents-page
{
  padding-bottom: 60px;
}

.upload-documents-page .two-parts
{
  display: flex;
}

.upload-documents-page .left-parts
{
  width: 65%;
}

.upload-documents-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.upload-documents-page .upload-documents-page-form
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px 40px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.upload-documents-page .upload-documents-page-form h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.upload-documents-page .upload-documents-page-form .row-line
{
  display: flex;
}

.upload-documents-page .upload-documents-page-form .row-line .btn-block
{
  text-align: center;
}

.upload-documents-page .upload-documents-page-form .row-line > div:first-child
{
  margin-right: 40px;
  width: 203px;
  flex-shrink: 0;
}

.upload-documents-page .upload-documents-page-form .row-line > div:first-child img
{
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.upload-documents-page .upload-documents-page-form .row-line p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-bottom: 20px;
}

.upload-documents-page .upload-documents-page-form .row-line ul
{
  padding-left: 0;
  margin-bottom: 20px;
}

.upload-documents-page .upload-documents-page-form .row-line ul li
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  position: relative;
  padding-left: 20px;
}

.upload-documents-page .upload-documents-page-form .row-line ul li:before
{
  width: 5px;
  height: 5px;
  content: "";
  top: 6px;
  left: 0;
  position: absolute;
  background: #B2B2B2;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.upload-documents-page .upload-documents-page-form .row-line p span
{
  color: #ffffff;
}

.upload-documents-page .upload-documents-page-form .row-line label
{
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
  padding-left: 20px;
}

.upload-documents-page .upload-documents-page-form .row-line .span-wrapper
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  line-height: 14px;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 12px 40px;
  background: #333333 !important;
  border: 1px solid rgba(94, 94, 94, 0.5) !important;
  box-sizing: border-box;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.upload-documents-page .upload-documents-page-form .row-line .span-wrapper:hover,
.upload-documents-page .upload-documents-page-form .row-line .span-wrapper:active
{
  border: 1px solid rgba(229, 37, 37, 0.5) !important;
  color: #ffffff !important;
}

.upload-documents-page .upload-documents-page-form .row-line .span-wrapper:active
{
  margin-top: 1px;
  margin-bottom: -1px;
}

.upload-documents-page .upload-documents-page-form .btn-block
{
  text-align: center;
  margin-top: 20px;
}

.upload-documents-page .upload-documents-page-form .btn-block button
{
  font-size: 15px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.upload-documents-page .bottom-part-btn
{
  padding-top: 80px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  color: #989898;
}

.upload-documents-page .bottom-part-btn p
{
  margin-bottom: 10px;
}

.upload-documents-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 10px;
}

.upload-documents-page .right-parts .content-row
{
  margin-bottom: 30px;
}

.upload-documents-page .right-parts .content-row .text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.upload-documents-page .right-parts .content-row .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.upload-documents-page .right-parts .content-row .row-line > div
{
  padding-left: 10px;
  padding-right: 10px;
}

.upload-documents-page .right-parts .content-row .row-line > div img
{
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.upload-documents-page .black
{
  display: block;
}

.upload-documents-page .white
{
  display: none;
}

.main-wrapper.light-theme .upload-documents-page .upload-documents-page-form
{
  background: #ffffff;
}

.main-wrapper.light-theme .upload-documents-page .upload-documents-page-form h3
{
  color: #000000;
}

.main-wrapper.light-theme .upload-documents-page .upload-documents-page-form .row-line .span-wrapper
{
  background: #F7F6FB !important;
  border-color: #D4D4D4 !important;
}

.main-wrapper.light-theme .upload-documents-page .upload-documents-page-form .row-line .span-wrapper:hover
{
  color: #000000 !important;
  border-color: #000000 !important;
}

.main-wrapper.light-theme .upload-documents-page .upload-documents-page-form .row-line p span
{
  color: #000000;
}

.main-wrapper.light-theme .upload-documents-page .black
{
  display: none;
}

.main-wrapper.light-theme .upload-documents-page .white
{
  display: block;
}

@media (max-width: 1300px) {
  .upload-documents-page .upload-documents-page-form .row-line
  {
    display: block;
  }

  .upload-documents-page .upload-documents-page-form .row-line > div:first-child
  {
    width: 100%;
    margin-bottom: 20px;
  }

  .upload-documents-page .upload-documents-page-form h3
  {
    text-align: center;
  }

  .upload-documents-page .right-parts .content-row .row-line
  {
    display: block;
  }
}
</style>
