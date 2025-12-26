"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SubmitModal } from "./SubmitModal"; // Keep your existing modal import

export function SubmitButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-zinc-400 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 shadow-sm"
      >
        <span>Submit</span>
        <Plus className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
      </button>

      <SubmitModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
