// src/components/ClientComponent.tsx

"use client";  // Mark as Client Component

import React, { useState } from 'react';


interface ClientFormOpenAiProps {
  onFetchData: (prompt: string) => void;
}

const ClientFormOpenAiComponent: React.FC<ClientFormOpenAiProps> = ({ onFetchData }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/openAi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      onFetchData(data.response);
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tell me a joke"
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default ClientFormOpenAiComponent;
