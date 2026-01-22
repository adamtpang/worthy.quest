"use client";

import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Problem } from "@/data/problems";

type ProblemNodeData = {
    problem: Problem;
    onClick: (problem: Problem) => void;
};

function ProblemNodeComponent({ data }: NodeProps<ProblemNodeData>) {
    const { problem, onClick } = data as unknown as ProblemNodeData;

    return (
        <div
            className={`problem-node cursor-pointer ${problem.bounty ? "has-bounty" : ""}`}
            onClick={() => onClick(problem)}
        >
            <Handle type="target" position={Position.Top} className="opacity-0" />

            {/* Bounty Badge */}
            {problem.bounty && (
                <div className="bounty-badge absolute -top-2 -right-2 bg-[#F2542D] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    🎯 BOUNTY
                </div>
            )}

            {/* Emoji Icon */}
            <div className="text-4xl mb-2 text-center">{problem.emoji}</div>

            {/* Title */}
            <h3 className="font-serif font-semibold text-[#562C2C] text-center text-sm leading-tight">
                {problem.title}
            </h3>

            {/* Problem Cap */}
            <div className="mt-2 text-center">
                <span className="text-xs text-[#127475] font-mono font-bold">
                    {problem.problemCap.toLocaleString()}M
                </span>
                <span className="text-xs text-[#562C2C]/60 ml-1">cap</span>
            </div>

            {/* Entrepreneurs Count */}
            <div className="mt-1 text-center text-xs text-[#562C2C]/60">
                {problem.entrepreneurs.length} entrepreneur{problem.entrepreneurs.length !== 1 ? "s" : ""}
            </div>

            {/* Solvability - Always 100%! */}
            <div className="mt-2 w-full bg-[#F5DFBB] rounded-full h-1.5">
                <div className="bg-[#0E9594] h-1.5 rounded-full w-full" />
            </div>
            <div className="text-center text-[10px] text-[#0E9594] mt-0.5 font-medium">
                ∞ solvable
            </div>

            <Handle type="source" position={Position.Bottom} className="opacity-0" />
        </div>
    );
}

export const ProblemNode = memo(ProblemNodeComponent);
