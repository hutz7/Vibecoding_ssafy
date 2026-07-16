export async function sendChatMessage(message) {
  const response = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || '챗봇 응답을 가져오지 못했습니다.')
  }

  const data = await response.json()
  return data.reply
}
