import { useState, useEffect } from "react";
import { LoginService } from "services";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const { loginUser } = LoginService;

  useEffect(() => {
    const token = localStorage.getItem("htf-token");
    if (token) setAuthenticated(true);
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const { success, message, token } = await loginUser(email, password);

    if (success) {
      localStorage.setItem("htf-token", JSON.stringify(token));
      setAuthenticated(true);
    }

    return { success, message};
  }

  const handleLogout = () => {
    localStorage.removeItem("htf-token");
    setAuthenticated(false);
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
