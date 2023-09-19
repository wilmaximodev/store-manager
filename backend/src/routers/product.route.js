const router = require('express').Router();
const { productController } = require('../controllers');

router.get('/:id', productController.getProductById);
router.get('/', productController.getAllProducts);

module.exports = router;