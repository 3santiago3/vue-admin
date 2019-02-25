<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button
      type="button"
      @click="getUserInfo"
    >获取个人信息</button>
    <button
      type="button"
      @click="handleLogout"
    >退出登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
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
