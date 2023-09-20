const router = require('express').Router();
const salesController = require('../controllers/sales.controller');
const {
  validProduct,
  validQuant,
  validQuantProd,
  validIfExist,
} = require('../middlewares/validation.sales');

router.get('/:id', salesController.getSaleById);
router.get('/', salesController.getAllSales);
router.post('/',
  validProduct,
  validQuant,
  validQuantProd,
  validIfExist,
  salesController.addSale,
);

module.exports = router;