<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";

const boardStore = useBoardStore();
const router = useRouter();


const title = ref("");
const content = ref("");
const writer = ref("");
const password = ref("");
const image = ref("");

function uploadImage(event) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    image.value = reader.result;
  };

  reader.readAsDataURL(file);
}

function submitPost() {

  boardStore.addPost({
    title: title.value,
    writer: writer.value,
    content: content.value,
    password: password.value,
    image: image.value
  });

  router.push("/board");
}

</script>


<template>

<div class="write">

<h1>
게시글 작성
</h1>


<input
v-model="title"
placeholder="제목"
/>
<input
  type="file"
  accept="image/*"
  @change="uploadImage"
/>


<input
v-model="writer"
placeholder="작성자"
/>

<input
v-model="password"
type="password"
placeholder="비밀번호"
/>

<textarea
v-model="content"
placeholder="내용"
/>


<button @click="submitPost">
작성
</button>


</div>

</template>


<style scoped>

.write{
  width:500px;
  margin:40px auto;
}


input,
textarea{

  display:block;

  width:100%;

  padding:10px;

  margin-bottom:15px;

}


textarea{

  height:200px;

}


button{

  width:100%;

  padding:10px;

}

</style>