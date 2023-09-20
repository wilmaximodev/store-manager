const salesModel = require('../models/sales.model');

const showAllSales = async () => {
  const sales = await salesModel.getAll();
    return {  
      status: 200,
      data: sales,
    };
};
  
const saleById = async (id) => {
  const sale = await salesModel.getById(id);
  if (sale.length === 0) {
    return {
      status: 404,
      data: { message: 'Sale not found' },
    };
  }
  return {
    status: 200,
    data: sale,
  };
};

const createSale = async (sale) => {
  const newSale = await salesModel.createSalesProductModel(sale);
  return newSale;
};

module.exports = {
  showAllSales,
  saleById,
  createSale,
};