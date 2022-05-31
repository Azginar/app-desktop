<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="history-coping">
        <div class="back-btn-block">
          <NuxtLink to="/accounts/index">
            <back-button
              :type="'back-button'"
              :label="'Back'"
              :click-event="() => {}"
            />
          </NuxtLink>
        </div>
        <h1>Trading Account <span>CLS-6117769</span> <span class="swap-free">Swap Free</span></h1>
        <sub-nemu />
        <history-copying :table-data="tableData" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import BackButton from '../components/back-button.vue'
import SubMenu from '../components/one-line-sub-menu'
import historyCopying from '../components/historyCopying'
import userSettingsRequest from '../utils/userSettingsRequest'
import HOCWithLabelAndNotifications from '../components/HOC-with-label-and-notifications'
export default {
  components: {
    'back-button': BackButton,
    'sub-nemu': SubMenu,
    'history-copying': historyCopying,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  data () {
    return {
      tableData: [
        {
          traderName: '@Dshadow',
          traderImg: 'https://social.tifia.com/uploads/avatars/001/009/d01e50899234bfcd35ce4069720e90f3.jpg',
          traderAccount: 'PRO-6161721',
          startCopying: '22:31 11.04.2020',
          stopCopying: '22:45 11.04.2020',
          profit: '+ 248.56 USD'
        },
        {
          traderName: '@markaw',
          traderImg: 'https://social.tifia.com/uploads/avatars/005/371/4c0f64883a3958c76a08acda63c4497a.jpg',
          traderAccount: 'PRO-6065791',
          startCopying: '11:11 03.04.2020',
          stopCopying: '22:31 11.04.2020',
          profit: '- 100.00 USD'
        },
        {
          traderName: '@bosskur ',
          traderImg: 'https://social.tifia.com/uploads/avatars/005/965/b314fbd09457388cd5a15718cb31fa6d.jpeg',
          traderAccount: 'PRO-5876333',
          startCopying: '14:23 12.04.2020',
          stopCopying: '14:23 11.04.2020',
          profit: '+ 11.58 USD'
        },
        {
          traderName: '@Dshadow',
          traderImg: 'https://social.tifia.com/uploads/avatars/004/144/9dc078ea88021779f6dcb2638bc3756f.png',
          traderAccount: 'PRO-6065791',
          startCopying: '14:23 12.04.2020',
          stopCopying: '14:23 12.04.2020',
          profit: '+ 248.56 USD'
        },
        {
          traderName: '@markaw',
          traderImg: 'https://social.tifia.com/uploads/avatars/008/892/00b9e7749b3bd93a2d7bb797b6a616f7.jpg',
          traderAccount: 'PRO-6065791',
          startCopying: '14:23 12.04.2020',
          stopCopying: '14:23 12.04.2020',
          profit: '- 100.00 USD'
        },
        {
          traderName: '@bosskur ',
          traderImg: 'https://social.tifia.com/uploads/avatars/010/075/4af79322d92be0c20ce3755c32c593aa.jpg',
          traderAccount: 'PRO-6065791',
          startCopying: '14:23 12.04.2020',
          stopCopying: '14:23 12.04.2020',
          profit: '+ 11.58 USD'
        }
      ]
    }
  }
}
</script>
<style>
.history-coping .back-btn-block
{
  margin-bottom: 80px;
}

.history-coping h1
{
  color: #B2B2B2;
}

.history-coping h1 span
{
  color: #ffffff;
}

.history-coping .swap-free
{
  background: #242424;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #B2B2B2;
  padding: 2px 4px 2px;
  vertical-align: top;
  margin-left: -4px;
}

.history-coping .ul-tabs li a
{
  color: #ffffff !important;
  border-bottom: 2px solid #E52525 !important;
}

.history-coping .ul-tabs li a:hover
{
  color: #ffffff !important;
}

.history-coping .ul-tabs li a.non-active-link
{
  border-bottom: 2px solid transparent !important;
  color: #B2B2B2 !important;
}

@media (max-width: 1600px) {

}

</style>
