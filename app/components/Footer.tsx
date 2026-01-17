"use client";

export default function Footer() {
    return (
        <footer className="bg-accent text-white py-12">
            <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">White Dental</h4>
                        <p className="text-white/80 text-sm">
                            一生付き合える、<br />
                            あなたのかかりつけ医
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Menu</h5>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><a href="#" className="hover:text-white hover:underline">ホーム</a></li>
                            <li><a href="#features" className="hover:text-white hover:underline">当院の特徴</a></li>
                            <li><a href="#menu" className="hover:text-white hover:underline">診療案内</a></li>
                            <li><a href="#price" className="hover:text-white hover:underline">料金表</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Clinic</h5>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><a href="#doctor" className="hover:text-white hover:underline">ドクター紹介</a></li>
                            <li><a href="#recruit" className="hover:text-white hover:underline">採用情報</a></li>
                            <li><a href="#access" className="hover:text-white hover:underline">アクセス</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Contact</h5>
                        <p className="text-2xl font-bold mb-2">03-1234-5678</p>
                        <a href="#reservation" className="inline-block bg-white text-accent px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                            Web予約
                        </a>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60 w-full">
                    &copy; {new Date().getFullYear()} White Dental Clinic. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
