<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="home-page">
        <page-title />
        <div class="two-parts">
          <div class="left-parts">
            <h3>Balance information</h3>
            <hr>
            <div class="row-line ballance-info">
              <div class="left-col">
                <div class="ballance-block">
                  <div>
                    <p>All accounts balance</p>
                    <span>3 084.54 USD</span>
                  </div>
                </div>
              </div>
              <div class="right-col align-right">
                <div class="btn-wrapper">
                  <div>
                    <default-button
                      :type="'trans-button'"
                      :label="'Deposit'"
                      :click-event="gotoDepositPage"
                    />
                  </div>
                  <div>
                    <default-button
                      :type="'trans-button'"
                      :label="'Withdrawal'"
                      :click-event="gotoWithdrawalPage"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="metatrader-block-main">
              <h3>Download MetaTrader</h3>
              <hr>
              <div class="metatrader-download">
                <div>
                  <div class="img">
                    <metatrader4Logo />
                  </div>
                  <div class="btn-block">
                    <default-button
                      :type="'trans-button'"
                      :label="'Download'"
                      :click-event="downloadMT"
                    />
                  </div>
                </div>
                <div>
                  <div class="img">
                    <metatrader5Logo />
                  </div>
                  <div class="btn-block">
                    <default-button
                      :type="'trans-button'"
                      :label="'Download'"
                      :click-event="downloadMT"
                    />
                  </div>
                </div>
              </div>
              <hr>
            </div>
            <div class="promo-block-main">
              <h3>Promotions</h3>
              <promoBlockMain :promo-info="promotionsInfo" />
            </div>
            <div class="row-line trading-history-block">
              <div class="left-col">
                <title-with-link :title_main="'Trading History'" :title="'All trading history'" :link="'/'" />
                <trading-history :table-data="tradingHistoryList" />
                <title-with-link :title_main="'Popular instruments'" :title="'Full list'" :link="'/instruments/index'" />
                <popular-instruments-main :table-data="popularInstrumentsList" />
              </div>
              <div class="right-col">
                <title-with-link :title_main="'Analytics'" :title="'All analytics'" :link="'/'" />
                <analytics :title_main="'Analytics'" :title="'all analytics'" :analytics-data="analyticsData" />
              </div>
            </div>
          </div>
          <div class="right-parts">
            <title-with-link :title_main="'Messages'" :title="'All messages'" :link="'/notifications/index'" />
            <div v-if="isInProgress">
              Loading...
            </div>
            <div v-else>
              <div v-if="checkEmpty(notificationsList)">
                <messages :messages-data="notificationsList" />
              </div>
              <div v-else>
                You have no notifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>

<script>
import { LOAD_NOTIFICATIONS } from '@/modules/notifications/actions-types'
import { GET_DATA_NOTIFICATIONS_INFO, GET_LOAD_NOTIFICATIONS_IN_PROGRESS } from '@/modules/notifications/getter-types'
import PageTitle from '../components/page-title'
import DefaultButton from '../components/default-button.vue'
import metatrader4Logo from '../assets/icons/metatrader4-logo.svg'
import metatrader5Logo from '../assets/icons/metatrader5-logo.svg'
import tradingHistory from '../components/tradingHistory'
import PopularInstrumentsMain from '../components/instruments/popularInstrumentsMainPage'
import promoBlockMain from '../components/promotions/promoBlockMain'
import analytics from '../components/analytics'
import messages from '../components/messages-block'
import titleWithLink from '../components/title-with-link'
import userSettingsRequest from '../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../components/HOC-with-label-and-notifications'
import { GET_PROMOTIONS_INFO } from "@/modules/promotions/getter-types"
import { GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE, GET_LIST_TRADING_HISTORY_MAIN_PAGE } from '@/modules/instruments/getter-types'

export default {
  components: {
    'page-title': PageTitle,
    'default-button': DefaultButton,
    'trading-history': tradingHistory,
    analytics,
    messages,
    'title-with-link': titleWithLink,
    HOCWithLabelAndNotifications,
    metatrader4Logo,
    metatrader5Logo,
    'promoBlockMain': promoBlockMain,
    'popular-instruments-main': PopularInstrumentsMain
  },
  async asyncData (context) {
    await userSettingsRequest(context)
    await context.app.store.dispatch(`notifications/${LOAD_NOTIFICATIONS}`)
  },
  data () {
    return {
      analyticsData: [
        {
          time: '2 часа назад',
          title: 'Ключевые события',
          description: '<p>Соединённые Штаты Америки</p><p>Американская валюта сегодня слабеет по отношению к евро и движется горизонтально в парах с фунтом и иеной.</p><p>Инвесторы продолжают наблюдать за развитием торгового конфликта КНР и США. Американская администрация выполнила угрозы и подняла пошлины на китайский импорт суммой в 200 млрд долларов с 10% до 25%. Китайское правительство выразило сожаление по поводу такого решения США и заявило о том, что примет ответные меры. В настоящее время Пекин уже поднял пошлины на американский импорт суммой в 110 млрд долларов.</p>'
        },
        {
          time: '4 часа назад',
          title: 'GBP/USD: общий обзор',
          description: '<p>Текущая динамика</p><p>В конце апреля и начале мая восходящая динамика пары GBP/USD, основанная на сильной британской статистике, сменилась резким падением. Основным катализатором снижения стали негативные данные по ключевым секторам экономики Великобритании и сильные релизы США, что обеспечило рост спроса на американскую валюту, которая начала укрепляться по отношению к основным конкурентам. Сегодня в Великобритании вышел ряд публикаций, которые практически никак не повлияли на динамику курса за счёт своей разнонаправленности: в марте данные по промышленности выросли, в то время как темпы роста экономики сократились.</p>'
        }
      ]
    }
  },
  computed: {
    notificationsList () {
      return this.$store.getters[`notifications/${GET_DATA_NOTIFICATIONS_INFO}`]
    },
    isInProgress () {
      return this.$store.getters[`notifications/${GET_LOAD_NOTIFICATIONS_IN_PROGRESS}`]
    },
    promotionsInfo () {
      return this.$store.getters[`promotions/${GET_PROMOTIONS_INFO}`]
    },
    tradingHistoryList () {
      return this.$store.getters[`instruments/${GET_LIST_TRADING_HISTORY_MAIN_PAGE}`]
    },
    popularInstrumentsList () {
      return this.$store.getters[`instruments/${GET_LIST_POPULAR_INSTRUMENTS_MAIN_PAGE}`]
    }
  },
  methods: {
    checkEmpty (messages) {
      if (messages.length !== 0) {
        return messages
      }
    },
    gotoDepositPage () {
      this.$router.push('/deposit/index')
    },
    gotoWithdrawalPage () {
      this.$router.push('/withdrawal/index')
    },
    downloadMT () {
      this.$router.push('/terminal/index')
    }
  }
}
</script>

