<template>
  <div class="album-card">
    <span>{{ album.artistName }} on {{ album.collectionName }}</span>
    <h4>{{ album.trackName }}</h4>
    <img
      :src="album.artworkUrl100"
      alt="album image"
      width="200"
      height="200"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AlbumCard",
  props: {
    album: Object,
  },
});
</script>

<style scoped>
.album-card {
  margin: 10px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.album-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
