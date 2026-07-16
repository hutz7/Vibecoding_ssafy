<script setup>
import { storeToRefs } from 'pinia'
import { useChat } from '@/composables/useChat'
import ChatInput from '@/components/chatbot/ChatInput.vue'
import ChatMessage from '@/components/chatbot/ChatMessage.vue'

const chat = useChat()
const { messages, loading, error } = storeToRefs(chat)
</script>

<template>
  <div class="chat-window">
    <div class="chat-header">LocalHub 챗봇</div>
    <div class="chat-body">
      <div v-if="messages.length === 0" class="empty">여행 관련 질문을 해보세요.</div>
      <ChatMessage v-for="(msg, index) in messages" :key="index" :message="msg" />
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="loading" class="loading">답변 생성 중...</div>
    <ChatInput />
  </div>
</template>

<style scoped>
.chat-window {
  width: 320px;
  max-height: 480px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 12px;
}

.chat-header {
  background: #111827;
  color: white;
  padding: 12px;
  font-weight: bold;
}

.chat-body {
  padding: 12px;
  min-height: 220px;
  max-height: 320px;
  overflow-y: auto;
}

.empty,
.loading,
.error {
  font-size: 0.95rem;
  color: #6b7280;
  padding: 8px 0;
}

.error {
  color: #dc2626;
  padding: 0 12px 8px;
}
</style>
