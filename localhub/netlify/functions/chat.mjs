export default async function (event) {
  const method = event.httpMethod || event.method || event.request?.method || event.request?.method || 'GET'

  if (method.toUpperCase() === 'OPTIONS') {
    return new Response('', {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    })
  }

  if (method.toUpperCase() !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed', method }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  try {
    let bodyObject = {}

    if (typeof event.body === 'string') {
      bodyObject = event.body.trim().startsWith('{') ? JSON.parse(event.body) : {}
    } else if (event.body && typeof event.body === 'object' && !('getReader' in event.body)) {
      bodyObject = event.body
    } else if (event.request) {
      try {
        bodyObject = await event.request.json()
      } catch {
        const rawText = await event.request.text()
        bodyObject = JSON.parse(rawText || '{}')
      }
    }

    const { message } = bodyObject || {}

    if (typeof message !== 'string' || !message.trim()) {
      return new Response(JSON.stringify({ error: 'Message is required.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey || apiKey.includes('your_openai_api_key_here')) {
      return new Response(JSON.stringify({ error: 'OpenAI API key is not configured.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful travel assistant for the LocalHub app.' },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(errorBody)
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content?.trim() || '답변을 생성하지 못했습니다.'

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
}
