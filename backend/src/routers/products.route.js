const router = require('express').Router();
const productsController = require('../controllers/products.controller');
const { validateProduct } = require('../middlewares/validation.products');

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getAllProducts);
router.post('/', validateProduct, productsController.addProduct);

module.exports = router;