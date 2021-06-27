<template>
  <div class="main">
     <div>
        <h2> iTunes Search </h2>
        <input 
          type='text' 
          placeholder='Enter artist name' 
          v-model='artistName'
        />
      <button type="button" @click="searchAlbum"> Search </button>
   </div>
    <div class="albums">
      <div
        class="row"
        v-for="chunk in productChunks"
        :key="chunk.id"
        :chunk="chunk"
      >
        <AlbumCard v-for="album in chunk" :key="album.id" :album="album" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AlbumCard from "../components/AlbumCard.vue";
import AlbumService from "../services/AlbumService";
import lodash from "lodash";
export default Vue.extend({
  name: "Home",
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: [],
      artistName : ""
    };
  },

  computed: {
    productChunks() {
      return lodash.chunk(Object.values((this as any).albums), 4);
    },

  },
  methods:{
    searchAlbum(){
      AlbumService.getAlbums(this.artistName)
      .then((res) => {
        this.albums = res.data.albumList;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
});
</script>
<style scoped>
.albums {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  padding: 10px;
}
</style>
