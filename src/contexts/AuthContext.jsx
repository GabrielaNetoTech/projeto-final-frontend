import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Crie o contexto
const AuthContext = createContext();

// 2. Provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Exemplo: checa o token no localStorage ao carregar
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Exemplo de função de login
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  // Exemplo de função de logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook para consumir contexto
export const useAuth = () => useContext(AuthContext);