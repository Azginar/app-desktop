<template>
  <div>
    <div class="verification-account-status">
      <h3>
        {{ title }}
      </h3>
      <div class="row-status">
        <div v-for="need in needToUploadCollection" :key="need.id" :class="need.class">
          <nuxt-link :to="need.link" class="step">
            <span v-if="!need.class" class="circle">
              {{ need.id + 1 }}
            </span>
            <verSuccess v-else />
            <p>
              {{ need.title }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import verSuccess from '../assets/icons/ver-success.svg'
export default {
  name: 'PanelWithNotification',
  components: {
    verSuccess
  },
  props: {
    title: {
      type: String,
      default: 'For full profile verification please complete following steps:'
    },
    needToUploadCollection: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
<style>
.verification-account-status
{
  padding: 20px 20px 0;
  display: inline-block;
  background: rgba(36, 36, 36, 0.5);
  margin-bottom: 70px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.verification-account-status h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.verification-account-status .row-status
{
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.verification-account-status .row-status > div
{
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 20px;
}

.verification-account-status .row-status > div.active .step p
{
  color: rgba(141, 198, 64, 0.5) !important;
}

.verification-account-status .row-status > div.active .step
{
  border-color: #333333 !important;
}

.verification-account-status .row-status > div.active .step svg
{
  margin-right: 20px;
}

.verification-account-status .step
{
  display: flex;
  border: 1px solid #333333;
  align-items: center;
  background: #333333;
  padding: 10px 40px 10px 10px;
  border-radius: 300px;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
}

.verification-account-status .row-status > div:first-child .step
{
  color: #B2B2B2;
  border-color: rgba(94, 94, 94, 0.5);
}

.verification-account-status .row-status > div:first-child .step p,
.verification-account-status .row-status > div:first-child .step .circle
{
  color: #B2B2B2;
}

.verification-account-status .row-status > div:first-child .step .circle
{
  border-color: #B2B2B2;
}

.verification-account-status .circle
{
  border: 1px solid #737373;
  width: 20px;
  height: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  margin-right: 20px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #737373;
  flex-shrink: 0;
  line-height: 20px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.verification-account-status .step p
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 0;
}

.verification-account-status .row-status > div .nuxt-link-active p,
.verification-account-status .row-status > div .nuxt-link-active .circle
{
  color: #ffffff !important;
  border-color: #ffffff !important;
}

.verification-account-status .row-status > div .nuxt-link-active
{
  border-color: #333333 !important;
}

@media (max-width: 1500px) {
  .verification-page .verification-page-form .row-line
  {
    display: block;
  }

  .verification-page .verification-page-form .row-line .col-line
  {
    width: 100% !important;
  }
}
</style>
