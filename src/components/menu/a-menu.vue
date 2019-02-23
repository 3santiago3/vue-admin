<template>
  <ul class="a-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AMenu'
}
</script>

<style lang="less">
.a-menu {
  background-color: #00a1b7;
}
ul {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
}
</style>
