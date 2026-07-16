<<script setup>
import PlaceCard from "./PlaceCard.vue";

defineProps({
  places: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid">
    <PlaceCard
      v-for="place in places"
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