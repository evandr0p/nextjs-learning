import OpenAI from "openai";


if (!process.env.NEXT_PUBLIC_OPEN_AI_ORG) {
    throw new Error('NEXT_PUBLIC_OPEN_AI_ORG environment variable is missing');
}
const NEXT_PUBLIC_OPEN_AI_ORG = process.env.NEXT_PUBLIC_OPEN_AI_ORG;

if (!process.env.NEXT_PUBLIC_OPEN_AI_PROJECT) {
    throw new Error('NEXT_PUBLIC_OPEN_AI_PROJECT environment variable is missing');
}
const NEXT_PUBLIC_OPEN_AI_PROJECT = process.env.NEXT_PUBLIC_OPEN_AI_PROJECT;

if (!process.env.NEXT_PUBLIC_OPEN_AI_API_KEY) {
    throw new Error('NEXT_PUBLIC_OPEN_AI_API_KEY environment variable is missing');
}
const NEXT_PUBLIC_OPEN_AI_API_KEY = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;



const openai = new OpenAI({
    apiKey: NEXT_PUBLIC_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true,
    organization: NEXT_PUBLIC_OPEN_AI_ORG,
    project: NEXT_PUBLIC_OPEN_AI_PROJECT,
    
    
});

export const fetchOpenAIResponse = async (prompt: string) => {
    try {
      console.log('Calling OpenAI API...');
      const response = await openai.chat.completions.create  ({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });
      return response.choices[0].message.content;
      console.log('OpenAI API response:', response);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw error;
    }   
}
