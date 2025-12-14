import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Noel() {
    const [showLetter, setShowLetter] = useState(false);

    return (
        <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-emerald-50 via-white to-red-50">
            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 pb-16">

                <motion.h1
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 text-4xl md:text-5xl font-extrabold text-red-700 drop-shadow-sm"
                >
                    🎄 Chúc mừng Giáng Sinh
                </motion.h1>

                <p className="mt-3 text-gray-700 max-w-2xl">
                    Giáng Sinh an lành Thu Huyền ✨
                </p>

                {!showLetter && (
                    <button
                        onClick={() => setShowLetter(true)}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-[1.02]"
                    >
                        🎁 Mở thiệp Noel
                    </button>
                )}

                {showLetter && (
                    <div className="mt-8 bg-white/90 backdrop-blur p-10 rounded-2xl shadow-xl text-gray-800 leading-relaxed border border-red-100 font-handwriting">
                        <p className="italic text-lg">Bé à,</p>
                        <p className="mt-6 text-lg leading-8">
                            Chúc em giáng sinh an lành, mong em luôn bình an,
                            vui vẻ, và mỗi ngày đều có những điều nhỏ bé khiến em mỉm cười. Đặc biệt đừng hư với anh ^^, à cũng đừng giận anh nhiều, a buồn lắm.
                        </p>
                        <p className="mt-6 text-lg leading-8">
                            Cảm ơn em vì đã xuất hiện, làm cho những ngày thường cũng trở nên ấm áp hơn - hãy yêu nhau nhẹ nhàng em nhé. Chúc em một mùa
                            Giáng Sinh thật rực rỡ 🎄✨
                        </p>
                        <p className="mt-10 italic text-lg text-right">— Văn Thanh</p>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setShowLetter(false)}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg shadow-sm transition"
                            >
                                ⬅ Đóng thiệp
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between gap-4">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-100 transition"
                >
                    ⬅ Về trang chủ
                </Link>
            </div>
        </div>
    );
}
