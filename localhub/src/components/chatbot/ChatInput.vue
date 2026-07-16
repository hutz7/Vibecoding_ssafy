<script setup>
import { ref } from 'vue'
import { useChat } from '@/composables/useChat'

const { sendMessage, loading } = useChat()
const input = ref('')

async function handleSubmit() {
  const message = input.value.trim()
  if (!message) return

  await sendMessage(message)
  input.value = ''
}
</script>

<template>
  <form class="chat-input" @submit.prevent="handleSubmit">
    <input v-model="input" type="text" placeholder="질문을 입력하세요" />
    <button type="submit" :disabled="loading">전송</button>
  </form>
</template>

<style scoped>
.chat-input {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}
</style>
