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
              <div class="destination-word">中友百貨</div>
            </div>
            <img class="icon" src="../assets/bookmark1.png" />
          </div>
        </div>
        <div class="recommend-title">建議路線</div>
        <div class="recommend-result">找到三個結果</div>

        <div class="recommend">
          <div class="recommend-wrap">
            <div class="recommend-route">
              <div class="recommend-word">步行2分鐘</div>
              &ensp; <img class="icon" src="../assets/right.png" />&ensp;
              <img class="icon" src="../assets/bus.png" />
              <div class="recommend-stop">55</div>
              <div class="recommend-stop">73</div>
            </div>
            <div>
              <div class="recommend-min">15分鐘</div>
            </div>
          </div>
          <div class="recommend-wrap-middle">
            <img class="icon" src="../assets/clock.png" />&nbsp;
            <div class="recommend-time">下午6:03-下午6:18</div>
          </div>
          <div class="recommend-wrap-last">
            <div class="recommend-description">
              每10分鐘一班從台中火車站發車
            </div>
            <img class="icon" src="../assets/search history.png" />
          </div>
        </div>

        <div class="recommend">
          <div class="recommend-wrap">
            <div class="recommend-route">
              <div class="recommend-word">步行2分鐘</div>
              &ensp; <img class="icon" src="../assets/right.png" />&ensp;
              <img class="icon" src="../assets/bus.png" />
              <div class="recommend-stop">55</div>
              <div class="recommend-stop">73</div>
            </div>
            <div>
              <div class="recommend-min">15分鐘</div>
            </div>
          </div>
          <div class="recommend-wrap-middle">
            <img class="icon" src="../assets/clock.png" />&nbsp;
            <div class="recommend-time">下午6:03-下午6:18</div>
          </div>
          <div class="recommend-wrap-last">
            <div class="recommend-description">
              每10分鐘一班從台中火車站發車
            </div>
            <img class="icon" src="../assets/search history.png" />
          </div>
        </div>

        <div class="recommend">
          <div class="recommend-wrap">
            <div class="recommend-route">
              <div class="recommend-word">步行2分鐘</div>
              &ensp; <img class="icon" src="../assets/right.png" />&ensp;
              <img class="icon" src="../assets/bus.png" />
              <div class="recommend-stop">55</div>
              <div class="recommend-stop">73</div>
            </div>
            <div>
              <div class="recommend-min">15分鐘</div>
            </div>
          </div>
          <div class="recommend-wrap-middle">
            <img class="icon" src="../assets/clock.png" />&nbsp;
            <div class="recommend-time">下午6:03-下午6:18</div>
          </div>
          <div class="recommend-wrap-last">
            <div class="recommend-description">
              每10分鐘一班從台中火車站發車
            </div>
            <img class="icon" src="../assets/search history.png" />
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
