import { generateQuestions } from "@/lib/gemini";
import { getAuthSession } from "@/lib/nextauth";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

interface Question {
  question: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
}

const CustomJsonParse = (jsonString: string): Question[] => {
  let index = 0;

  const parseValue = (): any => {
    const char = jsonString[index];
    if (char === '"') {
      // String value
      const startIndex = ++index;
      while (jsonString[++index] !== '"');
      return jsonString.slice(startIndex, index++);
    } else if (char === "[") {
      // Array value
      const array: any[] = [];
      while (jsonString[++index] !== "]") {
        if (jsonString[index] === ",") continue;
        array.push(parseValue());
      }
      index++;
      return array;
    } else if (char === "{") {
      // Object value
      const obj: any = {};
      while (jsonString[++index] !== "}") {
        if (jsonString[index] === ",") continue;
        const key = parseValue();
        index++; // Skip ':'
        obj[key] = parseValue();
      }
      index++;
      return obj;
    } else {
      // Number value
      const startIndex = index;
      while (/[\d.-]/.test(jsonString[++index]));
      return parseFloat(jsonString.slice(startIndex, index));
    }
  };

  return parseValue();
};

export async function POST(req: Request, res: Response) {
  try {
    // const session = await getAuthSession();
    // if (!session?.user) {
    //   return NextResponse.json(
    //     { error: "You must be logged in to create a game." },
    //     {
    //       status: 401,
    //     }
    //   );
    // }
    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);
    let questions: any;
    if (type === "open_ended") {
      questions = await generateQuestions({ amount, type, topic });
      console.log(questions);
    } else if (type === "mcq") {
      questions = await generateQuestions({ amount, type, topic });
    }

    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      console.error("elle gpt error", error);
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        {
          status: 500,
        }
      );
    }
  }
}
