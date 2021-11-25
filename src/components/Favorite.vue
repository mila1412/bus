<template>
  <div class="favorite">
    <router-link to="/route">
      <a class="favorite-wrap">
        <div class="favorite-place">
          <img class="icon" src="../assets/search history.png" />
          <div class="favorite-word">
            <p>審計新村</p>
            <p>台中市西區民生路368巷4弄8號</p>
          </div>
        </div>
        <img class="icon" src="../assets/bookmark2.png" />
      </a>
    </router-link>
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
</template>

<script>
export default {
  name: 'Favorite'
}
</script>
