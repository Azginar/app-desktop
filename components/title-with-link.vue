<template>
  <div class="title-with-link">
    <div>
      <h3>{{ title_main }}</h3>
    </div>
    <div>
      <NuxtLink :to="link">
        {{ title }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleWithLink',
  props: {
    title_main: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>
<style>
.title-with-link
{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.title-with-link h3
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  margin-bottom: 10px !important;
}

.title-with-link a
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B2B2B2;
  margin-bottom: 10px;
  display: inline-block;
}

.title-with-link a:hover
{
  color: #ffffff;
}

.title-with-link
{
  padding-bottom: 8px;
  border-bottom: 1px solid #484848;
  margin-bottom: 20px;
}
</style>
