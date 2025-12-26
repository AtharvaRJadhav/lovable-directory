"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Play, Megaphone } from "lucide-react";
import { CodeCard } from "@/components/CodeCard";
import { Logo } from "@/components/Logo";
import { SubmitButton } from "@/components/SubmitButton";
import { usePrompts } from "@/lib/use-prompts";
import {
  getFreeViewsCount,
  getRemainingFreeViews,
  hasPaidAccess,
} from "@/lib/paywall";

export default function DirectoryPage() {
  const { 
    prompts: filteredPrompts, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    categories, 
    categoryCounts,
    filterTab,
    setFilterTab
  } = usePrompts();

  const [paidAccess, setPaidAccess] = useState(false);
  const [freeViews, setFreeViews] = useState(0);
  const [remaining, setRemaining] = useState(3);

  useEffect(() => {
    const updateStatus = () => {
      setPaidAccess(hasPaidAccess());
      setFreeViews(getFreeViewsCount());
      setRemaining(getRemainingFreeViews());
    };

    updateStatus();
    window.addEventListener("focus", updateStatus);
    return () => window.removeEventListener("focus", updateStatus);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-white/20">
      
      {/* Top Navigation */}
      <header className="flex items-center justify-between h-14 px-6 border-b border-white/5 bg-[#030303]/50 backdrop-blur-xl sticky top-0 z-20">
        
        {/* Logo is now here */}
        <div className="flex items-center">
          <Logo />
        </div>

        <a 
          href="https://x.com/ThinkAtharva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-medium text-zinc-500 hover:text-white transition-colors"
        >
          Follow for updates
        </a>

      </header>

      <div className="max-w-[1600px] mx-auto flex">
        
        {/* Sidebar */}
        <aside className="w-64 hidden md:flex flex-col sticky top-14 border-r border-white/5 bg-[#030303] h-[calc(100vh-3.5rem)]">
          
          {/* Main Menu (Tutorials & Advertise) - Added mt-6 for spacing */}
          <div className="px-3 space-y-1 mt-6 mb-6">
            <Link 
              href="/learn" 
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
            >
              <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40">
                <Play className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span>Tutorials</span>
            </Link>

            <Link 
              href="/advertise" 
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
            >
              <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40">
                <Megaphone className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <span>Advertise</span>
            </Link>
          </div>

          {/* 3. Divider */}
          <div className="px-4 mb-4">
            <div className="h-px bg-white/5" />
          </div>

          {/* Technologies Header */}
          <div className="px-6 mb-3 flex items-center justify-between">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Technologies
            </h3>
            <span className="text-[10px] text-zinc-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
              {Object.keys(categoryCounts).length}
            </span>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto px-3 space-y-0.5 min-h-0 custom-scrollbar pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200 group ${
                  selectedCategory === cat
                    ? "bg-white/10 text-white font-medium shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-xs ${
                  selectedCategory === cat 
                    ? "text-zinc-400" 
                    : "text-zinc-700 group-hover:text-zinc-500"
                }`}>
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Footer: Submit Button */}
          <div className="p-4 border-t border-white/5 bg-[#030303]">
            <SubmitButton />
          </div>

        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="flex-1 p-6 md:p-10">
          
          {/* Header & Search */}
          <div className="max-w-5xl mx-auto mb-12">
            <h1 className="text-4xl font-semibold tracking-tighter mb-4">
              Explore Rules
            </h1>
            <p className="text-zinc-400 mb-8">
              Discover the best prompts and templates for your workflow.
            </p>
            
            {/* The "Glow" Search Bar */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <input 
                type="text" 
                placeholder="Search for a rule or MCP server..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative w-full bg-[#0A0A0A] border border-white/10 text-white px-5 py-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* TABS: All | Popular | Official */}
          <div className="max-w-5xl mx-auto flex items-center gap-2 mb-8">
            {['all', 'popular', 'official'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterTab(tab as 'all' | 'popular' | 'official')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  filterTab === tab
                    ? "bg-zinc-100 text-black border-zinc-100" // Active: White pill
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300" // Inactive: Outline
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* THE MASONRY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt) => {
                // Featured cards have their own onClick, so don't wrap in Link
                if (prompt.featured) {
                  return (
                    <CodeCard 
                      key={prompt.id}
                      title={prompt.title}
                      language={prompt.category || "General"}
                      codeSnippet={prompt.promptText}
                      featured={true}
                      sponsorUrl={prompt.sponsorUrl}
                    />
                  );
                }
                // Normal cards are wrapped in Link
                return (
                  <Link key={prompt.id} href={`/prompt/${prompt.id}`}>
                    <CodeCard 
                      title={prompt.title}
                      language={prompt.category || "General"}
                      codeSnippet={prompt.promptText.substring(0, 200) + (prompt.promptText.length > 200 ? "..." : "")}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-zinc-400">No prompts found.</p>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
