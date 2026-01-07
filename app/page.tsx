"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Github } from "lucide-react";
import { TickerTape } from "@/components/TickerTape";
import { QuestTable } from "@/components/QuestTable";
import { SortingHat } from "@/components/SortingHat";

export default function Page() {
  const [sortingHatOpen, setSortingHatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Ticker Tape */}
      <TickerTape />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">
              WORTHY<span className="text-emerald-500">.QUEST</span>
            </h1>
            <p className="text-zinc-500 font-mono text-base md:text-lg">
              THE MARKET FOR MEANING.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSortingHatOpen(true)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Find Your Role
            </motion.button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
              Contribute
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
              Active Quests
            </div>
            <div className="text-2xl font-bold text-white">5</div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
              Total Suffering Cap
            </div>
            <div className="text-2xl font-bold text-red-400">$61T+</div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
              Avg Solubility
            </div>
            <div className="text-2xl font-bold text-emerald-500">86%</div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
              License
            </div>
            <div className="text-2xl font-bold text-white">MIT</div>
          </div>
        </motion.div>

        {/* Quest Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <QuestTable />
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-zinc-600 font-mono text-xs mb-4">
            BUILT TO SOLVE. MIT OPEN SOURCE. THE KNOWLEDGE BELONGS TO HUMANITY.
          </p>
          <div className="flex justify-center gap-6 text-zinc-500 text-sm">
            <span>Deutschian Optimism</span>
            <span className="text-emerald-500">•</span>
            <span>Vervaeke Relevance</span>
            <span className="text-emerald-500">•</span>
            <span>Capitalist Markets</span>
          </div>
        </div>
      </motion.div>

      {/* Sorting Hat Modal */}
      <SortingHat isOpen={sortingHatOpen} onClose={() => setSortingHatOpen(false)} />
    </main>
  );
}
