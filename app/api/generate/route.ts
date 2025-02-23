import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { prompt, model, systemPrompt, temperature, topK } = body;

  const content = "Test response" + " " + prompt;
  const metadata = `System Prompt: ${systemPrompt}\nModel: ${model}\nTemperature: ${temperature}\nTop K: ${topK}`;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({ content: content, metadata: metadata });
}
