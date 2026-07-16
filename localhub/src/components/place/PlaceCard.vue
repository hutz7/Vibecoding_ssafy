<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  place: Object,
});

function goDetail() {
  router.push(`/place/${props.place.contentid}`);
}
</script>

<template>
  <div class="card">
    <img :src="place.firstimage" alt="" />

    <h3>{{ place.title }}</h3>

    <p>{{ place.addr1 }}</p>

    <button @click="goDetail">
      상세보기
    </button>
  </div>
</template>

<style scoped>
.card {
  padding: 15px;

  border-radius: 15px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;

  height: 180px;

  object-fit: cover;

  border-radius: 10px;
}

button {
  margin-top: 10px;

  width: 100%;

  padding: 10px;

  background: #1976d2;

  color: white;

  border: none;

  border-radius: 8px;

  cursor: pointer;
}
</style>