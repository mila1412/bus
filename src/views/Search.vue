<template>
  <div id="Search">
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

        <div class="place">
          <div class="place-icon">
            <img src="../assets/dot.png" width="9" />
            <div class="line"></div>
            <img src="../assets/location.png" class="icon" />
          </div>
          <div>
            <input type="text" class="now-place" placeholder="現在位置" />
            <input
              type="text"
              class="next-place"
              placeholder="我想去哪裡...?"
            />
          </div>
        </div>

        <Favorite></Favorite>

        <div class="search-record">
          <div class="search-record-title">搜尋過的地點</div>
          <div class="favorite">
            <div class="favorite-wrap">
              <div class="favorite-place">
                <img class="icon" src="../assets/search history.png" />
                <div class="favorite-word">
                  <p>審計新村</p>
                  <p>台中市西區民生路368巷4弄8號</p>
                </div>
              </div>
              <img class="icon" src="../assets/bookmark1.png" />
            </div>
            <div class="favorite-wrap">
              <div class="favorite-place">
                <img class="icon" src="../assets/search history.png" />
                <div class="favorite-word">
                  <p>審計新村</p>
                  <p>台中市西區民生路368巷4弄8號</p>
                </div>
              </div>
              <img class="icon" src="../assets/bookmark1.png" />
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
  name: 'Search',
  components: {
    Favorite,
    Map
  }
}
</script>
