// src/components/formOpenAi.tsx

import { NextRequest, NextResponse } from 'next/server';
import { fetchOpenAIResponse } from  '../../../services/serviceOpenAi';  // Service using server-side logic
import { PROMPT_ANALYZE } from '@/prompts';


export async function GET() {
  const res = new Response();

  return Response.json( { message: 'Hello from OpenApiFacade!' });
}

export async function POST(req: NextRequest) {
  try {
  
    let { prompt } = await req.json();
    prompt = PROMPT_ANALYZE.replace( "#", prompt);

    const protocol = req.headers.get('x-forwarded-proto') || 'http';  // or 'https'
    const host = req.headers.get('host');
    const fullUrl = `${protocol}://${host}${req.url}`;
    console.log(`Full Request URL: ${fullUrl}`);
  
    console.log(`Request body: ${JSON.stringify({ prompt })}`);

    const res = await fetchOpenAIResponse(prompt);  // Securely call API

    console.log(`OpenAI Response: ${res}`);

    return NextResponse.json(res);

  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    return new Response(`Error fetching OpenAI response: ${error}`, {
      status: 400,
    })
  }
}
