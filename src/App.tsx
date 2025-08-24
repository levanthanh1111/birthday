import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css"; // để import font

function App() {
    const letters = [
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
                { type: "signature", text: "Văn Thanh" },
            ],
        },
    ];

    const [selectedLetter, setSelectedLetter] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 flex flex-col items-center justify-center p-6">
            {/* Tiêu đề */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-10 drop-shadow-sm text-center"
            >
                💌 Hộp thư gửi Huyền
            </motion.h1>

            {/* Nếu chưa chọn thư -> hiển thị danh sách */}
            {!selectedLetter && (
                <div className="flex flex-wrap gap-4 justify-center">
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

            {/* Nếu đã chọn thư -> hiển thị nội dung */}
            {selectedLetter && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 bg-white p-10 rounded-2xl shadow-xl max-w-2xl text-gray-800 leading-relaxed text-left whitespace-pre-wrap border border-yellow-200"
                >
                    {selectedLetter.content.map((block, idx) => {
                        if (block.type === "paragraph" && block.text.trim() === "") return null;

                        if (block.type === "date") {
                            return (
                                <p key={idx} className="font-handwriting font-bold mb-6 text-lg">
                                    {block.text}
                                </p>
                            );
                        }
                        if (block.type === "greeting") {
                            return (
                                <p key={idx} className="font-handwriting italic mb-4 text-lg">
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
                                <p key={idx} className="font-handwriting italic mt-8 text-lg">
                                    {block.text}
                                </p>
                            );
                        }
                        return null;
                    })}

                    {/* Nút quay lại hộp thư */}
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

            <p className="mt-10 text-sm text-gray-500 italic">
                — From Văn Thanh 👨‍💻
            </p>
        </div>
    );
}

export default App;
