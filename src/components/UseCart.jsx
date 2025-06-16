// Hook customizado para acessar o contexto do carrinho em qualquer componente

import { useContext } from "react";
import CartContext from "./CartContext";

// Retorna o contexto do carrinho (funções e estado)
export const useCart = () => useContext(CartContext);