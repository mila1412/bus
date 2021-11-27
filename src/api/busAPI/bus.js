import Handler from '@/plugins/axios/api-handler'
import productionAPI from '../config/api_config'

export default {
  /**
   * @description Bus Advanced(Near By) : 公車進階(指定位置及範圍)
   *
   */
  async getNearBusStop(payload) {
    const config = {
      url: `${productionAPI.busStop}`,
      method: 'get',
      params: payload
    }
    const result = await Handler.request(config)
    return result.data
  },
  /**
   * @description Bus Advanced(Near By) :取得指定[位置,範圍]的全臺公車路線資料
   *
   */
  async getNearBusRoute(payload) {
    const config = {
      url: `${productionAPI.busRoute}`,
      method: 'get',
      params: payload
    }
    const result = await Handler.request(config)
    return result.data
  },
  /**
   * @description Bus Advanced(Near By):取得指定[位置,範圍]的全臺公車動態定點資料(A2)
   *
   */
  async getNearBus(payload) {
    const config = {
      url: `${productionAPI.nearBus}`,
      method: 'get',
      params: payload
    }
    const result = await Handler.request(config)
    return result.data
  }
}
