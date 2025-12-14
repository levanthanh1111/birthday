import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Noel from "./pages/Noel";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noel" element={<Noel />} />
        </Routes>
    );
}


