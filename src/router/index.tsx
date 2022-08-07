import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { AuthContext } from "contexts/AuthContext";
import { About, Home, Login, Dashboard } from "pages";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) return <h2>Carregando...</h2>;

    if (!authenticated)  return <Navigate to="/" />;

    return children;

}

export const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>}
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
