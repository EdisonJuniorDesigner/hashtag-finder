import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { About, Home, Login, Dashboard } from "pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
