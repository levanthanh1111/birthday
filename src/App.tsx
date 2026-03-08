import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Noel from "./pages/Noel";
import WomenDay from "./pages/WomenDay";
import GiftGame from "./pages/GiftGame";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noel" element={<Noel />} />
            <Route path="/women-day" element={<WomenDay />} />
            <Route path="/gift-game" element={<GiftGame />} />
        </Routes>
    );
}


