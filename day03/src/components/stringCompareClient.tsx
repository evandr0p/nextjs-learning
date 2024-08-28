// src/components/ClientComponent.tsx

"use client";  // Mark as Client Component

import React, { useState } from 'react';


interface StringCompareClientProps {
  onFetchCompareData: (comparisonResult: string) => void;
}

const StringCompareClientComponent: React.FC<StringCompareClientProps> = ({ onFetchCompareData }) => {
  const [stringReference, setStringReference] = useState('');
  const [stringToCompare, setStringToCompare] = useState('');
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
        body: JSON.stringify({
          referenceString: stringReference,
          stringToCompare: stringToCompare
        }),
      });
      const data = await response.json();
      onFetchCompareData(data);
    } catch (error) {
      console.error('Error fetching the comparison:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label className="label">To get an AI-based string comparison, inform the string name</label>
          <input className="input input-bordered w-full max-w-xs"
            name="string"
            value={stringReference}
            onChange={(e) => setStringReference(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        <label className="label">Then, inform the 2nd string name</label>
          <input className="input input-bordered w-full max-w-xs"
            name="compareTo"
            value={stringToCompare}
            onChange={(e) => setStringToCompare(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        <br />
        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Comparting...' : 'Compare'}
        </button>
      </form>
    </div>
  );
};

export default StringCompareClientComponent;
