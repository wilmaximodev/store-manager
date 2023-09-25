const router = require('express').Router();
const salesController = require('../controllers/sales.controller');
const {
  validProduct,
  validQuant,
  validQuantProd,
} = require('../middlewares/validation.sales');

router.get('/:id', salesController.getSaleById);
router.get('/', salesController.getAllSales);
router.post(
  '/',
  validProduct,
  validQuant,
  validQuantProd,
  salesController.addSale,
);

module.exports = router;