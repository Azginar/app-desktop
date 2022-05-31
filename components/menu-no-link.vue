<template>
  <div>
    <ul class="ul-tabs-inner">
      <!--<li class="nav-item">
        <a class="nav-link" :class="{ active: isActive('home') }" href="#home" @click.prevent="setActive('home')">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: isActive('profile') }" href="#profile" @click.prevent="setActive('profile')">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: isActive('contact') }" href="#contact" @click.prevent="setActive('contact')">Contact</a>
      </li>-->
      <li v-for="row in tabsMenu" :key="row.item">
        <a :href="`#${row.link}`" :class="{ active: isActive(row.link) }" @click.prevent="setActive(row.link)">
          {{ row.value }}
        </a>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <!--<div id="home" class="tab-pane fade" :class="{ 'active show': isActive('home') }">
        Home content
      </div>
      <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('profile') }">
        Profile content
      </div>
      <div id="contact" class="tab-pane fade" :class="{ 'active show': isActive('contact') }">
        Contact content
      </div>-->
      <div v-for="row in tabsMenu" :id="row.link" :key="row.item" class="tab-pane fade" :class="{ 'active show': isActive(row.link) }">
        <slot :name="row.link">
          default content
        </slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MenuNolink',
  props: {
    tabsMenu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeItem: this.tabsMenu[0].link
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style>
    .ul-tabs-inner
    {
      margin-top: 0;
      padding-left: 0;
      margin-left: -10px;
      margin-bottom: 80px;
    }

    .ul-tabs-inner li
    {
      display: inline-block;
      margin-right: 10px;
    }

    .ul-tabs-inner li a
    {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 12px;
      text-transform: uppercase;
      color: #B2B2B2;
      border-bottom: 2px solid transparent;
      padding: 10px 10px 8px;
      display: inline-block;
      cursor: pointer;
    }

    .ul-tabs-inner li a.active
    {
      border-bottom: 2px solid #E52525;
      color: #ffffff;
    }

    .ul-tabs-inner li a:hover
    {
      color: #ffffff;
    }

    .ul-tabs-inner li a.non-active-link
    {
      border-bottom: 2px solid transparent;
      color: #B2B2B2;
    }

    .tab-content .fade
    {
      display: none;
    }

    .tab-content .active
    {
      display: block;
    }
</style>
