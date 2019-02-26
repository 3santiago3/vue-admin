<template>
  <Layout class="layout-outer">
    <Sider
      v-model="collapsed"
      collapsible
      hide-trigger
      breakpoint="sm"
    ></Sider>
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
export default {
  name: 'layout',
  data () {
    return {
      collapsed: false
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
