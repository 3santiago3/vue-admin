<template>
  <div>
    <span :id="eleId" />
  </div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    }
  },
  data () {
    return {
      counter: null
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  watch: {
    endVal (newVal) {
      this.counter.update(newVal)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })

      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  }
}
</script>
