<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <Header />

  <main class="container">
    <RouterView />
  </main>

  <Footer />
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  min-height: calc(100vh - 130px);
}
</style>