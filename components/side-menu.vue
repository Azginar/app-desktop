<template>
  <div class="main-menu" style="max-width: 330px;">
    <ul>
      <li
        v-for="item in menuItems"
        :key="item.label"
      >
        <menu-item
          :label="item.label"
          :icon-component="item.icon"
          :click-handler="setActive"
          :is-active="isMenuItemActive(item.label)"
          :link="item.link"
        />
      </li>
      <li class="logout" @click="handleLogout">
        <div>
          <power-regular-svg /> Logout
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { createNamespacedHelpers } from 'vuex'
// ------------- icons
import { LOGOUT } from '@/modules/login/actions-types'
import { GET_ACTIVE_ITEM_MENU, GET_LIGHT_THEME } from '@/modules/menu/getter-types'
import { CHANGE_ACTIVE_ITEM_MENU, CHANGE_LIGHT_THEME } from '@/modules/menu/mutation-types'
import HomeIcGreySvg from '../assets/icons/menu/home-ic-grey.svg'
import AccountIcGreySvg from '../assets/icons/menu/account-ic-grey.svg'
import FinanceIcGreySvg from '../assets/icons/menu/finance-ic-grey.svg'
import SocialIcGreySvg from '../assets/icons/menu/social-ic-grey.svg'
import PartnersIcGreySvg from '../assets/icons/menu/partners-ic-grey.svg'
import HelpIcGreySvg from '../assets/icons/menu/help-ic-grey.svg'
import PowerRegularSvg from '../assets/icons/menu/logout-ic-grey.svg'
import MessagesSvg from '../assets/icons/menu/messages-ic-grey.svg'

import MenuItem from './menu-item.vue'
// -------------

const { mapActions } = createNamespacedHelpers('login')

export default {
  name: 'MenuNew',
  components: {
    'menu-item': MenuItem,
    'power-regular-svg': PowerRegularSvg
  },
  data () {
    return {
      activeMenuItem: this.$store.getters[`menu/${GET_ACTIVE_ITEM_MENU}`],
      menuItems: [
        {
          icon: HomeIcGreySvg,
          label: 'Home',
          link: '/'
        },
        {
          icon: AccountIcGreySvg,
          label: 'Accounts',
          link: '/accounts/index'
        },
        {
          icon: FinanceIcGreySvg,
          label: 'Finance',
          link: '/deposit/index'
        },
        {
          label: 'Social trading',
          icon: SocialIcGreySvg,
          link: '/monitoring/index'
        },
        {
          label: 'Messages',
          icon: MessagesSvg,
          link: '/notifications/index'
        },
        {
          label: 'Affiliate',
          icon: PartnersIcGreySvg,
          link: '/affiliate/index'
        },
        {
          label: 'Help',
          icon: HelpIcGreySvg,
          link: '/'
        }
      ]
    }
  },
  computed: {
    activeItem () {
      return this.$store.getters[`menu/${GET_ACTIVE_ITEM_MENU}`]
    }
  },
  methods: {
    ...mapActions([LOGOUT]),
    handleLogout () {
      this[LOGOUT](true)
      this.$router.push('/login')
    },
    isMenuItemActive (menuItem) {
      return this.$store.getters[`menu/${GET_ACTIVE_ITEM_MENU}`] === menuItem
    },
    setActive (menuItem, link) {
      this.$store.commit(`menu/${CHANGE_ACTIVE_ITEM_MENU}`, menuItem)
      this.$router.push(link)
    }
  }
}
</script>
<style>
    .main-menu {
        background: #242424;
    }

    .main-menu ul {
        padding-left: 0;
        margin: 0;
    }

    .main-menu ul li a,
    .main-menu ul li > div{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        position: relative;
        line-height: 12px;
        text-transform: uppercase;
        color: #737373;
        padding: 15px 50px;
        display: inline-block;
        width: 100%;
        text-decoration: none;
        cursor: pointer;
    }

    .main-menu ul li div
    {
        display: flex;
        align-items: center;
    }

    .main-menu ul li div svg
    {
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }

    .main-menu ul li:hover svg path
    {
        fill: #E52525;
    }

    /*TODO use this settings for active tab*/
    .main-menu ul li:hover a:before,
    .main-menu ul li a.is-active:before,
    .main-menu ul li div.is-active:before{
        box-shadow: 0px 0px 15px #E52525;
        content: "";
        height: 100%;
        width: 2px;
        background: #E52525;
        top: 0;
        left: 0;
        position: absolute;

    }

    .main-menu ul li:hover a,
    .main-menu ul li:hover > div{
        color: #ffffff;
    }

    .main-menu ul li {
        margin-bottom: 10px;
    }

    .main-menu ul li a.is-active,
    .main-menu ul li div.is-active{
      color: #ffffff;
    }

    .main-menu ul li a.is-active svg path,
    .main-menu ul li > div.is-active svg path{
       fill: #E52525;
    }

    .main-menu ul li.logout {
        margin-top: 30px;
        position: relative;
    }

    .main-menu ul li.logout:after {
        position: absolute;
        content: "";
        width: 89%;
        height: 1px;
        background: rgba(72, 72, 72, 0.5);
        left: 50%;
        top: -15px;
        transform: translate(-50%);
    }

    @media (max-width: 991px) {

    }
</style>
