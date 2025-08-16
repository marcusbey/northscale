"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // NorthScale brand colors matching your gradients
        color: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#db2777' : '#f59e0b',
        width: 0.5 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.015}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.1,
                        }}
                    />
                ))}
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-[1.05] tracking-tight text-balance lg:max-w-[20ch] xl:max-w-[18ch]">
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
                    <div className="relative h-[600px] lg:h-[720px]">
                        {/* Empty space for the background paths to show through */}
                    </div>
                </div>

                {/* Background paths - fill entire parent container */}
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingPaths position={1} />
                </div>
            </div>
        </div>
    );
}