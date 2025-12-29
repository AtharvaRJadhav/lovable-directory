import Link from "next/link";
import { Prompt } from "@/lib/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-border/80">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-primary leading-snug">{prompt.title}</h3>
        {prompt.category && (
          <span className="flex-shrink-0 rounded px-2 py-0.5 text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20">
            {prompt.category}
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-muted line-clamp-2 leading-relaxed">
        {prompt.description}
      </p>
      <Link
        href={`/prompt/${prompt.id}`}
        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Prompt
        <svg
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}

