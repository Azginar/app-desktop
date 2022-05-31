<template>
  <div
    ref="dropDownMenu"
    class="language-menu"
    :class="{open: isMenuOpen}"
    @click="openOrCloseMenu"
  >
    <button data-toggle="dropdown" class="btn dropdown-toggle" aria-expanded="false">
      <span
        class="language-flag"
        :style="`background-image: url(${getSelectedLangImage})`"
        style="background-image: url('https://social.tifia.com/images/flags/shiny/16/US.png')"
      />
      <span class="language-name">{{ selected }}</span>

      <span class="caret" />
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="lang in filterLangList"
        :key="lang.title"
        @click="selectLang(lang.title)"
      >
        <div>
          <span
            class="language-flag"
            :style="`background-image: url(${lang.flagImage})`"
          />
          {{ lang.title }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LanguageSelector',
  props: {
    languageList: Array,
    selected: String,
    selectNewLang: Function
  },
  data () {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    filterLangList () {
      return this.languageList.filter(lang => lang.title !== this.selected)
    },
    getSelectedLangImage () {
      const selectedLang = this.languageList.find(lang => lang.title === this.selected)
      return selectedLang.flagImage
    }
  },
  mounted () {
    document.addEventListener('click', this.documentClick)
  },
  destroyed () {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    openOrCloseMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    documentClick (e) {
      const el = this.$refs.dropDownMenu
      const { target } = e
      if ((el !== target) && !el.contains(target)) {
        this.isMenuOpen = false
      }
    },
    selectLang (newLang) {
      this.$emit('selectNewLang', newLang)
    }
  }
}
</script>
<style>

    header .language-menu
    {
        display: inline-block;
        position: relative;
        min-width: 128px;
        text-align: center;
    }

    header .language-menu button
    {
        padding: 6px 12px;
        line-height: 19px;
        outline: none;
        font-family: 'Open Sans';
        color: #333333;
        cursor: pointer;
        border: 1px solid transparent;
        display: inline-block;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
    }

    header .language-menu.open button
    {
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }

    header .language-menu .language-flag
    {
        display: inline-block;
        vertical-align: middle;
        width: 16px;
        height: 16px;
    }

    header .language-menu .caret
    {
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
        border-top: 4px dashed;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }

    header .language-menu.open .dropdown-menu
    {
        display: block;
    }

    header .language-menu .dropdown-menu
    {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        float: left;
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0;
        text-align: left;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
    }

    header .language-menu .dropdown-menu > li
    {
        list-style-type: none;
    }

    header .language-menu .dropdown-menu > li > div
    {
        cursor: pointer;
        display: block;
        padding: 3px 20px;
        text-decoration: none;
        clear: both;
        font-family: 'Open Sans';
        font-weight: 400;
        line-height: 1.5;
        color: #333333;
        white-space: nowrap;
        font-size: 12px;
    }

    header .language-menu .dropdown-menu > li > div:hover,
    header .language-menu .dropdown-menu > li > div:focus
    {
        color: #262626;
        text-decoration: none;
        background-color: #f5f5f5;
    }
</style>
