// src/pages/page.tsx

"use client"; 

import React, { useState, useCallback } from 'react';

import StringAnalizeComponentServer from '@/components/stringAnalizeServer';
import ClientStringAnalizeComponent from '@/components/stringAnalizeClient';


const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState<string | null>(null);

  const handleFetchData = useCallback(async (newPrompt: string) => {
    console.log('handleFetchData called with:', newPrompt);
    setPrompt(newPrompt);
  }, []);

  return (
    <div>
      <h1>OpenAI Prompt Generator</h1>
      <ClientStringAnalizeComponent onFetchData={handleFetchData} />
      {<StringAnalizeComponentServer data={prompt} />}
    </div>
  );
};

export default HomePage;