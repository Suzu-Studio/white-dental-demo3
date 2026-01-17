"use client";

import { motion } from "framer-motion";
import { Star, Clock, Baby } from "lucide-react";
import { cn } from "@/app/utils";

export default function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-[#E0F2F1]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Features</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">当院の3つの特徴</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Star className="w-full h-full" />}
                        title="痛みに配慮した治療"
                        description="表面麻酔や極細の針を使用し、可能な限り痛みを抑えた治療を心がけています。歯科恐怖症の方も安心してご相談ください。"
                        color="blue"
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<Clock className="w-full h-full" />}
                        title="平日夜20時まで診療"
                        description="お仕事帰りや学校帰りにも通いやすいよう、平日は夜20時まで診療を行っています。忙しい方の歯の健康をサポートします。"
                        color="teal"
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={<Baby className="w-full h-full" />}
                        title="完全個室・キッズスペース"
                        description="プライバシーに配慮した完全個室の診療室と、お子様が楽しく待てるキッズスペースを完備。ベビーカーでもそのまま入室可能です。"
                        color="indigo"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description, color, delay }: { icon: React.ReactNode, title: string, description: string, color: string, delay: number }) {
    const colorStyles = {
        blue: "bg-blue-50 text-blue-500",
        teal: "bg-teal-50 text-teal-500",
        indigo: "bg-indigo-50 text-indigo-500",
    }[color] || "bg-gray-50 text-gray-500";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-6", colorStyles)}>
                <div className="w-8 h-8">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
}
