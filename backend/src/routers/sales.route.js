const router = require('express').Router();
const salesController = require('../controllers/sales.controller');

router.get('/:id', salesController.getSaleById);
router.get('/', salesController.getAllSales);
router.post('/', salesController.addSale);

module.exports = router;