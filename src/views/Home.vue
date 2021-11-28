<template>
  <div id="home">
    <div class="d-flex justify-content-between">
      <router-link to="/"><img src="../assets/logo.svg" /></router-link>
      <img class="icon" src="../assets/bookmark2.png" />
    </div>
    <button class="city">
      我在台中市 <img src="../assets/Vector 1.png" width="7" />
    </button>
    <b-row>
      <b-col cols="4">
        <div class="route-choose">
          <router-link to="/">
            <a class="route route-plan">
              <span>&ensp;&emsp;路線規劃</span>
            </a>
          </router-link>
          <router-link to="">
            <a class="route route-bus">
              <span>&ensp;&emsp;公車動態</span>
            </a>
          </router-link>
        </div>

        <router-link to="/search">
          <a class="route-btn">我想去哪裡...？</a>
        </router-link>

        <Favorite></Favorite>

        <div class="nearby">
          <div class="nearby-title">
            <img class="icon" src="../assets/station.png" />&ensp;附近站牌
          </div>
          <div class="nearby-station-wrap">
            <template v-for="stop in getWalkSecond">
              <div
                @click="
                  changeStopID({
                    stopUID: stop.stopUID,
                    positionLat: stop.positionLat,
                    positionLng: stop.positionLng
                  })
                "
                :key="stop.stopUID"
                class="nearby-station"
                :class="{ active: stopUID === stop.stopUID }"
              >
                {{ stop.stopName }} (步行
                {{ (stop.seconds / 60).toFixed(1) }} 分)
              </div>
            </template>
          </div>
          <div class="nearby-bus-wrap">
            <div v-for="bus in nearBus" :key="bus.PlateNumb" class="nearby-bus">
              <div class="nearby-bus-name">
                {{ bus.RouteName.Zh_tw }}
              </div>
              <div class="nearby-bus-info">
                <span class="nearby-bus-time">18分鐘</span>
                <!-- <span
                  v-if="bus.Direction === 0"
                  class="nearby-bus-place"
                  >往{{ bus.DestinationStopNameZh }}</span
                >
                <span
                  v-if="bus.Direction === 1"
                  class="nearby-bus-place"
                  >往{{ bus.DepartureStopNameZh }}</span
                > -->
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="8">
        <Map :stopMarkers="stopMarkers"></Map>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Favorite from '@/components/Favorite.vue'
import Map from '@/components/Map.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    Favorite,
    Map
  },
  computed: {
    ...mapState([
      'longitude',
      'latitude',
      'mapUrl',
      'nearBusStop',
      'nearBusRoute',
      'nearBus'
    ]),
    ...mapGetters(['filterNearBusRoute', 'getWalkSecond'])
  },
  watch: {
    getWalkSecond() {
      this.stopUID = this.getWalkSecond[0].stopUID
    }
  },
  data() {
    return {
      stopUID: '',
      stopMarkers: []
    }
  },
  methods: {
    ...mapMutations(['SET_LONGITUDE', 'SET_LATITUDE']),
    changeStopID(payload) {
      this.stopUID = payload.stopUID

      // 設定地圖標示
      this.stopMarkers.length = 0
      this.stopMarkers.push(
        { lat: 25.05247569778274, lng: 121.59045840698072 },
        { lat: 25.002845309945233, lng: 121.51857574692312 }
      )
    }
  }
}
</script>
