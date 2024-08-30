"use client";

import "../../../styles/globals.css";

import React, { useState, useCallback } from "react";

import StringAnalizeComponentServer from "@/components/stringAnalizeServer";
import ClientStringAnalizeComponent from "@/components/stringAnalizeClient";

const AnalyzeStrings: React.FC = () => {
  const [prompt, setPrompt] = useState<string | null>(null);

  const handleFetchData = useCallback(async (newPrompt: string) => {
    console.log("handleFetchData called with:", newPrompt);
    setPrompt(newPrompt);
  }, []);
  return (
    <div className="m-8 text-center">
      <ClientStringAnalizeComponent onFetchData={handleFetchData} />{" "}
      {{ prompt } && <StringAnalizeComponentServer data={prompt} />}
    </div>
  );
};
export default AnalyzeStrings;
