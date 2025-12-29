import { cn } from "@/lib/utils";

interface CodeCardProps {
  title: string;
  codeSnippet: string;
  language: string;
  onClick?: () => void;
  featured?: boolean; // New prop
  sponsorUrl?: string; // Where it clicks to
}

export function CodeCard({ title, codeSnippet, language, onClick, featured, sponsorUrl }: CodeCardProps) {
  
  // A. THE SPONSORED CARD (Fixed Design)
  if (featured) {
    return (
      <div 
        onClick={() => window.open(sponsorUrl, "_blank")}
        className="group relative flex flex-col h-full cursor-pointer"
      >
        {/* 1. Subtle Gold Tint Background (instead of heavy glow) */}
        <div className="absolute inset-0 bg-yellow-500/5 rounded-xl border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors" />
        
        {/* 2. Content Container (Matches normal card EXACTLY) */}
        <div className="relative flex flex-col h-full overflow-hidden rounded-xl">
          
          {/* Header: Same height/padding as normal card */}
          <div className="px-5 py-4 border-b border-yellow-500/10 bg-yellow-500/[0.02] flex justify-between items-center gap-3">
            <h3 className="font-medium text-sm text-yellow-50 tracking-tight group-hover:text-white transition-colors flex-1 min-w-0">
              {title}
            </h3>
            
            {/* The Badge: Kept small and aligned with flex-shrink-0 to prevent overlap */}
            <span className="text-[10px] uppercase tracking-wider text-yellow-500 font-bold bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20 flex-shrink-0">
              Promoted
            </span>
          </div>

          {/* Body: Left aligned text, same font size as others */}
          <div className="p-5 flex-1 relative">
            <p className="font-sans text-[13px] leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-4">
              {codeSnippet}
            </p>
            
            {/* Bottom Fade (Gold tinted) */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-yellow-900/10 to-transparent" />
          </div>

          {/* Footer: Subtle Call to Action */}
          <div className="px-5 py-3 border-t border-yellow-500/10 bg-yellow-500/[0.02] flex items-center justify-between">
            <span className="text-xs text-yellow-600/80">Sponsored</span>
            <span className="text-xs font-medium text-yellow-500 flex items-center gap-1 group-hover:gap-2 transition-all">
              Try it Free →
            </span>
          </div>
        </div>
      </div>
    );
  }

  // B. NORMAL CARD (Keep this as is)
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col h-full cursor-pointer"
    >
      {/* 1. Outer Glow (appears on hover) */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
      
      {/* 2. The Card Container */}
      <div className="relative flex flex-col h-full bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
        
        {/* Top Highlight (The "Glass Edge") */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />

        {/* Header */}
        <div className="px-5 py-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
          <h3 className="font-medium text-sm text-zinc-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10">
            {language}
          </span>
        </div>

        {/* Code Preview Area */}
        <div className="p-5 flex-1 bg-[#050505] relative">
          <pre className="font-mono text-[13px] leading-relaxed text-zinc-500 opacity-70 group-hover:opacity-100 transition-opacity line-clamp-4">
            {codeSnippet}
          </pre>
          
          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
      </div>
    </div>
  );
}
