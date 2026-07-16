<script setup></script>
<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <Header />

  <main class="container">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped></style>
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  min-height: calc(100vh - 130px);
}
</style>