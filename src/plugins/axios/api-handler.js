import axios from 'axios'
import { busID, busKey } from '../../key'
const JsSHA = require('../sha1/sha1')

const proAPI = 'https://ptx.transportdata.tw/MOTC'
const busTopAPI = 'https://bustoptw.herokuapp.com/'

// 一律透過此方法呼叫 API
class HttpModel {
  async request(cfg) {
    cfg.baseURL = proAPI
    cfg.withCredentials = true

    function GetAuthorizationHeader() {
      const GMTString = new Date().toGMTString()
      const ShaObj = new JsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(busKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      var Authorization =
        'hmac username="' +
        busID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"'

      return {
        Authorization: Authorization,
        'X-Date': GMTString
      }
    }

    const instance = axios.create({
      headers: GetAuthorizationHeader()
    })

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

  async requestBusTop(cfg) {
    cfg.baseURL = busTopAPI
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
