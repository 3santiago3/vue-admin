import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'

if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false

// const list = [
//   { name: 'lison' },
//   { name: 'santiago' },
//   { name: 'carrie' }
// ]
// const getLiArr = (h) => {
//   return list.map(item => h('li', {}, item.name))
// }

new Vue({
  router,
  store,
  render: h => h(App)
  // render: (h) => {
  //   return h('ul', {
  //     on: {
  //       'click': (event) => {
  //         console.log(event)
  //       }
  //     }
  //   }, getLiArr(h))
  // }
}).$mount('#app')
