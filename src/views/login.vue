<template>
  <div>
    <input v-model="username" />
    <input type="password" v-model="password" />
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit () {
      this.login({
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push({
          name: 'home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
