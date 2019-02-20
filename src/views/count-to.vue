<template>
  <div>
    <count-to
      :end-val="endVal"
    />
    <button
      type="button"
      @click="update"
    >更新</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'

export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    update () {
      this.endVal += Math.random() * 100
    }
  }
}
</script>
