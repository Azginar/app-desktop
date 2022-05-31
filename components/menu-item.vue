<template>
  <div :class="{ 'is-active': isActive }" @click="localHandleClick">
    <div>
      <i>
        <component :is="iconComponent" />
      </i>
      <span>{{ label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    clickHandler: {
      type: Function,
      default: () => {
      }
    },
    label: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconComponent: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    localHandleClick () {
      this.clickHandler(this.label, this.link)
    }
  }
}
</script>
