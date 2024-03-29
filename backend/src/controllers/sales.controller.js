const salesServices = require('../services/sales.services');

const getAllSales = async (_req, res) => {
  const sales = await salesServices.showAllSales();
  return res.status(sales.status).json(sales.data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.saleById(id);
  return res.status(sale.status).json(sale.data);
};

const addSale = async (req, res) => {
    const { body } = req;
    const newSale = await salesServices.createSale(body);
    return res.status(201).json(newSale);
};

module.exports = {
  getAllSales,
  getSaleById,
  addSale,
};