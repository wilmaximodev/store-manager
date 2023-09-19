const productsServices = require('../services/products.services');

const getAllProducts = async (_req, res) => {
  const products = await productsServices.showAllProducts();
  return res.status(products.status).json(products.data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.productById(id);
  return res.status(product.status).json(product.data);
};

module.exports = {
  getAllProducts,
  getProductById,
};