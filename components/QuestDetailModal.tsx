"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quest } from "@/data/quests";
import { X, Users, Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";

interface QuestDetailModalProps {
    quest: Quest;
    onClose: () => void;
}

export function QuestDetailModal({ quest, onClose }: QuestDetailModalProps) {
    const getNeglectednessColor = (neglectedness: Quest["neglectedness"]) => {
        switch (neglectedness) {
            case "EXTREME":
                return "text-red-400";
            case "HIGH":
                return "text-orange-400";
            case "MED":
                return "text-yellow-400";
            case "LOW":
                return "text-zinc-400";
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 to-transparent">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-mono font-bold text-emerald-500">
                                {quest.ticker}
                            </span>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{quest.title}</h2>
                                <p className="text-zinc-400 mt-1">{quest.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                                <AlertTriangle className="w-4 h-4" />
                                Suffering Cap
                            </div>
                            <div className="text-white font-mono font-bold text-lg">
                                {quest.problem_cap_lives}
                            </div>
                            <div className="text-zinc-500 font-mono text-sm">
                                {quest.problem_cap_money}
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                                <TrendingUp className="w-4 h-4" />
                                Solubility
                            </div>
                            <div className="text-emerald-500 font-mono font-bold text-2xl">
                                {quest.solubility}%
                            </div>
                            <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                                <div
                                    className="bg-emerald-500 h-2 rounded-full"
                                    style={{ width: `${quest.solubility}%` }}
                                />
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                                <Lightbulb className="w-4 h-4" />
                                Neglectedness
                            </div>
                            <div
                                className={`font-mono font-bold text-2xl ${getNeglectednessColor(
                                    quest.neglectedness
                                )}`}
                            >
                                {quest.neglectedness}
                            </div>
                        </div>
                    </div>

                    {/* Theory of Change */}
                    <div className="p-6 border-b border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-emerald-500" />
                            Theory of Change
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">{quest.explanation}</p>
                    </div>

                    {/* Teams */}
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-500" />
                            Teams Working On This
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {quest.teams.map((team) => (
                                <span
                                    key={team}
                                    className="px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors cursor-pointer"
                                >
                                    {team}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
