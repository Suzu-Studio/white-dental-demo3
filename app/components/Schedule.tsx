"use client";

import { Clock, Phone } from "lucide-react";

export default function Schedule() {
    return (
        <section id="schedule" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex-1 w-full lg:max-w-2xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-accent" />
                            診療時間
                        </h3>
                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-600 border-b border-gray-200">
                                        <th className="py-4 text-left pl-4 font-semibold">診療時間</th>
                                        <th className="py-4 font-bold">月</th>
                                        <th className="py-4 font-bold">火</th>
                                        <th className="py-4 font-bold">水</th>
                                        <th className="py-4 font-bold">木</th>
                                        <th className="py-4 font-bold">金</th>
                                        <th className="py-4 text-blue-600 font-bold">土</th>
                                        <th className="py-4 text-red-500 font-bold">日</th>
                                        <th className="py-4 text-red-500 font-bold pr-4">祝</th>
                                    </tr>
                                </thead>
                                <tbody className="text-lg bg-white divide-y divide-gray-100">
                                    <tr>
                                        <td className="py-4 text-left pl-4 font-bold text-gray-800 text-sm md:text-base">09:00 - 13:00</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-gray-300">/</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-blue-500">●</td>
                                        <td className="py-4 text-gray-300">/</td>
                                        <td className="py-4 text-gray-300 pr-4">/</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 text-left pl-4 font-bold text-gray-800 text-sm md:text-base">14:30 - 20:00</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-gray-300">/</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-accent">●</td>
                                        <td className="py-4 text-blue-500">▲</td>
                                        <td className="py-4 text-gray-300">/</td>
                                        <td className="py-4 text-gray-300 pr-4">/</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            ※水曜・日曜・祝日は休診です。<br />
                            ※▲ 土曜午後は 14:30 - 17:00 までの診療となります。<br />
                            ※最終受付は診療終了の30分前までです。
                        </p>
                    </div>

                    <div className="flex-1 w-full lg:max-w-md space-y-6">
                        <div className="bg-main/20 p-8 rounded-3xl border border-main">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Web予約・お問い合わせ</h3>
                            <p className="text-gray-600 mb-6">
                                当院は予約優先制です。初診の方もWebから24時間ご予約いただけます。
                            </p>
                            <a
                                href="#reservation"
                                className="block w-full text-center bg-white border-2 border-reservation text-reservation font-bold py-4 rounded-xl hover:bg-reservation hover:text-white transition-all shadow-md active:scale-95 mb-4"
                            >
                                24時間Web予約
                            </a>
                            <a
                                href="tel:03-1234-5678"
                                className="block w-full text-center bg-white border-2 border-accent text-accent font-bold py-4 rounded-xl hover:bg-accent hover:text-white transition-colors shadow-md active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                03-1234-5678
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
