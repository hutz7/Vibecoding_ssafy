<script setup></script>
<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ChatButton from '@/components/chatbot/ChatButton.vue'
</script>

<template>
  <Header />

  <main class="container">
    <RouterView />
  </main>

  <Footer />
  <ChatButton />
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