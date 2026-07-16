<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="message" :class="message.role">
    <strong>{{ message.role === 'assistant' ? '챗봇' : '나' }}</strong>
    <p>{{ message.content }}</p>
  </div>
</template>

<style scoped>
.message {
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
}

.message.user {
  background: #dbeafe;
}

.message.assistant {
  background: #f3f4f6;
}

p {
  margin: 4px 0 0;
}
</style>
