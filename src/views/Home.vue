<template>
  <div class="home">
    <Row>
      <i-col></i-col>
    </Row>

    <Row :gutter="10">
      <i-col :span="12"></i-col>
      <i-col :span="12"></i-col>
    </Row>

    <Row :gutter="10">
      <i-col :span="4" offset="2"></i-col>
      <i-col :span="4"></i-col>
      <i-col :span="4"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '@/api/user'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  methods: {
    ...mapActions([
      'logout'
    ]),
    getUserInfo () {
      getUserInfo({
        userId: 21
      }).then(res => {
        console.log(res.data)
      })
    },
    handleLogout () {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="less">
.home {
  .ivu-row {
    &+.ivu-row {
      margin-top: 10px;
    }
    .ivu-col {
      height: 50px;
      background-color: lightpink;
      background-clip: content-box;
    }
  }
}
</style>
