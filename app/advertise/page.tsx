"use client";

import { Logo } from "@/components/Logo"; // <--- Importing your real Logo

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#030303] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] text-white selection:bg-blue-500/30">
      
      {/* Nav: Now using the real Logo component */}
      <nav className="border-b border-white/5 h-14 flex items-center justify-between px-6 bg-[#030303]/50 backdrop-blur-md sticky top-0 z-50">
        <Logo />
        <a href="/directory" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors border border-white/5 px-3 py-1.5 rounded-full hover:bg-white/5">
          ← Back to Directory
        </a>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-24">
        
        {/* Hero Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Partners
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
            Reach the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">builders</span> defining <br />
            the next generation.
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Get your tool in front of high-intent developers who are actively looking for databases, auth, and APIs right now.
          </p>
        </div>

        {/* Stats Grid: CHANGED to Value Props (No fake numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
          {[
            { label: "Audience Type", value: "AI Builders" },
            { label: "User Intent", value: "High Intent" },
            { label: "Demographic", value: "100% Devs" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Tier 1: Featured (Gold Glow) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full bg-[#0A0A0A] border border-yellow-500/30 rounded-2xl p-8 flex flex-col hover:bg-[#0F0F0F] transition-colors">
              <div className="inline-flex self-start px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
                Most Popular
              </div>
              
              <h3 className="text-xl font-medium text-white mb-2">Featured Listing</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-zinc-500">/month</span>
              </div>
              
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Get the top spot in the grid. Perfect for tools that want immediate visibility and clicks.
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {["Top position in the grid", "Gold 'Promoted' border", "Direct do-follow link", "Performance analytics"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open('mailto:your@email.com')} 
                className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
              >
                Book Slot
              </button>
            </div>
          </div>

          {/* Tier 2: Sidebar (Blue Glow) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/[0.07] transition-colors backdrop-blur-sm">
               <div className="inline-flex self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-6">
                Brand Awareness
              </div>

              <h3 className="text-xl font-medium text-white mb-2">Sidebar Sponsor</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-zinc-500">/month</span>
              </div>
              
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Permanent visibility on every page view. High-impact placement for established brands.
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {["Fixed image in sidebar", "Visible on 100% of views", "Exclusive slot (1 only)", "Monthly report"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open('mailto:your@email.com')} 
                className="w-full bg-white/10 text-white font-medium py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/10"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
