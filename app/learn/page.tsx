"use client";

import { VideoCard } from "@/components/VideoCard";
import { Logo } from "@/components/Logo"; // Ensure you import your existing Logo
import Link from "next/link";
import { Search } from "lucide-react";

// Mock Data from your screenshot reference
const VIDEOS = [
  {
    title: "Cursor UPDATE: Code Editor just got EVEN BETTER!",
    description: "In this video, we dive into the latest and most powerful update to Cursor, the agentic AI code editor! This update brings MCP servers and fusion models.",
    author: "WorldofAI",
    thumbnail: "https://img.youtube.com/vi/1_M8xT-0-l4/maxresdefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=1_M8xT-0-l4"
  },
  {
    title: "I spent 400+ hours in Cursor, here's what I learned",
    description: "I spent 400+ hours coding with AI. Here are the specific workflows and prompt strategies that actually work for complex apps.",
    author: "David Ondrej",
    thumbnail: "https://img.youtube.com/vi/V9xZ4w_rA1c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=V9xZ4w_rA1c"
  },
  {
    title: "Cursor AI for Beginners: A Complete Guide",
    description: "Are you new to Cursor AI and wondering how to get started? In this video you'll learn exactly how to use Cursor AI (No Experience Needed).",
    author: "Richardson Dackam",
    thumbnail: "https://img.youtube.com/vi/g-Eoxc8eK_Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=g-Eoxc8eK_Y"
  },
  {
    title: "Mastering .cursor/rules",
    description: "How to use Cursor's new repository rules feature to enforce coding standards across your entire team automatically.",
    author: "Sahil Lavingia",
    thumbnail: "https://img.youtube.com/vi/J_3_X_j_k_k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=J_3_X_j_k_k"
  },
  {
    title: "Cursor + Claude 3.5 Sonnet = 20x Faster",
    description: "Using Cursor + Claude 3.5 Sonnet + Tailwind to ship 20x faster. A live coding session building a real dashboard.",
    author: "Greg Isenberg",
    thumbnail: "https://img.youtube.com/vi/5g1z2z_k_k_k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5g1z2z_k_k_k"
  },
  {
    title: "Framework Motion + Cursor",
    description: "Learn how to build complex animations using simple natural language prompts in Cursor.",
    author: "Fireship",
    thumbnail: "https://img.youtube.com/vi/8g1z2z_k_k_k/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8g1z2z_k_k_k"
  }
];

export default function LearnPage() {
  return (
    <div className="flex min-h-screen bg-[#030303] text-white">
      
      {/* 1. LEFT SIDEBAR (Static for this page to match main layout) */}
      <aside className="w-64 hidden md:flex flex-col h-screen sticky top-0 border-r border-white/5 p-4 bg-[#030303]">
        <div className="mb-8 px-2">
          <Logo />
        </div>

        <div className="space-y-1">
          <Link href="/directory" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors">
            Directory
          </Link>
          <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white/10 text-white rounded-md">
            Tutorials
          </div>
          <Link href="/advertise" className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors">
            Advertise
          </Link>
        </div>

        <div className="mt-auto px-2">
           {/* You can add your Submit Button here if you want */}
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 min-w-0">
        
        {/* Top Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#030303]/50 backdrop-blur-xl sticky top-0 z-10">
           <h1 className="font-semibold text-sm tracking-wide text-zinc-200">
             Learn / Tutorials
           </h1>
           {/* Mock Nav Links */}
           <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-500">
             <span className="text-white">Trending</span>
             <span className="hover:text-zinc-300 cursor-pointer">Jobs</span>
             <span className="hover:text-zinc-300 cursor-pointer">MCPs</span>
           </div>
        </header>

        {/* The Grid Content */}
        <div className="p-6 md:p-8 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Master Lovable & Cursor</h2>
            <p className="text-zinc-400 text-sm">Best practices, workflows, and tips from the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video, i) => (
              <VideoCard key={i} {...video} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
