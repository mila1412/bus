<template>
  <div id="Route">
    <div class="d-flex justify-content-between">
      <router-link to="/"><img src="../assets/logo.svg" /></router-link>
      <img class="icon" src="../assets/bookmark2.png" />
    </div>
    <b-row>
      <b-col cols="4">
        <router-link to="/search" class="back">
          <a> <img class="icon" src="../assets/left.png" /> 回上一頁 </a>
        </router-link>
        <div class="move">前往</div>
        <div class="destination">
          <div class="destination-wrap">
            <div class="destination-place">
              <img class="icon" src="../assets/arrow.png" />
              <div class="destination-word">
                <p>中友百貨</p>
              </div>
            </div>
            <img class="icon" src="../assets/bookmark1.png" />
          </div>
        </div>
      </b-col>
      <b-col cols="5">
        <div class="map-padding">
          <Map></Map>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'Route',
  components: {
    Map
  }
}
</script>
