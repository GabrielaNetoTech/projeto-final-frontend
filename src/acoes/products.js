// Importa os dados dos produtos simulados (JSON local)
import productsApi from '../api/products.json';

// Função utilitária para simular um atraso de resposta de API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Gera 20 produtos baseados em um template do JSON (para simular uma lista maior de produtos)
const generateProducts = () => {
  const template = productsApi.products[0]; // Usa o primeiro produto como modelo
  const allProducts = [];
  // Cria 20 produtos, alternando a categoria entre "Casual" e "Esporte e lazer"
  for (let i = 1; i <= 20; i++) {
    allProducts.push({
      ...template, // Copia todas as infos do template
      id: i, // Altera o ID para ser único
      categoria: i % 2 === 0 ? "Casual" : "Esporte e lazer" // Alterna a categoria
    });
  }
  return allProducts;
};

const products = generateProducts(); // Cria a lista simulada

// Função para buscar TODOS os produtos (com delay)
export const getAllProducts = async () => {
  await delay(300); // Simula tempo de resposta
  return products;
};

// Função para buscar UM produto pelo id (com delay)
export const getProductById = async (id) => {
  await delay(500); // Simula tempo maior de resposta
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    throw new Error('Produto não encontrado');
  }
  return product;
};

// Função para buscar produtos por categoria (com delay)
export const getProductsByCategory = async (category) => {
  await delay(300);
  return products.filter(
    product => product.categoria.toLowerCase() === category.toLowerCase()
  );
};

// Função para buscar produtos "relacionados" (exclui o atual e retorna até o limite)
export const getRelatedProducts = async (productId, limit = 4) => {
  await delay(300);
  return products
    .filter(product => product.id !== parseInt(productId))
    .slice(0, limit);
};