// src/pages/page.tsx

"use client"; 

import '../styles/globals.css'; 

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
    <div data-theme="emerald">
      <div role="tablist" data-toggle="tab" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="tab 1"/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-col">
              <img
                src="/logo.jpg" />
              <div>
                <h1 className="text-5xl font-bold">String Squad is now a thing!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <ClientStringAnalizeComponent onFetchData={handleFetchData} /> {{ prompt } && <StringAnalizeComponentServer data={prompt} />}
        </div>
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <StringCompareClientComponent onFetchCompareData={handleFetchCompareData} />
                {{ comparePrompt } && <StringCompareServerComponent data={comparePrompt} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;