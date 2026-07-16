export default async (request) => {
  // CORS 헤더
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // OPTIONS 요청 처리
  if (request.method === "OPTIONS") {
    return new Response("", {
      status: 200,
      headers,
    });
  }

  // POST만 허용
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method Not Allowed" }),
      {
        status: 405,
        headers,
      }
    );
  }

  try {
    // 요청 데이터 읽기
    const { message } = await request.json();

    console.log("받은 메시지 :", message);

    if (!message || !message.trim()) {
      return new Response(
        JSON.stringify({ error: "Message is required." }),
        {
          status: 400,
          headers,
        }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "OPENAI_API_KEY가 설정되어 있지 않습니다." }),
        {
          status: 500,
          headers,
        }
      );
    }

    // OpenAI Responses API 호출 (gpt-5-mini 모델은 이 엔드포인트로 사용해야 합니다)
    const prompt = `당신은 LocalHub 서울 여행 추천 AI입니다. 서울 관광지, 맛집, 문화시설, 숙박, 여행 코스 정보를 한국어로 친절하고 정확하게 안내해주세요.\n\n- 답변에 일정(시간), 특징, 가까운 지하철역을 포함하세요.\n- 답변이 너무 길면 2회로 나누어 "1/2"과 "2/2"로 답변하세요.\n- 각 파트는 독립적으로 이해 가능해야 합니다.\n\n사용자 질문: ${message}`;

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-5-mini",
          input: prompt,
          max_output_tokens: 1000,
          text: {
            format: {
              type: "text",
            },
          },
        }),
      }
    );

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      console.error(data);

      return new Response(
        JSON.stringify({
          error: data.error?.message || "OpenAI API 오류",
        }),
        {
          status: 500,
          headers,
        }
      );
    }

    const getTextFromResponse = (responseData) => {
      if (typeof responseData.output_text === "string") {
        return responseData.output_text;
      }

      if (!Array.isArray(responseData.output)) {
        return "";
      }

      return responseData.output
        .flatMap((item) => {
          if (Array.isArray(item.content)) {
            return item.content
              .filter((contentItem) => contentItem?.type === "output_text" && typeof contentItem.text === "string")
              .map((contentItem) => contentItem.text);
          }

          if (typeof item.content === "string") {
            return [item.content];
          }

          return [];
        })
        .join("");
    };

    const reply = getTextFromResponse(data).trim();

    if (!reply) {
      console.error("OpenAI 응답에 텍스트가 없습니다.", data);

      return new Response(
        JSON.stringify({
          error: "OpenAI 응답이 비어 있습니다.",
        }),
        {
          status: 500,
          headers,
        }
      );
    }

    return new Response(
      JSON.stringify({
        reply,
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
        headers,
      }
    );
  }
};
