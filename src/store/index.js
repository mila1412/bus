import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_LONGITUDE,
  SET_LATITUDE,
  SET_MAP_URL,
  SET_NEAR_STOP,
  SET_NEAR_BUS_ROUTE,
  SET_NEAR_BUS
} from './mutationTypes'
import { mapKey } from '../key'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    longitude: null,
    latitude: null,
    mapUrl: '',
    nearBusStop: [],
    nearBusRoute: [],
    nearBus: []
  },
  mutations: {
    [SET_LONGITUDE](state, longitude) {
      state.longitude = longitude
    },
    [SET_LATITUDE](state, latitude) {
      state.latitude = latitude
    },
    [SET_MAP_URL](state) {
      const latlon = state.latitude + ',' + state.longitude
      const googleMap = `https://maps.googleapis.com/maps/api/staticmap?center='${latlon}'&zoom=14&size=400x300&key=${mapKey}`
      state.mapUrl = googleMap
    },
    [SET_NEAR_STOP](state, busStop) {
      state.nearBusStop = busStop
    },
    [SET_NEAR_BUS_ROUTE](state, nearBusRoute) {
      state.nearBusRoute = nearBusRoute
    },
    [SET_NEAR_BUS](state, nearBus) {
      state.nearBus = nearBus
    }
  },
  actions: {},
  modules: {},
  getters: {
    filterNearBusRoute: (state) => {
      if (state.nearBusRoute.length) {
        const busRouteReduceArray = state.nearBusRoute.reduce(
          (init, current) => {
            if (
              init.length === 0 ||
              init[init.length - 1].RouteUID !== current.RouteUID
            ) {
              init.push(current)
            }
            return init
          },
          []
        )

        const busInfo = []
        busRouteReduceArray.forEach((item) => {
          const busObj = {
            DepartureStopNameZh: '',
            DestinationStopNameZh: '',
            SubRoutes: []
          }
          busObj.DepartureStopNameZh = item.DepartureStopNameZh
          busObj.DestinationStopNameZh = item.DestinationStopNameZh
          busObj.SubRoutes = item.SubRoutes
          busInfo.push(busObj)
        })

        return busInfo
      }
      return []
    }
    // filterNearBus: (state) => {
    //   if(state.nearBus.length) {
    //     state.nearBus.
    //   }
    // }
  }
})
