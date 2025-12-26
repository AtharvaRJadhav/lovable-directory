import { useEffect, useState } from "react";
import { usePromptAccess } from "@/lib/use-prompt-access";
import { PromptLockView } from "./PromptLockView"; // The component we made earlier
import { Button } from "@/components/ui/button";
import { Copy, Check, X } from "lucide-react";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: { id: string; title: string; code: string; }; // Needs ID now!
}

export function PromptModal({ isOpen, onClose, prompt }: PromptModalProps) {
  const { checkAccess, unlockPrompt, remainingCredits, isPremium } = usePromptAccess();
  const [isLocked, setIsLocked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && prompt) {
      // 1. Check if user CAN view this
      const canView = checkAccess(prompt.id);
      
      if (canView) {
        // 2. If yes, unlock it (spend the credit) and show code
        unlockPrompt(prompt.id);
        setIsLocked(false);
      } else {
        // 3. If no, show the lock screen
        setIsLocked(true);
      }
    }
  }, [isOpen, prompt]); // Re-run when a new prompt opens

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0A0A0A] border border-white/10 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-white/5 bg-[#0A0A0A]">
          <h2 className="text-lg font-medium text-white">{prompt.title}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-0 bg-[#050505] relative">
          
          {isLocked ? (
             // SCENARIO A: User is out of credits -> Show Lock UI
            <div className="p-8">
               <PromptLockView onUnlock={() => window.open("YOUR_LEMON_SQUEEZY_LINK", "_blank")} />
            </div>
          ) : (
            // SCENARIO B: User has credits (or Paid) -> Show Code
            <div className="relative">
               {/* Free User Counter Banner */}
               {!isPremium && (
                 <div className="sticky top-0 z-10 bg-blue-500/10 border-b border-blue-500/20 px-4 py-2 flex justify-between items-center">
                   <span className="text-xs text-blue-200 font-medium">
                     You have {remainingCredits} free unlocks remaining.
                   </span>
                 </div>
               )}
               
               <div className="p-6 relative">
                 <pre className="font-mono text-sm text-zinc-300 whitespace-pre-wrap relative">
                   {prompt.code}
                 </pre>
                 {/* Copy Button - Floating in top-right corner */}
                 <button
                   onClick={handleCopy}
                   className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 rounded-lg p-2 shadow-lg hover:shadow-xl z-10"
                   title={copied ? "Copied!" : "Copy code"}
                 >
                   {copied ? (
                     <Check className="w-4 h-4 text-green-400" />
                   ) : (
                     <Copy className="w-4 h-4" />
                   )}
                 </button>
               </div>
            </div>
          )}
        </div>

        {/* Footer (Only show Copy button if NOT locked) */}
        {!isLocked && (
          <div className="p-5 border-t border-white/5 bg-[#0A0A0A] flex justify-end">
            <Button 
              onClick={handleCopy}
              className="bg-white text-black hover:bg-zinc-200"
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied" : "Copy Code"}
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
