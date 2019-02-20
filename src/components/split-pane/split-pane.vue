<template>
  <div
    ref="outer"
    class="split-pane-wrapper"
  >
    <div
      :style="{ width: leftOffsetPercent }"
      class="pane pane-left"
    >
      <slot name="left" />
    </div>
    <div
      :style="{
        width: `${triggerWidth}px`,
        left: triggerLeft
      }"
      class="pane-trigger-con"
      @mousedown="handleMousedown"
    />
    <div
      :style="{ left: leftOffsetPercent }"
      class="pane pane-right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return

      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offset = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width

      if (offset < this.min) offset = this.min
      if (offset > this.max) offset = this.max

      // this.$emit('input', offset)
      this.$emit('update:value', offset)
    },
    handleMouseup (event) {
      this.canMove = false
    }
  }
}
</script>

<style lang="less">
.split-pane-wrapper {
  position: relative;
  height: 100%;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      background-color: palevioletred;
    }
    &-right {
      right: 0;
      background-color: lightblue;
    }
  }
  .pane-trigger-con {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: yellow;
    z-index: 1;
    user-select: none;
    cursor: col-resize;
  }
}
</style>

