<template>
  <ul class="a-submenu">
    <div
      class="a-submenu-title"
      @click="handleClick"
    >
      <span
        :style="{ transform: `rotateX(${showChild ? 0 : 180}deg)` }"
        class="shrink-icon"
      >^</span>
      <slot name="title"></slot>
    </div>
    <div
      v-show="showChild"
      class="a-submenu-child-box"
    >
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="less">
.a-submenu {
  &-title {
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 50%;
      right: 10px;
      margin-top: -5px;
      height: 10px;
      width: 10px;
      transform: rotateX(180deg);
      text-align: center;
    }
  }
  &-child-box {
    padding-left: 20px;
  }
}
</style>
