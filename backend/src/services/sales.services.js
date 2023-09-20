const getSales = require('../models/sales.model');

const showAllSales = async () => {
  const sales = await getSales.getAll();
    return {  
      status: 200,
      data: sales,
    };
};
  
const saleById = async (id) => {
  const sale = await getSales.getById(id);
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

module.exports = {
  showAllSales,
  saleById,
};