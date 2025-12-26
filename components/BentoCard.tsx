import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function BentoCard({ title, description, icon, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        // Base styles: Transparent bg, specific border color
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-transparent border border-white/10",
        // Hover effects: Border gets lighter, very subtle bg glow
        "hover:border-white/20 hover:bg-white/5 transition-all duration-300",
        className
      )}
    >
      <div className="p-6">
        {/* Icon: Muted by default, lights up on hover */}
        <div className="mb-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {icon}
        </div>
        
        {/* Typography: Tight tracking, left aligned */}
        <h3 className="text-lg font-medium tracking-tight text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}



