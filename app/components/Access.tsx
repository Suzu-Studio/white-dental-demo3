"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Access() {
    return (
        <section id="access" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm">Access</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">アクセス</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-gray-200 rounded-xl overflow-hidden min-h-[400px] relative shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12963.220556208034!2d139.7576883737561!3d35.68412803098525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f7007%3A0x277c49ba34ed38!2sOtemachi%2C%20Chiyoda%20City%2C%20Tokyo!5e0!3m2!1sen!2sjp"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        />
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-accent mb-2">ホワイトデンタルクリニック</h3>
                            <p className="text-gray-600">
                                〒100-0001<br />
                                東京都千代田区千代田1-1-1 ホワイトビル 2F
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 rounded-full bg-main flex items-center justify-center text-accent shrink-0">
                                    <span className="font-bold text-xs">駅</span>
                                </div>
                                <span>東西線「大手町駅」B1出口 徒歩1分</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 rounded-full bg-main flex items-center justify-center text-accent shrink-0">
                                    <span className="font-bold text-xs">車</span>
                                </div>
                                <span>近隣にコインパーキングあり</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
