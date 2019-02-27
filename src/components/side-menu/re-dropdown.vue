<template>
  <Dropdown
    :class="{'re-drop-down': true, 'first-layer': !showTitle}"
    placement="right-start"
    @on-click="handleClick"
  >
    <a href="javascript:void(0)" >
      <Icon
        :type="parent.icon"
        size="20"
      />
      <template v-if="showTitle">{{ parent.title }}</template>
    </a>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-drop-down
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item"
          :show-title="true"
        />
        <DropdownItem
          v-else
          :key="`drop_${item.name}`"
          :name="item.name"
        >
          <Icon
            :type="parent.icon"
            size="20"
          />{{ item.title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'reDropDown',
  props: {
    parent: {
      type: Object,
      default: () => {}
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (name) {
      if (!this.showTitle) {
        this.$emit('on-select', name)
      }
    }
  }
}
</script>

<style lang="less">
.re-drop-down {
  &.first-layer { // 第一层
    display: block;
    &>.ivu-dropdown-rel {
      text-align: center;
      .ivu-icon:before {
        color: #fff;
      }
    }
  }

  .re-drop-down {
    height: 34px;
    line-height: 34px;
    padding-left: 16px;
    .ivu-dropdown-rel {
      a {
        color: #515a6e;
        .ivu-icon {
          margin-right: 4px;
        }
      }
    }
  }

  .ivu-dropdown-item {
    .ivu-icon {
      margin-right: 4px;
    }
  }
}
</style>
