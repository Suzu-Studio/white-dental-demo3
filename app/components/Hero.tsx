"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, ShieldCheck, Baby } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
    { src: "/images/hero-clinic.jpg", alt: "清潔感あふれる最新の診療室" },
    { src: "/images/hero-kids.jpg", alt: "お子様も安心のキッズスペース" },
    { src: "/images/hero-sterile.jpg", alt: "徹底した衛生管理と滅菌体制" },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-teal-50 to-white">
            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="space-y-6 relative z-10 max-w-xl"
                >
                    <motion.div variants={fadeInUp} className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm text-accent font-medium text-sm">
                        ✨ 痛くない・怖くない・通いやすい
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                        一生付き合える、<br />
                        あなたの<br />
                        <span className="text-5xl md:text-6xl text-accent relative inline-block">
                            かかりつけ医
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-main -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl max-w-lg">
                        患者様一人ひとりに寄り添った丁寧なカウンセリングと、
                        最新の設備で安心・安全な歯科治療をご提供します。
                    </motion.p>
                    <motion.div variants={fadeInUp} className="pt-4">
                        <a
                            href="#reservation"
                            className="inline-flex items-center justify-center bg-reservation text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        >
                            今すぐWeb予約する
                            <MoveRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white/50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-[5000ms] ease-linear scale-105"
                                />
                                {/* White Gradient Overlay (Plan A - Strengthened) */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Text Overlay for Image Context - Moved to Top Left */}
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                            📷 {images[currentIndex].alt}
                        </div>

                        {/* Decorative floating elements (Higher Index) - Adjusted positions */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-4 right-4 z-30 bg-white/95 backdrop-blur p-3 rounded-2xl shadow-lg flex items-center gap-3"
                        >
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold">衛生管理</p>
                                <p className="text-sm font-bold text-gray-800">徹底した滅菌</p>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 left-4 z-30 bg-white/95 backdrop-blur p-3 rounded-2xl shadow-lg flex items-center gap-3"
                        >
                            <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                                <Baby className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-semibold">お子様連れOK</p>
                                <p className="text-sm font-bold text-gray-800">キッズスペース</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
