<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";


const route = useRoute();
const router = useRouter();

const boardStore = useBoardStore();


const post = boardStore.posts.find(
  (p)=>p.id == route.params.id
);


const title = ref(post.title);
const writer = ref(post.writer);
const content = ref(post.content);



function update(){

  boardStore.updatePost(
    post.id,
    {
      title:title.value,
      writer:writer.value,
      content:content.value
    }
  );


  router.push(`/board/${post.id}`);

}

</script>


<template>

<div class="edit">

<h1>
게시글 수정
</h1>


<input v-model="title">


<input v-model="writer">


<textarea v-model="content">
</textarea>


<button @click="update">
저장
</button>


</div>

</template>


<style scoped>

.edit{

width:500px;
margin:40px auto;

}


input,
textarea{

width:100%;
padding:10px;
margin-bottom:15px;

}


textarea{

height:200px;

}

</style>