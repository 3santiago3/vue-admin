<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu
      v-show="!collapsed"
      width="auto"
      theme="dark"
      @on-select="handleSelect"
    >
      <template
        v-for="item in list"
      >
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        />
        <menu-item
          v-else
          :key="`menu_${item.name}`"
          :name="item.name"
        >
          <Icon :type="item.icon" />
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div
      v-show="collapsed"
      class="side-menu-collapsed"
    >
      <template v-for="item in list">
        <re-drop-down
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item"
          @on-select="handleSelect"
        />
        <Tooltip
          v-else
          :key="`drop_${item.name}`"
          :content="item.title"
          transfer
          placement="right"
        >
          <a
            href="javascript:void(0)"
            @click.prevent="handleClick(item.name)"
          >
            <Icon
              size="20"
              :type="item.icon"
            />
          </a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import reSubmenu from './re-submenu'
import reDropDown from './re-dropdown'

export default {
  components: {
    reSubmenu,
    reDropDown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      alert(name)
    },
    handleClick (name) {
      alert(name)
    }
  }
}
</script>

<style lang="less">
.side-menu-wrapper {
  .side-menu-collapsed {
    .ivu-tooltip {
      display: block;
      padding: 4px 0;
      .ivu-tooltip-rel {
        width: 100%;
        text-align: center;
        .ivu-icon:before {
          color: #fff;
        }
      }
    }
  }
}
</style>
