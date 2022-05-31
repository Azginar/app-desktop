<template>
  <HOCWithLabelAndNotifications>
    <template v-slot:page-content>
      <div class="finance-page finance-page-view">
        <h1>Finance</h1>
        <sub-nemu />
        <h3>
          <NuxtLink to="/deposit/index">
            Local deposit
          </NuxtLink> / <span>{{ GET_TITLE_DEPOSIT_LOCAL_ELEM }}</span>
        </h3>
        <payment-block v-if="ID_DEPOSIT_LOCAL" :id="$route.params.id" :payment-block-element="GET_DEPOSIT_LOCAL_ELEM_BY_ID" />
      </div>
    </template>
  </HOCWithLabelAndNotifications>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { CHANGE_ID_DEPOSIT_LOCAL } from '../../../../modules/finance/mutation-types'
import userSettingsRequest from '../../../../utils/userSettingsRequest'
import SubMenu from '../../../../components/one-line-sub-menu'
import paymentBlock from '../../../../components/finance/paymentBlock'
import HOCWithLabelAndNotifications from '../../../../components/HOC-with-label-and-notifications'
const { mapGetters, mapState, mapActions } = createNamespacedHelpers('finance')
export default {
  components: {
    'sub-nemu': SubMenu,
    'payment-block': paymentBlock,
    HOCWithLabelAndNotifications
  },
  async asyncData (context) {
    await userSettingsRequest(context)
  },
  computed: {
    ...mapGetters([
      'GET_DEPOSIT_LOCAL_ELEM_BY_ID',
      'GET_TITLE_DEPOSIT_LOCAL_ELEM'
    ]),
    ...mapState([
      'DEPOSIT_LOCAL_ELEM_BY_ID',
      'ID_DEPOSIT_LOCAL'
    ])
  },
  mounted () {
    this[CHANGE_ID_DEPOSIT_LOCAL](this.$route.params.id)
  },
  methods: {
    ...mapActions([CHANGE_ID_DEPOSIT_LOCAL])
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

.finance-page h3 a,
.finance-page h3 span
{
  color: #B2B2B2;
}

.bank-card-block .block-card .wrapper-img
{
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
}

.bank-card-block .block-card .wrapper-img img
{

}

.bank-card-block .block-card .info-text p
{
  margin-bottom: 5px;
}

.bank-card-block .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.main-wrapper.light-theme .finance-page.finance-page-view h3 span
{
  color: #000000;
}

.main-wrapper.light-theme .finance-page h3 a,
.main-wrapper.light-theme .finance-page h3 span
{
  color: #989898;
}

.main-wrapper.light-theme .finance-page.finance-page-view .ul-tabs li:first-child a
{
  color: #000000 !important;
}
</style>
