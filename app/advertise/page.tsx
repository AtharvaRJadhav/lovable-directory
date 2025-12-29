'use client';

import { Check, Mail, TrendingUp, Users, MousePointerClick, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdvertisePage() {
  return (
    <div className='min-h-screen bg-[#030303] text-white pt-10 pb-20'>
      <div className='max-w-4xl mx-auto px-6'>
        
        {/* Back Button */}
        <Link href='/' className='inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-10 transition-colors'>
          <ArrowLeft className='w-4 h-4' />
          Back to Directory
        </Link>

        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            Reach 10,000+ AI Builders
          </h1>
          <p className='text-xl text-zinc-400 max-w-2xl mx-auto'>
            Get your tool in front of the most active developers building with Lovable, Cursor, and v0.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
          <div className='bg-zinc-900/50 border border-white/5 p-6 rounded-xl text-center'>
            <div className='w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Users className='w-5 h-5' />
            </div>
            <div className='text-3xl font-bold mb-1'>10k+</div>
            <div className='text-sm text-zinc-500'>Monthly Visitors</div>
          </div>
          <div className='bg-zinc-900/50 border border-white/5 p-6 rounded-xl text-center'>
            <div className='w-10 h-10 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <MousePointerClick className='w-5 h-5' />
            </div>
            <div className='text-3xl font-bold mb-1'>2.5%</div>
            <div className='text-sm text-zinc-500'>Click Through Rate</div>
          </div>
          <div className='bg-zinc-900/50 border border-white/5 p-6 rounded-xl text-center'>
            <div className='w-10 h-10 bg-green-500/10 text-green-400 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <TrendingUp className='w-5 h-5' />
            </div>
            <div className='text-3xl font-bold mb-1'>High Intent</div>
            <div className='text-sm text-zinc-500'>Active Developers</div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
          
          {/* Slot 1: The Featured Card */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all relative overflow-hidden group'>
            <div className='absolute top-0 right-0 bg-zinc-800 text-xs px-3 py-1 rounded-bl-lg text-zinc-400'>Available</div>
            <h3 className='text-2xl font-bold mb-2'>Featured Slot</h3>
            <div className='text-4xl font-bold mb-6'>$199<span className='text-lg text-zinc-500 font-normal'>/week</span></div>
            
            <ul className='space-y-4 mb-8 text-zinc-400 text-sm'>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-blue-400' />
                <span>Top placement on homepage</span>
              </li>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-blue-400' />
                <span>Highlighted &quot;Promoted&quot; border</span>
              </li>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-blue-400' />
                <span>Direct link to your site</span>
              </li>
            </ul>

            <a 
              href='https://lovable-directory0.lemonsqueezy.com/checkout/buy/2aa67abb-7c0c-441e-a801-b527d4ec8d5d' 
              target='_blank' 
              rel='noopener noreferrer'
              className='block w-full py-3 bg-white text-black text-center font-bold rounded-lg hover:bg-zinc-200 transition-colors'
            >
              Book This Slot
            </a>
          </div>

          {/* Slot 2: Partnership */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all'>
            <h3 className='text-2xl font-bold mb-2'>Partnership</h3>
            <div className='text-4xl font-bold mb-6'>Custom<span className='text-lg text-zinc-500 font-normal'>/pricing</span></div>
            
            <ul className='space-y-4 mb-8 text-zinc-400 text-sm'>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-purple-400' />
                <span>Permanent sidebar link</span>
              </li>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-purple-400' />
                <span>Dedicated video tutorial</span>
              </li>
              <li className='flex items-center gap-3'>
                <Check className='w-4 h-4 text-purple-400' />
                <span>Social media shoutout</span>
              </li>
            </ul>

            <a href='mailto:support@lovable.directory' 
               className='block w-full py-3 bg-zinc-800 text-white text-center font-bold rounded-lg hover:bg-zinc-700 transition-colors'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
