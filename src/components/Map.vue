<template>
  <GmapMap
    ref="mapRef"
    map-type-id="terrain"
    :center="{ lat: defaultLat, lng: defaultLng }"
    :options="mapOptions"
    :style="styleOptions"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon="m.icon"
      :clickable="true"
      :draggable="false"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<script>
import mapStyles from '../api/config/map_styles'
import { mapState } from 'vuex'

export default {
  name: 'Map',
  data() {
    return {
      defaultLat: 25.05247569778274,
      defaultLng: 121.59045840698072,
      markers: [],
      styleOptions: {
        width: '100%',
        height: '100%'
      }
    }
  },
  props: {
    stopMarkers: Array,
    focusMarker: Object
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.setOptions({
        styles: mapStyles
      })

      // 使用者所在地點標示
      const center = map.getCenter()
      const m = {
        position: {
          lat: center.lat(),
          lng: center.lng()
        },
        icon: require('../assets/user_location.png'),
        type: 'user'
      }
      this.markers.push(m)
    })
  },
  computed: {
    ...mapState(['latitude', 'longitude']),
    mapOptions() {
      return {
        zoom: 17,
        center: {
          lat: this.latitude === null ? this.defaultLat : this.latitude,
          lng: this.longitude === null ? this.defaultLng : this.longitude
        },
        mapTypeControl: false,
        streetViewControl: false
      }
    }
  },
  watch: {
    stopMarkers: function (stops) {
      // 移除站點
      for (let i = 0; i < this.markers.length; i++) {
        if (this.markers[i].type !== 'user') {
          this.markers.splice(i, 1)
        }
      }

      // 更新站點

      for (let i = 0; i < stops.length; i++) {
        if (
          this.markers.some(
            (m) =>
              m.position.lat === stops[i].lat &&
              m.position.lng === stops[i].lng &&
              m.type === 'stop'
          )
        ) {
          // 重複站位
          // console.log(`Duplicated station:(${stops[i].lat},${stops[i].lng})`)
        } else {
          const m = {
            position: {
              lat: stops[i].lat,
              lng: stops[i].lng
            },
            icon: require('../assets/location.png'),
            type: 'stop'
          }
          this.markers.push(m)
        }
      }
    },
    focusMarker: function (stop) {
      console.log(stop)
      if (stop !== null) {
        const index = this.markers.findIndex(
          (m) =>
            m.position.lat === stop.positionLat &&
            m.position.lng === stop.positionLng &&
            m.type === 'stop'
        )
        if (index !== -1) {
          // 上一個焦點，藍點換黑點
          const rmIndex = this.markers.findIndex((m) => m.type === 'focus')
          this.markers.splice(rmIndex, 1)
          const m1 = {
            position: {
              lat: stop.positionLat,
              lng: stop.positionLng
            },
            icon: require('../assets/location.png'),
            type: 'stop'
          }
          this.markers.push(m1)

          // 目前的焦點，黑點換藍點
          this.markers.splice(index, 1)
          const m2 = {
            position: {
              lat: stop.positionLat,
              lng: stop.positionLng
            },
            icon: require('../assets/location2.png'),
            type: 'focus'
          }
          this.markers.push(m2)
        }
      }
    }
  },
  methods: {}
}
</script>
