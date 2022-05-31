<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="edit-form">
        <div class="two-parts">
          <div class="left-parts">
            <div class="back-btn-block">
              <NuxtLink to="/settings/index">
                <back-button
                  :type="'back-button'"
                  :label="'Back'"
                  :click-event="() => {}"
                />
              </NuxtLink>
            </div>
            <h1>Edit your personal info</h1>
            <div class="form-block">
              <div class="row-line">
                <div class="col-line">
                  <label>Full name</label>
                  <black-input
                    :value="GET_USER_FULL_NAME"
                    :handle-input="() => {}"
                  />
                </div>
                <div class="col-line">
                  <div class="row-line">
                    <div class="col-line">
                      <SimpleSelectBlack
                        :options="['Male', 'Female']"
                        :handle-select="() => {}"
                        :label="'Gender'"
                        :selected="'Male'"
                      />
                    </div>
                    <div class="col-line">
                      <label>Date of birth</label>
                      <DateRangePicker />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <SimpleSelectBlack
                    :options="GET_ROOT_COUNTRIES"
                    :handle-select="CHANGE_USER_SETTINGS_FORM_COUNTRY"
                    :label="'Country'"
                    :selected="GET_USER_SETTINGS_FORM_COUNTRY"
                  />
                </div>
                <div class="col-line">
                  <label>Region</label>
                  <black-input
                    :value="GET_USER_SETTINGS_FORM_REGION"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_REGION"
                    :attribute="'region'"
                    :errors="ERRORS"
                  />
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <label>City</label>
                  <black-input
                    :value="GET_USER_SETTINGS_FORM_CITY"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_CITY"
                    :attribute="'city'"
                    :errors="ERRORS"
                  />
                </div>
                <div class="col-line">
                  <label>Address</label>
                  <black-input
                    :value="GET_USER_SETTINGS_FORM_ADDRESS"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_ADDRESS"
                    :errors="ERRORS"
                    :attribute="'address'"
                  />
                </div>
              </div>
              <div class="row-line">
                <div class="col-line">
                  <label>Postcode</label>
                  <black-input
                    :value="GET_USER_SETTINGS_FORM_POSTCODE"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_POSTCODE"
                    :attribute="'postcode'"
                    :errors="ERRORS"
                  />
                </div>
                <div class="col-line">
                  <label>Phone</label>
                  <input-with-button
                    :value="GET_USER_SETTINGS_FORM_PHONE"
                    :errors="ERRORS"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_PHONE"
                  >
                    <template v-slot:button>
                      <default-button
                        :label="'Change'"
                        :click-event="() => {}"
                        :type="'trans-button'"
                      />
                    </template>
                  </input-with-button>
                </div>
              </div>
              <div class="row-line">
                <div class="col-line-full">
                  <label>About</label>
                  <black-input
                    :value="GET_USER_SETTINGS_FORM_ABOUT"
                    :handle-input="CHANGE_USER_SETTINGS_FORM_ABOUT"
                    :errors="ERRORS"
                  />
                </div>
              </div>
              <div class="btn-block">
                <default-button
                  :type="'red-button'"
                  :label="'Save'"
                  :click-event="SAVE_CHANGES"
                />
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
import userSettingsRequest from '../../utils/userSettingsRequest'
import BackButton from '../../components/back-button.vue'
import BlackInput from '../../components/black-input'
import SimpleSelectBlack from '../../components/SimpleSelectBlack'
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker'
import InputWithButton from '../../components/input-with-button'
import DefaultButton from '../../components/default-button.vue'
import getUserSettingsRequest from '../../services/userSettingsFormRequests'
import getAllowCountryList from '../../services/loadAllowCountryList'
import HOCWithLabelAndNotifications from '../../components/HOC-with-label-and-notifications'
const { mapGetters, mapActions, mapState } = createNamespacedHelpers('settings')
export default {
  components: {
    'back-button': BackButton,
    BlackInput,
    SimpleSelectBlack,
    DateRangePicker,
    InputWithButton,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    const userSettingsPromise = userSettingsRequest(context)
    const getUserSettingsPromise = getUserSettingsRequest(context)
    const getAllowCountryListPromise = getAllowCountryList(context)
    await Promise.all([
      userSettingsPromise,
      getUserSettingsPromise,
      getAllowCountryListPromise
    ])
  },
  computed: {
    ...mapState(['ERRORS']),
    ...mapGetters([
      'GET_USER_FULL_NAME',
      'GET_USER_SETTINGS_FORM_REGION',
      'GET_USER_SETTINGS_FORM_CITY',
      'GET_USER_SETTINGS_FORM_ADDRESS',
      'GET_USER_SETTINGS_FORM_POSTCODE',
      'GET_USER_SETTINGS_FORM_PHONE',
      'GET_USER_SETTINGS_FORM_ABOUT',
      'GET_USER_SETTINGS_FORM_COUNTRY',
      'GET_ROOT_COUNTRIES'
    ])
  },
  methods: {
    ...mapActions([
      'SAVE_CHANGES',
      'CHANGE_USER_SETTINGS_FORM_COUNTRY',
      'CHANGE_USER_SETTINGS_FORM_PHONE',
      'CHANGE_USER_SETTINGS_FORM_CITY',
      'CHANGE_USER_SETTINGS_FORM_REGION',
      'CHANGE_USER_SETTINGS_FORM_ADDRESS',
      'CHANGE_USER_SETTINGS_FORM_POSTCODE',
      'CHANGE_USER_SETTINGS_FORM_ABOUT'
    ])
  }
}
</script>

<style>
.edit-form .back-btn-block
{
  margin-bottom: 80px;
}

.edit-form h1
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.edit-form .form-block
{
  background: rgba(36, 36, 36, 0.5);
  padding: 40px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.edit-form .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.edit-form .left-parts
{
  width: 65%;
}

.edit-form .form-block .row-line
{
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
}

.edit-form .form-block .row-line .col-line-full
{
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.edit-form .form-block > .row-line > .col-line,
.edit-form .form-block > .row-line > .col-line-full
{
  margin-bottom: 40px;
}

.edit-form .form-block .col-line
{
  padding-left: 10px;
  padding-right: 10px;
  width: 50%;
}

.edit-form .form-block label
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
  color: #737373;
  padding-left: 20px;
  display: block;
  margin-bottom: 5px;
}

.edit-form .form-block .btn-block
{
  text-align: center;
}

.edit-form .form-block .btn-block .red-button
{
  font-size: 15px;
  line-height: 15px;
  padding-top: 16px;
  padding-bottom: 17px;
}

.main-wrapper.light-theme .edit-form .form-block
{
  background: #ffffff;
}
</style>
