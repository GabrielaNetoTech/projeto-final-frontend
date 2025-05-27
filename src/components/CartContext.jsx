import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (produto, quantidade, tamanhoSelecionado, corSelecionada, corNome, imagemSelecionada) => {
    setCartItems((prev) => {
      const existente = prev.find(item => 
        item.id === produto.id && 
        item.tamanho === tamanhoSelecionado &&
        item.cor === corSelecionada &&
        item.corNome === corNome 
      );
      if (existente) {
        return prev.map(item =>
          item.id === produto.id &&
          item.tamanho === tamanhoSelecionado &&
          item.cor === corSelecionada  &&
          item.corNome === corNome
            ? { ...item, quantity: item.quantity + quantidade }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantity: quantidade,
            tamanho: tamanhoSelecionado,
            cor: corSelecionada,
            corNome: corNome,
            imagem: imagemSelecionada,
          }
        ];
      }
    });
  };

  const removeFromCart = (id, tamanho, cor, corNome) => {
    setCartItems((prev) => 
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.tamanho === tamanho &&
            item.cor === cor &&
            item.corNome === corNome
          ) 
        )
  );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        getCartQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};