"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import CopyButton from "@/components/CopyButton";
import { getPromptById, Prompt } from "@/lib/prompts";

export default function PromptDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const promptData = getPromptById(id);
    if (!promptData) {
      return;
    }
    setPrompt(promptData);
  }, [id]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 w-3/4 rounded bg-surface"></div>
            <div className="mt-4 h-4 w-full rounded bg-surface"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!prompt) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-surface p-8">
          <div className="mb-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  {prompt.title}
                </h1>
                {prompt.category && (
                  <span className="mt-2 inline-block rounded px-2 py-0.5 text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20">
                    {prompt.category}
                  </span>
                )}
              </div>
            </div>
            <p className="text-lg text-muted">{prompt.description}</p>
          </div>

          <div className="mb-6 border-t border-border pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-primary">
                Prompt Text
              </h2>
              <CopyButton text={prompt.promptText} />
            </div>
            <div className="rounded-md border border-border bg-background p-4">
              <pre className="whitespace-pre-wrap text-sm text-muted leading-relaxed">
                {prompt.promptText}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
