<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view verification-card-page">
        <h1>Finance</h1>
        <sub-nemu />
        <h3>
          <NuxtLink to="/deposit/bank-card/index">
            Bank card
          </NuxtLink> / <NuxtLink to="/deposit/bank-card/add-card">
            Add new card
          </NuxtLink> / <span>Verification</span>
        </h3>
        <div class="two-parts">
          <div class="left-parts">
            <div class="card-block-verification">
              <div class="description-block">
                <div class="img-block">
                  <icMasterCard />
                </div>
                <div class="text-block">
                  <div class="info-text">
                    <p>In compliance with the requirements of AML.</p>
                    <p>To verify your Bank card, please upload the photos of the front and back sides of your card (<span>with CVC/CVV code hidden</span>).</p>
                    <ul>
                      <li>Full color copy, that shows all corners of the card,</li>
                      <li>With the number and expiry date,</li>
                      <li>With the full name of the card owner.</li>
                    </ul>
                    <p>If you use a virtual card, upload a screenshot of your online cabinet, which shows the card number and your name.</p>
                  </div>
                  <div class="content-row card-info">
                    <div class="error-block">
                      <icRejected />
                      <p>Карта отклонена. Причина: Карта на фотографии срезана, загрузите полную фотографию карты</p>
                    </div>
                    <div class="row-line">
                      <div class="col-line">
                        <div class="card-border">
                          <img src="~/assets/icons/card-front.png" />
                        </div>
                        <div class="btn-wrap">
                          <button-input-file :title="'Add photo'" />
                        </div>
                      </div>
                      <div class="col-line">
                        <div class="card-border">
                          <img src="~/assets/icons/card-back.png" />
                        </div>
                        <div class="btn-wrap">
                          <button-input-file :title="'Add photo'" />
                        </div>
                      </div>
                    </div>

                    <div class="error-block checked">
                      <icChecked />
                      <p>Карта отклонена. Причина: Карта на фотографии срезана, загрузите полную фотографию карты</p>
                    </div>
                    <div class="row-line">
                      <div class="col-line">
                        <img src="~/assets/icons/card-front-add.png" />
                        <div class="btn-wrap">
                          <button-input-file :title="'Change photo'" />
                        </div>
                      </div>
                      <div class="col-line">
                        <img src="~/assets/icons/card-back-add.png" />
                        <div class="btn-wrap">
                          <button-input-file :title="'Change photo'" />
                        </div>
                      </div>
                    </div>

                    <div class="btn-block">
                      <NuxtLink to="/deposit/bank-card/index" class="block-card">
                        <default-button
                          :type="'red-button'"
                          :label="'Continue'"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-parts instruction-text">
            <p>Only a full-sized color photo, in which all the edges of your card are visible, can be accepted.</p>
            <div class="content-row">
              <div class="row-line">
                <div class="row-col">
                  <img src="~/assets/icons/card-wrong-v1.png" />
                </div>
                <div class="row-col">
                  <img src="~/assets/icons/card-wrong-v2.png" />
                </div>
              </div>
            </div>
            <p>You can hide CVC/CVV code while making a photo by using peace of paper or your finger.</p>
            <div class="content-row">
              <div class="row-line">
                <div class="row-col">
                  <img src="~/assets/icons/card-good-v1.png" />
                </div>
                <div class="row-col">
                  <img src="~/assets/icons/card-good-v2.png" />
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
import icMasterCard from '../../../assets/icons/master-card-ic.svg'
import icChecked from '../../../assets/icons/checked-ic.svg'
import icRejected from '../../../assets/icons/rejected-ic.svg'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import ButtonInputFile from '../../../components/ButtonInputFile.vue'
import DefaultButton from '../../../components/default-button.vue'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'sub-nemu': SubMenu,
    icMasterCard,
    icChecked,
    icRejected,
    'default-button': DefaultButton,
    'button-input-file': ButtonInputFile,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  }
}
</script>
<style>
.ul-tabs li a,
.finance-page.finance-page-view .ul-tabs li:first-child a
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.ul-tabs li a:hover
{
  color: #ffffff !important;
}

.ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

.finance-page
{
  padding-bottom: 80px;
}

.finance-page.finance-page-view h3
{
  color: #B2B2B2;
}

.finance-page.finance-page-view h3 span
{
  color: #ffffff;
}

.finance-page.finance-page-view h3 a
{
  color: #B2B2B2;
}

.finance-page h3
{
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid #484848;
  font-weight: 600;
  margin-bottom: 30px;
}

.finance-page h3 span
{
  color: #B2B2B2;
}

.verification-card-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.verification-card-page .left-parts
{
  width: 65%;
}

.verification-card-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.verification-card-page h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.verification-card-page .card-block-verification
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.verification-card-page .card-block-verification .description-block
{
  display: flex;
}

