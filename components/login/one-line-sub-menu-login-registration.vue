<template>
  <ul class="ul-tabs-login">
    <li
      v-for="link in links"
      :key="link.label"
    >
      <NuxtLink
        :to="link.link"
        :class="{'non-active-link': isNonActiveLink(link.link)}"
      >
        {{ link.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'OneLineSubMenuLoginRegistration',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    linkUid: {
      type: String,
      default: ''
    },
    linkAccount: {
      type: String,
      default: ''
    }
  },
  data () {
    const accountsNewRoutesAndLabels = [
      { label: 'Sign in', link: '/login' },
      { label: 'Registration', link: '/registration' }
    ]
    return {
      routesAndMenu: new Map()
        .set('login', accountsNewRoutesAndLabels)
        .set('registration', accountsNewRoutesAndLabels),

      routesVSLinks: new Map()
        .set('login', '/login')
        .set('registration', '/registration')

    }
  },
  computed: {
    links () {
      return this.routesAndMenu.get(this.$router.currentRoute.name) || []
    }
  },
  methods: {
    isNonActiveLink (link) {
      return link !== this.routesVSLinks.get(this.$router.currentRoute.name)
    }
  }
}
</script>

<style>
.ul-tabs-login li
{
  display: inline-block;
  margin-right: 10px;
}

.ul-tabs-login li a
{
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid #E52525;
  color: #ffffff;
  padding: 10px 10px 8px;
  display: inline-block;
  cursor: pointer;
}

.ul-tabs-login li a:hover
{
  color: #ffffff;
}

.ul-tabs-login li a.non-active-link
{
  border-bottom: 2px solid transparent;
  color: #B2B2B2;
}
</style>
