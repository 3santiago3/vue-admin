import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = options => {
  const template = {
    'str|2-4': 'lison',
    'name|5': 'lison',
    'age|+2': 18,
    'num|4-8': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    url: Random.url(),
    sentence: Random.sentence(),
    image: Random.image(),
    date: Random.date(),
    cparagraph: Random.cparagraph(),
    ctitle: Random.ctitle(),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(),
    fruit: Random.fruit()
  }

  return Mock.mock(template)
}
