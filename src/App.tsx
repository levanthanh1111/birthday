import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
    const [showMessage, setShowMessage] = useState(false);
    const [typedText, setTypedText] = useState("");
    const fullMessage =
        "Sinh nhật vui vẻ nhé🎉!";

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullMessage.length) {
                setTypedText((prev) => prev + fullMessage.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
        return () => clearInterval(typing);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col items-center justify-center text-center p-6">
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-sm"
            >
                🎂 Happy Birthday Thanh Hà!
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-xl mb-6 whitespace-pre-line font-medium">
                {typedText}
            </p>

            {!showMessage && (
                <button
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-2xl shadow-lg transition transform hover:scale-105"
                    onClick={() => setShowMessage(true)}
                >
                    Nhấn để nhận lời chúc đặc biệt 💌
                </button>
            )}

            {showMessage && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 bg-white p-6 rounded-2xl shadow-xl max-w-md text-gray-800 text-base leading-relaxed"
                >
                    <p> Chúc bạn luôn mạnh khỏe, vui vẻ và gặp nhiều may mắn. Dù khó khăn có ra sao, hãy luôn tin vào bản thân và vững bước về phía trước! </p>
                </motion.div>
            )}

            <p className="mt-10 text-sm text-gray-500 italic">— From an old friend 👨‍💻</p>
        </div>
    );
}

export default App;
