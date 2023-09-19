const getProducts = require('../models/products.model');

const showAllProducts = async () => {
  const products = await getProducts.getAll();
    return {  
      status: 200,
      data: products,
    };
};
  
const productById = async (id) => {
  const product = await getProducts.getById(id);
  if (!product) {
    return {
      status: 404,
      data: {
        message: 'Product not found',
      },
    };
  }
  return {
    status: 200,
    data: product,
  };
};

module.exports = {
  showAllProducts,
  productById,
};