<style>
.home-page h1
{
  margin-bottom: 100px;
}
.home-page h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  margin-bottom: 18px;
  color: #FFFFFF;
}

.home-page hr
{
  background: #484848;
  height: 1px;
  border: none;
  margin-bottom: 20px;
}

.home-page .two-parts
{
  display: flex;
  padding-bottom: 65px;
}

.home-page .left-parts
{
  width: 65%;
}

.home-page .right-parts
{
  width: 35%;
  padding-left: 60px;
  height: 300px;
}

.home-page .row-line
{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.home-page .row-line > div.right-col .btn-wrapper
{
  display: flex;
  flex-wrap: wrap;
}

.home-page .row-line > div.right-col .btn-wrapper > div:first-child
{
  margin-right: 16px;
  margin-bottom: 20px;
}

.home-page .ballance-block
{
  display: flex;
  flex-wrap: wrap;
}

.home-page .ballance-block > div:first-child
{
  margin-right: 20px;
  margin-bottom: 20px;
}

.home-page .ballance-block > div p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.home-page .ballance-block > div span
{
  display: block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.home-page .align-right
{
  text-align: right;
}

.home-page .graph-block
{
  margin-bottom: 86px;
}

.home-page .graph-block p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 11px;
}

.home-page .graph-block svg
{
  width: 100%;
}

.home-page .trading-history-block
{
  align-items: flex-start;
}

.home-page .trading-history-block .left-col
{
  padding-right: 30px;
  width: 50%;
}

.home-page .trading-history-block .right-col
{
  padding-left: 30px;
  width: 50%;
}

.home-page .metatrader-block-main
{
  margin: 80px 0;
}

.home-page .metatrader-block-main .metatrader-download
{
  display: flex;
}

.home-page .metatrader-block-main .metatrader-download > div
{
  width: 50%;
  justify-content: center;
  text-align: center;
}

.home-page .metatrader-block-main .metatrader-download .img
{
  margin-bottom: 20px;
  text-align: center;
}

.home-page .metatrader-block-main .btn-block
{
  margin-bottom: 20px;
}

.home-page .messages-block .message
{
  padding-left: 0;
  padding-right: 0;
}

.main-wrapper.light-theme .home-page h1,
.main-wrapper.light-theme .home-page h3,
.main-wrapper.light-theme .trading-history-container table tr td .instrument-block span,
.main-wrapper.light-theme .trading-history-container table tr td .trader-block span,
.main-wrapper.light-theme .analytics-block .article-block h4,
.main-wrapper.light-theme .home-page .ballance-block > div span,
.main-wrapper.light-theme .messages-block .message h4
{
  color: #000000;
}

.main-wrapper.light-theme .messages-block .message p,
.main-wrapper.light-theme .analytics-block .article-block .article-info p,
.main-wrapper.light-theme .home-page .ballance-block > div p,
.main-wrapper.light-theme .trading-history-container table tr td,
.main-wrapper.light-theme .title-with-link a
{
  color: #989898;
}

.main-wrapper.light-theme .trading-history-container table tr td:last-child
{
  font-weight: normal;
}

.main-wrapper.light-theme .home-page hr
{
  background: #D4D4D4;
}

.main-wrapper.light-theme .title-with-link
{
  border-bottom: 1px solid #D4D4D4;
}

@media (max-width: 1300px) {
  .home-page .trading-history-block
  {
    display: block;
  }

  .home-page .trading-history-block .left-col,
  .home-page .trading-history-block .right-col
  {
    width: 100%;
  }

  .home-page .trading-history-block .left-col
  {
    padding-right: 0;
  }

  .home-page .trading-history-block .right-col
  {
    padding-left: 0;
  }

  .home-page .trading-history-block .right-col
  {
    margin-top: 80px;
  }

  .home-page .metatrader-block-main .metatrader-download .img svg
  {
    max-width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1200px) {
  .home-page .two-parts
  {
    display: block;
  }

  .home-page .left-parts
  {
    width: 100%;
  }

  .home-page .right-parts
  {
    width: 100%;
    padding-left: 0;
  }

  .home-page .right-parts
  {
    margin-top: 80px;
  }
}
</style>
