import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }

    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的 loading
      if (!Object.keys(this.queue).length) {
        // 如果已经在 loading 了，就不必再添加 loading
        // 如果没有在 loading，则添加 loading
        // Spin.show()
      }

      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  request (options) {
    // const instance = axios.create()
    // options = Object.assign(this.getInsideConfig(), options)
    // this.interceptors(instance, options.url)

    // return instance(options)

    const instance = axios.create(Object.assign(this.getInsideConfig(), options))
    this.interceptors(instance, options.url)

    return instance(options)
  }
}

export default HttpRequest
