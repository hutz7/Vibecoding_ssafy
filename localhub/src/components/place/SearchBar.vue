<script setup>
import { usePlaceStore } from "@/stores/place";

const placeStore = usePlaceStore();
</script>

<template>
  <div class="search">
    <input
      v-model="placeStore.keyword"
      type="text"
      placeholder="관광지를 검색하세요..."
    />
  </div>
</template>

<style scoped>
.search {
  margin: 30px auto;
  max-width: 500px;
}

input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
}

input:focus {
  border-color: #1976d2;
  outline: none;
}

</style>