const productsModel = require('../models/products.model');

const showAllProducts = async () => {
  const products = await productsModel.getAll();
    return {  
      status: 200,
      data: products,
    };
};
  
const productById = async (id) => {
  const product = await productsModel.getById(id);
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

const createProduct = async (name) => {
  const product = await productsModel.newProduct(name);
  return {
    status: 201,
    data: product,
  };
};

module.exports = {
  showAllProducts,
  productById,
  createProduct,
};