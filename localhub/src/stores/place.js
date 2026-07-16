import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getPlaces } from "@/services/placeService";

export const usePlaceStore = defineStore("place", () => {
  const places = ref([]);
  const keyword = ref("");

  const currentCategory = ref("tourist");
  const loading = ref(false);
  const error = ref(null);

  async function loadPlaces(category = "tourist") {
    loading.value = true;
    error.value = null;

    try {
      currentCategory.value = category;
      places.value = await getPlaces(category);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  const filteredPlaces = computed(() => {
    if (!keyword.value) return places.value;

    return places.value.filter((place) =>
      place.title.toLowerCase().includes(keyword.value.toLowerCase())
    );
  });

  return {
    places,
    filteredPlaces,
    keyword,
    currentCategory,
    loading,
    error,
    loadPlaces,
  };
});