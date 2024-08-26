// src/pages/page.tsx

"use client"; 

import React, { useState, useCallback } from 'react';

import ServerFormOpenAiComponent from '@/components/serverSide/formOpenAi';
import ClientFormOpenAiComponent from '@/components/formOpenAi';


const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState<string | null>(null);

  const handleFetchData = useCallback(async (newPrompt: string) => {
    setPrompt(newPrompt);
  }, []);

  return (
    <div>
      <h1>OpenAI Prompt Generator</h1>
      <ClientFormOpenAiComponent onFetchData={handleFetchData} />
      {prompt && <ServerFormOpenAiComponent data={prompt} />}
    </div>
  );
};

export default HomePage;