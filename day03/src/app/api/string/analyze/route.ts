// src/components/formOpenAi.tsx

import { NextRequest, NextResponse } from 'next/server';
import { fetchOpenAIResponse } from  '../../../../services/serviceOpenAi';  // Service using server-side logic
import { PROMPT_ANALYZE } from '@/prompts';
import { StringDetail } from '@/models/strings/StringDetail';


export async function GET() {
  const res = new Response();
  return Response.json( { message: 'Hello to Compare strings, submit analize payload' });
}

export async function POST(req: NextRequest) {
  try {
  
    
    let { prompt } = await req.json();
    
    let stringDetail: StringDetail = {
      Name: prompt
    };

    prompt = PROMPT_ANALYZE.replace( "#1", prompt);

    const protocol = req.headers.get('x-forwarded-proto') || 'http';  // or 'https'
    const host = req.headers.get('host');
    const fullUrl = `${protocol}://${host}${req.url}`;
    console.log(`Full Request URL: ${fullUrl}`);
  
    console.log(`Request body: ${JSON.stringify({ prompt })}`);

    let result = await fetchOpenAIResponse(prompt.replace(/[\r\n\\']/g, ''));  // Securely call API

    if (result) {
      let apiResponse: any = JSON.parse(result);
      Object.assign(stringDetail, apiResponse);
    }

    console.log(`OpenAI Response: ${JSON.stringify(stringDetail)}`);
    return NextResponse.json(stringDetail);

  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    return new Response(`Error fetching OpenAI response: ${error}`, {
      status: 400,
    })
  }
}
