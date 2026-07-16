export async function sendChatMessage(message) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  };

  const endpoints = ["/api/chat", "/.netlify/functions/chat"];
  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      console.log("OpenAI 응답 :", data, "endpoint:", endpoint);

      if (!response.ok) {
        lastError = new Error(data.error || `Request failed: ${response.status}`);
        continue;
      }

      return data.reply;
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("Chat request failed.");
}
