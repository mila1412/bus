<template>
  <GmapMap
    ref="mapRef"
    map-type-id="terrain"
    style="width: 100%; height: 500px"
    :center="{lat:defaultLat, lng:defaultLng}"
    :options="mapOptions">
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon="m.icon"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
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
      markers: []
    }
  },
  props: {
    stopMarkers: Array
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.setOptions({
        styles: mapStyles
      })
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
      console.log(stops)
      this.markers = []
      for (let i = 0; i < stops.length; i++) {
        if (this.markers.some(m => m.position.lat === stops[i].lat && m.position.lng === stops[i].lng)) {
          // 重複站位
          console.log(`Duplicated station:(${stops[i].lat},${stops[i].lng})`)
        } else {
          const m = {
            position: {
              lat: stops[i].lat,
              lng: stops[i].lng
            },
            icon: require('../assets/location.png')
          }
          this.markers.push(m)
        }
      }
    }
  },
  methods: {
  }
}
</script>
