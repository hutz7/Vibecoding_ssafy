<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function moveCategory(category) {
  router.push({
    path: "/places",
    query: {
      category,
    },
  });
}
</script>

<template>
  <section class="category">
  <h2>서울 관광 카테고리</h2>

  <div class="card" @click="moveCategory('tourist')">🏞 관광지</div>
  <div class="card" @click="moveCategory('culture')">🏛 문화시설</div>
  <div class="card" @click="moveCategory('festival')">🎉 축제</div>
  <div class="card" @click="moveCategory('shopping')">🛍 쇼핑</div>
  <div class="card" @click="moveCategory('hotel')">🏨 숙박</div>
  <div class="card" @click="moveCategory('leports')">🚴 레포츠</div>
  <div class="card" @click="moveCategory('course')">🗺 여행코스</div>
 </section>
</template>

<style scoped>

.category{
    padding:60px 20px;
}

.category h2{
    text-align:center;
    margin-bottom:30px;
}

.grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(180px,1fr));

gap:20px;

}

.card{

padding:30px;

border-radius:15px;

box-shadow:0 2px 10px rgba(0,0,0,.1);

text-align:center;

font-size:20px;

cursor:pointer;

transition:.3s;

}

.card:hover{

transform:translateY(-5px);

}

</style>