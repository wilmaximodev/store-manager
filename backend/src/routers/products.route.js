const router = require('express').Router();
const productsController = require('../controllers/products.controller');

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getAllProducts);

module.exports = router;