import { PROMPTS, Prompt as PromptData } from "@/data/prompts";

// Extended interface for backward compatibility and additional features
export interface Prompt {
  id: string;
  title: string;
  description: string;
  promptText: string; // Maps from 'code' in the data
  code?: string; // Also available as 'code'
  category?: string;
  tags?: string[];
  createdAt?: string;
  featured?: boolean; // For sponsored/featured prompts
  sponsorUrl?: string; // URL to open when featured card is clicked
  official?: boolean; // Created by the Lovable team
  popular?: boolean;  // High traffic prompts
}

// Convert the new structure to the old one for compatibility
function mapPrompt(prompt: PromptData): Prompt {
  return {
    id: prompt.id,
    title: prompt.title,
    description: prompt.description,
    promptText: prompt.code, // Map 'code' to 'promptText'
    code: prompt.code, // Also keep as 'code'
    category: prompt.category,
    tags: prompt.tags,
    createdAt: new Date().toISOString(), // Add default createdAt
  };
}

export function getAllPrompts(): Prompt[] {
  return PROMPTS.map(mapPrompt);
}

export function getPromptById(id: string): Prompt | undefined {
  const prompt = PROMPTS.find((p) => p.id === id);
  return prompt ? mapPrompt(prompt) : undefined;
}

export function getPromptsByCategory(category: string): Prompt[] {
  return PROMPTS.filter((p) => p.category === category).map(mapPrompt);
}
