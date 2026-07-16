import { defineStore } from "pinia";
import { ref } from "vue";

export const useBoardStore = defineStore("board", () => {

  const posts = ref(
    JSON.parse(localStorage.getItem("posts")) || []
  );


  function save() {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts.value)
    );
  }


  function addPost(post) {

    posts.value.push({
      id: Date.now(),
      ...post,
      likes: 0,
      date: new Date().toLocaleDateString(),
      });


    save();
  }


  function deletePost(id){

    posts.value =
      posts.value.filter(
        post => post.id !== id
      );

    save();
  }


  function updatePost(id, data){

    const post =
      posts.value.find(
        post => post.id === id
      );

    if(post){
      Object.assign(post, data);
    }

    save();
  }
  function likePost(id) {

  const post = posts.value.find(p => p.id === id);

  if (post) {
    post.likes++;
    save();
  }

}

  return {
    posts,
    addPost,
    deletePost,
    updatePost,
    likePost
  };

});