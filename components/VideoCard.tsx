import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  authorAvatar?: string; // Optional URL for avatar image
  videoUrl: string;
}

export function VideoCard({ title, description, thumbnail, author, authorAvatar, videoUrl }: VideoCardProps) {
  return (
    <a 
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full"
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        
        {/* The Red Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-medium text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-zinc-400 line-clamp-3 mb-6 flex-1">
          {description}
        </p>

        {/* Footer: Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
          {/* Avatar Circle */}
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 border border-white/5">
            {authorAvatar ? (
               <img src={authorAvatar} className="w-full h-full rounded-full" alt="" />
            ) : (
              author[0]
            )}
          </div>
          <span className="text-xs font-medium text-zinc-500">{author}</span>
        </div>
      </div>
    </a>
  );
}
