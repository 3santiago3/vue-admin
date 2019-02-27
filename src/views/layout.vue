<template>
  <Layout class="layout-outer">
    <Sider
      v-model="collapsed"
      collapsible
      hide-trigger
      breakpoint="sm"
    >
      <side-menu
        :collapsed="collapsed"
        :list="menuList"
      />
    </Sider>
    <Layout>
      <Header class="header-wrapper">
        <Icon
          :class="triggerClasses"
          :size="32"
          type="md-menu"
          @click.native="handleCollapsed"
        ></Icon>
      </Header>
      <Content class="content-con">
        <Card
          shadow
          class="page-card"
        >
          <router-view></router-view>
        </Card>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from '_c/side-menu'

export default {
  name: 'layout',
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: false,
      menuList: [
        { title: '1', name: 'menu1', icon: 'ios-alarm' },
        { title: '2', name: 'menu2', icon: 'ios-alarm' },
        { title: '3',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            { title: '3-1', name: 'menu3-1', icon: 'ios-alarm' },
            { title: '3-2', name: 'menu3-2', icon: 'ios-alarm' },
            { title: '3-3',
              name: 'menu3-3',
              icon: 'ios-alarm',
              children: [
                { title: '3-3-1', name: 'menu3-3-1', icon: 'ios-alarm' },
                { title: '3-3-2', name: 'menu13-3-2', icon: 'ios-alarm' }
              ] },
            { title: '3-4', name: 'menu3-4', icon: 'ios-alarm' }
          ] },
        { title: '4', name: 'menu4', icon: 'ios-alarm' }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less">
.layout-outer {
  height: 100%;
  .header-wrapper {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    padding: 0 20px;
    .trigger-icon {
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate {
        transform: rotateZ(90deg);
      }
    }
  }
  .content-con {
    padding: 10px;
    .page-card {
      min-height: calc(100vh - 84px);
    }
  }
}
</style>
