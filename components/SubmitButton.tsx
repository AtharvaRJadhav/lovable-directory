"use client";

import { Plus } from "lucide-react";

export function SubmitButton() {
  const handleSubmit = () => {
    // Your verified GitHub details
    const GITHUB_USERNAME = "AtharvaRJadhav";
    const REPO_NAME = "lovable-directory";
    
    // The content
    const title = "New Prompt Submission";
    const body = `
### Prompt Title
(Enter the name of the prompt here)

### Description
(What does this prompt do?)

### The Prompt Code
\`\`\`
(Paste your prompt here)
\`\`\`

### Tags
(e.g. Dashboard, Landing Page, Auth)
`;

    const url = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleSubmit}
      className="group w-full flex items-center justify-center gap-2 bg-[#0A0A0A] border border-white/10 text-zinc-400 font-medium py-2.5 rounded-lg hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
    >
      <div className="p-0.5 rounded bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
        <Plus className="w-3.5 h-3.5" />
      </div>
      <span className="text-sm">Submit Prompt</span>
    </button>
  );
}
