import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type LetterBlock = {
    type: "date" | "greeting" | "paragraph" | "signature";
    text: string;
};

type Letter = {
    date: string;
    content: LetterBlock[];
};

export default function Home() {
    const letters: Letter[] = [
        {
            date: "Ngày 16/08/2025",
            content: [
                { type: "date", text: "Ngày 16/08/2025" },
                { type: "greeting", text: "Thu Huyền thân mến," },
                {
                    type: "paragraph",
                    text: "Mình thật sự rất vui khi được gặp cậu và trò chuyện cùng cậu. Ở cạnh cậu, mình cảm thấy tự nhiên, như thể chúng ta đã quen biết từ rất lâu. Ngay từ lần đầu gặp, mọi thứ đến thật nhẹ nhàng nhưng lại để lại trong mình một dấu ấn rất sâu sắc.",
                },
                {
                    type: "paragraph",
                    text: "Ánh mắt, nụ cười, và đặc biệt là giọng nói của cậu đã chinh phục mình hoàn toàn.",
                },
                { type: "signature", text: "Văn Thanh" },
            ],
        },
        {
            date: "Ngày 24/08/2025",
            content: [
                { type: "date", text: "Ngày 24/08/2025" },
                { type: "greeting", text: "Thu Huyền thân mến," },
                {
                    type: "paragraph",
                    text: "Hôm nay cũng tròn 1 tháng từ khi mình biết đến cậu. Từ lần đầu trò chuyện, rồi buổi gặp mặt đầu tiên ở quán Acoustic, đến những lần ở quán Rooftop cafe sau đó, mọi thứ đến rất nhẹ nhàng nhưng để lại trong mình nhiều cảm xúc khó quên.",
                },
                {
                    type: "paragraph",
                    text: "Mình thật sự trân trọng sự hiện diện của cậu trong cuộc sống và mong rằng chúng ta sẽ có thêm nhiều kỷ niệm đẹp cùng nhau.",
                },
                { type: "signature", text: "Rùa" },
            ],
        },
        {
            date: "Ngày 02/09/2025",
            content: [
                { type: "date", text: "Ngày 02/09/2025" },
                { type: "greeting", text: "Thu Huyền à," },
                {
                    type: "paragraph",
                    text: "Thư này anh viết từ hôm 31/8, một ngày cuối tháng tám ý nghĩa, ngày mà em đã đồng ý.",
                },
                {
                    type: "paragraph",
                    text: "Cảm ơn em đã xuất hiện, mọi thứ với anh thật kỳ diệu. Ngày em đến gần anh rất nhẹ nhàng, cho anh biết thế nào là yêu thương, là ấm áp.",
                },
                {
                    type: "paragraph",
                    text: "Những lúc ở cạnh em thật đặc biệt. Mọi thứ trở nên ấm áp, anh chỉ muốn được nhìn em nhiều hơn, ngắm nụ cười và cả hàm răng xinh xắn ấy 😄. Cảm giác ấy thật yên bình, không biết diễn tả như thế nào, có thể là như thời gian cũng trôi chậm lại.",
                },
                {
                    type: "paragraph",
                    text: "Cảm ơn em — cô gái có giọng nói nhẹ nhàng mà vẫn pha chút cá tính.",
                },
                {
                    type: "paragraph",
                    text: "Cảm ơn em đã xuất hiện và cảm ơn em đã đồng ý.",
                },
                { type: "signature", text: "Anh yêu bé" },
            ],
        },
    ];

    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
            <div className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-yellow-100">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
                    <Link
                        to="/women-day"
                        className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-[1.02]"
                    >
                        🌸 8/3
                    </Link>
                    <Link
                        to="/noel"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-[1.02]"
                    >
                        🎄 Merry Christmas
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-8 drop-shadow-sm"
                        >
                            💌 Hộp thư gửi Huyền
                        </motion.h1>

                        {!selectedLetter && (
                            <div className="flex flex-wrap gap-4">
                                {letters.map((letter, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedLetter(letter)}
                                        className="bg-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-100 transition transform hover:scale-105 font-medium text-gray-700"
                                    >
                                        Mở thư {letter.date}
                                    </button>
                                ))}
                            </div>
                        )}

                        {selectedLetter && (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                className="mt-6 bg-white p-10 rounded-2xl shadow-xl max-w-2xl text-gray-800 leading-relaxed text-left border border-yellow-200"
                            >
                                {selectedLetter.content.map((block, idx) => {
                                    if (!block.text.trim()) return null;

                                    if (block.type === "date") {
                                        return (
                                            <p
                                                key={idx}
                                                className="font-handwriting font-bold mb-6 text-lg text-right"
                                            >
                                                {block.text}
                                            </p>
                                        );
                                    }
                                    if (block.type === "greeting") {
                                        return (
                                            <p
                                                key={idx}
                                                className="font-handwriting italic mb-6 text-lg"
                                            >
                                                {block.text}
                                            </p>
                                        );
                                    }
                                    if (block.type === "paragraph") {
                                        return (
                                            <p
                                                key={idx}
                                                className="font-handwriting mb-6 text-lg leading-8"
                                            >
                                                {block.text}
                                            </p>
                                        );
                                    }
                                    if (block.type === "signature") {
                                        return (
                                            <p
                                                key={idx}
                                                className="font-handwriting italic mt-10 text-lg text-right"
                                            >
                                                {block.text}
                                            </p>
                                        );
                                    }
                                    return null;
                                })}

                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={() => setSelectedLetter(null)}
                                        className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:scale-105"
                                    >
                                        ⬅ Quay lại hộp thư
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        <p className="mt-8 text-sm text-gray-500 italic">
                            — From Văn Thanh 👨‍💻
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur border border-yellow-100 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                            📮 Hộp Thư Phản hồi
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
}
