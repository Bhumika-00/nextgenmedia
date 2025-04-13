"use client";

import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="max-w-2xl text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Where Your Media Does not Shrink — 
          <br className="hidden sm:block" />
          It <strong className="text-pink-400">Glows Up</strong> ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400"
        >
          Welcome to <span className="font-semibold text-white">NextGenMedia</span> — your
          digital glow-up studio. We don’t just compress files... we hit ’em with a filter,
          a vibe, and a lil’ ✨ pixel magic ✨. Drop your vids, stay iconic.
        </motion.p>

        <div className="flex justify-center gap-6">
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="btn btn-primary text-lg px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform duration-200 shadow-lg shadow-pink-500/20">
                Let’s Glow 💫
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <button
              className="btn text-lg px-6 py-3 rounded-xl bg-white text-black hover:scale-105 transition-transform duration-200"
              onClick={() => router.push("/home")}
            >
              Go to Dashboard 🚀
            </button>
          </SignedIn>
        </div>
      </div>
    </main>
  );
}
