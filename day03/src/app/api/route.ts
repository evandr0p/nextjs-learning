// src/components/formOpenAi.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import { fetchOpenAIResponse } from '../../services/serviceOpenAi';  // Service using server-side logic



export async function GET() {
  const res = new Response();

  return Response.json( { message: 'Hello from OpenApiFacade!' });
}

/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log the URI immediately when the request is received
  const protocol = req.headers['x-forwarded-proto'] || 'http';  // or 'https'
  const host = req.headers.host;
  const fullUrl = `${protocol}://${host}${req.url}`;

  console.log(`Full Request URL: ${fullUrl}`);

  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'Hello from OpenApiFacade!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
  
  if (req.method !== 'POST') {
    const { prompt } = req.body;
    
    try {
      const response = await fetchOpenAIResponse(prompt);  // Securely call API
      res.status(200).json({ response });
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
  */