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
            <div class="nearby-station">芝麻大廈 (步行1min)</div>
            <div class="nearby-station">芝麻大廈 (步行1min)</div>
            <div class="nearby-station">芝麻大廈 (步行1min)</div>
          </div>

          <div class="nearby-bus-wrap">
            <div class="nearby-bus">
              <div class="nearby-bus-name">285</div>
              <div class="nearby-bus-info">
                <span class="nearby-bus-time">18分鐘</span>
                <span class="nearby-bus-place">往三重國小</span>
              </div>
            </div>
            <div class="nearby-bus">
              <div class="nearby-bus-name">285</div>
              <div class="nearby-bus-info">
                <span class="nearby-bus-time">18分鐘</span>
                <span class="nearby-bus-place">往三重國小</span>
              </div>
            </div>
            <div class="nearby-bus">
              <div class="nearby-bus-name">285</div>
              <div class="nearby-bus-info">
                <span class="nearby-bus-time">18分鐘</span>
                <span class="nearby-bus-place">往三重國小</span>
              </div>
            </div>
            <div class="nearby-bus">
              <div class="nearby-bus-name">285</div>
              <div class="nearby-bus-info">
                <span class="nearby-bus-time">18分鐘</span>
                <span class="nearby-bus-place">往三重國小</span>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="5">
        <Map></Map>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Favorite from '@/components/Favorite.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Route',
  components: {
    Favorite,
    Map
  }
}
</script>
