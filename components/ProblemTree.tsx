"use client";

import { useCallback, useState, useMemo } from "react";
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    Node,
    Edge,
    BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Problem, PROBLEMS } from "@/data/problems";
import { ProblemNode } from "./ProblemNode";
import { EntrepreneurSidebar } from "./EntrepreneurSidebar";

const nodeTypes = {
    problem: ProblemNode,
};

// Fixed positions for deterministic layout (no hydration mismatch)
const FIXED_POSITIONS: Record<string, { x: number; y: number }> = {
    aging: { x: 400, y: 50 },
    biosec: { x: 600, y: 150 },
    water: { x: 620, y: 350 },
    education: { x: 480, y: 500 },
    energy: { x: 280, y: 480 },
    supersonic: { x: 150, y: 350 },
    housing: { x: 180, y: 150 },
};

export function ProblemTree() {
    const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

    const handleNodeClick = useCallback((problem: Problem) => {
        setSelectedProblem(problem);
    }, []);

    // Generate nodes with fixed positions
    const initialNodes = useMemo(() => {
        return PROBLEMS.map((problem) => ({
            id: problem.id,
            type: "problem",
            position: FIXED_POSITIONS[problem.id] || { x: 400, y: 300 },
            data: { problem, onClick: handleNodeClick },
        }));
    }, [handleNodeClick]);

    // Generate edges
    const initialEdges = useMemo((): Edge[] => {
        const connections = [
            ["energy", "water"],
            ["energy", "housing"],
            ["aging", "biosec"],
            ["education", "housing"],
            ["supersonic", "energy"],
        ];

        return connections
            .filter(
                ([source, target]) =>
                    PROBLEMS.find((p) => p.id === source) &&
                    PROBLEMS.find((p) => p.id === target)
            )
            .map(([source, target], index) => ({
                id: `e${index}`,
                source,
                target,
                style: { stroke: "#562C2C", strokeWidth: 1, strokeDasharray: "5,5" },
                animated: false,
            }));
    }, []);

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border-2 border-[#562C2C]/20">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.5}
                maxZoom={1.5}
                defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
            >
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={20}
                    size={1}
                    color="#562C2C"
                    style={{ opacity: 0.1 }}
                />
                <Controls
                    className="bg-white border-[#562C2C]/20"
                    showInteractive={false}
                />
            </ReactFlow>

            {/* Entrepreneur Sidebar */}
            <EntrepreneurSidebar
                problem={selectedProblem}
                onClose={() => setSelectedProblem(null)}
            />
        </div>
    );
}
