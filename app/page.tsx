import Link from "next/link";
import Image from "next/image";
import { BentoCard } from "@/components/BentoCard";
import { HeroGlow } from "@/components/HeroGlow";
import { Logo } from "@/components/Logo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020202] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] text-white font-sans selection:bg-white/20">
      
      {/* Top Navigation */}
      <header className="flex items-center justify-between h-14 px-6 border-b border-white/5 bg-[#030303]/50 backdrop-blur-xl sticky top-0 z-20">
        
        {/* Logo Area */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* FIXED: Links to @ThinkAtharva */}
        <a 
          href="https://x.com/ThinkAtharva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-medium text-zinc-500 hover:text-white transition-colors"
        >
          Follow for updates
        </a>

      </header>

      <div className="relative flex flex-col items-center justify-center p-8 min-h-[calc(100vh-3.5rem)]">
        <HeroGlow />
        
        <div className="relative z-10">
        {/* 1. Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
        {/* Powered by badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
          <Image src="/logo-icon.png" alt="Lovable" width={16} height={16} />
          <span className="text-sm text-zinc-400">The unofficial directory for Lovable.dev</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white">
          Ready to use <span className="text-zinc-500">prompts.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Ship faster with proven templates. Skip the trial and error.
        </p>
        
        {/* THE BUTTONS: No Blue! */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/directory"
            className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            Browse Directory
          </Link>
          <Link
            href="/directory"
            className="bg-transparent border border-white/10 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/5 transition-colors"
          >
            View Free Prompts
          </Link>
        </div>
        </div>

        {/* 2. The Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
          <BentoCard 
            title="Ship Faster"
            description="Skip the experimentation phase. Use battle-tested prompts that work out of the box."
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
          <BentoCard 
            title="Proven Templates"
            description="Every prompt has been tested and refined for real-world production use cases."
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <BentoCard 
            title="One-Time Payment"
            description="$19 for lifetime access. No subscriptions, no recurring fees, just value."
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
