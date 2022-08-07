import { AuthProvider } from "contexts/AuthContext";
import React from "react";
import { Router } from "router";

function App() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}

export default App;
