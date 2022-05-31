<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="accounts-page terminal-page">
        <h1>Accounts</h1>
        <sub-nemu />
        <h3>MetaTrader 4</h3>
        <div class="terminal-container">
          <terminal-block :title="'MT4 for PC'">
            <template v-slot:icon>
              <icMonitor />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/web/tifia.investments.limited/mt4/tifia4setup.exe" target="_blank">
                <default-button
                  :type="'trans-button'"
                  :label="'Download'"
                  :click-event="() => {}"
                />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT4 For Mac'">
            <template v-slot:icon>
              <icMonitor />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg" target="_blank">
                <default-button
                  :type="'trans-button'"
                  :label="'Download'"
                  :click-event="() => {}"
                />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT4 for iPhone/iPad'">
            <template v-slot:icon>
              <icIpad />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/mobile/mt4/ios?server=Tifia-Universal" target="_blank">
                <buttonAppStore class="button-svg" />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT4 for Android'">
            <template v-slot:icon>
              <icIphone />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/mobile/mt4/android?server=Tifia-Universal" target="_blank">
                <buttonGooglePay class="button-svg" />
              </a>
            </template>
          </terminal-block>
        </div>
        <h3>MetaTrader 5</h3>
        <div class="terminal-container">
          <terminal-block :title="'MT5 for PC'">
            <template v-slot:icon>
              <icMonitor />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/web/tifia.investments.limited/mt5/tifia5setup.exe" target="_blank">
                <default-button
                  :type="'trans-button'"
                  :label="'Download'"
                  :click-event="() => {}"
                />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT5 For Mac'">
            <template v-slot:icon>
              <icMonitor />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg" target="_blank">
                <default-button
                  :type="'trans-button'"
                  :label="'Download'"
                  :click-event="() => {}"
                />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT5 for iPhone/iPad'">
            <template v-slot:icon>
              <icIpad />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=Tifia-MT5" target="_blank">
                <buttonAppStore class="button-svg" />
              </a>
            </template>
          </terminal-block>

          <terminal-block :title="'MT5 for Android'">
            <template v-slot:icon>
              <icIphone />
            </template>
            <template v-slot:button>
              <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=Tifia-MT5" target="_blank">
                <buttonGooglePay class="button-svg" />
              </a>
            </template>
          </terminal-block>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import icMonitor from '../../../assets/icons/monitor-ic.svg'
import icIpad from '../../../assets/icons/ipad-ic.svg'
import icIphone from '../../../assets/icons/android-ic.svg'
import buttonAppStore from '../../../assets/icons/appstore.svg'
import buttonGooglePay from '../../../assets/icons/google-pay.svg'
import userSettingsRequest from '../../../utils/userSettingsRequest'
import SubMenu from '../../../components/one-line-sub-menu'
import terminalBlock from '../../../components/terminalBlock'
import DefaultButton from '../../../components/default-button.vue'
import HOCWithLabelAndNotifications from '../../../components/HOC-with-label-and-notifications'
export default {
  components: {
    'terminal-block': terminalBlock,
    'sub-nemu': SubMenu,
    icMonitor,
    icIpad,
    icIphone,
    buttonAppStore,
    buttonGooglePay,
    'default-button': DefaultButton,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  }
}
</script>
<style>
.ul-tabs li a
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

.terminal-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(94, 94, 94, 0.5);
  margin-bottom: 30px;
}

.terminal-page .terminal-container
{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.terminal-page .terminal-container .button-svg
{
  fill: #5E5E5E;
}

.terminal-page .terminal-container .button-svg:hover
{
  fill: #ffffff;
}

.main-wrapper.light-theme .terminal-page h3,
.main-wrapper.light-theme .terminal-block h4
{
  color: #000000;
}

.main-wrapper.light-theme .terminal-block
{
  background: #ffffff;
}

.main-wrapper.light-theme .terminal-page .terminal-container .button-svg:hover
{
  fill: #000000;
}

.main-wrapper.light-theme .terminal-page .terminal-container .button-svg
{
  fill: #989898;
}
</style>
