"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Problem, CORE_RESOURCES } from "@/data/problems";
import { X, ExternalLink } from "lucide-react";

interface EntrepreneurSidebarProps {
    problem: Problem | null;
    onClose: () => void;
}

export function EntrepreneurSidebar({ problem, onClose }: EntrepreneurSidebarProps) {
    return (
        <AnimatePresence>
            {problem && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute top-0 right-0 h-full w-80 bg-white border-l-2 border-[#562C2C]/20 shadow-xl overflow-y-auto"
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-[#562C2C]/10 p-4 z-10">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1 text-[#562C2C]/60 hover:text-[#562C2C] hover:bg-[#F5DFBB] rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-4xl mb-2">{problem.emoji}</div>
                        <h2 className="font-serif font-bold text-xl text-[#562C2C]">
                            {problem.title}
                        </h2>
                        <p className="text-sm text-[#562C2C]/70 mt-1">
                            {problem.description}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 p-4 border-b border-[#562C2C]/10">
                        <div className="bg-[#F5DFBB]/50 rounded-lg p-3 text-center">
                            <div className="text-2xl font-mono font-bold text-[#127475]">
                                {problem.problemCap.toLocaleString()}M
                            </div>
                            <div className="text-xs text-[#562C2C]/60">Problem Cap</div>
                        </div>
                        <div className="bg-[#F5DFBB]/50 rounded-lg p-3 text-center">
                            <div className="text-2xl font-mono font-bold text-[#F2542D]">
                                {problem.economicCost}
                            </div>
                            <div className="text-xs text-[#562C2C]/60">Economic Cost</div>
                        </div>
                    </div>

                    {/* Infinite Solvability */}
                    <div className="p-4 border-b border-[#562C2C]/10 bg-[#0E9594]/5">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">∞</span>
                            <span className="text-sm font-medium text-[#0E9594]">
                                100% Solvable
                            </span>
                        </div>
                        <p className="text-xs text-[#562C2C]/70 italic">
                            All problems are solvable. We just need to understand the errors and correct them.
                        </p>
                    </div>

                    {/* Theory of Change */}
                    <div className="p-4 border-b border-[#562C2C]/10">
                        <h3 className="font-serif font-semibold text-[#562C2C] mb-2">
                            📜 Theory of Change
                        </h3>
                        <p className="text-sm text-[#562C2C]/80 leading-relaxed">
                            {problem.explanation}
                        </p>
                    </div>

                    {/* The Hit List */}
                    <div className="p-4 border-b border-[#562C2C]/10">
                        <h3 className="font-serif font-semibold text-[#562C2C] mb-3 flex items-center gap-2">
                            🎯 The Hit List
                            {problem.bounty && (
                                <span className="text-xs bg-[#F2542D] text-white px-2 py-0.5 rounded-full">
                                    BOUNTY
                                </span>
                            )}
                        </h3>

                        {problem.entrepreneurs.length > 0 ? (
                            <div className="space-y-2">
                                {problem.entrepreneurs.map((entrepreneur, index) => (
                                    <motion.a
                                        key={entrepreneur.name}
                                        href={entrepreneur.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 p-3 bg-[#F5DFBB]/30 rounded-xl hover:bg-[#F5DFBB]/50 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#127475] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {entrepreneur.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-[#562C2C] flex items-center gap-1">
                                                {entrepreneur.name}
                                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="text-xs text-[#562C2C]/60 truncate">
                                                {entrepreneur.role}
                                                {entrepreneur.company && ` @ ${entrepreneur.company}`}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-6 text-[#562C2C]/50">
                                <div className="text-3xl mb-2">🏴‍☠️</div>
                                <p className="text-sm">No entrepreneurs yet.</p>
                                <p className="text-xs mt-1">This problem needs a founder!</p>
                            </div>
                        )}
                    </div>

                    {/* Resources */}
                    <div className="p-4 border-b border-[#562C2C]/10">
                        <h3 className="font-serif font-semibold text-[#562C2C] mb-3">
                            📖 Resources
                        </h3>
                        <div className="space-y-2">
                            {problem.resources.map((resource) => (
                                <a
                                    key={resource.url}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[#127475] hover:text-[#0E9594] transition-colors"
                                >
                                    <span>
                                        {resource.type === "book" && "📕"}
                                        {resource.type === "article" && "📄"}
                                        {resource.type === "video" && "🎬"}
                                        {resource.type === "org" && "🏛️"}
                                    </span>
                                    <span className="hover:underline">{resource.title}</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Core Philosophy */}
                    <div className="p-4 bg-[#F5DFBB]/30">
                        <h3 className="font-serif font-semibold text-[#562C2C] mb-3 text-sm">
                            🌟 Foundational Reading
                        </h3>
                        <div className="space-y-2">
                            {CORE_RESOURCES.map((resource) => (
                                <a
                                    key={resource.url}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-[#562C2C]/70 hover:text-[#127475] transition-colors"
                                >
                                    <span>
                                        {resource.type === "book" && "📕"}
                                        {resource.type === "video" && "🎬"}
                                        {resource.type === "org" && "🏛️"}
                                    </span>
                                    <span className="hover:underline">{resource.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
