// src/components/ClientComponent.tsx

"use client"; // Mark as Client Component

import React, { useState } from "react";

interface StringCompareClientProps {
  onFetchCompareData: (comparisonResult: string) => void;
}

const StringCompareClientComponent: React.FC<StringCompareClientProps> = ({
  onFetchCompareData,
}) => {
  const [stringReference, setStringReference] = useState("");
  const [stringToCompare, setStringToCompare] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/string/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referenceString: stringReference,
          stringToCompare: stringToCompare,
        }),
      });
      const data = await response.json();
      onFetchCompareData(data);
    } catch (error) {
      console.error("Error fetching the comparison:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center" >
      <form onSubmit={handleSubmit}>
        <label className="m-4 input input-bordered flex items-center w-full gap-2">
          String Reference
          <input
            className="input input-bordered w-full max-w-xs"
            name="string"
            value={stringReference}
            onChange={(e) => setStringReference(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        </label>
        <label className="m-4 input input-bordered flex items-center w-full gap-2">
          Compare with
          <input
            className="input input-bordered w-full max-w-xs"
            name="compareTo"
            value={stringToCompare}
            onChange={(e) => setStringToCompare(e.target.value)}
            placeholder="Inform the string Name"
            required={true}
          />
        </label>
        <button className="btn btn-primary m-8" disabled={loading}>
          {loading ? "Comparting..." : "Compare"}
        </button>
      </form>
    </div>
  );
};

export default StringCompareClientComponent;
