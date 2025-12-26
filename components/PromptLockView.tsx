import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromptLockViewProps {
  onUnlock: () => void;
  price?: string;
}

export function PromptLockView({ onUnlock, price = "$19" }: PromptLockViewProps) {
  return (
    <div className="space-y-4 animate-in fade-in zoom-in duration-300">
      
      {/* 1. The Black "Locked" Box */}
      <div className="relative h-64 w-full bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        {/* Subtle grid pattern in background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
            <Lock className="w-5 h-5 text-zinc-400" />
          </div>
          <h3 className="text-white font-medium text-lg">Unlock to view this prompt</h3>
          <p className="text-zinc-500 text-sm">You've reached your free limit</p>
        </div>
      </div>

      {/* 2. The Blue "Unlock" Call-to-Action (Matches image_1982e6.png) */}
      <div className="bg-[#0A0A0A] border border-blue-900/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-900/5">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">i</span>
            <h4 className="text-blue-100 font-medium">Unlock All Prompts</h4>
          </div>
          <p className="text-sm text-zinc-400">
            Get unlimited access to all templates for just <span className="text-white font-medium">{price}</span> (lifetime access).
          </p>
        </div>

        <Button 
          onClick={onUnlock}
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap w-full md:w-auto"
        >
          Unlock Now →
        </Button>
      </div>

    </div>
  );
}


