"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
    const [mode, setMode] = useState<"problem" | "entrepreneur">("problem");

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-[#562C2C]/30 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-white border-2 border-[#562C2C]/20 rounded-2xl shadow-xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-[#562C2C]/10 bg-[#F5DFBB]/30">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-[#562C2C]/60 hover:text-[#562C2C] hover:bg-[#F5DFBB] rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="font-serif font-bold text-2xl text-[#562C2C]">
                                📝 Submit to the Ledger
                            </h2>
                            <p className="text-sm text-[#562C2C]/70 mt-1">
                                Propose a worthy problem or a moral entrepreneur.
                            </p>
                        </div>

                        {/* Mode Toggle */}
                        <div className="flex p-2 mx-4 mt-4 bg-[#F5DFBB]/50 rounded-xl">
                            <button
                                onClick={() => setMode("problem")}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "problem"
                                        ? "bg-white text-[#562C2C] shadow-sm"
                                        : "text-[#562C2C]/60 hover:text-[#562C2C]"
                                    }`}
                            >
                                🎯 New Problem
                            </button>
                            <button
                                onClick={() => setMode("entrepreneur")}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "entrepreneur"
                                        ? "bg-white text-[#562C2C] shadow-sm"
                                        : "text-[#562C2C]/60 hover:text-[#562C2C]"
                                    }`}
                            >
                                🦸 Entrepreneur
                            </button>
                        </div>

                        {/* Form */}
                        <form className="p-6 space-y-4">
                            {mode === "problem" ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Problem Title
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Ocean Plastic Pollution"
                                            className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] placeholder:text-[#562C2C]/40 focus:outline-none focus:border-[#127475] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Problem Cap (humans affected)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 1 billion"
                                            className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] placeholder:text-[#562C2C]/40 focus:outline-none focus:border-[#127475] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Why is this solvable?
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="The theory of change..."
                                            className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] placeholder:text-[#562C2C]/40 focus:outline-none focus:border-[#127475] transition-colors resize-none"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Entrepreneur Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Elon Musk"
                                            className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] placeholder:text-[#562C2C]/40 focus:outline-none focus:border-[#127475] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Company / Organization
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. SpaceX"
                                            className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] placeholder:text-[#562C2C]/40 focus:outline-none focus:border-[#127475] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#562C2C] mb-1">
                                            Which problem are they attacking?
                                        </label>
                                        <select className="w-full px-4 py-2 bg-[#F5DFBB]/30 border border-[#562C2C]/20 rounded-xl text-[#562C2C] focus:outline-none focus:border-[#127475] transition-colors">
                                            <option value="">Select a problem...</option>
                                            <option value="aging">🧬 Biological Senescence</option>
                                            <option value="biosec">🦠 Pandemic Prevention</option>
                                            <option value="water">💧 Infinite Freshwater</option>
                                            <option value="education">📚 Universal Education</option>
                                            <option value="energy">⚡ Abundant Clean Energy</option>
                                            <option value="supersonic">✈️ Supersonic Travel</option>
                                            <option value="housing">🏠 Affordable Housing</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#127475] hover:bg-[#0E9594] text-white font-semibold rounded-xl transition-colors"
                            >
                                Submit for Review
                            </button>

                            <p className="text-xs text-center text-[#562C2C]/50">
                                Submissions are reviewed by the community. MIT licensed.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
