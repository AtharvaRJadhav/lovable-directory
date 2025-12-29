'use client';

import { Play } from 'lucide-react';

interface Video {
  title: string;
  description: string;
  author: string;
  thumbnail: string;
  videoUrl: string;
}

const VIDEOS: Video[] = [
  {
    title: "Master Lovable AI in 30 Minutes",
    description: "A complete beginner's guide to building your first app, setting up auth, and database integration.",
    author: "Tim Gabe",
    thumbnail: "https://img.youtube.com/vi/CfwNxDEXe6I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=CfwNxDEXe6I"
  },
  {
    title: "Build a SaaS with Lovable, Supabase & Stripe",
    description: "The holy grail of SaaS: Authentication, Database, and Payments in one tutorial.",
    author: "Lovable Official",
    thumbnail: "https://img.youtube.com/vi/9z54zkmK-to/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=9z54zkmK-to"
  },
  {
    title: "Idea to App in Minutes (AI SaaS)",
    description: "Watch a real-time build of an AI-powered SaaS application using Lovable's chat interface.",
    author: "Brock Pierson",
    thumbnail: "https://img.youtube.com/vi/-NxObRv7md0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-NxObRv7md0"
  },
  {
    title: "This AI Builds Websites From Your Ideas",
    description: "See how to prompt Lovable to build stunning, responsive landing pages and websites.",
    author: "Ferdy Korpershoek",
    thumbnail: "https://img.youtube.com/vi/aSxEp9w6zTg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=aSxEp9w6zTg"
  },
  {
    title: "The Ultimate Lovable Tutorial",
    description: "A fast-paced 17-minute overview covering PRDs, Supabase, and GitHub syncing.",
    author: "No Code MBA",
    thumbnail: "https://img.youtube.com/vi/kRglPHNJTFU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kRglPHNJTFU"
  },
  {
    title: "Everything Starts with Lovable & Supabase",
    description: "Deep dive into the 'Vibe Coding' workflow and setting up robust backends.",
    author: "Tyler Potts",
    thumbnail: "https://img.youtube.com/vi/WSsmsyynphM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WSsmsyynphM"
  },
  {
    title: "Lovable Tutorial 2025: Build Business Apps",
    description: "A fresh look at building internal business tools and CRUD apps using AI.",
    author: "Stewart Gauld",
    thumbnail: "https://img.youtube.com/vi/-lPee4zMQlk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-lPee4zMQlk"
  },
  {
    title: "How to Master Lovable.dev",
    description: "Step-by-step guide on troubleshooting, debugging, and refining your AI-generated app.",
    author: "Corbin Brown",
    thumbnail: "https://img.youtube.com/vi/cwdPcbWwb2s/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=cwdPcbWwb2s"
  },
  {
    title: "Vibe Coding Full Course",
    description: "From Figma design to full-stack Lovable app in one hour. A comprehensive guide.",
    author: "Saptarshi Prakash",
    thumbnail: "https://img.youtube.com/vi/aL4Wq-r8y_k/maxresdefault.jpg",
    videoUrl: "https://lovable.dev/video/vibe-coding-full-course-for-beginners-in-1-hour-figma-lovable-tutorial"
  }
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Tutorials</h1>
          <p className="text-zinc-400">Master the art of &apos;Vibe Coding&apos; with these curated tutorials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, index) => (
            <a 
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-3">
                  {video.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="font-medium text-zinc-300">{video.author}</span>
                  <span>•</span>
                  <span>YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
