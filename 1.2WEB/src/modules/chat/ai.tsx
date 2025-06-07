import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true

});
export async function Ai(text: string) {
  const completion = await openai.chat.completions.create({
    model: "mistralai/devstral-small:free",
    messages: [
      {
        "role": "user",
        "content": text
      }
    ],
    
  });
  console.log(completion.choices[0].message);
  return completion.choices[0].message.content;
}

Ai("say 'i love unicorns '");