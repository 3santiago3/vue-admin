import Mock from 'mockjs'
import { getUserInfo } from './response/user'

const Random = Mock.Random

Mock.mock('http://localhost:3000/getUserInfo', 'post', getUserInfo)

Mock.setup({
  timeout: '100-1000'
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']

    return this.pick(fruit)
  }
})

export default Mock
