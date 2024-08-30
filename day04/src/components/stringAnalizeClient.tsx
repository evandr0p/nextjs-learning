// src/components/ClientComponent.tsx

"use client"; // Mark as Client Component

import React, { useState } from "react";

interface StringAnalizeClientProps {
  onFetchData: (prompt: string) => void;
}

const StringAnalizeClientComponent: React.FC<StringAnalizeClientProps> = ({
  onFetchData,
}) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/string/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      console.log(data);
      onFetchData(data);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label className="m-4 input input-bordered flex items-center gap-2">
          <span className="m-4 label-text gap-2">Inform the string name</span>
          <input
            type="text"
            placeholder="Type the string name"
            className="input input-bordered w-full max-w-full"
            required
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button className="btn btn-primary m-8" disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
    </div>
  );
};

export default StringAnalizeClientComponent;
