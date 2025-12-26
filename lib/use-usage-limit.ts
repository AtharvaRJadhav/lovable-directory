import { useState, useEffect } from 'react';

export function useUsageLimit() {
  const [count, setCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const FREE_LIMIT = 3;

  useEffect(() => {
    setHasMounted(true);
    // 1. Check if user paid (we will set this later in Stripe step)
    const paidStatus = localStorage.getItem('lovable_paid');
    setIsPremium(paidStatus === 'true');

    // 2. Load view count
    const storedCount = localStorage.getItem('prompt_view_count');
    setCount(storedCount ? parseInt(storedCount, 10) : 0);
  }, []);

  const incrementCount = () => {
    if (isPremium) return; // Don't count for paid users
    
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('prompt_view_count', newCount.toString());
  };

  // The content is locked if: Not Premium AND Count >= Limit
  const isLocked = !isPremium && count >= FREE_LIMIT;
  const remaining = Math.max(0, FREE_LIMIT - count);

  return { isLocked, remaining, isPremium, incrementCount, hasMounted };
}



