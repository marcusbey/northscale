"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    // Wide canvas
    const W = 1600;
    const H = 900;
    const paths = Array.from({ length: 56 }, (_, i) => {
        const y = H * 0.06 + i * 15; // start higher and cover more of the area
        const startX = -400 - i * 8 * position; // offscreen left
        const c1x = W * 0.25 - i * 6 * position;
        const c1y = H * 0.08 + i * 10;
        const midX = W * 0.6 - i * 3 * position;
        const midY = y;
        const endX = W + 400; // offscreen right
        const color = i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#db2777' : '#f59e0b';
        const width = 0.8 + i * 0.025; // Reduced thickness
        const d = `M${startX},${y} Q${c1x},${c1y} ${midX},${midY} T${endX},${y}`;
        return { id: i, d, color, width };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1600 900"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                <defs>
                    {/* Mask to hide/fade lines near the left edge so they don't enter hero text area */}
                    <linearGradient id="maskGradient" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="black" />
                        <stop offset="70%" stopColor="black" />
                        <stop offset="100%" stopColor="white" />
                    </linearGradient>
                    <mask id="leftSafeZone" maskUnits="userSpaceOnUse">
                        {/* The gradient rect transitions from hidden (black) to visible (white) */}
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#maskGradient)" />
                    </mask>
                </defs>
                <g mask="url(#leftSafeZone)">
                    {paths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke={path.color}
                            strokeWidth={path.width}
                            strokeOpacity={Math.min(0.6, 0.25 + path.id * 0.01)}
                            initial={{ pathLength: 0.3, opacity: 0.4 }}
                            animate={{
                                pathLength: 1,
                                opacity: [0.2, 0.5, 0.2],
                                pathOffset: [0, 1, 0],
                            }}
                            transition={{
                                duration: 15 + Math.random() * 10, // Faster animation
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                                delay: path.id * 0.03, // Much shorter delay to start earlier
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Embrace possibility, redefine your industry.",
    subtitle = "NorthScale Group is a Canadian-based growth firm deploying strategic operational and marketing expertise to increase revenue growth and multiply enterprise value.",
}: {
    title?: string;
    subtitle?: string;
}) {
    return (
        <div className="relative bg-white overflow-hidden py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight lg:max-w-[20ch] xl:max-w-[18ch] break-words" style={{ textWrap: 'balance' }}>
                                {title}
                            </h1>
                            <div className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-xl">
                                <p>{subtitle}</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-normal transition-all duration-300 rounded">
                                See what we do
                            </Button>
                        </div>
                    </div>

                    {/* Right side for visual balance */}
                    <div className="relative h-[600px] lg:h-[700px]">
                        {/* Empty space for the background paths to show through */}
                    </div>
                </div>
            </div>
            {/* Background paths - positioned close to description */}
            <div className="absolute inset-y-0 pointer-events-none z-0" style={{
                left: '48%', // Very close to the description container
                right: '-50%', // Extend well beyond the right edge
            }}>
                <FloatingPaths position={1} />
            </div>
        </div>
    );
}