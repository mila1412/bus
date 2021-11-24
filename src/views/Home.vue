<template>
  <div id="home">
    <div class="d-flex justify-content-between">
      <router-link to="/"><img src="../assets/logo.svg" /></router-link>
      <img class="icon" src="../assets/bookmark2.png" />
    </div>
    <button class="city">
      我在台中市 <img src="../assets/Vector 1.png" width="7px" />
    </button>
    <b-row>
      <b-col cols="4">
        <div>
          <button class="route route-plan">
            <img class="icon" src="../assets/route.png" />
            <div>路線規劃</div>
          </button>
          <router-link to="/route">
            <button class="route">
              <img class="icon" src="../assets/bus.png" />
              <div>公車動態</div>
            </button>
          </router-link>
        </div>
        <button class="route-btn">我想去哪裡...？</button>

        <div class="favorite">
          <div class="favorite-wrap">
            <div class="favorite-place">
              <img class="icon" src="../assets/search history.png" />
              <div class="favorite-word">
                <p>審計新村</p>
                <p>台中市西區民生路368巷4弄8號</p>
              </div>
            </div>
            <img class="icon" src="../assets/bookmark2.png" />
          </div>
          <div class="favorite-wrap">
            <div class="favorite-place">
              <img class="icon" src="../assets/search history.png" />
              <div class="favorite-word">
                <p>審計新村</p>
                <p>台中市西區民生路368巷4弄8號</p>
              </div>
            </div>
            <img class="icon" src="../assets/bookmark2.png" />
          </div>
          <button class="favorite-more">
            展開更多 <img src="../assets/Vector 1.png" width="7px" />
          </button>
        </div>

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
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Map
  }
}
</script>
