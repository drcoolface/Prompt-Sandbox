"use server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, model, systemPrompt, temperature, topK } = body;

    if (!model) {
      return NextResponse.json(
        { error: "Model must be specified" },
        { status: 400 }
      );
    }

    const content = "Test response" + " " + prompt;
    const metadata = `System Prompt: ${systemPrompt}\nModel: ${model}\nTemperature: ${temperature}\nTop K: ${topK}`;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate error
    if (Math.random() > 0.5) {
      return NextResponse.json(
        { error: "Simulated Error response" },
        { status: 500 }
      );
    }
    return NextResponse.json({ content, metadata });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to generate response ${error}` },
      { status: 500 }
    );
  }
}
