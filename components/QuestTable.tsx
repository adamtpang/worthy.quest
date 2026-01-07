"use client";

import { useState } from "react";
import { Quest, QUESTS } from "@/data/quests";
import { QuestDetailModal } from "./QuestDetailModal";

export function QuestTable() {
    const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

    const getNeglectednessColor = (neglectedness: Quest["neglectedness"]) => {
        switch (neglectedness) {
            case "EXTREME":
                return "bg-red-500/20 text-red-400 border-red-500/30";
            case "HIGH":
                return "bg-orange-500/20 text-orange-400 border-orange-500/30";
            case "MED":
                return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
            case "LOW":
                return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
        }
    };

    return (
        <>
            <div className="bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-4 px-6 py-4 border-b border-white/10 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    <div>Ticker</div>
                    <div className="col-span-2">Quest</div>
                    <div>Suffering Cap</div>
                    <div>Solubility</div>
                    <div>Neglectedness</div>
                </div>

                {/* Table Body */}
                {QUESTS.map((quest) => (
                    <div
                        key={quest.id}
                        onClick={() => setSelectedQuest(quest)}
                        className="grid grid-cols-6 gap-4 px-6 py-5 border-b border-white/5 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                    >
                        {/* Ticker */}
                        <div className="font-mono text-emerald-500 font-bold text-lg group-hover:text-emerald-400 transition-colors">
                            {quest.ticker}
                        </div>

                        {/* Quest Title & Description */}
                        <div className="col-span-2">
                            <h3 className="text-white font-semibold text-lg group-hover:text-emerald-50 transition-colors">
                                {quest.title}
                            </h3>
                            <p className="text-zinc-500 text-sm mt-1 line-clamp-1">
                                {quest.explanation}
                            </p>
                        </div>

                        {/* Suffering Cap */}
                        <div>
                            <div className="text-white font-mono">{quest.problem_cap_lives}</div>
                            <div className="text-zinc-500 text-sm font-mono">{quest.problem_cap_money}</div>
                        </div>

                        {/* Solubility Progress Bar */}
                        <div className="flex flex-col justify-center">
                            <div className="w-full bg-zinc-800 rounded-full h-2 max-w-[100px]">
                                <div
                                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${quest.solubility}%` }}
                                />
                            </div>
                            <span className="text-emerald-500 text-xs font-mono mt-1">
                                {quest.solubility}%
                            </span>
                        </div>

                        {/* Neglectedness Badge */}
                        <div className="flex items-center">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-mono border ${getNeglectednessColor(
                                    quest.neglectedness
                                )}`}
                            >
                                {quest.neglectedness}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quest Detail Modal */}
            {selectedQuest && (
                <QuestDetailModal
                    quest={selectedQuest}
                    onClose={() => setSelectedQuest(null)}
                />
            )}
        </>
    );
}
