// hooks/use-prompt-access.ts
import { useState, useEffect } from 'react';

export function usePromptAccess() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [isPremium, setIsPremium] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const FREE_LIMIT = 3;

  useEffect(() => {
    setHasMounted(true);
    // 1. Check Premium Status
    const paid = localStorage.getItem('lovable_paid') === 'true';
    setIsPremium(paid);

    // 2. Load the list of IDs user has already "spent" credits on
    const stored = localStorage.getItem('unlocked_prompts');
    const ids = stored ? JSON.parse(stored) : [];
    setUnlockedIds(ids);
  }, []);

  // CORE LOGIC: Check if a specific prompt is accessible
  const checkAccess = (promptId: string) => {
    if (!hasMounted) return true; // Prevent flash during hydration
    if (isPremium) return true;   // Paid users see everything
    if (unlockedIds.includes(promptId)) return true; // Already unlocked this specific one
    return unlockedIds.length < FREE_LIMIT; // Has free slots left?
  };

  // ACTION: "Spend" a free credit on this prompt
  const unlockPrompt = (promptId: string) => {
    if (isPremium) return;
    if (unlockedIds.includes(promptId)) return; // Already unlocked, don't double count

    if (unlockedIds.length < FREE_LIMIT) {
      const newIds = [...unlockedIds, promptId];
      setUnlockedIds(newIds);
      localStorage.setItem('unlocked_prompts', JSON.stringify(newIds));
    }
  };

  const remainingCredits = Math.max(0, FREE_LIMIT - unlockedIds.length);

  return { 
    checkAccess, 
    unlockPrompt, 
    remainingCredits, 
    isPremium,
    totalUnlocked: unlockedIds.length 
  };
}


