// src/components/ClientComponent.tsx

"use client";  // Mark as Client Component

import React, { useState } from 'react';


interface StringCompareClientProps {
  onFetchData: (prompt: string) => void;
}

const StringCompareClientComponent: React.FC<StringCompareClientProps> = ({ onFetchData }) => {
  const [string, setString] = useState('');
  const [compareTo, setCompareTo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/string/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: string }),
      });
      const data = await response.json();
      onFetchData(data.response);
    } catch (error) {
      console.error('Error fetching the comparison:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Type the string Name:
          <input
            name="string"
            value={string}
            onChange={(e) => setString(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        </p>
        <p>Type the string Name to compare with:
          <input
            name="compareTo"
            value={string}
            onChange={(e) => setString(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        </p>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Comparting...' : 'Compare'}
        </button>
      </form>
    </div>
  );
};

export default StringCompareClientComponent;
