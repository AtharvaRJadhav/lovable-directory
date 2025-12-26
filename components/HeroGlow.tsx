export function HeroGlow() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-30 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[100px] rounded-full mix-blend-screen" />
    </div>
  );
}



