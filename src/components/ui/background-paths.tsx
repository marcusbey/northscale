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
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl xl:text-6xl font-light leading-tight tracking-tight">
                                {words.map((word, wordIndex) => (
                                    <span
                                        key={wordIndex}
                                        className="inline-block mr-3 last:mr-0"
                                    >
                                        {word.split("").map((letter, letterIndex) => (
                                            <motion.span
                                                key={`${wordIndex}-${letterIndex}`}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    delay:
                                                        wordIndex * 0.1 +
                                                        letterIndex * 0.02,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 25,
                                                }}
                                                className="inline-block text-transparent bg-clip-text 
                                                bg-gradient-to-r from-gray-900 to-gray-700"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-xl"
                            >
                                <p>{subtitle}</p>
                            </motion.div>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="pt-4"
                        >
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-normal transition-all duration-300 rounded">
                                See what we do
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Animated paths visualization on the right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="relative h-[600px] lg:h-[700px]"
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <FloatingPaths position={0.5} />
                            <FloatingPaths position={-0.3} />
                            
                            {/* Additional decorative elements */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                {/* Animated circles */}
                                <motion.circle 
                                    cx="200" cy="150" r="4"
                                    fill="#06b6d4"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.6 }}
                                    transition={{ delay: 2, duration: 0.5 }}
                                />
                                <motion.circle 
                                    cx="600" cy="250" r="6"
                                    fill="#8b5cf6"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.7 }}
                                    transition={{ delay: 2.3, duration: 0.5 }}
                                />
                                <motion.circle 
                                    cx="400" cy="400" r="5"
                                    fill="#db2777"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.5 }}
                                    transition={{ delay: 2.6, duration: 0.5 }}
                                />
                                <motion.circle 
                                    cx="150" cy="500" r="3"
                                    fill="#f59e0b"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.8 }}
                                    transition={{ delay: 2.9, duration: 0.5 }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}