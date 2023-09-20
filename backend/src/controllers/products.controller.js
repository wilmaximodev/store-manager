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

const addProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productsServices.createProduct(name);
  return res.status(product.status).json(product.data);
};

const updateProduct = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const product = await productsServices.updateProduct(id, name);
  if (product.message) {
    return response.status(404).json(product);
  }
  return response.status(200).json({ id: Number(id), name });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
};