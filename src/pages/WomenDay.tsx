import { Link } from "react-router-dom";

export default function WomenDay() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">

            <div className="max-w-3xl mx-auto pt-16 px-6">

                <h1 className="text-4xl font-extrabold text-pink-700">
                    🌸 Chúc mừng ngày 8/3
                </h1>

                <div className="mt-8 bg-white p-8 rounded-2xl shadow font-handwriting">

                    <p>Thu Huyền à,</p>

                    <p className="mt-4 leading-8">
                        Chúc em mùng 8/3 vui vẻ và nhiều hạnh phúc.
                        Thương em.
                    </p>

                    <p className="mt-4">
                        Anh có một phần quà nhỏ cho em 🎁
                    </p>

                    <div className="flex justify-center mt-8">

                        <Link
                            to="/gift-game"
                            className="text-7xl hover:scale-110 transition"
                        >
                            🎁
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}