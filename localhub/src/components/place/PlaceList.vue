<script setup>
import { usePlaceStore } from "@/stores/place";
import PlaceCard from "./PlaceCard.vue";

const placeStore = usePlaceStore();
</script>

<template>
  <div class="grid">
    <PlaceCard
      v-for="place in placeStore.filteredPlaces"
      :key="place.contentid"
      :place="place"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}
</style>