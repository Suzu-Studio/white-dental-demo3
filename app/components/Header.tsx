"use client";

import { HeartPulse, MoveRight } from "lucide-react";
import Link from "next/link"; // Link is not used in the original code for anchors, but keep it if needed or remove if strictly following original. Original used <a> tags. I will use <a> tags to match original behavior for hashes.

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-accent/10 p-1.5 rounded-lg">
                        <HeartPulse className="w-6 h-6 text-accent" />
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold text-accent tracking-wide">
                        White Dental
                    </h1>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <a href="#features" className="hover:text-accent hover:underline hover:underline-offset-4 transition-all">特徴</a>
                    <a href="#menu" className="hover:text-accent hover:underline hover:underline-offset-4 transition-all">診療案内</a>
                    <a href="#schedule" className="hover:text-accent hover:underline hover:underline-offset-4 transition-all">診療時間</a>
                    <a href="#access" className="hover:text-accent hover:underline hover:underline-offset-4 transition-all">アクセス</a>
                </nav>

                <a
                    href="#reservation"
                    className="bg-reservation hover:shadow-lg hover:opacity-90 text-white font-bold py-2 px-4 md:px-6 rounded-full shadow-md transition-all flex items-center gap-2"
                >
                    <span>24時間Web予約</span>
                    <MoveRight className="w-4 h-4" />
                </a>
            </div>
        </header>
    );
}
