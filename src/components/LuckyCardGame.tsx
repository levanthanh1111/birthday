import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

type Props = {
    rewards: string[];
};

export default function LuckyCardGame({ rewards }: Props) {

    const cards = useMemo(() => {
        return [...rewards].sort(() => Math.random() - 0.5);
    }, [rewards]);

    const [selected, setSelected] = useState<number | null>(null);
    const [revealAll, setRevealAll] = useState(false);

    const fireConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    };

    const handleSelect = (index: number) => {

        if (selected !== null) return;

        setSelected(index);

        fireConfetti();

        setTimeout(() => {
            setRevealAll(true);
        }, 900);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">

            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-extrabold text-pink-700 mb-16"
            >
                🎴 Chọn lá bài may mắn
            </motion.h1>

            <div className="grid grid-cols-4 gap-12">

                {cards.map((reward, i) => {

                    const flipped = selected === i || revealAll;

                    return (
                        <div
                            key={i}
                            className="w-[200px] h-[300px] cursor-pointer"
                            onClick={() => handleSelect(i)}
                        >

                            <motion.div
                                animate={{ rotateY: flipped ? 180 : 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative w-full h-full"
                                style={{ transformStyle: "preserve-3d" }}
                            >

                                {/* Back */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.4
                                    }}
                                    className="absolute w-full h-full bg-pink-400 rounded-2xl flex items-center justify-center text-6xl shadow-xl"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    🂠
                                </motion.div>

                                {/* Front */}
                                <div
                                    className={`absolute w-full h-full rounded-2xl flex items-center justify-center text-2xl font-bold
                    ${selected === i
                                        ? "bg-yellow-200 shadow-[0_0_40px_gold] scale-105"
                                        : "bg-white"
                                    }`}
                                    style={{
                                        transform: "rotateY(180deg)",
                                        backfaceVisibility: "hidden"
                                    }}
                                >
                                    {reward}
                                </div>

                            </motion.div>

                        </div>
                    );
                })}

            </div>

            {selected !== null && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-16 text-4xl font-bold text-pink-700"
                >
                    🎉 Chúc mừng! {cards[selected]}
                </motion.div>
            )}

            {/* Floating hearts */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">

                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 800, x: Math.random() * window.innerWidth }}
                        animate={{ y: -200 }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity
                        }}
                        className="absolute text-3xl"
                    >
                        ❤️
                    </motion.div>
                ))}

            </div>

        </div>
    );
}