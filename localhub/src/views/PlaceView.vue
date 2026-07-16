<script setup>
import { onMounted } from "vue";

import CategoryTabs from "@/components/place/CategoryTabs.vue";
import SearchBar from "@/components/place/SearchBar.vue";
import PlaceList from "@/components/place/PlaceList.vue";

import { usePlaceStore } from "@/stores/place";

const placeStore = usePlaceStore();

onMounted(() => {
  placeStore.loadPlaces();
});
</script>

<template>
  <div class="page">
    <h1>서울 관광정보</h1>

    <CategoryTabs />

    <SearchBar />

    <p class="count">총 {{ placeStore.places.length }}개의 관광정보</p>

    <p v-if="placeStore.loading" class="loading">데이터를 불러오는 중입니다...</p>

    <p v-if="placeStore.error" class="error">
      {{ placeStore.error }}
    </p>

    <PlaceList v-if="!placeStore.loading" :places="placeStore.filteredPlaces" />
  </div>
</template>

<style scoped>
.page {
  padding: 40px;
}

h1 {
  text-align: center;
}

.count {
  margin: 20px 0;

  font-weight: bold;
}

.loading {
  text-align: center;

  font-size: 18px;

  color: #1976d2;
}

.error {
  color: red;

  text-align: center;
}
</style>
