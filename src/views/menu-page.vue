<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>1</a-menu-item>
      <a-menu-item>2</a-menu-item>
      <a-menu-item>3</a-menu-item>
      <a-submenu>
        <div slot="title">4</div>
        <a-menu-item>4-1</a-menu-item>
        <a-menu-item>4-2</a-menu-item>
        <a-submenu>
          <div slot="title">4-3</div>
          <a-menu-item>4-3-1</a-menu-item>
          <a-menu-item>4-3-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item
          v-if="!item.children"
          :key="`menu_item_${index}`"
        >
          {{ item.title }}
        </a-menu-item>
        <re-submenu
          v-else
          :key="`menu_item_${index}`" :parent="item"
        ></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import reSubmenu from '_c/menu/re-submenu'

export default {
  name: 'menu_page',
  components: {
    ...menuComponents,
    reSubmenu
  },
  data () {
    return {
      list: [
        { title: '1' },
        { title: '2' },
        { title: '3',
          children: [
            { title: '3-1' },
            { title: '3-2',
              children: [
                { title: '3-2-1' },
                { title: '3-2-2',
                  children: [
                    { title: '3.2.2.1' },
                    { title: '3.2.2.2' }
                  ] },
                { title: '3-2-3' }
              ] },
            { title: '3-3' }
          ] },
        { title: '4' }
      ]
    }
  }
}
</script>

<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
