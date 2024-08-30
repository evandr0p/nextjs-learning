"use client";

import AnalyzeStrings from "./analyze/AnalyzeStrings";
import CompareStrings from "./compare/CompareStrings";
//import { useRouter } from 'next/router';
import { useRouter, useSearchParams } from "next/navigation";
import Header from "./header";

// src/app/subscribe/header.jsx
import Link from "next/link";

export default function FreePlanHome() {
  const router = useRouter();
  const option = useSearchParams().get("option");

  // Determine which option to render
  let content;
  if (option === "analize") {
    content = (
      <>
        <div>
            <AnalyzeStrings />;
        </div>
      </>
    );
  } else if (option === "compare") {
    content = (
      <>
        <div className="m-4 flex justify-center">
            <CompareStrings />
        </div>
      </>
    );
    // Or use router.push('/compare') if CompareStrings is a page.
  } else {
    content = (
      <div className="m-4 flex justify-center" >
        <h2 className="text-2xl font-semibold">Choose an Option Above</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{content}</main>
    </div>
  );
}
