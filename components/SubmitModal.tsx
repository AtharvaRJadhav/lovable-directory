"use client";

import { X } from "lucide-react";

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitModal({ isOpen, onClose }: SubmitModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose} // Close when clicking backdrop
    >
      <div 
        className="relative w-full max-w-2xl h-[80vh] bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0A0A0A] border-b border-white/10 flex items-center justify-between px-4 z-10">
          <span className="text-sm font-medium text-white">Submit a Prompt</span>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The "Native" Form Embed */}
        <div className="w-full h-full pt-12 bg-[#0A0A0A]">
           {/* Replace this SRC with your actual Google Form Embed Link later */}
           <iframe 
             src="https://docs.google.com/forms/d/e/1FAIpQLSdc.../viewform?embedded=true" 
             className="w-full h-full border-none"
             title="Submit Prompt"
           >
             Loading...
           </iframe>
        </div>

      </div>
    </div>
  );
}

