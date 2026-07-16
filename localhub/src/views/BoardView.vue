<script setup>
import { useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";

const boardStore = useBoardStore();
const router = useRouter();


function goWrite() {
  router.push("/board/write");
}


function goDetail(id) {
  router.push(`/board/${id}`);
}

</script>


<template>

<div class="board">

<h1>
여행 후기 게시판
</h1>


<button @click="goWrite">
글쓰기
</button>


<div
class="post"
v-for="post in boardStore.posts"
:key="post.id"
@click="goDetail(post.id)"
>

<h3>
{{ post.title }}
</h3>


<p>
작성자 : {{ post.writer }}
</p>


<p>
{{ post.date }}
</p>

</div>


</div>

</template>


<style scoped>

.board{
  width:80%;
  margin:40px auto;
}


.post{

  padding:20px;

  margin-top:15px;

  border:1px solid #ddd;

  border-radius:10px;

  cursor:pointer;

}


.post:hover{

  background:#f5f5f5;

}

</style>