'use client';

import { useState, Suspense } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [message, setMessage] = useState<string | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  
  // Get the redirect URL from query params, default to /directory
  const nextUrl = searchParams.get('next') || '/directory';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(nextUrl)}`,
          },
        });
        if (error) throw error;
        setMessage('Check your email to confirm your account!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push(nextUrl);
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>

        {/* Card */}
        <div className='bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-xl'>
          <h2 className='text-xl font-bold mb-6 text-center'>
            {mode === 'signin' ? 'Welcome back' : 'Create an account'}
          </h2>

          {/* Error Message */}
          {error && (
            <div className='mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm'>
              <AlertCircle className='w-4 h-4 flex-shrink-0' />
              {error}
            </div>
          )}

          {/* Success Message */}
          {message && (
            <div className='mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center'>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-xs font-medium text-zinc-400 mb-1.5'>Email</label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-zinc-600'
                placeholder='name@example.com'
              />
            </div>
            
            <div>
              <label className='block text-xs font-medium text-zinc-400 mb-1.5'>Password</label>
              <input
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white'
                placeholder='••••••••'
              />
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full py-2.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2'
            >
              {isLoading ? (
                <Loader2 className='w-4 h-4 animate-spin' />
              ) : (
                mode === 'signin' ? 'Sign In' : 'Sign Up'
              )}
            </button>
          </form>

          <div className='mt-6 pt-6 border-t border-white/5 text-center'>
            <button
              onClick={() => {
                setMode(mode === 'signin' ? 'signup' : 'signin');
                setError(null);
                setMessage(null);
              }}
              className='text-sm text-zinc-500 hover:text-white transition-colors'
            >
              {mode === 'signin' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className='min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <div className='flex justify-center mb-8'>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <div className='bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-xl'>
            <div className='flex items-center justify-center'>
              <Loader2 className='w-6 h-6 animate-spin text-white' />
            </div>
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
