<template>
  <div class="info-referrals">
    <div class="element-item">
      <div v-for="row in content" :key="row.title" class="block-info">
        <div class="col-line">
          <div class="avatar-wrapper">
            <img :src="row.img">
          </div>
        </div>
        <div class="col-line country">
          <p>Country</p>
          <img :src="row.imgCountry"><span>{{ row.country }}</span>
        </div>
        <div class="col-line">
          <p>Language</p>
          <span>{{ row.language }}</span>
        </div>
        <div class="col-line">
          <p>Registration date</p>
          <span>{{ row.date }}</span>
        </div>
        <div class="col-line">
          <p>Balance</p>
          <span>{{ row.balance }}</span>
        </div>
        <div class="col-line">
          <p>Active referrals</p>
          <span>{{ row.referrals }}</span>
        </div>
        <div class="col-line">
          <p>My affiliate commission</p>
          <span>{{ row.commission }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoReferrals',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}

</script>

<style>
.info-referrals
{
  background: #242424;
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
}

.info-referrals .block-info
{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.info-referrals .avatar-wrapper
{
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.info-referrals .country img
{
  display: inline-block;
  vertical-align: bottom;
  max-width: 23px;
  margin-right: 5px;
}

.info-referrals .avatar-wrapper img
{
  max-width: 100%;
  height: auto;
  display: block;
}

.info-referrals .block-info > div
{
  margin-bottom: 20px;
  margin-right: 60px;
}

.info-referrals .block-info > div:first-child
{
  margin-right: 20px;
}

.info-referrals .block-info > div:last-child
{
  margin-right: 0;
}

.info-referrals .block-info p
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 5px;
}

.info-referrals .block-info span
{
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #B2B2B2;
  display: inline-block;
  vertical-align: bottom;
}

.main-wrapper.light-theme .info-referrals
{
  background: #ffffff;
  border-color: #D4D4D4;
}

.main-wrapper.light-theme .info-referrals .block-info span
{
  color: #989898;
}
</style>
