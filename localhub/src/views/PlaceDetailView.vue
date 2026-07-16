<script setup>
import { useRoute } from "vue-router";
import { usePlaceStore } from "@/stores/place";

const route = useRoute();
const placeStore = usePlaceStore();

const place = placeStore.places.find(
  (p) => p.contentid == route.params.id
);
</script>

<template>
  <div v-if="place" class="detail">

    <img :src="place.firstimage" />

    <h1>{{ place.title }}</h1>

    <p>
      주소 : {{ place.addr1 }}
    </p>

    <p v-if="place.tel">
      전화 : {{ place.tel }}
    </p>

  </div>


  <div v-else>
    장소 정보를 찾을 수 없습니다.
  </div>
</template>


<style scoped>
.detail {
  width: 80%;
  margin: 40px auto;
}

img {
  width: 500px;
  max-width: 100%;
  border-radius: 15px;
}
</style>