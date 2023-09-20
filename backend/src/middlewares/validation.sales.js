const productsModel = require('../models/products.model');

const validProduct = async (req, res, next) => {
  const { body } = req;
  if (body.some((element) => !element.productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  return next();
};

const validQuant = async (req, res, next) => {
  const { body } = req;
  if (body.some((element) => !element.quantity && element.quantity !== 0)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  return next();
};

const validQuantProd = async (req, res, next) => {
  const { body } = req;
  if (body.some((element) => element.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

const validIfExist = async (req, res, next) => {
  const { body } = req;
  const resolve = body.map(async (element) => {
    const prod = await productsModel.getById(element.productId);
    if (!prod) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return null;
  });
  if ((await Promise.all(resolve)).some((element) => element !== null)) {
    return null;
  }
  return next();
};

module.exports = {
  validProduct,
  validQuant,
  validQuantProd,
  validIfExist,
};