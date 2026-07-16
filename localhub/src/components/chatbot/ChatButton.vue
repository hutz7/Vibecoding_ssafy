<script setup>
import { ref } from 'vue'
import ChatWindow from '@/components/chatbot/ChatWindow.vue'

const open = ref(false)
</script>

<template>
  <div class="chat-button-wrap">
    <button class="chat-toggle" @click="open = !open">
      {{ open ? '챗봇 닫기' : '챗봇 열기' }}
    </button>

    <ChatWindow v-if="open" />
  </div>
</template>

<style scoped>
.chat-button-wrap {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}

.chat-toggle {
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}
</style>
