"use client";

import { QUESTS } from "@/data/quests";

export function TickerTape() {
    // Create a string of all the suffering costs
    const tickerItems = QUESTS.map(
        (quest) =>
            `${quest.ticker}: ${quest.problem_cap_lives} at risk • ${quest.problem_cap_money} cost`
    );

    // Double the items for seamless loop
    const allItems = [...tickerItems, ...tickerItems];

    return (
        <div className="relative w-full overflow-hidden bg-zinc-950 border-b border-emerald-500/20 py-3">
            <div className="ticker-wrap">
                <div className="ticker-move">
                    {allItems.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block mx-8 text-sm font-mono text-zinc-400"
                        >
                            <span className="text-emerald-500 font-bold">●</span>{" "}
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
