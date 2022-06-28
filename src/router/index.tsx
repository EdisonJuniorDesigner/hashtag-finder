import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { About, Home, Login } from "pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {" "}
        {/* Essa propriedade será útil quando subirmos para o GH-Pages */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
