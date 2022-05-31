<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="copying-trader-form">
        <div class="back-btn-block">
          <NuxtLink :to="`/provider/user/${$route.params.nickname}`">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Activation of copying</h1>
        <div class="two-parts">
          <div class="left-parts">
            <div class="form-block-wrap">
              <div :class="{ active: showExpertMode }">
                <div class="description-block">
                  <div class="text-block">
                    <p>Copying in proportion to investor’s equity</p>
                  </div>
                  <div class="btn-block">
                    <div class="expert-mode">
                      <default-button
                        :type="'trans-button'"
                        :label="'EXPERT MODE'"
                        :click-event="switchExpertMode"
                      />
                    </div>
                    <div class="simple-mode">
                      <default-button
                        :type="'trans-button'"
                        :label="'SIMPLE MODE'"
                        :click-event="switchSimpleMode"
                      />
                    </div>
                  </div>
                </div>
                <p>Что-то написать</p>

                <div class="row-line-block-black">
                  <div>
                    <div class="col-line">
                      <p>Trader</p>
                      <span v-if="GET_NICKNAME">{{ GET_NICKNAME }}</span>
                    </div>
                    <div class="col-line">
                      <p>Trader account</p>
                      <span v-if="GET_TRADER_ACCOUNT">{{ GET_TRADER_ACCOUNT.value }}</span>
                    </div>
                    <div class="col-line">
                      <p>Type ACCOUNT</p>
                      <span v-if="GET_TYPE_ACCOUNT">{{ GET_TYPE_ACCOUNT.value }}</span>
                    </div>
                  </div>
                </div>

                <div class="form-card">
                  <div class="row-line">
                    <div class="col-line">
                      <SimpleSelectBlack
                        :options="ACCOUNT_MICRO_TYPE"
                        :handle-select="CHANGE_ACCOUNT_MICRO_TYPE"
                        :label="'Select YOUR account (only start micro type)'"
                        :selected="ACCOUNT_MICRO_TYPE_SELECTED"
                      />
                      <div class="input-simple-mode">
                        <label>VOLUME (lots)</label>
                        <black-input
                          :value="VOLUME"
                        />
                      </div>
                    </div>
                    <div class="col-line">
                      <div class="select-expert-mode">
                        <SimpleSelectBlack
                          :options="COPY_TYPE"
                          :handle-select="CHANGE_COPY_TYPE"
                          :label="'Copy type'"
                          :selected="COPY_TYPE_SELECTED"
                        />
                      </div>
                      <div class="row-line">
                        <div class="col-line">
                          <label>STOP COPY (loss)</label>
                          <black-input
                            :value="STOP_COPY_LOSS"
                          />
                        </div>
                        <div class="col-line">
                          <label>STOP COPY (PROFIT)</label>
                          <black-input
                            :value="STOP_COPY_PROFIT"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <check-box-with-html
                  :in-progress="false"
                  :agreement-html="CHECKBOX_REGULATIONS"
                />

                <div class="btn-block">
                  <NuxtLink to="/monitoring/index" class="block-card">
                    <default-button
                      :type="'red-button'"
                      :label="'Ok'"
                    />
                  </NuxtLink>
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
import { createNamespacedHelpers } from 'vuex'
import userSettingsRequest from '../../../../utils/userSettingsRequest'
import DefaultButton from '../../../../components/default-button.vue'
import BlackInput from '../../../../components/black-input'
import BackButton from '../../../../components/back-button'
import SimpleSelectBlack from '../../../../components/SimpleSelectBlack'
import CheckBoxLabelHtml from '../../../../components/check-box-label-html'
import HOCWithLabelAndNotifications from '../../../../components/HOC-with-label-and-notifications'
import { CHANGE_NICKNAME_TRADER } from '../../../../modules/socialTrading/mutation-types'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('socialTrading')
export default {
  components: {
    'back-button': BackButton,
    'default-button': DefaultButton,
    BlackInput,
    SimpleSelectBlack,
    'check-box-with-html': CheckBoxLabelHtml,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapState([
      'ACCOUNT_MICRO_TYPE',
      'ACCOUNT_MICRO_TYPE_SELECTED',
      'STOP_COPY_LOSS',
      'STOP_COPY_PROFIT',
      'CHECKBOX_REGULATIONS',
      'COPY_TYPE',
      'COPY_TYPE_SELECTED',
      'VOLUME'
    ]),
    ...mapGetters([
      'GET_NICKNAME',
      'GET_TRADER_ACCOUNT_INFO_BY_NICKNAME',
      'GET_TRADER_ACCOUNT',
      'GET_TYPE_ACCOUNT'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_NICKNAME_TRADER',
      'CHANGE_ACCOUNT_MICRO_TYPE',
      'CHANGE_COPY_TYPE'
    ]),
    switchExpertMode () {
      this.showExpertMode = true
    },
    switchSimpleMode () {
      this.showExpertMode = false
    }
  },
  mounted () {
    this[CHANGE_NICKNAME_TRADER](this.$route.params.nickname)
  },
  data () {
    return {
      showExpertMode: false
    }
  }
}
</script>
<style>
.copying-trader-form
{
  padding-bottom: 80px;
}

.copying-trader-form h1
{
  margin-bottom: 80px;
}

.copying-trader-form .back-btn-block
{
  margin-bottom: 80px;
}

.copying-trader-form h3
{
  color: #B2B2B2;
}

.copying-trader-form h3 span
{
  color: #ffffff;
}

.copying-trader-form h3
{
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid #484848;
  font-weight: 600;
  margin-bottom: 30px;
}

.copying-trader-form h3 span
{
  color: #B2B2B2;
}

.copying-trader-form .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.copying-trader-form .left-parts
{
  width: 65%;
}

.copying-trader-form .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
  padding-top: 0;
}

