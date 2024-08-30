
"use client"; 

import '../../../styles/globals.css';

import React, { useState, useCallback } from 'react';

import StringCompareClientComponent from '@/components/stringCompareClient';
import StringCompareServerComponent from '@/components/stringCompareServer';  


const CompareStrings: React.FC = () => {
  const [comparePrompt, setComparePrompt] = useState<string | null>(null);

  const handleFetchCompareData = useCallback(async (newPrompt: string) => {
    console.log('handleFetchCompareData called with:', newPrompt);
    setComparePrompt(newPrompt);
  }, [])

  return (
    <div  className="m-8 text-center">
        <StringCompareClientComponent onFetchCompareData={handleFetchCompareData} />
        {{ comparePrompt } && <StringCompareServerComponent data={comparePrompt} />}
    </div>
  )
}
export default CompareStrings;