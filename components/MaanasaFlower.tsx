"use client";

import { motion } from "framer-motion";

export function MaanasaFlower() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-4 right-4 z-40 cursor-pointer group"
            title="For Maanasa 💜"
        >
            {/* Flower SVG */}
            <motion.svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* Stem */}
                <motion.path
                    d="M24 48 L24 28"
                    stroke="#2D5A27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                />

                {/* Leaf */}
                <motion.path
                    d="M24 38 Q28 35 26 40 Q24 42 24 38"
                    fill="#3D7A37"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                />

                {/* Petals - Pink to Purple gradient */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.ellipse
                        key={angle}
                        cx="24"
                        cy="16"
                        rx="6"
                        ry="10"
                        fill={i % 2 === 0 ? "#E879A9" : "#9B59B6"}
                        opacity={0.9}
                        transform={`rotate(${angle} 24 20)`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.9 }}
                        transition={{ delay: 2 + i * 0.1, duration: 0.3 }}
                    />
                ))}

                {/* Center */}
                <motion.circle
                    cx="24"
                    cy="20"
                    r="5"
                    fill="#FFBC42"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.3 }}
                />

                {/* Inner glow */}
                <motion.circle
                    cx="24"
                    cy="20"
                    r="2"
                    fill="#FFD93D"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3, duration: 0.2 }}
                />
            </motion.svg>

            {/* Tooltip on hover */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm text-[#562C2C] text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-[#E879A9]/30">
                    For Maanasa 💜
                    <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-[#E879A9]/30" />
                </div>
            </div>

            {/* Subtle glow animation */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 blur-xl opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}
