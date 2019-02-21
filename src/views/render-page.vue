<template>
  <div>
    <List
      :list="list"
      :render="renderFunc"
    />
  </div>
</template>

<script>
import List from '_c/list'

export default {
  components: {
    List
  },
  data () {
    return {
      list: [
        { name: 'lison' },
        { name: 'santiago' },
        { name: 'carrie' }
      ]
    }
  },
  methods: {
    renderFunc (h, name) {
      return h('i', {}, name)
    }
  }
}
</script>
