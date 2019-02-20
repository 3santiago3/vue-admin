<template>
  <div class="split-pane-con">
    <!-- <split-pane v-model="offset">
      <span slot="left">left</span>
      <span slot="right">right</span>
    </split-pane> -->
    <split-pane :value.sync="offset">
      <span slot="left">left</span>
      <span slot="right">right</span>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.7
    }
  }
}
</script>

<style lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background-color: palegoldenrod;
}
</style>
