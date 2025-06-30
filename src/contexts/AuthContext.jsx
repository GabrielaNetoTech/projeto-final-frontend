import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("currentUser");
    setIsAuthenticated(!!token);
    setCurrentUser(user ? JSON.parse(user) : null);
  }, []);

  // Agora register recebe email, senha e um objeto com todos os demais dados
  const register = (email, senha, dadosExtras = {}) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "Email já cadastrado" };
    }
    // Salva todos os campos extras do cadastro
    const newUser = { email, senha, ...dadosExtras };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("token", "fake-token");
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setIsAuthenticated(true);
    setCurrentUser(newUser);
    return { success: true };
  };

  const login = (email, senha) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.senha === senha);
    if (user) {
      localStorage.setItem("token", "fake-token");
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsAuthenticated(true);
      setCurrentUser(user);
      return { success: true };
    } else {
      return { success: false, message: "Email ou senha inválidos" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);