// src/components/formOpenAi.tsx

import { NextRequest, NextResponse } from "next/server";
import { fetchOpenAIResponse } from "../../../../services/serviceOpenAi"; // Service using server-side logic
import { PROMPT_COMPARE } from "@/prompts";
import { StringDetail } from "@/models/strings/StringDetail";

export async function GET() {
  const res = new Response();
  return Response.json({
    message: "Hello to Compare strings, submit compare payload",
  });
}

export async function POST(req: NextRequest) {
  try {
    const protocol = req.headers.get("x-forwarded-proto") || "http"; // or 'https'
    const host = req.headers.get("host");
    const fullUrl = `${protocol}://${host}${req.url}`;
    console.log(`Full Request URL: ${fullUrl}`);

    let requestData: any = await req.json();
    if (!requestData) {
      return new Response(`No request data`, {
        status: 400,
      });
    }

    let { referenceString, stringToCompare } = requestData;
    if (!referenceString || !stringToCompare) {
      return new Response(
        `Invalid request Body missing referenceString or stringToCompareq`,
        {
          status: 400,
        }
      );
    }

    console.log(`Comparison: ${referenceString} vs ${stringToCompare}`);

    let prompt = PROMPT_COMPARE.replace("#1", referenceString).replace(
      "#2",
      stringToCompare
    );
    console.log(`Prompt for Request: ${JSON.stringify({ prompt })}`);

    const result = await fetchOpenAIResponse(prompt.replace(/[\r\n\\']/g, "")); // Securely call API
    console.log(`OpenAI Response: ${result}`);

    if (!result) {
      return new Response(`Error fetching OpenAI response: ${result}`, {
        status: 400,
      });
    } else {
      let comparisonResult = JSON.parse(result);
      if (comparisonResult.strings) {
        let normalizedObject: StringDetail[] = [];
        comparisonResult.strings.forEach((stringDetail: StringDetail) => {
          normalizedObject.push(stringDetail);
        });  
        return NextResponse.json(normalizedObject);
      }
      return NextResponse.json(comparisonResult);
    }
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return new Response(`Error fetching OpenAI response: ${error}`, {
      status: 400,
    });
  }
}
