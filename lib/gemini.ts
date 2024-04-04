import { GoogleGenerativeAI } from "@google/generative-ai";

type Props = {
  amount: Number;
  type: String;
  topic: String;
};

export async function generateQuestions({ amount, type, topic }: Props) {
  const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  let output: any;
  if (type === "mcq") {
    const chat = await model.generateContent(
      `You are to generate ${amount} random hard mcq question about ${topic} in JSON array following format \n        {\n         [ "question": \"question\",\n          "answer": \"answer with max length of 15 words\",\n          "option1": \"option1 with max length of 15 words\",\n          "option2": \"option2 with max length of 15 words\",\n          "option3": \"option3 with max length of 15 words\",\n  ]      }`
    );
    const response = chat.response;
    output = response.text();
  } else if (type === "open_ended") {
    const chat = await model.generateContent(
      `You are to generate ${amount} random hard open-ended questions about ${topic} in JSON array  following format \n        {\n          [question: \"question\",\n          answer: \"answer with max length of 15 words\",\n  ]      }`
    );

    const response = chat.response;
    output = response.text();
  }

  return JSON.parse(output);
}
