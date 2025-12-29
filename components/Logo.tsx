import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* 1. The Heart Icon */}
      <div className="relative h-8 w-8"> 
        <Image 
          src="/logo-icon.png" 
          alt="Lovable" 
          fill 
          className="object-contain"
          priority
        />
      </div>

      {/* 2. The Text (Code-styled for perfect alignment) */}
      <div className="flex items-baseline tracking-tight">
        <span className="text-white font-bold text-xl">Lovable</span>
        <span className="text-zinc-500 font-medium text-xl">.directory</span>
      </div>
    </div>
  );
}
