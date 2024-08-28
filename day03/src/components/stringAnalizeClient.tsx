// src/components/ClientComponent.tsx

"use client";  // Mark as Client Component

import React, { useState } from 'react';


interface StringAnalizeClientProps {
  onFetchData: (prompt: string) => void;
}

const StringAnalizeClientComponent: React.FC<StringAnalizeClientProps> = ({ onFetchData }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/string/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      console.log(data);
      onFetchData(data);
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">To get an AI advice, inform the string name</label>
        <input className="input input-bordered w-full max-w-xs"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default StringAnalizeClientComponent;
