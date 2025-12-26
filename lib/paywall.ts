const STORAGE_KEY_HAS_PAID = "lovable_hasPaid";
const STORAGE_KEY_VIEWED_PROMPTS = "lovable_viewedPrompts";
const FREE_LIMIT = 3;

export function hasPaidAccess(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY_HAS_PAID) === "true";
}

export function setPaidAccess(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_HAS_PAID, "true");
  // Clear viewed prompts since they now have unlimited access
  localStorage.removeItem(STORAGE_KEY_VIEWED_PROMPTS);
}

export function getViewedPrompts(): string[] {
  if (typeof window === "undefined") return [];
  const viewed = localStorage.getItem(STORAGE_KEY_VIEWED_PROMPTS);
  if (!viewed) return [];
  try {
    return JSON.parse(viewed);
  } catch {
    return [];
  }
}

export function recordPromptView(promptId: string): void {
  if (typeof window === "undefined") return;
  if (hasPaidAccess()) return; // Don't track if they've paid
  
  const viewed = getViewedPrompts();
  if (!viewed.includes(promptId)) {
    viewed.push(promptId);
    localStorage.setItem(STORAGE_KEY_VIEWED_PROMPTS, JSON.stringify(viewed));
  }
}

export function canViewPrompt(promptId: string): boolean {
  if (typeof window === "undefined") return false;
  if (hasPaidAccess()) return true;
  
  const viewed = getViewedPrompts();
  // Can view if they haven't hit the limit OR if they've already viewed this specific prompt
  return viewed.length < FREE_LIMIT || viewed.includes(promptId);
}

export function getRemainingFreeViews(): number {
  if (typeof window === "undefined") return FREE_LIMIT;
  if (hasPaidAccess()) return -1; // -1 means unlimited
  
  const viewed = getViewedPrompts();
  return Math.max(0, FREE_LIMIT - viewed.length);
}

export function getFreeViewsCount(): number {
  if (typeof window === "undefined") return 0;
  if (hasPaidAccess()) return -1; // -1 means unlimited
  
  return getViewedPrompts().length;
}



