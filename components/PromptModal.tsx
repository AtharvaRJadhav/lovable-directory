'use client';

import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Prompt } from '@/data/prompts';

interface PromptModalProps {
  prompt: Prompt | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PromptModal({ prompt, isOpen, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !prompt) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6'>
      {/* Backdrop */}
      <div 
        className='absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity' 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className='relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-xl bg-[#09090b] border border-white/10 shadow-2xl flex flex-col'>
        
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-white/5 bg-[#09090b]'>
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <span className='px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20'>
                {prompt.category}
              </span>
            </div>
            <h2 className='text-xl font-bold text-white'>{prompt.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className='p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          <div className='prose prose-invert max-w-none'>
            <p className='text-zinc-400 mb-6 text-sm leading-relaxed'>
              {prompt.description}
            </p>

            <div className='relative group'>
              <div className='absolute right-4 top-4 z-10'>
                <button
                  onClick={handleCopy}
                  className='flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors backdrop-blur-md border border-white/10'
                >
                  {copied ? (
                    <>
                      <Check className='w-3.5 h-3.5 text-green-400' />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className='w-3.5 h-3.5' />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className='bg-[#030303] rounded-lg border border-white/5 p-6 font-mono text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap selection:bg-blue-500/30'>
                {prompt.code}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='p-6 border-t border-white/5 bg-[#09090b]'>
          <button
            onClick={handleCopy}
            className='w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2'
          >
            {copied ? <Check className='w-4 h-4' /> : <Copy className='w-4 h-4' />}
            {copied ? 'Copied to Clipboard' : 'Copy Prompt'}
          </button>
        </div>
      </div>
    </div>
  );
}
