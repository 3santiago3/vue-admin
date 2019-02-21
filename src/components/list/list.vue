<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="`list_item_${index}`"
    >
      <span v-if="!render">{{ item.name }}</span>
      <render-dom
        v-else
        :name="item.name"
        :render-func="render"
      />
    </li>
  </ul>
</template>

<script>
import RenderDom from '_c/render-dom'

export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => null
    }
  }
}
</script>
