<script setup>
import { usePlaceStore } from "@/stores/place";

const placeStore = usePlaceStore();

const categories = [
  { key: "tourist", label: "관광지" },
  { key: "culture", label: "문화시설" },
  { key: "festival", label: "축제" },
  { key: "shopping", label: "쇼핑" },
  { key: "hotel", label: "숙박" },
  { key: "leports", label: "레포츠" },
  { key: "course", label: "여행코스" },
];
</script>

<template>
  <div class="tabs">
    <button
      v-for="category in categories"
      :key="category.key"
      class="tab"
      :class="{ active: placeStore.currentCategory === category.key }"
      @click="placeStore.loadPlaces(category.key)"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<style scoped>
/* 카테고리 버튼들을 가운데 정렬 */
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
}

/* 기본 버튼 스타일 */
.tab {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: #1976d2;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

/* 마우스를 올렸을 때 */
.tab:hover {
  background: #1565c0;
}

/* ⭐ 현재 선택된 카테고리 */
.active {
  background: orange;
  color: white;
  font-weight: bold;
}
</style>