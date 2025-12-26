import promptsData from "@/data/prompts.json";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  promptText: string;
  category?: string;
  createdAt: string;
  featured?: boolean; // For sponsored/featured prompts
  sponsorUrl?: string; // URL to open when featured card is clicked
  tags?: string[]; // Optional tags for additional categorization
  official?: boolean; // New: Created by the Lovable team
  popular?: boolean;  // New: High traffic prompts
}

export function getAllPrompts(): Prompt[] {
  return promptsData as Prompt[];
}

export function getPromptById(id: string): Prompt | undefined {
  return (promptsData as Prompt[]).find((prompt) => prompt.id === id);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return (promptsData as Prompt[]).filter((prompt) => prompt.category === category);
}


