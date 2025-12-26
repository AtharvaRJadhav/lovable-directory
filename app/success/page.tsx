'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function SuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // 1. REVENUE LOGIC: Unlock the app
    localStorage.setItem('lovable_paid', 'true');
    localStorage.removeItem('unlocked_prompts'); // Clear free limit tracking

    // 2. Redirect Timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className='min-h-screen bg-[#030303] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] flex flex-col items-center justify-center text-center p-6'>
      <div className='mb-8 scale-150'><Logo /></div>
      <div className='w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20'>
        <Check className='w-10 h-10 text-green-500' />
      </div>
      <h1 className='text-3xl font-bold text-white mb-2'>You are in!</h1>
      <p className='text-zinc-400 mb-8'>Lifetime access unlocked. Redirecting in {countdown}s...</p>
    </div>
  );
}
