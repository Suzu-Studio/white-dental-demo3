"use client";

import { motion } from "framer-motion";

export default function Menu() {
    return (
        <section id="menu" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Menu</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">診療案内</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MenuCard title="一般歯科" subtitle="General Dentistry" delay={0.1} icon="🦷" />
                    <MenuCard title="矯正歯科" subtitle="Orthodontics" delay={0.2} icon="✨" />
                    <MenuCard title="ホワイトニング" subtitle="Whitening" delay={0.3} icon="💎" />
                    <MenuCard title="予防歯科" subtitle="Preventive" delay={0.4} icon="🛡️" />
                </div>
            </div>
        </section>
    );
}

function MenuCard({ title, subtitle, delay, icon }: { title: string, subtitle: string, delay: number, icon: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer group hover:shadow-md transition-all flex flex-col items-center text-center"
        >
            <div className="w-12 h-12 bg-main/30 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-main group-hover:text-white transition-colors">
                {icon}
            </div>
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 group-hover:text-accent transition-colors">{subtitle}</span>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-accent transition-colors">{title}</h3>
        </motion.div>
    );
}
