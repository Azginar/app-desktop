<template>
  <div class="container-card">
    <div v-for="row in paymentBlockElement" :key="row.title">
      <NuxtLink :to="`/deposit/id/${id}/form/${row.idForm}`" class="block-card">
        <div class="text-right">
          {{ row.status }}
        </div>
        <div class="block-card-wrapper">
          <div class="wrapper-img">
            <img v-if="isRowAvatarNoEmpty(row.avatar)" :src="row.avatar">
            <span v-else>{{ row.avatarText }}</span>
          </div>
          <div v-if="isRowTypeBankSystem(row.type)" class="info-text">
            <h4>{{ row.title }}</h4>
            <p>Min. amount: {{ row.minAmount }}</p>
            <p>Fee: <span>{{ row.fee }}</span></p>
          </div>
          <div v-else class="info-text">
            <h4>{{ row.title }}</h4>
            <p>BANK</p>
            <p><span>{{ row.info }}</span></p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PaymentBlock',
  props: {
    paymentBlockElement: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    isRowTypeBankSystem (type) {
      return type === 'bankSystem'
    },
    isRowAvatarNoEmpty (avatar) {
      return avatar !== ''
    }
  }
}
</script>
<style>
.depositMethod h3 span,
.depositMethod h3 i
{
  display: none;
}
.depositMethod h3.active
{
  color: #B2B2B2;
}

.depositMethod h3.active i
{
  display: inline-block;
  font-style: normal;
}

.depositMethod h3.active span
{
  display: inline-block;
  color: #ffffff;
}
.container-card
{
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container-card > div
{
  margin-bottom: 30px;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}

.container-card .block-card
{
  padding: 20px;
  display: block;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: relative;
  background: rgba(36, 36, 36, 0.5);
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.container-card .block-card .block-card-wrapper
{
  display: flex;
  height: 100%;
  align-items: center;
}

.container-card .block-card .wrapper-img
{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  background: #5E5E5E;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.container-card .block-card .wrapper-img span
{
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
}

.container-card .block-card .wrapper-img img
{
  width: 100%;
  height: auto;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

}

.container-card .block-card .info-text h4
{
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 10px;
}

.container-card .block-card .info-text p
{
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 100%;
  text-transform: uppercase;
  color: #737373;
  margin-top: 0;
  margin-bottom: 5px;
}

.container-card .block-card .info-text p:last-child
{
  margin-bottom: 0;
}

.container-card .block-card .info-text p span
{
  color: #989898;
}

.container-card .block-card .text-right
{
  right: 10px;
  top: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 120%;
  color: #737373;
  position: absolute;
}

.container-card .block-card .bg-transparent
{
  background: transparent;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

  @media (max-width: 1750px) {
    .container-card > div
    {
      width: 33.3%;
    }
  }

  @media (max-width: 1500px) {
    .container-card > div
    {
      width: 50%;
    }
  }

  @media (max-width: 1200px) {
    .container-card > div
    {
      width: 100%;
    }
  }

</style>
