// src/pages/page.tsx

"use client"; 

import React, { useState, useCallback } from 'react';

import StringAnalizeComponentServer from '@/components/stringAnalizeServer';
import ClientStringAnalizeComponent from '@/components/stringAnalizeClient';

import StringCompareClientComponent from '@/components/stringCompareClient';
import StringCompareServerComponent from '@/components/stringCompareServer';  


const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [comparePrompt, setComparePrompt] = useState<string | null>(null);

  const handleFetchData = useCallback(async (newPrompt: string) => {
    console.log('handleFetchData called with:', newPrompt);
    setPrompt(newPrompt);
  }, [])

  const handleFetchCompareData = useCallback(async (newPrompt: string) => {
    console.log('handleFetchCompareData called with:', newPrompt);
    setComparePrompt(newPrompt);
  }, [])

  return (
    <>
    <div>
      <h1>OpenAI Prompt Generator</h1>
      <ClientStringAnalizeComponent onFetchData={handleFetchData} />
      {{ prompt } && <StringAnalizeComponentServer data={prompt} />}
    </div>
    <div>
        <h1>OpenAI Prompt Generator</h1>
        <StringCompareClientComponent onFetchCompareData={handleFetchCompareData} />
        {{ comparePrompt } && <StringCompareServerComponent data={comparePrompt} />}
    </div>
    </>
  

    
  );
};

export default HomePage;