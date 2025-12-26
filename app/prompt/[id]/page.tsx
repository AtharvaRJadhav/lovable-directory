"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import CopyButton from "@/components/CopyButton";
import PaywallModal from "@/components/PaywallModal";
import { getPromptById, Prompt } from "@/lib/prompts";
import {
  canViewPrompt,
  recordPromptView,
  hasPaidAccess,
} from "@/lib/paywall";

export default function PromptDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const promptData = getPromptById(id);
    if (!promptData) {
      return;
    }
    setPrompt(promptData);

    // Check if user can view this prompt
    if (!canViewPrompt(id)) {
      setShowPaywall(true);
    } else {
      // Record the view if they can access it
      recordPromptView(id);
    }
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

  const canView = canViewPrompt(id);

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
              {canView && <CopyButton text={prompt.promptText} />}
            </div>
            {canView ? (
              <div className="rounded-md border border-border bg-background p-4">
                <pre className="whitespace-pre-wrap text-sm text-muted leading-relaxed">
                  {prompt.promptText}
                </pre>
              </div>
            ) : (
              <div className="rounded-md border border-border bg-background p-4">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <p className="mt-4 text-sm font-medium text-primary">
                      Unlock to view this prompt
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      You&apos;ve reached your free limit
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!canView && (
            <div className="rounded-md border border-blue-400/20 bg-blue-400/5 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-medium text-blue-400">
                    Unlock All Prompts
                  </h3>
                  <div className="mt-2 text-sm text-blue-300">
                    <p>
                      Get unlimited access to all prompts for just $19
                      (lifetime access).
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/checkout"
                      className="text-sm font-medium text-blue-400 underline hover:text-blue-300 transition-colors"
                    >
                      Unlock now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
      />
    </div>
  );
}
