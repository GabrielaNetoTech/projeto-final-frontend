import { createContext, useState, useEffect } from "react";

// Cria o contexto do carrinho para compartilhar entre componentes
const CartContext = createContext();

// Provider que envolve a aplicação para fornecer acesso ao carrinho
export const CartProvider = ({ children }) => {
  // Estado do carrinho, inicializado com os dados do localStorage (se existirem)
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Toda vez que cartItems muda, salva no localStorage (persistência)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Adiciona produto ao carrinho, incrementando quantidade se já existir
  const addToCart = (produto, quantidade, tamanhoSelecionado, corSelecionada, corNome, imagemSelecionada) => {
    setCartItems((prev) => {
      const existente = prev.find(item => 
        item.id === produto.id && 
        item.tamanho === tamanhoSelecionado &&
        item.cor === corSelecionada &&
        item.corNome === corNome 
      );
      if (existente) {
        // Se já existe, só aumenta a quantidade
        return prev.map(item =>
          item.id === produto.id &&
          item.tamanho === tamanhoSelecionado &&
          item.cor === corSelecionada  &&
          item.corNome === corNome
            ? { ...item, quantity: item.quantity + quantidade }
            : item
        );
      } else {
        // Se não existe, adiciona novo item ao carrinho
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

  // Remove um item específico do carrinho pelo id, tamanho, cor e corNome
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

  // Limpa todo o carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Retorna a soma de todas as quantidades de produtos no carrinho
  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Incrementa quantidade de um item específico
  const incrementQuantity = (id, tamanho, cor, corNome) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id &&
        item.tamanho === tamanho &&
        item.cor === cor &&
        item.corNome === corNome
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrementa quantidade de um item específico (sem deixar ir abaixo de 1)
  const decrementQuantity = (id, tamanho, cor, corNome) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id &&
        item.tamanho === tamanho &&
        item.cor === cor &&
        item.corNome === corNome && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        getCartQuantity,
        incrementQuantity,
        decrementQuantity
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;