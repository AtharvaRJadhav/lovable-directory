"use client";

import { Plus } from "lucide-react";

export function SubmitButton() {
  const handleSubmit = () => {
    // 1. Your Specific Repo Details (I added them here)
    const GITHUB_USERNAME = "AtharvaRJadhav";
    const REPO_NAME = "lovable-directory";
    
    // 2. The Form Content (This pre-fills the issue for the user)
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

    // 3. Generate the Magic Link
    const url = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    
    // 4. Open GitHub in a new tab
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-2.5 rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
    >
      <Plus className="w-4 h-4" />
      Submit Prompt
    </button>
  );
}
