export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[120px]" />
      
      {/* Content */}
      <main className="z-10 flex flex-col items-center gap-6 p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-transform hover:scale-105 duration-500">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Hello World
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
          Welcome to your Next.js project.
        </p>
        
        <a
          className="mt-4 px-8 py-4 rounded-full font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the Docs
        </a>
      </main>
    </div>
  );
}
