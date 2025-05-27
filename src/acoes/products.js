import productsData from '../api/products.json';

// Simular delay de API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Gerar os 20 produtos baseados no template
const generateProducts = () => {
  const template = productsData.products[0];
  const allProducts = [];
  
  for (let i = 1; i <= 20; i++) {
    allProducts.push({
      ...template,
      id: i,
      categoria: i % 2 === 0 ? "Casual" : "Esporte e lazer"
    });
  }
  
  return allProducts;
};

const products = generateProducts();

// API Functions
export const getAllProducts = async () => {
  await delay(300);
  return products;
};

export const getProductById = async (id) => {
  await delay(500);
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    throw new Error('Produto não encontrado');
  }
  return product;
};

export const getProductsByCategory = async (category) => {
  await delay(300);
  return products.filter(
    product => product.categoria.toLowerCase() === category.toLowerCase()
  );
};

export const getRelatedProducts = async (productId, limit = 4) => {
  await delay(300);
  return products
    .filter(product => product.id !== parseInt(productId))
    .slice(0, limit);
};