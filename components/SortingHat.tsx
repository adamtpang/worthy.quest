"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DollarSign, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react";

type Role = "Allocator" | "Founder" | "Operator" | null;

interface SortingHatProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Question {
    id: number;
    question: string;
    icon: React.ReactNode;
    yesLabel: string;
    noLabel: string;
}

const questions: Question[] = [
    {
        id: 1,
        question: "Do you have capital to deploy (>$10M)?",
        icon: <DollarSign className="w-8 h-8" />,
        yesLabel: "Yes, I can fund",
        noLabel: "No, I need funding",
    },
    {
        id: 2,
        question: "Do you have a secret technical insight?",
        icon: <Lightbulb className="w-8 h-8" />,
        yesLabel: "Yes, I have alpha",
        noLabel: "No, but I can execute",
    },
    {
        id: 3,
        question: "Do you want to lead or join a team?",
        icon: <Users className="w-8 h-8" />,
        yesLabel: "Lead a team",
        noLabel: "Join a team",
    },
];

const roleDescriptions: Record<string, { title: string; description: string; color: string }> = {
    Allocator: {
        title: "THE ALLOCATOR",
        description:
            "You are the capital. Your role is to fund the Founders who have the insight but need resources. Look for high-solubility quests with EXTREME neglectedness.",
        color: "text-amber-400",
    },
    Founder: {
        title: "THE FOUNDER",
        description:
            "You see what others don't. Your technical insight is the edge. Pick a quest, build the solution, recruit Operators, and seek Allocators.",
        color: "text-emerald-400",
    },
    Operator: {
        title: "THE OPERATOR",
        description:
            "Execution is everything. Find a Founder whose vision you believe in and make it real. Your discipline turns ideas into impact.",
        color: "text-blue-400",
    },
};

export function SortingHat({ isOpen, onClose }: SortingHatProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [role, setRole] = useState<Role>(null);

    const handleAnswer = (answer: boolean) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        if (newAnswers.length === questions.length) {
            // Determine role based on answers
            const [hasCapital, hasInsight, wantsToLead] = newAnswers;

            if (hasCapital) {
                setRole("Allocator");
            } else if (hasInsight && wantsToLead) {
                setRole("Founder");
            } else {
                setRole("Operator");
            }
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const reset = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setRole(null);
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={handleClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Header */}
                    <div className="p-6 text-center border-b border-white/10 bg-gradient-to-b from-emerald-500/10 to-transparent">
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="inline-block"
                        >
                            <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-white">The Sorting Hat</h2>
                        <p className="text-zinc-400 mt-2">Discover your role in solving humanity&apos;s greatest problems</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {role === null ? (
                                <motion.div
                                    key={currentQuestion}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {/* Progress Dots */}
                                    <div className="flex justify-center gap-2">
                                        {questions.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentQuestion
                                                        ? "bg-emerald-500"
                                                        : idx < currentQuestion
                                                            ? "bg-emerald-500/50"
                                                            : "bg-zinc-700"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Question */}
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full text-emerald-500 mb-6">
                                            {questions[currentQuestion].icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {questions[currentQuestion].question}
                                        </h3>
                                    </div>

                                    {/* Answer Buttons */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleAnswer(true)}
                                            className="p-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium transition-colors flex items-center justify-center gap-2"
                                        >
                                            {questions[currentQuestion].yesLabel}
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleAnswer(false)}
                                            className="p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-zinc-300 font-medium transition-colors flex items-center justify-center gap-2"
                                        >
                                            {questions[currentQuestion].noLabel}
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-center space-y-6"
                                >
                                    <motion.div
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                    >
                                        <Sparkles className="w-16 h-16 text-emerald-500 mx-auto" />
                                    </motion.div>

                                    <div>
                                        <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">
                                            Your Role Is
                                        </p>
                                        <h3 className={`text-4xl font-bold ${roleDescriptions[role].color}`}>
                                            {roleDescriptions[role].title}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-300 leading-relaxed">
                                        {roleDescriptions[role].description}
                                    </p>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={reset}
                                        className="mt-4 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors"
                                    >
                                        Try Again
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
