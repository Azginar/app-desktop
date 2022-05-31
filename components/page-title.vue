<template>
  <h1>
    {{ title }}
  </h1>
</template>
<script>
export default {
  name: 'PageTitle',
  computed: {
    title () {
      const routesVsPageTitle = new Map()
        .set('settings-index', 'Client\'s Profile')
        .set('index', 'Home')

      return routesVsPageTitle.get(this.$router.currentRoute.name)
    }
  }
}
</script>
