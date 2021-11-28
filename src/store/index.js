import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_LONGITUDE,
  SET_LATITUDE,
  SET_MAP_URL,
  SET_NEAR_STOP,
  SET_NEAR_BUS_ROUTE,
  SET_NEAR_BUS,
  SET_NEAR_INFO
} from './mutationTypes'
import { mapKey } from '../key'
import BusApi from '@/api/busAPI/bus'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    longitude: null,
    latitude: null,
    mapUrl: '',
    nearBusStop: [],
    nearBusRoute: [],
    nearBus: [],
    nearInfo: []
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
    },
    [SET_NEAR_INFO](state, nearInfo) {
      state.nearInfo = nearInfo
    }
  },
  actions: {
    getNearInfo({ commit, state }) {
      BusApi.getUserInit().then((res) => {
        if (res.success) {
          BusApi.getUserInfo({
            token: '13f0657021ad4caca01e1544dee56ecb',
            Lat: state.latitude,
            Lng: state.longitude
          }).then((res) => {
            commit(SET_NEAR_INFO, res)
          })
        }
      })
    },

    getNearBusStop({ commit, state }) {
      BusApi.getNearBusStop({
        $top: 3,
        $spatialFilter: `nearby(StopPosition,${state.latitude}, ${state.longitude}, 500)`
      }).then((res) => {
        commit(SET_NEAR_STOP, res)
      })
    },
    getNearBus({ commit, state }) {
      BusApi.getNearBus({
        $top: 30,
        $spatialFilter: `nearby(${state.latitude}, ${state.longitude}, 1000)`
      }).then((res) => {
        commit(SET_NEAR_BUS, res)
      })
    },
    getNearBusRoute({ commit, state }) {
      BusApi.getNearBusRoute({
        $top: 10,
        $spatialFilter: `nearby(${state.latitude}, ${state.longitude}, 500)`
      }).then((res) => {
        commit(SET_NEAR_BUS_ROUTE, res)
      })
    }
  },
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