.copying-trader-form .right-parts p
{
  font-family: Arial;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  color: #989898;
}

.copying-trader-form h3
{
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 18px !important;
}

.copying-trader-form .form-block-wrap
{
  background: rgba(36, 36, 36, 0.5);
  padding: 30px 40px 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.copying-trader-form .form-block-wrap .description-block
{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
}

.copying-trader-form .form-block-wrap .description-block .text-block
{
  margin-right: 20px;
}

.copying-trader-form .form-block-wrap .description-block .btn-block button
{
  font-size: 12px;
  line-height: 15px;
  padding: 12px 40px 11px;
  min-width: 174px;
  color: #737373;
}

.copying-trader-form .form-block-wrap .description-block .btn-block button:hover,
.copying-trader-form .form-block-wrap .description-block .btn-block button:active
{
  color: #ffffff;
}

.copying-trader-form .form-block-wrap .description-block
{
  width: 100%;
}

.copying-trader-form .form-block-wrap .description-block > div
{
  position: relative;
}

.copying-trader-form .form-block-wrap .description-block > div:before
{
  width: 3px;
  height: 100%;
  position: absolute;
  content: "";
}

.copying-trader-form .form-block-wrap .description-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.copying-trader-form .form-block-wrap .description-block + p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #B2B2B2;
  margin-bottom: 0;
}

.copying-trader-form .form-block-wrap .form-card .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.copying-trader-form .form-block-wrap .form-card .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 40px;
  width: 50%;
}

.copying-trader-form .form-block-wrap .form-card .col-line > .row-line > .col-line
{
  margin-bottom: 0;
}

.copying-trader-form .form-block-wrap .form-card .col-line label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  margin-bottom: 5px;
  display: block;
}

.copying-trader-form .form-block-wrap .form-card .col-line .only-text
{
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.copying-trader-form .form-block-wrap .form-card .col-line .only-text p
{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #737373;
}

.copying-trader-form .form-block-wrap .btn-block
{
  text-align: center;
}

.copying-trader-form .form-block-wrap .btn-block button
{
  font-size: 15px;
  line-height: 15px;
  padding: 16px 40px 17px;
}

.copying-trader-form .form-block-wrap .description-block .simple-mode
{
  display: none;
}

.copying-trader-form .red-button
{
  min-width: 144px;
}

.copying-trader-form .row-line-block
{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.copying-trader-form .row-line-block .col-line
{
  margin-right: 60px;
  margin-bottom: 20px;
}

.copying-trader-form .row-line-block .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.copying-trader-form .row-line-block-black .col-line p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 5px;
}

.copying-trader-form .row-line-block .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #B2B2B2;
}

.copying-trader-form .row-line-block-black .col-line span
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
}

.copying-trader-form .form-block-wrap .select-expert-mode
{
  margin-bottom: 40px;
  display: none;
}

.copying-trader-form .form-block-wrap .select-expert-mode .selector-wrapper-black .vs__selected
{
  text-transform: none;
}

.copying-trader-form .form-block-wrap .input-simple-mode
{
  margin-top: 40px;
  display: none;
}

.copying-trader-form .row-line-block .col-line:last-child,
.copying-trader-form .row-line-block-black .col-line:last-child
{
  margin-right: 0;
}

.copying-trader-form .row-line-block-black
{
  background: #1B1B1B;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 3px 4px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.copying-trader-form .row-line-block-black > div
{
  display: flex;
  position: relative;
  padding: 17px 16px 0;
}

.copying-trader-form .row-line-block-black > div:before
{
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 3px;
  height: 100%;
  background: #E52525;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.copying-trader-form .row-line-block-black .trans-button
{
  padding: 6px 20px 7px;
  color: #737373;
  font-size: 12px;
  line-height: 15px;
}

.copying-trader-form .row-line-block-black .col-line
{
  margin: 0 60px 17px 0;
}

.copying-trader-form .row-line-block-black .col-line .btn-block-black
{
  display: inline-block;
  margin: -10px 0 -10px 10px;
}

.copying-trader-form .form-block-wrap .active .description-block p,
.copying-trader-form .form-block-wrap .active .description-block .expert-mode
{
  display: none;
}

.copying-trader-form .form-block-wrap .active .description-block .simple-mode,
.copying-trader-form .form-block-wrap .active .select-expert-mode,
.copying-trader-form .form-block-wrap .active .input-simple-mode
{
  display: block;
}

.main-wrapper.light-theme .copying-trader-form .form-block-wrap
{
  background: #ffffff;
}

.main-wrapper.light-theme .copying-trader-form .form-block-wrap .description-block p,
.main-wrapper.light-theme .copying-trader-form .row-line-block-black .col-line span,
.main-wrapper.light-theme .copying-trader-form .form-block-wrap .description-block .btn-block button:hover,
.main-wrapper.light-theme .copying-trader-form .form-block-wrap .description-block .btn-block button:active
{
  color: #000000;
}

.main-wrapper.light-theme .copying-trader-form .form-block-wrap .description-block + p,
.main-wrapper.light-theme .copying-trader-form .row-line-block-black .col-line p,
.main-wrapper.light-theme .copying-trader-form .checkbox-label a
{
  color: #989898;
}

.main-wrapper.light-theme .copying-trader-form .row-line-block-black
{
  background: #F7F6FB;
}

@media (max-width: 1500px) {
  .copying-trader-form .form-block-wrap .form-card .row-line
  {
    display: block;
  }

  .copying-trader-form .form-block-wrap .form-card .col-line
  {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .copying-trader-form .right-parts
  {
    padding-left: 30px;
  }

  .copying-trader-form .form-block-wrap .form-card .col-line .only-text
  {
    min-height: auto;
    display: block;
    margin-top: 0;
  }
}

</style>
