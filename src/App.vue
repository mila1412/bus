<template>
  <div id="app">
    <div v-if="browserSupport" class="container">
      <router-view />
    </div>
    <p v-else>{{ warningText }}</p>
    <div class="footer">Bustop© - All Rights Reserved.</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      )
    } else {
      this.browserSupport = false
      this.warningText = '目前瀏覽器不支援此網站功能，請嘗試更換瀏覽器'
    }
  },
  computed: {
    ...mapState(['longitude', 'latitude', 'mapUrl'])
  },
  data() {
    return {
      warningText: '',
      browserSupport: true
    }
  },
  methods: {
    ...mapMutations(['SET_LONGITUDE', 'SET_LATITUDE']),
    ...mapActions([
      'getNearBusStop',
      'getNearBus',
      'getNearBusRoute',
      'getNearInfo'
    ]),
    showPosition(position) {
      this.SET_LONGITUDE(position.coords.longitude)
      this.SET_LATITUDE(position.coords.latitude)
      this.getNearInfo()
      this.getNearBusStop()
      this.getNearBus()
      this.getNearBusRoute()
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.warningText = 'User denied the request for Geolocation.'
          break
        case error.POSITION_UNAVAILABLE:
          this.warningText = 'Location information is unavailable.'
          break
        case error.TIMEOUT:
          this.warningText = 'The request to get user location timed out.'
          break
        case error.UNKNOWN_ERROR:
          this.warningText = 'An unknown error occurred.'
          break
      }
    }
  }
}
</script>
