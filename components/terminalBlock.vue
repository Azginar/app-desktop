<template>
  <div class="terminal-block">
    <div class="block-left">
      <slot name="icon" />
    </div>
    <div>
      <h4>{{ title }}</h4>
      <slot name="button" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
  .terminal-block
  {
    width: 309px;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-right: 30px;
    margin-bottom: 30px;
    background: rgba(36, 36, 36, 0.5);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  .terminal-block .block-left
  {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  .terminal-block h4
  {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
