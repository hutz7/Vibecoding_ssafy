<script setup>
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";


const route = useRoute();
const router = useRouter();

const boardStore = useBoardStore();


const post = boardStore.posts.find(
  (p)=>p.id == route.params.id
);


function deletePost() {

  const input = prompt("비밀번호를 입력하세요.");

  if (input === post.password) {

    boardStore.deletePost(post.id);

    router.push("/board");

  } else {

    alert("비밀번호가 일치하지 않습니다.");

  }
}

function editPost() {

  const input = prompt("비밀번호를 입력하세요.");

  if (input === post.password) {

    router.push(`/board/edit/${post.id}`);

  } else {

    alert("비밀번호가 틀렸습니다.");

  }

}

function like() {
  boardStore.likePost(post.id);
}

</script>


<template>

<div v-if="post" class="detail">


<h1>
{{ post.title }}
</h1>


<p>
작성자 : {{ post.writer }}
</p>


<p>
작성일 : {{ post.date }}
</p>


<hr>


<p>
{{ post.content }}
</p>
<img
  v-if="post.image"
  :src="post.image"
  class="photo"
/>

<button @click="deletePost">
삭제
</button>
<button @click="editPost">
수정
</button>
<button @click="like" class="like-btn">
  👍 {{ post.likes }}
</button>

</div>


<div v-else>

게시글을 찾을 수 없습니다.

</div>

</template>


<style scoped>

.detail{

 width:80%;

 margin:40px auto;

}

.photo{

  width:100%;

  max-width:500px;

  border-radius:10px;

  margin-bottom:20px;

}
button{

 margin-top:20px;

 padding:10px 20px;

}

</style>