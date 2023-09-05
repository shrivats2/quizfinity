// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Props = {
  amount: Number;
  type: String;
  topic: String;
};

export async function generateQuestions({ amount, type, topic }: Props) {
  let output: any;
  if (type === "mcq") 
  {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array",
        },
        {
          role: "user",
          content: `You are to generate ${amount} random hard mcq question about ${topic} in following format \n        {\n          question: \"question\",\n          answer: \"answer with max length of 15 words\",\n          option1: \"option1 with max length of 15 words\",\n          option2: \"option2 with max length of 15 words\",\n          option3: \"option3 with max length of 15 words\",\n        }`,
        },
      ],
      temperature: 1,
      max_tokens: 600,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const res: any = response.choices[0].message.content;
    output = JSON.parse(res);
  } 
  else if (type === "open_ended") 
  {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array",
        },
        {
          role: "user",
          content: `You are to generate ${amount} random hard open-ended questions about ${topic} in following format \n        {\n          question: \"question\",\n          answer: \"answer with max length of 15 words\",\n        }`,
        },
      ],
      temperature: 1,
      max_tokens: 600,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const res: any = response.choices[0].message.content;
    output = JSON.parse(res);
  }
  return output;
}
