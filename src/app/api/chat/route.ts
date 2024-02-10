// C:\Users\NEWOWNER\OneDrive\Desktop\ruizTechServices\24hourgpt\24hourgpt\src\app\api\chat\route.ts
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
    const body = await req.json();
    const { messages } = body;

    //ask openai for the streaming chat completion
    const response = await openai.createChatCompletion({
        model: 'gpt-4-0125-preview',// gpt-3.5-turbo-0125 gpt-4-0125-preview
        messages,
        stream: true
    });

    const stream = OpenAIStream(response,{
        //you can save to database here
      //you want to save to MongoDB and Pinecone and return the saved history as a list of messages
      //but it has to be to each Clerk user, basically each user that signs up has their own database and messages with Clerk in MongoDB and Pinecone, right? Research this to be more accurate with this information
      //how should I do this?
      //show me step-by-step
    });
    return new StreamingTextResponse(stream);

};

