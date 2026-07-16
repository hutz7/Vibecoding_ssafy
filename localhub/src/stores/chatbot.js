import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sendChatMessage } from '@/services/chatbotService'

export const useChatbotStore = defineStore('chatbot', () => {
  const messages = ref([])
  const loading = ref(false)
  const error = ref('')

  async function sendMessage(message) {
    if (!message || !message.trim()) return

    messages.value.push({ role: 'user', content: message })
    loading.value = true
    error.value = ''

    try {
      const reply = await sendChatMessage(message)
      messages.value.push({ role: 'assistant', content: reply })
    } catch (err) {
      error.value = err.message || '메시지를 보내지 못했습니다.'
      messages.value.push({ role: 'assistant', content: '죄송합니다. 잠시 후 다시 시도해주세요.' })
    } finally {
      loading.value = false
    }
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
  }
})
