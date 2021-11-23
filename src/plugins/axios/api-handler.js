import axios from 'axios'

const devAPI = ''
const proAPI = process.env.VUE_APP_PRODUCT_API

// 一律透過此方法呼叫 API
class HttpModel {
  async request(cfg) {
    cfg.baseURL = process.env.NODE_ENV === 'development' ? devAPI : proAPI
    cfg.withCredentials = true
    const instance = axios.create()

    instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    )

    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              break
            default:
              break
          }
        }
        return Promise.reject(error.response.data)
      }
    )
    try {
      const result = await instance.request(cfg)
      return Promise.resolve(result)
    } catch (throwError) {
      return Promise.reject(throwError)
    }
  }
}

const model = new HttpModel()
export default model