.verification-card-page .card-block-verification .description-block .img-block
{
  margin-right: 20px;
}

.verification-card-page .card-block-verification .description-block
{
  width: 100%;
}

.verification-card-page .card-block-verification .description-block p,
.verification-card-page .card-block-verification .description-block li
{
  font-family: Arial;
  font-size: 14px;
  line-height: 140%;
  color: #989898;
  margin-top: 0;
  margin-bottom: 20px;
}

.verification-card-page .card-block-verification .description-block ul li
{
  margin-bottom: 0;
  position: relative;
  padding-left: 20px;
}

.verification-card-page .card-block-verification .description-block ul li:before
{
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  background: #B2B2B2;
  left: 0;
  top: 7px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.verification-card-page .card-block-verification .description-block ul
{
  padding-left: 0;
  margin-bottom: 20px;
}

.verification-card-page .card-block-verification .description-block p span
{
  color: #ffffff;
}

.verification-card-page .card-block-verification .description-block .card-border
{
  background: #2C2C2C;
  max-width: 203px;
  margin: 0 auto;
  border: 1px solid #3C3C3C;
  padding: 20px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.verification-card-page .card-block-verification .description-block button
{
  margin-bottom: 40px;
}

.verification-card-page .card-block-verification .description-block button
{
  margin-bottom: 0;
}

.verification-card-page .card-block-verification .description-block .card-border img
{
  max-width: 100%;
  height: auto;
}

.verification-card-page .card-block-verification .description-block .row-line
{
  display: flex;
}

.verification-card-page .card-block-verification .description-block .row-line > div
{
  width: 50%;
  text-align: center;
  margin-bottom: 20px;
}

.verification-card-page .card-block-verification .description-block .info-text
{
  margin-bottom: 40px;
}

.verification-card-page .card-block-verification .description-block .btn-block
{
  text-align: center;
  padding-top: 20px;
}

.verification-card-page .card-block-verification .description-block .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.verification-card-page .card-block-verification .description-block .btn-wrap
{
  margin-top: 20px;
}

.verification-card-page .card-block-verification .description-block .span-wrapper
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  margin: 0 0 20px;
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

.verification-card-page .card-block-verification .description-block .span-wrapper:hover,
.verification-card-page .card-block-verification .description-block .span-wrapper:active
{
  border: 1px solid rgba(229, 37, 37, 0.5) !important;
  color: #ffffff !important;
}

.verification-card-page .card-block-verification .description-block .span-wrapper:active
{
  margin-top: 1px;
  margin-bottom: -1px;
}

.verification-card-page .card-block-verification .description-block .error-block
{
  display: flex;
  align-items: flex-start;
  margin-bottom: 36px;
}

.verification-card-page .card-block-verification .description-block .error-block svg
{
  margin: 1px 7px 0 0;
  flex-shrink: 0;
}

.verification-card-page .card-block-verification .description-block .error-block p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 0;
}

.verification-card-page .card-block-verification .description-block .error-block.checked p
{
  color: #D2AC75;
}

.verification-card-page .right-parts h4
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.verification-card-page .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 10px;
}

.verification-card-page .right-parts span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #B2B2B2;
}

.verification-card-page .right-parts .content-row
{
  margin-bottom: 30px;
}

.verification-card-page .right-parts .content-row .text
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.verification-card-page .right-parts .content-row .row-line
{
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
}

.verification-card-page .right-parts .content-row .row-line > div
{
  padding-left: 10px;
  padding-right: 10px;
}

.verification-card-page .right-parts .content-row .row-line > div img
{
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.verification-card-page .right-parts.instruction-text
{
  padding-top: 0;
}

.main-wrapper.light-theme .verification-card-page .card-block-verification
{
  background: #ffffff;
}

.main-wrapper.light-theme .verification-card-page .card-block-verification .description-block .error-block p
{
  color: #000000;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 a,
.main-wrapper.light-theme .verification-card-page .card-block-verification .description-block p span,
.main-wrapper.light-theme .finance-page.finance-page-view h3
{
  color: #989898;
}

.main-wrapper.light-theme .verification-card-page .card-block-verification .description-block .span-wrapper
{
  color: #989898 !important;
  border-color: #D4D4D4 !important;
  background: transparent !important;
}

@media (max-width: 1500px) {
  .verification-card-page .card-block-verification .description-block
  {
    display: block;
  }

  .verification-card-page .card-block-verification .description-block .img-block
  {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 1200px) {
  .verification-card-page .card-block-verification .description-block .row-line,
  .verification-card-page .right-parts .content-row .row-line
  {
    display: block;
  }

  .verification-card-page .card-block-verification .description-block .row-line > div,
  .verification-card-page .right-parts .content-row .row-line > div
  {
    width: 100%;
  }

  .verification-card-page .right-parts
  {
    padding-left: 30px;
  }
}

</style>
